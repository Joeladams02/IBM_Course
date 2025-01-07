const express = require('express');
const router = express.Router();


let users = [
    {
        firstName: "John",
        lastName: "Wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "Smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "White",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },
];

// GET request: Retrieve all users
router.get("/",(req,res)=>{

  res.send(users);
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/email/:email",(req,res) => {
  let userById = users.filter((e) => e.email === req.params.email);
  if (userById.length > 0) {
    userById = userById[0];
    res.send(`Name: ${userById.firstName} ${userById.lastName} Email: ${userById.email} DOB: ${userById.DOB}`);
  } else {
    res.send("User not found");
  }
});

router.get("/lastName/:lastName", (req,res) => {
  let userByLastName = users.filter((e) => e.lastName === req.params.lastName)
    if (userByLastName.length > 0) {
      userByLastName = userByLastName[0];
      res.send(userByLastName);
    } else {
      res.send(`No user with last name: ${req.params.lastName}`);
    }
});
 
// POST request: Create a new user
router.post("/",(req,res)=>{
  users.push({firstName: req.query.firstName,
    lastName: req.query.lastName,
    email: req.query.email,
    DOB: req.query.DOB
  })
  res.send(`New user added with name: ${req.query.firstName} ${req.query.lastName}`)
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  let userById = users.filter((e) => e.email === req.params.email)
  if (userById.length > 0) {
    userById = userById[0]
    if (req.query.firstName) {
      userById.firstName = req.query.firstName;
    }
    if (req.query.lastName) {
      userById.lastName = req.query.lastName;

    }
    if (req.query.email) {
      userById.email = req.query.email;
    }
    if (req.query.DOB) {
      userById.DOB = req.query.Dob;

    }
    users = users.filter((user) => user.email != req.params.email);
    users.push(userById);
    res.send(`Eddited for email ${req.params.email}`)
  } else {
    res.send("No user with that email")
  }
});

// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  let userById = users.filter((e) => e.email === req.params.email)
  if (userById.length > 0) {
    userById = userById[0]
    users = users.filter((user) => user.email != req.params.email);
    res.send(`User ${req.params.email}`)
  } else {
    res.send("No user with that email")
  }
});

module.exports=router;
