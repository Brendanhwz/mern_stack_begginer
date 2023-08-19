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
        return res.status(404).json({error: 'Invalid route parameter: ' + id + ', no such workout found!.'})
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
const deleteWorkout = async (req, res) => {
    //Obtaining the req.params route parameters in the url specified in api-endpoint
    const {id} = req.params

    //validate whether this id exists in the collection , correspond to -> Each entry's ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "No such workouts for ObjectId: " + id})
    }
    
    //Performing route handling logic to delete a particular workout, by search criteria -> _id
    const toDeleteWorkout = await Workout.findOneAndDelete({_id: id})
    if (!toDeleteWorkout) {
        return res.status(400).json({error: "Unable to delete workout in DB by ObjectId: " + id})
    }
    res.status(200).json(toDeleteWorkout)
}

//Updating a workout
const updateWorkout = async (req, res) => {
    //Obtaining the req.params route parameters in the url specified in api-endpoint
    const {id} = req.params

    //validate whether this id exists in the collection , correspond to -> Each entry's ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "No such workouts for ObjectId: " + id})
    }

    //Performing route handling logic to update a particular workout by search criteria -> _id
    const toUpdateWorkout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if (!toUpdateWorkout) {
        return res.status(400).json({errorMsg: "Unable to update entry in DB for ObjectId: " + id})
    } else {
        res.status(200).json(toUpdateWorkout)
    }
    
}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}