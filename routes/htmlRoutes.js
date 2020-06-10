const path = require("path");

function htmlRoutes(app) {

    // Sends index.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // Sends exercise.html
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"), (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("File sent");
            }
        });
    });

    // Sends stats.html
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