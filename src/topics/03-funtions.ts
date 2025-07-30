function addNumbers(a:number, b:number){
    return a + b;
}

//funciones flecha
const agrNumeros = (a:number, b:number):string=> {
    return `${a+b}`; //caracteres multilinea
}

function multi (firsNumber:number, secondNumber?:number, base: number=2) {
    return firsNumber * base;
}
// signo? me dice que es opcional

const result:number= addNumbers(1,2);
const result2:string= agrNumeros(1,3);
const multiResult:number =multi(5);


// funciones con argumentos
interface character {
    name: string;
    hp: number;
    showHp: () => void; //definir un metodo dentro de una inteface
}

const healCaracter = (character: character, amount: number) => {
    character.hp += amount
}

const strider: character = {
    name: 'Luis',
    hp: 50,
    showHp () { //definimos nuestro metodo
        console.log(`Puntos de vida ${ this.hp }`);
    }

}
healCaracter(strider, 10);

strider.showHp();

console.log({result, result2, multiResult})
export{};