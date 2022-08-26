let codigo = parseInt(prompt("Ingresar el codigo del producto"));
let validar;
let precio;
let monto = 0;

//Condición de salida cuando quiero dejar de ingresar productos.
while (codigo != -1){

    //En caso de que el codigo del producto sea un número invalido(negativo), solicito ingresarlo nuevamente hasta que sea correcto.
    while (codigo <= 0){
        let codigo = parseInt(prompt("Ingresar el codigo del producto correctamente"));
    }

    //En caso de que el codigo del producto sea valido(mayor a 0).
    while (codigo > 0){
        alert(`El codigo del producto ingresado es: ${codigo}`)
        validar = prompt("validar con SI o NO en caso de que sea correcto el codigo ingressado").toUpperCase;

        //Validación si el codigo del producto que quiero ingresar es correcto o no.
        if (validar === "SI"){
            precio = parseInt(prompt("Ingresar el precio del producto"));
            alert(`El precio del pdoducto con codigo ${codigo} es: ${precio}`)
            monto = monto + precio
            codigo = parseInt(prompt("Ingresar el codigo de un nuevo producto"));
        }
        //En caso de no ser correcto el codigo del producto, se pide nuevamente.
        else{
            codigo = parseInt(prompt("Ingresar el codigo del producto correctamente"));
        }
    }
}
if(monto > 0){
    //Se muestra por pantalla el monto total que debe abonar el cliente.
    alert(`El monto que el cliente debe abonar por su compra es de $${monto}`)
}
//Aviso de que ya se salió del programa.
alert("Salimos del programa")




/*
let codigo = parseInt(prompt("Ingresar codigo del cliente \n Para finalizar ingresar -1"));
let pago;

while(codigo != -1){
    while(codigo <= 0 ){
        codigo = parseInt(prompt("Ingresar codigo del cliente valido"));
    }
    while (codigo > 0){
        pago = prompt("Ingresar 'SI' o 'NO', según si pagó o no").toUpperCase();
        if (pago === "SI"){
            console.log(`El socio ${codigo} pagó`);
        } 
        else if(pago === "NO"){
            console.log(`El socio ${codigo} no pagó`);
        }
        else{
            while (pago != "SI" && pago != "NO"){
                console.log("ERORR! \n Ingresar 'SI' en caso de que haya pagado o 'NO' en caso contrario");
                pago = prompt("Ingresar 'SI' o 'NO'").toUpperCase();
            }
            
        }
        codigo = parseInt(prompt("Ingresar codigo del cliente"));
    }
}

console.log("cierre");
*/