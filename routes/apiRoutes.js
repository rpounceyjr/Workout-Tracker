const db = require("../models");
const ObjectId = require("mongoose").Types.ObjectId;

function apiRoutes(app) {

    app.get("/api/workouts", (req, res) => {
        db.Workout.findOne().sort({ field: "asc", _id: -1 }).limit(1)
            .then(workout => {
                let duration = 0;
                let weight = 0;
                workout.exercises.forEach(exercise => {
                    if (exercise.duration) {
                        duration += exercise.duration
                    }
                    if (exercise.weight) {
                        weight += exercise.weight
                    }
                });
                workout.totalDuration = duration;
                workout.totalWeight = weight;
                console.log(workout);
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            })

    });


    app.post("/api/workouts", (req, res) => {
        const newWorkout = new db.Workout(req.body);
        db.Workout.create(newWorkout)
            .then(workout => {
                res.json(workout);
            })
            .catch((err) => {
                if (err) {
                    console.log(err)
                }
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        console.log("PUT REQ BODY", req.body)
        db.Workout.updateOne({ _id: ObjectId(req.params.id) }, { $push: { exercises: req.body } }, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log("PUT DATA", data)
                res.json(data);
            }
        });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}, (err, data) => {
            if(err) {
                console.log(err);
            } else {
                res.json(data);
            }
        });
    });


};

module.exports = apiRoutes;