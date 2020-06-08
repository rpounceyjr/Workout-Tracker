const db = require("../models")

function apiRoutes(app){

app.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });

  

};

module.exports = apiRoutes;