//requires
const fs = require('fs');
// const fs = require('express');
// const fs = require('./fs');

let listarTabla = (base, limite = 10) => {

    for (let i = 1; i <= limite; i++) {
        console.log(`${ i } x ${ base } = ${i*base}`);
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El dato ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${ base } x ${ i } = ${ base * i }\n`;

        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`)
            }

        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}