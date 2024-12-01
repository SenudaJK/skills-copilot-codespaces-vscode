// create web server
// create a route for /comments
// when a request is made to /comments, send back the comments array
// listen on port 3000

var express = require('express');
var app = express();

app.get('/comments', function(req, res) {
  res.send(comments);
});

app.listen(3000);

var comments = [
  'first comment!',
  'second comment!!',
  'third comment!!!'
];

// to run the server, type in the terminal: node comments.js
// to see the comments, go to the browser and type: localhost:3000/comments