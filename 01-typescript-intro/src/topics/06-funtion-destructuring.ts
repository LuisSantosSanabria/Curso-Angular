// creo el objeto Producto
export interface Producto {
    descripcion: string;
    precio: number;
}

const celular: Producto = {
    descripcion: 'Xiaomi',
    precio: 150.0
}

const tablet: Producto = {
    descripcion: 'Apple',
    precio: 250.0
}

//objeto personalizado
interface TasaCalOpciones {
    tasa: number;
    productos: Producto[];
}

//funcion para calcular la tasa de los prodcutos que va devolver un array de numeros
export function tasaCal( opciones: TasaCalOpciones ): number[] {
    let total = 0;

    opciones.productos.forEach(productos => {
        total += productos.precio;

    });
    return[total, total*opciones.tasa];
}

const tarjeta = [celular ,tablet];
const tasa = 0.15;

/*const resultado =  tasaCal({ //control + espacio me marca lo que puede ir debajo
    productos: tarjeta,
    tasa: tasa,
})

console.log('Total', resultado[0]);
console.log('Tasa', resultado[1]); 
*/

// con desestructuracion
const [total,tasaTotal] = tasaCal ({
   productos: tarjeta,
   tasa: tasa,
})

console.log('Total', total);
console.log('Tasa', tasaTotal); 
