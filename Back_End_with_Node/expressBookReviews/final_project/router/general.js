const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    if (username && password) {//Ensure  username and password are both passed
      if (isValid(username)) {//Ensure username hasn't already been used
        users.push({'username': username, 'password': password});
        return res.status(200).send(`Welcome ${username}, you should now login`);
      } else {
        return res.status(400).send('This username is already in use');
      };
    } else {
      return res.status(400).send('Username or Password is not entered');
    };
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  new Promise((resolve,reject) => {
    if (books) {
      resolve(books);
    } else {
      reject('Error');
    };
  }).then((item) => {
    return res.status(200).send(JSON.stringify(item,null,4))
  }).catch((err) => {
    return res.status(400).send(err)
  });
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  let isbn = req.params.isbn
  new Promise((resolve, reject) => {
    if (isbn) { //Ensure valid parameter passed
      booksById = books[isbn]
      if (book) { //Ensure book exists
        resolve(booksById)
      } else {
        reject("That book isn't stocked");
      };
    } else {
      reject("ISBN is not entered correctly");
    };
  }).then((item) => {
    return res.status(200).send(JSON.stringify(item,null,4))
  }).catch((err) => {
    return res.status(400).send(err)
  });
});
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  let author = req.params.author
  new Promise ((resolve, reject) => {
    if (author) { //Ensure valid parameter passed
      const booksArray = Object.values(books); //Convert to array so filter can be used.
      let booksByAuthor = booksArray.filter((e) => e.author === author)
      if (booksByAuthor.length > 0) { //Ensure book is stocked
        resolve(booksByAuthor)
      } else {
        reject("We do not stock that author")
      };
    } else {
      reject("Author is not entered correctly")
    };
  }).then((item) => {
    return res.status(200).send(item)
  }).catch((err) => {
    return res.status(400).send(err)
  });
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  let title = req.params.title
  new Promise((resolve, reject) => {
    if (title) { //Ensure valid parameter passed
      const booksArray = Object.values(books); //Convert to array so filter can be used.
      let booksByTitle = booksArray.filter((e) => e.title === title)
      if (booksByTitle.length > 0) { //Ensure book is stocked
        resolve(booksByTitle);
      } else {
        reject("We do not stock that book");
      };
    } else {
      reject("Title is not entered correctly");
    }
  }).then((item) => {
    return res.status(200).send(item);
  }).catch((err) => {
    res.status(400).send("We do not stock that book")
  });
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  let isbn = req.params.isbn
  new Promise((resolve, reject) =>{
  if (isbn) { //Ensure valid parameter passed
    const book = books[isbn]
    if (book) { //Ensure book exists
      resolve(book.reviews)
    } else {
      reject("That book isn't stocked");
    };
  } else {
    reject("ISBN is not entered correctly");
  };
  }).then((item) => {
    return res.status(200).send(JSON.stringify(item, null, 4));
  }).catch((err) => {
    return res.status(400).send(err);
  });
});

module.exports.general = public_users;
