interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

//con esas dos inter moldeo este objeto
const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheran',
        year: 2015
    }
}

/* desestructuracion de objetos: tomar ciertas cosas qm interesen
const { song } = audioPlayer;*/

/* renombrar de desestru.. darle como un alias
const { song:anotherSong } = audioPLayer;*/

// renombrar 
const {song:anotherSong, songDuration:duration, details} = audioPlayer;

const { author } = details;

console.log('Song:', anotherSong);
console.log('Duration:', duration);
console.log('Author:', author)


// desest de arreglos
/*const dbz: string[] = ['Goku','Vegeta','Truks'];
console.log('Personaje 3: ', dbz[3] || 'No hay persobaje');*/

//no necsito a los demas pero igual le pongo las comas
const [ , , Truks = 'No existe'] : string[] = ['Goku','Vegeta'];

console.error('Personaje 3:',Truks);



export {};