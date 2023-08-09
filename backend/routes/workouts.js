const express = require('express')

//Creating an instance of the Express Router
const router = express.Router()

//Defining your routes handlers
//Get all workouts
router.get('/', function(req, res) {
    res.json({mssg: "GET all workouts!"})
})

//GET a single workout
router.get('/:id', function(req, res) {
     res.json({mssg: 'GET a single workout'})
})

//CREATE a new workout
router.post('/', function(req, res) {
    res.json({mssg: 'POST a new workout'})
})

//DELETE a workout
router.delete('/:id', function(req, res) {
    res.json({mssg: 'DELETE a workout'})
})
 
//UPDATE a workout
router.patch ('/:id', function(req, res) {
    res.json({mssg: 'UPDATE workout'})
})

//Exporting the instance of the Router to the main   express application script
module.exports = router  