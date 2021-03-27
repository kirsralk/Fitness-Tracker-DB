const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var workoutSchema = new Schema({
  date: { type: Date, default: Date.now },
  durationTotal: Number,
  exercises: [{
    type: {
        type: String
    },
    name: {
        type: String
    },
    distance: {
        type: Number
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
    }
  }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;