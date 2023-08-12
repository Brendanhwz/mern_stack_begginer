//Adding the schema functionality to our application using mongoose package
//Enforces schema compliancy
//mongoDB alone is schemaless
const mongoose = require('mongoose')

//using mongoose to create a new schema
const Schema = mongoose.Schema

//Creating the workout schema
const workoutSchema = new Schema({
    //Attribute(1)
    title: {
        type: String,
        required: true
    },
    //Attribute(2)
    reps: {
        type: Number,
        required: true
    },
    //Attribute(3)
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true })

//Making a model based on schema
module.exports = mongoose.model('Workout', workoutSchema)




