const db = require("../models")

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
    db.Workout.create(req.body)
        .then(workout => {
            res.json(workout);
        })
        .catch((err) => {
            if (err) {
                console.log(err)
            }
        });
});


};

module.exports = apiRoutes;