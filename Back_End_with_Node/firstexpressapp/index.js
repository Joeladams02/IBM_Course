const express = require('express');
const app = new express();

const port = 3000;

app.get('/', (req, res) => {
    return res.send("Welcome to my first express app")
})

let server = app.listen(port, () => {
    console.log("Listening to port: " + port);
})
