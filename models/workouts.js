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
        },
        type: {
            type: String,
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
    ]
});

module.exports = Workouts;