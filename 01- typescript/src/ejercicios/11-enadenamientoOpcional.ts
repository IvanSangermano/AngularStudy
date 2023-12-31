interface Pasajero {
    nombre: string,
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia', 'Gabriel']
}

const imprimeHijos = (pasajero : Pasajero): void => {
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log("cuantos hijos: ", cuantosHijos)
}

imprimeHijos(pasajero1);
imprimeHijos(pasajero2);