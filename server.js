
// setup server
var express = require('express');
var app = express();

// https://expressjs.com/en/starter/static-files.html
app.use(express.static('client'));

// setup socket
var http = require('http').createServer(app);
var io = require('socket.io')(http);

http.listen(9000, function(){
    console.log('server starts...');
});

