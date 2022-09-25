//Creación de una función de orden superior, devuelve funciones según lo que se necesite.
function operaciones(op){
    if (op === "sumar"){
        return (x,y) => x + y;
    }
    if (op === "restar"){
        return (x,y) => x + y;
    }
    if (op === "multiplicar"){
        return (x,y) => x + y;
    }
    if (op === "dividir"){
        return (x,y) => x + y;
    }
}

//Creación de la clase producto con su constructor , para ir ingresando los productos al carrito.
class Producto{

    constructor(codigo, modelo, marca, tipo, precioUni){
        this.codigo = codigo;
        this.modelo = modelo;
        this.marca = marca;
        this.tipo = tipo;
        this.precioUni = precioUni;
    }
}

//creación del array.
const productos = []
let monto = 0;

//Funcion para ir cargando los productos al array de los mismos.
function cargarProductos(){
    productos.push(new Producto(111, 'modelo1', 'wilson', 'paleta', 1000 ));
    productos.push(new Producto(222, 'modelo2', 'wilson', 'paleta', 2000 ));
    productos.push(new Producto(333, 'modelo3', 'wilson', 'paleta', 3000 ));
}



//Agregando al carrito.
const pusheo = () =>{
    productos.push(producto1);
}
let botonComprar = document.getElementById("btn-comprar");
botonComprar.addEventListener("click", () => pusheo);


//calculo el total
monto = productos.reduce((acum, item) => acum + (item.precioUni*item.cantidad), 0);

//Evento para ver el monto total.
const total = (m) =>{
    console.log(`Su monto total a pagar es: ${m}`);
}
let boton = document.getElementById("btn");
boton.addEventListener("click", () => total(monto));


//Agregando un filtro.
let precio = parseInt(prompt("Ingrese el precio minimo"));
let productosFiltrados = productos.filter(item => item.precioUni > precio);

let produc = document.getElementById("productos");

for (const i of productosFiltrados){
    filtrar.innerHTML = `<h4>ID: ${i.codigo}<h4>
                        <p>producto: ${i.cantidad}<p>
                        <b>precio: ${i.precioUni}<b>`;
    produc.append(item);
}


localStorage.setItem('miArray', JSON.stringify(productos));