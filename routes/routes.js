const router = require("express").Router();
const path = require("path");
const mongojs = require("mongojs");
const Workout = require("../models/workout");

// HTML Routes

router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});


// API Routes
router.post("/api/workouts", (req, res) => {
    Workout.create({});
    console.log("Workout created!");
});



// New Workout



module.exports = router;