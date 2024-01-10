//Importing the dotenv package
require('dotenv').config()

//Test commit 24/01/11

const express = require('express')
const mongoose = require('mongoose')
const portNumber = process.env.PORT

//Using the instance of a router
const workoutRoutes = require('./routes/workouts')

//initializing your new express app using the express constant
const app = express()

//For HTTP POST, PATCH route handlers, where data is sent as payload
//ensuring that express.json middleware is placed
//on the top of the middleware stack
//To parse incoming JSON data in the request body and made accessible to it by the 'req.body' property
app.use(express.json())

//Registering global middleware
app.use(function(req, res, next) {
    console.log("Path: " + req.path, " HTTP Method: ", req.method)
    next()
})

//Using the router with a prefix endpoint so that if req is sent to specified prefix, 
//route handlers defined in the router script can be accessed
app.use('/api/workouts', workoutRoutes) 

//Connecting to the database
mongoose.connect(process.env.MERN_URI)
    .then(function() {
        //Listen for request || starting the server-> certain port numberㅇㄹ
        app.listen(portNumber, () => {
        console.log("Connected to MongoDB Atlas cloud db, Listening on port", portNumber)
        })
    })
    .catch(function(error) {
        console.log("Authentication error here")
        console.log(error)
    })

 
