var path = require("path");
var express = require("express");
var logger = require("morgan");
const favicon = require('serve-favicon');
var bodyParser = require("body-parser"); // simplifies access to request body
var app = express();  // make express app
var http = require('http').Server(app);  // inject app into the server

// set up the view engine
app.set("views", path.resolve(__dirname, "Views")); // path to views
app.set("view engine", "ejs"); // specify view engine
app.use(favicon(path.join(__dirname,'Images','favicon.ico')));
app.use(express.static(__dirname + '/Views'));

const routes = require('./routes/index.js')
app.use('/', routes)

// set up an http request logger to log every request automagically
app.use(logger("dev"));     // app.use() establishes middleware functions
app.use(bodyParser.urlencoded({ extended: false }));

// if we get a 404 status, render 404.ejs view
app.use(function (request, response) {
    response.status(404).render('404.ejs');
});

// Listen for an application request on port 8089
http.listen(8089, function () {
  console.log('project is listening on http://127.0.0.1:8089/');
  console.log('');
  console.log('');
  console.log('');
});