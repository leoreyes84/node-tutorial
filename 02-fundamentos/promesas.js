let empleados = [{
        id: 1,
        nombre: 'Leo'
    },
    {
        id: 2,
        nombre: 'Juan'
    },
    {
        id: 3,
        nombre: 'Pedro',
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`)
        } else {
            resolve(empleadoDB);
        }

    });

}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => empleado.id === salario.id);

        if (!salarioDB) {
            reject(`No se encontró un salario para el usuario ${empleado.nombre}`);
        } else {

            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario
            })
        }
    })
}

//I. Promesas dentro de promesas******************
// getEmpleado(1).then(empleado => {
//     console.log('Empleado de BD', empleado);

//     getSalario(empleado).then(resp => {
//         console.log('Salario de BD', resp);
//     }, (err) => console.log(err));

// }, (err) => console.log(err));

//II Promesas anidadas***************************
getEmpleado(3).then(empleado => {

    return getSalario(empleado);

}).then(resp => {
    console.log(`El salario de ${ resp.nombre } es ${ resp.salario }`);

}).catch(err => console.log(err));