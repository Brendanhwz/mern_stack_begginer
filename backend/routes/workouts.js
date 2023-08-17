const express = require('express')

//Creating an instance of the Express Router
const router = express.Router()

//Lesson 1 on Controller 
//Importing the controller & subsequent functions
const {
    getWorkouts,
    getWorkout,
    createWorkout
} = require('../controller/workoutController')

//Defining your routes handlers
//Get all workouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id', getWorkout)

//CREATE a new workout
router.post('/',  createWorkout)

//DELETE a workout
router.delete('/:id', function(req, res) {
    res.json({mssg: 'DELETE a workout'})
})
 
//UPDATE a workout
router.patch ('/:id', function(req, res) {
    res.json({mssg: 'UPDATE workout'})
})

//Exporting the instance of the Router to the main express server application script
module.exports = router  