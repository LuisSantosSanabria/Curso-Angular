//import { Persona } from './08-classes';
export class Persona {
    //propiedades de la clase
    public name: string;
    private address: string;

    constructor(name:string , address: string) {
        this.name = name;
        this.address = address;
    }

    /* forma corta de definir clases en el mismo contructor
    constructor (
        public name: string,
        private address: string = 'Ulala'
    ) {}
        */
}

/*export class Hero extends Persona {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ){
        super(realName, 'Buenos Aires') // llama al padre
    }
}*/

// composicion
export class Hero {

   // public persona: Persona;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public persona : Persona,
    ){
        //this.persona = new Persona(realName);
    }
}

const tony = new Persona('Tony','New York');

const iroman = new Hero('Iroman',45,'Tony',tony); //los parentesis e mandar a llamar una funcion

// si pongo . solo me aparece name xq address esta privado
console.log(iroman);