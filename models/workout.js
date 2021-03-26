const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var workoutSchema = new Schema({
  date: { type: Date, default: Date.now },
  duration: Number,
  exercises: Number,
  weight: Number,
  reps: Number,
  distance: Number
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;