//Creación de una función de suma de dos números.
const suma = (num1, num2) => {return num1 + num2}

class Producto{

    constructor(codigo, precioUni, cantidad){
        this.codigo = codigo;
        this.precioUni = precioUni;
        this.cantidad = cantidad
    }
}


const productos = []

let codigo = parseInt(prompt("Ingresar el codigo del producto"));
let validar;
let precioUni;
let cantidad;
let monto = 0;

//Creación del objeto para ir ingresandolo al array.
//let obj = {codigo:codigo, precio:precio};

//Condición de salida cuando quiero dejar de ingresar productos.
while (codigo != -1){

    //En caso de que el codigo del producto sea un número invalido(negativo), solicito ingresarlo nuevamente hasta que sea correcto.
    while (codigo <= 0){
        codigo = parseInt(prompt("Ingresar el codigo del producto correctamente1"));
    }

    //En caso de que el codigo del producto sea valido(mayor a 0).
    while (codigo > 0){
        //Muestro el codigo del producto por pantalla y pido validación si el codigo ingresado era el deseado.
        console.log(`El codigo del producto ingresado es: ${codigo}`);
        validar = prompt("validar con SI o NO en caso de que sea correcto el codigo ingressado").toUpperCase();

        //Validación en caso de que el codigo del producto haya sido el deseado.
        if (validar === "SI"){
            //Pido los distintos atributos del objeto producto a ingresar.
            precioUni = parseInt(prompt("Ingresar el precio del producto"));
            cantidad = parseInt(prompt("Ingresar la cantidad de ese producto"));
            console.log(`El precio del pdoducto con codigo ${codigo} es: ${precioUni} y la cantidad solicitada es: ${cantidad}`);
            
            //Sumando el monto total a abonar por parte del cliente.
            monto = suma(monto, (precioUni*cantidad))
            const objetoProducto = new Producto(codigo, precioUni, cantidad);
            
            //Recorró el arreglo para ver si no existe el producto e ingresarlo.  ***NO FUNCIONA AL MOMENTO DE LA ENTREGA, POR ESO LO SAQUË***
            // if (productos.includes(objetoProducto.codigo) === false){
            //     productos.push(objetoProducto)
            // }
            // else{
            //
            //}
            productos.push(objetoProducto);

            codigo = parseInt(prompt("Ingresar el codigo de un nuevo producto"));
        }
        //En caso de que el codigo del producto no haya sido el deseado, se pide nuevamente.
        else{
            codigo = parseInt(prompt("Ingresar el codigo del producto deseado"));
        }
    }
}

if(monto > 0){
    //Se muestra por pantalla el monto total que debe abonar el cliente.
    console.log(`El monto que el cliente debe abonar por su compra es de ${monto}`)
    console.log(`Los productos que lleva el cliente son: ${productos}`);
}

//Aviso de que ya se salió del programa.
console.log("Salimos del programa");
