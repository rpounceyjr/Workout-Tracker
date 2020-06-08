const path = require("path");

function htmlRoutes(app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"), (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("File sent");
            }
        });
    });

    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"), (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("File sent");
            }
        });
    });
};

module.exports = htmlRoutes;