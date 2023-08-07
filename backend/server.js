//Importing the dotenv pacakage
require('dotenv').config()

const express = require('express')
const portNumber = process.env.PORT

//initializing your new express app using the express constant
const app = express()

//Reacting to request -> establishing a route for handling HTTP GET Request to root path
app.get("/", function(req, res) {
    //res.send("Hello, local express!"),
    res.json({mssg: "Welcome to the app"})
})

//Registering global middleware
app.use(function(req, res, next) {
    console.log("Path: " + req.path, " HTTP Method: ", req.method)
    next()
})

//Listen for request || starting the server-> certain port number
 app.listen(portNumber, () => {
    console.log("Listening on port", portNumber)
 })
 
