const socket = io();
const button = document.querySelector('#like');

button.addEventListener('click', () => {
socket.emit('ping');
return false;
});

