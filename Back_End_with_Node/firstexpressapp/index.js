const express = require('express');
const jsonwebtoken = require('jsonwebtoken')
const session = require('express-session');

const app = new express();


const jwt_token = 'RandInt' //Would normally be randomly produced in config file
const port = 3000;

app.use(session({ secret: "session1" }))
app.use('/auth', (req, res, next) => { //Middleware stops access to any /auth url unless authorised.
    tkn = req.session.authorization['accessToken'];

    try {
        const authStatus = jsonwebtoken.verify(tokenValue, jwt_token);
        if (authStatus.user === "Joeladams02") {
            next();
        } else {
            return res.status(403).json({ message: "User not authenticated" });
        }
    } catch (err) {
        return res.status(403).json({ message: "Invalid token" });
    };
})  

app.post('/login', (req,res) => {
    const username = req.query.username;
    const password = req.query.password;
    if (username === 'Joeladams02' && password == 'password') { //Username and Password would normally be stored in database
        const token = jsonwebtoken.sign({ user: 'Joeladams02' }, jwt_token);
        return res.json({ token });    
    };
    return res.status(401).json({message: "Invalid Username or Password"});
});

app.get('/auth/employee-data', (req,res) => {
    return res.json({message: "Your salary is £200,000"})
});


let server = app.listen(port, () => {
    console.log("Listening to port: " + port);
})
