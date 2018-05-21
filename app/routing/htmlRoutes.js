var path = require("path");


        //  ORDER IS IMPORTANT....ALL OTHER ROUTES NEED TO BE BEFORE HOME

module.exports = function(app) {
    //  IF THE SURVEY BUTTON WAS PRESSED, DISPLAY THE SURVEY PAGE
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    //  DISPLAY HOME PAGE
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

};
