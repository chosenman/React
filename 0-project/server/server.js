var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');

var app = express();



var React = require('../client/node_modules/react');


app.use(bodyParser.json());

// static content
app.use(express.static(path.join(__dirname, "../client/build")));



// tell the express app to listen on port 8000
var port = process.env.PORT || 8000;
var server = app.listen(port, function() {
 console.log("listening on port "+port);
})
