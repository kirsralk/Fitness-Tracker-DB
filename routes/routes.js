const router = require("express").Router();
const path = require("path");
const mongojs = require("mongojs");
const Workout = require("../models/workout");

// --------------------------------------------------------HTML Routes----------------------------------------------------------

router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});


// -------------------------------------------------------API Routes-------------------------------------------------------------

//New Workout
router.post("/api/workouts", (req, res) => {
    Workout.create({
        durationTotal: 0
    });
    console.log("Workout created!");
});

//Add to a workout

router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);
    console.log(req.params);
    Workout.findOneAndUpdate(
        { 
            _id: req.params.id 
        },
        {
            $inc: { durationTotal: req.body.duration },
            $push: { exercises: req.body }
        })
        .then(function(results){
            res.json(results)
        })
        .catch(function (err){
            console.log(err)
        })
});

// GET Request for all workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(function (workouts) {
            res.json(workouts)
        })
        .catch(function (err) {
            console.log(err)
        })
});

module.exports = router;