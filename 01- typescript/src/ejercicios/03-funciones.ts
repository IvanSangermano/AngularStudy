function sumar(a:number , b:number): number{
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar( numero: number, otroNumero?: number, base: number = 2) : number {
    return numero * base;
}

const resultado1 = multiplicar(5, 10);
const resultado2 = multiplicar(5, 10);


// console.log("resultado1", resultado1);
// console.log("resultado2", resultado2);


interface PerrsonajeLOR {
    nombre: string,
    pv: number,
    mostrarHP: () => void,

}

/*Void especifica que no va a haber return (en js seria un return undefined) */
function curar ( personaje: PerrsonajeLOR, curarX : number ): void {
    personaje.pv += curarX;
}

const nuevoPersonaje: PerrsonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHP() {
        console.log( 'Puntos de vida:', this.pv);
    }
}

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHP();