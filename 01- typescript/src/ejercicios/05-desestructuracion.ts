interface Reproductor {
    volumen: number,
    segundo: number;
    cancion: string,
    detalles: Detalles
}
interface Detalles {
    autor: string;
    año: number
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        año: 2015
    }
}

const {volumen: vol, segundo, cancion, detalles} = reproductor;
const {autor, año} = detalles;


// console.log( 'El volumen actual es de: ', vol)
// console.log( 'El segundo actual es de: ', segundo)
// console.log( 'El cancion actual es de: ', cancion)
// console.log( 'El autor actual es: ', autor)
// console.log( 'El año actual es: ', año)

const dbz: string[] = ['Goku', 'Vegetta', 'Trunks'];
const [ , , p3] = dbz;

console.log( 'personaje 3: ', p3)
