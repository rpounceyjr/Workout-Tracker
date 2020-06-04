const path = require("path");

function htmlRoutes(app) {
    app.get("/exercise", (req, res) => {
        res.sendFile("/Users/rogerpouncey/Desktop/coding/bootcamp/Workout-Tracker/public/exercise.html", (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("File sent");
            }
        });
    });

    app.get("/stats", (req, res) => {
        res.sendFile("/Users/rogerpouncey/Desktop/coding/bootcamp/Workout-Tracker/public/stats.html", (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("File sent");
            }
        });
    });
};

module.exports = htmlRoutes;