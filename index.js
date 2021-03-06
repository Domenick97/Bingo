var PORT = process.env.PORT || 3000;
var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());

var http = require('http');
var server = http.Server(app);

var numOfRequests = 0;

server.listen(PORT, function() {
  console.log('Bingo party server running');
});

app.get('/add', (req, res) => {
  numOfRequests++;
  return res.send('Count is now at ' + numOfRequests);
});

app.get('/', (req, res) => {
  return res.send('Count is at ' + numOfRequests);
});

app.get('/isReady', (req, res) => {
  return res.send(numOfRequests<5);
});

app.get('/reset', (req, res) => {
  numOfRequests = 0;
  return res.status(200).send('Count is now at ' + numOfRequests);
});


// var io = require('socket.io')(server);

// io.on('connection', function(socket) {
//   socket.on('message', function(msg) {
//     io.emit('message', msg);
//   });
// });