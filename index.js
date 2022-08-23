let codigo = parseInt(prompt("Ingresar codigo del cliente"));
let pago;

while(codigo != -1){
    while(codigo < 0 || codigo != -1 ){
        codigo = parseInt(prompt("Ingresar codigo del cliente valido"));
    }
    while (codigo > 0){
        pago = prompt("Ingresar 'SI' o 'NO' según si pagó o no");
        if (pago === "SI"){
            alert(`El socio ${codigo} pagó`);
        } 
        else if(pago === "NO"){
            alert("El socio no pagó");
        }
        else{
            alert("Ingresar 'SI' en caso de que haya pagado o 'NO' en caso de que no haya pagado");
        }

        codigo = parseInt(prompt("Ingresar codigo del cliente"));
    }
}

console.log("cierre");


