const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {

        usuario: 'Admin',
        mensaje: 'Binevenido a esta app'

    });

    client.on('disconnect', () => {

        console.log('Usuario desconectdo');

    });

    // Escuchar cliente
    // client.on('enviarMensaje', (mensaje, callback) => {

    //     // console.log(mensaje);

    //     if (mensaje.usuario) {
    //         callback({
    //             resp: 'TODO SALIO BIEN!'
    //         })
    //     } else {
    //         callback({
    //             resp: 'TODO SALIO MAL!!!!'
    //         });

    //     }

    // })

    // Escuchar cliente e informar a todos los conectados
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

    })

});