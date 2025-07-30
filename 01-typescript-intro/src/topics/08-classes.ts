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

const iroman = new Persona('Iroman', 'Buenos Aires'); //los parentesis en mandar a llamar una funcion

// si pongo . solo me aparece name xq address esta privado
console.log(iroman);