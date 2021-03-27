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
    Workout.create({});
    console.log("Workout created!");
});

//Add to a workout
router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);
    console.log(req.params);
    Workout.findOneAndUpdate(
        {
            _id: mongojs.ObjectId(req.params.id)
        },
        { 
            $push: { exercises: req.body }
        }
    )
});






module.exports = router;