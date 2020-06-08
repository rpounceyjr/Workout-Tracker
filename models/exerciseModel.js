const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({

    type: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    duration: {
        type: Number
    },

    weight: {
        type: Number
    },

    reps: {
        type: Number
    },

    sets: {
        type: Number
    },

    duration: {
        type: Number
    },

    distance: {
        type: Number
    }

});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;