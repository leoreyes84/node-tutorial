var socket = io();

socket.on('connect', function() {

    console.log('Conectado al servidor');

});

socket.on('disconnect', function() {

    console.log('Perdimos la conexión');

});

//Enviar mensaje
// sin callback
// socket.emit('enviarMensaje', {
//     usuario: 'Leo',
//     mensaje: 'Hola mundo'
// });

// con callback
socket.emit('enviarMensaje', {
    usuario: 'Leo',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log(resp);
});

//Escuchar mensaje
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);
});