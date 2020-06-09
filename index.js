var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

// app.use(express.static('client'));

server.listen(PORT, function() {
  console.log('Chat server running');
});

app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});
// var io = require('socket.io')(server);

// io.on('connection', function(socket) {
//   socket.on('message', function(msg) {
//     io.emit('message', msg);
//   });
// });