const socket = io();
const button = document.querySelector('#like');

button.addEventListener('click', (e) => {
    console.log('aqui');
    socket.emit('like');
    return false;
});

