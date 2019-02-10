var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('Hello, world');
});

var server = app.listen(3000, function() {
    console.log('App is listening on localhost:3000');
})