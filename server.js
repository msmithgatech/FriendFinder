//  DEFINE REQUIREMENTS
var express = require("express");
var bodyParser = require("body-parser");

var app = express();


var PORT = process.env.PORT || 8080;


         // express will use bodyparser to decipher the URL
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

require("./app/routing/htmlRoutes.html")(app);
require("./app/routing/apiRoutes.html")(app);


// Start the server then LISTEN
app.listen(PORT, function() {
    console.log("SUCCESSFUL listening for FRIENDFINDER server.js: " + PORT);
});