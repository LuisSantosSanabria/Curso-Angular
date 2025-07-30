export interface Passenger {
    name: string;
    children?: string [];
}

const passenger1 : Passenger = {
    name: 'Luis'
}

const passenger2 : Passenger = {
    name: 'Leo',
    children: ['Canelo','Trompas'],
}

//encadenamiento opcional
const returnChildrenNumber  = (passenger:Passenger) => {

   // const howManyChildren = passenger.children?.length || 0;

    const howManyChildren = passenger.children!.length;

    console.log(passenger.name, howManyChildren);

    return howManyChildren;
} 

returnChildrenNumber(passenger2);