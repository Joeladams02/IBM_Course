const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const e = require('express');
const regd_users = express.Router();

let users = [
  {'username':'user1', 'password':'pwd1'},
  {'username':'user2', 'password':'pwd2'},
  {'username':'user3', 'password':'pwd3'},
];

const isValid = (username) => { //returns boolean
  for (let user of users) { //Iterate through users
    if (user.username === username) { //Check if username is already used
      return false; //If already used, isValid is false
    };
  };
  return true; //Username has not been used been before
}

const authenticatedUser = (username,password) => { //returns boolean
  let user = users.filter((e) => e.username === username)
  if (user.length > 0) {
    if (user[0].username === username && user[0].password === password) {
      return true;
    };
  };
  return false;
};

//only registered users can login
regd_users.post("/login", (req,res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) { //Check valid username and passed are passed
    return res.status(401).send('Username or Password is not entered')
  };
  if (authenticatedUser(username,password)) { //Check username matches with password
    // Generate JWT access token
    let accessToken = jwt.sign({
      data: password
      }, 'access', { expiresIn: 60 * 60 });
    
    // Store access token and username in session
    req.session.authorization = {
      accessToken, username
    }
    return res.status(200).send("User successfully logged in");
  } else {
    return res.status(403).send("Your username or password is incorrect");
  };
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  const isbn = req.params.isbn
  const review = req.query.review
  const username = req.session.authorization.username
  if (isbn) { //Check isbn is valid
    let book = books[isbn];
    if (book) { //Check isbn is a book in stock
      book.reviews[username] = review;
      res.status(200).send(`A review for Book ${isbn} has been made.`)
    } else {
      return res.status(403).send("That book isn't stocked");
    };
  } else {
    return res.status(401).send("ISBN has not been entered");
  };
});

regd_users.delete("/auth/review/:isbn", (req, res) => {
  const isbn = req.params.isbn
  const review = req.query.review
  const username = req.session.authorization.username
  if (isbn) { //Check isbn is valid
    let book = books[isbn];
    if (book) { //Check isbn is a book in stock
      if (username in book.reviews) {
        delete book.reviews[username];
        res.status(200).send(`The review for Book ${isbn} has been deleted.`)
      } else {
        res.status(403).send(`You don't have a review for that book`)
      }
    } else {
      return res.status(403).send("That book isn't stocked");
    };
  } else {
    return res.status(401).send("ISBN has not been entered");
  };
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;