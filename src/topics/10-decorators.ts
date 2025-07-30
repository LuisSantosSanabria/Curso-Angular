function classDecorator<T extends { new (...arg:any[]): {}}>( // le da otros comportaminetos a mi clase SuperClass
    constructor: T //tratemos de usar un tipol de dato generico T
) {
   return class extends constructor {
    newProperty = 'New Property';
    hello = 'override';
   }
}

//no vamos a crear decoradores , los vamos a consumir
// va mantener la misma sintaxis todo va ser una clase , el decorador anade funcionalidad extra o cambia el comport 
// de la clase ,propiedades o metodos
@classDecorator
export class SuperClass {
    public myProperty : string = 'Abs123'

    print(){
        console.log('Hola mundo')
    }
}

console.log(SuperClass); //definicion de mi clase

const myClass = new SuperClass(); //instacia creada de mi clase
console.log(myClass);