const express = require('express');
const bodyParser = require('body-parser');

// const rota66 = require('./1routes/rota66');

const app = express();

app.use(express.static(__dirname + '/../')); 

const http = require('http').createServer(app);
const port = 3000;

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }});

io.on('connection', (socket) => {
  console.log(`Usuário conectado. ID: ${socket.id} `);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => console.log('Example app listening on port port!'));
