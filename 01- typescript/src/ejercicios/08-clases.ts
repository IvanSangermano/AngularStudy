class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ){}
}

class Heroe extends PersonaNormal{
    // alterEgo: string;
    // edad: number;
    // nombreReal: string;

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string,  
    ){
        /* Llama al constructor de PersonaNormal */
        super( nombreReal, 'New York');
    }
}

// const ironman = new Heroe();
// ironman.alterEgo = "Ironman";
// ironman.edad = 45;
// ironman.nombreReal = "Tony Stark";

const ironman = new Heroe('Ironman', 45, "Tony Stark");

console.log(ironman)