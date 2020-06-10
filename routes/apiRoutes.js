const db = require("../models");
const ObjectId = require("mongoose").Types.ObjectId;

function apiRoutes(app) {

    // Get route that loads last workout on index.html
    app.get("/api/workouts", (req, res) => {

        // Removed a line of code from api.js that grabbed the last workout
        // and included that logic here.  I was having trouble iterating through
        // the exercises with an array of objects, so I used findOne to just return
        // one object
        db.Workout.findOne().sort({ field: "asc", _id: -1 }).limit(1)
            .then(workout => {
                let duration = 0;
                let weight = 0;
                workout.exercises.forEach(exercise => {

                    // Adds up total time of exercises
                    duration += exercise.duration
                   
                    // Adds up total weight of exercises if exercise.weight exists
                    // (i.e. if the exercise is a resistance workout)
                    if (exercise.weight) {
                        weight += exercise.weight
                    }
                });

                // Sets the totalDuration and totalWeight
                workout.totalDuration = duration;
                workout.totalWeight = weight;

                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // Post route that creates a new workout on exercise.html page load
    app.post("/api/workouts", (req, res) => {
        db.Workout.create({})
            .then(workout => {
                res.json(workout);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    // Put route the updates by _id using req.params
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.updateOne({ _id: ObjectId(req.params.id) }, { $push: { exercises: req.body } }, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.json(data);
            }
        });
    });

    // Get route that gets all exercises for the stats page
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.json(data);
            }
        });
    });
};

module.exports = apiRoutes;