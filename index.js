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
                console.log("ERORR! \n 'SI' en caso de que haya pagado o 'NO' en caso contrario");
                pago = prompt("Ingresar 'SI' o 'NO'").toUpperCase();
            }
            
        }
        codigo = parseInt(prompt("Ingresar codigo del cliente"));
    }
}

console.log("cierre");
