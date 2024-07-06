const io = require('socket.io-client');


const socket = io('http://localhost:5000');

socket.on('leaderboardUpdate', (data) => {
  console.log('Received response from server:', data);
});