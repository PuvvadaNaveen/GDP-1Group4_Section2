var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser"); // simplifies access to request body
var app = express();  // make express app
var http = require('http').Server(app);  // inject app into the server




// set up the view engine
app.set("views", path.resolve(__dirname, "assets")); // path to views
app.set("view engine", "ejs"); // specify view engine
app.use(express.static(__dirname + '/assets'));


// set up an http request logger to log every request automagically
app.use(logger("dev"));     // app.use() establishes middleware functions
app.use(bodyParser.urlencoded({ extended: false }));

// handle http GET requests (default & /new-entry)
app.get("/", function (request, response) {
    response.sendfile(path.join(__dirname +"/views/Homepage.html"));
});
app.get("/home", function (request, response) {
    response.sendfile(path.join(__dirname +"/views/Homepage.html"));
});
app.get("/basic", function (request, response) {
    response.sendfile(path.join(__dirname +"/views/Basic_info.html"));
});
app.get("/measure", function (request, response) {
    response.sendfile(path.join(__dirname +"/views/measure.html"));
});
app.get("/signup_login", function (request, response) {
    response.sendfile(path.join(__dirname  +"/views/Signup_Login.html"));
});





// if we get a 404 status, render 404.ejs view
app.use(function (request, response) {
    response.status(404).render("404");
});
// Listen for an application request on port 8081
http.listen(8089, function () {
  console.log('project is listening on http://127.0.0.1:8089/');
});