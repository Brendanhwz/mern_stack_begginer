const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

//Get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

//Get a single workout
const getWorkout = async (req, res) => {
    const {id} = req.params
    //TO check if the req.params -> :id is of valid MongoDB, mongoose ObjectId type
    //If you dont specify this & send in a random id route parameter, app will crash
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid route parameter, no such workout.'})
    }
    const workout = await Workout.findById(id)
    if (!workout) {
        return res.status(404).json({error: "No such workout."})
    }
    res.status(200).json(workout)
} 

//Creating a new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body
    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


//Deleting a workout


//Updating a workout

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout
}