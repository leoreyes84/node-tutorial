// setTimeout(function() {
//     console.log('Hola Mundo');
// }, 3000);

let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Leo',
        id
    }

    if (id === 20) {
        callback(`El usuario cono id ${id} no existe en BD`);
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(1, (err, usuario) => {

    if (err) {
        return console.log(err);
    }

    console.log('El usuairo de base de datos', usuario);


})