import type {Producto} from './06-funtion-destructuring';
import { tasaCal } from './06-funtion-destructuring';

const compra: Producto[] = [
    {
        descripcion: 'Nokia',
        precio: 100
    }
];

const [total, tasa] = tasaCal ({
    productos: compra,
    tasa: 0.15
});

console.log('Total', total);
console.log('Tasa', tasa);