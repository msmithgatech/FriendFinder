var allFriends = require("../app/data/allFriends");
var myMatches = require("../app/data/myMatches");

module.exports = function(app) {

    app.post("submit", function (req, res) {
        var addFriend = req.body;
        allFriends.push(addFriend);
        console.log(addFriend);
        res.json(addFriend);
    });


    app.get("api/allFriends", function (req, res) {
        res.json(allFriends);
    });


    app.get("api/myMatches", function (req, res) {
       res.json(myMatches);
    });





};