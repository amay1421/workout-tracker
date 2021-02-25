const mongoose = require("mongoose");
const Schema = mongoose.Schema

var WorkoutQuestions = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [ {
        name: {
            type: String,
            trim: true,
        },
        type: {
            type: String,
            trim: true,
        },
        weight: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        duration: {
            type: Number,

        },
        distance: {
            type: Number,
        }
        }
    ],
    totalDuration: {
        type: Number,
        default: 0,
    }
});

const Workout = mongoose.model("workout", WorkoutQuestions);

module.exports = Workout;