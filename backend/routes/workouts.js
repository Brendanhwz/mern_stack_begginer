const express = require('express')

const Workout = require('../models/workoutModel')
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
router.post('/',  async function(req, res) {
    const {title, load, reps} = req.body
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

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