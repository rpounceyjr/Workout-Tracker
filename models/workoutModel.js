const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        required: true
    },
    exercises: {
        type: Array
    },
    totalDuration: {
        type: Number
    },
    totalWeight: {
        type: Number
    }
});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;