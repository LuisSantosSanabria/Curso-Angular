// : string especificar tipo de dato
// const si se aque la variable no va cambiar
const skills: string[] = ['comer','salta','pelear'];

//objeto
//iterace equivale a cero linea de codigo en JS
interface Caracter {
    name: string;
    hp: number;
    skill: string[];
    hometown?: string; //no esta definido
}

//como le digo que strider es del tipo de caracter, con : Caracter
const strider : Caracter = {
    name: 'strider',
    hp: 123,
    skill: ['saltar', 'correr'],
}

strider.hometown = 'River';
console.table(strider)

export{};