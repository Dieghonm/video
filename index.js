const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../')); 

const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }});

io.on('connection', (socket) => {
  console.log(`Usuário conectado. ID: ${socket.id} `);
  let currentLoveLikes = 0;
 

  socket.on('love', () => {
    currentLoveLikes += 1;

    io.emit('updateLoveLikes', currentLoveLikes);
  })
});



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});
