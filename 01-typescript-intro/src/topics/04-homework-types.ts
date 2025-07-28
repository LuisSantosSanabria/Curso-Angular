interface SuperHero {
    name: string;
    age: number;
    address: Address;
    // una funcion que regresa un string
    showAddress: () => string;
}
/*cuando se trabaja con interfaces que detro tiene otro obj se aconsjea que el 
objeto interno tenga su interfaz*/
interface Address {
    street: string;
    country: string;
    city: string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city
            + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log({ address });




export { };