/* eslint-disable no-console */
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (object) => {
    io.emit('chat message', object);
  });
});

http.listen(3001, () => {
  console.log('Server initialized in 3001');
});
