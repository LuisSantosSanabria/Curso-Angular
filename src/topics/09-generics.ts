export function whastMyType<T>(argument: T) : T { //tratar de no usar any le QUITA CUalq restriccion a type scritp sobre q tipo de adto es
    return argument;
}

const amIString = whastMyType<string>('Hola mundo');
const amINumber = whastMyType<number>(100);
const amIArray = whastMyType<number[]>([1,2,3,4]);


console.log (amIString.split(''));
console.log (amINumber.toFixed());
console.log (amIArray.join('-'));