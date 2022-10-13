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

    constructor(id, modelo, marca, tipo, cantidad, precioUni, img){
        this.id = id;
        this.modelo = modelo;
        this.marca = marca;
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.precioUni = precioUni;
        this.img = img;
    }
}

//creación del array.
const productos = []
let carrito = []
let monto = 0;

//Funcion para ir cargando los productos al array de los mismos.
function cargarProductos(){
    productos.push(new Producto(111, 'modelo1', 'bullpadel', 'paleta', 1, 1000, 'https://res.cloudinary.com/dgvlsnajj/image/upload/v1664139230/paleta_dfmsly.webp'));
    productos.push(new Producto(222, 'modelo2', 'adidas', 'paleta', 1, 2000, 'https://res.cloudinary.com/dukzpfooc/image/upload/v1664142899/paleta_de_padel_nn2cxb.jpg'));
    productos.push(new Producto(333, 'modelo3', 'bullpadel', 'paleta', 1, 3000, 'https://res.cloudinary.com/dukzpfooc/image/upload/v1664143464/paleta_de_padel_jq02w4.webp'));
    productos.push(new Producto(444, 'remeraA', 'vairo', 'ropa', 1, 400, 'https://res.cloudinary.com/dukzpfooc/image/upload/v1664143565/remeraa_wvxo1l.jpg'));
    productos.push(new Producto(555, 'remeraB', 'head', 'ropa', 1, 500, 'https://res.cloudinary.com/dukzpfooc/image/upload/v1664143709/remerab_vdxzlk.webp'));
    productos.push(new Producto(666, 'remeraC', 'x', 'ropa', 1, 600, 'https://res.cloudinary.com/dgvlsnajj/image/upload/v1664139230/paleta_dfmsly.webp'));
}
cargarProductos();
console.log(productos);

//Obtengo el contenedor de los productos
const itemsaPintar = document.getElementById('carta-container');

//Obtengo el contenedor del carrito
const carritoPintar = document.getElementById('carrito-container');

//Obtener el boton vaciar
const botonVaciar = document.getElementById('vaciar-carrito');

//Agrego los productos a la página.
productos.forEach((producto) => {
    const productHTML = document.createElement('div')
    productHTML.classList.add('carta')
    productHTML.innerHTML = `
                <h4>${producto.modelo}<h4>
                <div class="carta-img"><img src="${producto.img}" alt=""></div>
                <div class="carta-cuerpo">
                    <strong>$${producto.precioUni}</strong>
                    <p class="text-muted py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button id="btn${producto.id}" class="btn btn-outline-dark">comprar</button>
                </div>
                `;
    itemsaPintar.appendChild(productHTML)

    //Tomo el id del boton para disparar el agregado del carrito.
    const boton = document.getElementById(`btn${producto.id}`);
    boton.addEventListener('click', () => {
        agregarCarrito(producto.id)
    });
});


botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito();
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se vacio el carrito',
        showConfirmButton: false,
        timer: 1000
    })
})


//Agregao al carrito
function agregarCarrito(prodId){
    const produc = productos.find((produc) => produc.id === prodId);
    carrito.push(produc);
    actualizarCarrito();
    console.log(carrito);
}

//Elimino del carrito porductos sellecionados.
const eliminarCarrtio = (prodId) => {
    const item = carrito.find((producto) => producto.id === prodId);

    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito();
}

//Pinto los productos dentro del carrito.
const actualizarCarrito = () => {
    carritoPintar.innerHTML = "";

    carrito.forEach((producto) => {
        const productHTML = document.createElement('div');
        productHTML.className = ('carrito-renglon');
        productHTML.innerHTML = `
                                <div class="col-2 carrito-renglon-img"><img src="${producto.img}" alt=""></div>
                                <strong class="col-2 carrito-renglon-precio">$${producto.precioUni}</strong>
                                <p class="col-2 carrito-renglon-tipo">${producto.tipo}</p>
                                <p class="col-2 carrito-renglon-marca">${producto.marca}</p>
                                <p class="col-2 carrito-renglon-cant">${producto.cantidad}</p>
                                <button id="eliminar${producto.id}" class="col-2 boton-eliminar"><i class="bi bi-trash3-fill"></i></button>
                                `;
        carritoPintar.appendChild(productHTML)
    })
}


localStorage.setItem('productos', JSON.stringify(productos))


//la parte del fetch para el desafio.
const contenido = document.getElementById("contenido");

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json)
.then(data => {
    data.forEach(publicación => {
        const li = document.createElement("li");
        li.innerHTML = `
                        <h2>ID: ${publicación.id}</h2>
                        <p>User: ${publicación.userId}</p>
                        <p>Titulo: ${publicación.title}</p>
                        <p>Contenido: ${publicación.body}</p>
        `;

        contenido.append(li);
    });
});