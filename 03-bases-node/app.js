const { crearArchivo } = require('./multiplicar/multiplicar.js');

let base = 'asdf';

crearArchivo(base)
    .then(archivo => console.log(`Se ha creado ${archivo}`))
    .catch(err => console.log(err));