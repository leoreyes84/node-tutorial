/*
 * Async Await
 */

//I. Async hace automáticamente lo q hace un promise (resolve and reject, ver promesas.js)
// let getNombre = async() => {

//     return 'Leo';
// }

// getNombre().then(nombre => {
//     console.log(nombre);
// }).catch(e => console.log('Error de ASYNC', e))


// II. Uso de await
let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Leo')
        }, 3000);
    })
}


let saludo = async() => {

    let nombre = await getNombre();

    console.log('pasaaaaaaaaaa');

    return `Hola ${ nombre }`;
}

saludo().then(mensaje => {
    console.log(mensaje);
});