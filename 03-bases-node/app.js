const { argv } = require('./config/yargs');
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

// let argv = process.argv;
// let base = argv[2].split('=')[1];

// console.log(argv.limite);

let comando = argv._[0];

switch (comando) {
    case 'listar':

        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':

        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
}