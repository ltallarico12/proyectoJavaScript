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

    constructor(codigo, modelo, marca, tipo, precioUni, img){
        this.codigo = codigo;
        this.modelo = modelo;
        this.marca = marca;
        this.tipo = tipo;
        this.precioUni = precioUni;
        this.img = img;
    }
}

//creación del array.
const productos = []
let monto = 0;

//Funcion para ir cargando los productos al array de los mismos.
function cargarProductos(){
    productos.push(new Producto(111, 'modelo1', 'bullpadel', 'paleta', 1000, 'https://res.cloudinary.com/dgvlsnajj/image/upload/v1664139230/paleta_dfmsly.webp'));
    productos.push(new Producto(222, 'modelo2', 'adidas', 'paleta', 2000, 'https://res.cloudinary.com/dukzpfooc/image/upload/v1664142899/paleta_de_padel_nn2cxb.jpg'));
    productos.push(new Producto(333, 'modelo3', 'bullpadel', 'paleta', 3000, 'https://res.cloudinary.com/dukzpfooc/image/upload/v1664143464/paleta_de_padel_jq02w4.webp'));
    productos.push(new Producto(444, 'remeraA', 'vairo', 'ropa', 400, 'https://res.cloudinary.com/dukzpfooc/image/upload/v1664143565/remeraa_wvxo1l.jpg'));
    productos.push(new Producto(555, 'remeraB', 'head', 'ropa', 500, 'https://res.cloudinary.com/dukzpfooc/image/upload/v1664143709/remerab_vdxzlk.webp'));
    productos.push(new Producto(666, 'remeraC', 'xxx', 'ropa', 600, 'https://res.cloudinary.com/dgvlsnajj/image/upload/v1664139230/paleta_dfmsly.webp'));
}
cargarProductos();
console.log(productos);

const itemsaPintar = document.querySelector("#carta-container");
function agregarCards(){

    productos.forEach((producto) => {

        let producHTML = `
                    <div class="carta col-4" style="margin: 30px 0;">
                        <h4>${producto.modelo}<h4>
                        <div class="carta-img"><img src="${producto.img}" alt=""><div>
                        <div class="carta-cuerpo">
                            <strong>${producto.precioUni}</strong>
                            <p class="text-muted py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <button class="btn btn-outline-dark">comprar</button>
                        </div>
                    <div>`;
        itemsaPintar.innerHTML += producHTML;
    });
}
agregarCards();

//Agregando al carrito.
const pusheo = () =>{
    productos.push(producto1);
}
let botonComprar = document.getElementById("btn-comprar");
botonComprar.addEventListener("click", () => pusheo);