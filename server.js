//  DEFINE REQUIREMENTS
var express = require("express");
var bodyParser = require("body-parser");

var app = express();


var PORT = process.env.PORT || 3000;


         // express will use bodyparser to decipher the SURVEY FORM DATA
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//  NO NEED TO NAME THE EXTENSION, SO REQUIRE WILL AUTOMATICALLY SEARCH
//  MUST ORDER ALL ROUTES BEFORE THE * ROUTE
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Start the server then LISTEN
app.listen(PORT, function() {
    console.log("SUCCESSFUL listening for FRIENDFINDER server.js: " + PORT);
});