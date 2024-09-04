"use strict";
/* Creo un array con sus productos y sus características */ 

const productos = [ 
    { id: "Harina", nombre: "Harina", precio: 100, imagen: "./img/harina.jpg", stock: 50 },
    { id: "Aceite", nombre: "Aceite", precio: 150, imagen: "./img/aceite.jpg", stock: 50 },
    { id: "Galletas", nombre: "Galletas", precio: 200, imagen: "./img/galletas.jpg", stock: 50 },
    { id: "Fideos moños", nombre: "Fideos moños", precio: 250, imagen: "./img/fideos.jpg", stock: 50 },
    { id: "Pure de Tomate", nombre: "Pure de Tomate", precio: 150, imagen: "./img/puretomate.jpg", stock: 50 },
    { id: "Gelatina", nombre: "Gelatina", precio: 75, imagen: "./img/gelatina.jpg", stock: 50},
    { id: "Huevos", nombre: "Huevos 1/2", precio: 100, imagen: "./img/huevos.jpg", stock: 50},
    { id: "Agua", nombre: "Agua", precio: 90, imagen: "./img/agua.jpg", stock: 50}
];

const carrito = [];             // creo un array que va a guardar cada producto en un espacion del carrito
let totalCarrito = 0;               // variable para tomar la suma del total de los precios de cada producto

const contenedorProductos = document.querySelector("#contenedor-productos");            // variable que toma el html que contiene los productos
const listaCarrito = document.querySelector("#lista-carrito");                          // variable que contiene la lista del carrito
const totalCarritoElemento = document.querySelector("#total-carrito");                 // variable que toma el elemento que agrego al carrito

function cargarProductos() {                // funcion para cargar productos
    contenedorProductos.innerHTML = "";     // esto deja vacio los elementos del contenedor de productos

    productos.forEach(producto => {                     // funcion para crear los elementos del producto 
        const div = document.createElement("div");      //creo un div
        div.classList.add("producto");                  // creo una class del div llamada "producto"
        div.innerHTML = `
            <img class="producto-img" src="${producto.imagen}" alt="${producto.nombre}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.nombre}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <p class="producto-stock">Stock: ${producto.stock}</p>
                <input type="number" class="producto-cantidad" value="0" min="0" max="${producto.stock}">
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>`;                                                            // lleno el contenedor de productos con los elementos definidos en el array principal de productos

        const btnAgregar = div.querySelector(".producto-agregar");             //variable para el boton agregar producto
        
        btnAgregar.addEventListener("click", () => {                                // agrego un evento al hacer click
            const cantidadSeleccionada = parseInt(div.querySelector(".producto-cantidad").value); // convierto el valor que se ingresa en el imput a numero
            if (cantidadSeleccionada > 0 && cantidadSeleccionada <= producto.stock) {
                producto.stock -= cantidadSeleccionada;
                div.querySelector(".producto-stock").textContent = `Stock: ${producto.stock}`;   // si la cantidad seleccionada es mayor a 0 o menor o = a el stock
                                                                                                // se resta el stock por la cantidad seleccionada, y luego se cambia el numero que figura del stock
                                                                                                // y se agrega al carrito el prodcuto con la cantidad seleccionada
                
                agregarAlCarrito(producto, cantidadSeleccionada);
            } else {
                alert("Cantidad inválida. Verifique el stock disponible."); //sino salta un alert
            }
        });

        contenedorProductos.append(div);        // se introduce al div el producto
    });
}

function agregarAlCarrito(producto, cantidad) {
    // Buscar si el producto ya está en el carrito
    let productoEnCarrito = null;

    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id === producto.id) {
            productoEnCarrito = carrito[i];
            break;
        }
    }

    if (productoEnCarrito) {
        // Si el producto ya está en el carrito, actualizar su cantidad
        productoEnCarrito.cantidad += cantidad;
    } else {
        // Si el producto no está en el carrito, agregarlo con la cantidad
        const nuevoProducto = {
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            stock: producto.stock,
            cantidad: cantidad
        };
        carrito.push(nuevoProducto);
    }

    // Actualizar el total del carrito
    totalCarrito += producto.precio * cantidad;
    actualizarCarrito();
}



function actualizarCarrito() {
    listaCarrito.innerHTML = "";
    
    carrito.forEach(producto => {
        const li = document.createElement("li");       //el carrito muestra un li con los elementos primordiales del producto y se realiza la cuenta donde se multiplica la cantidad por el precio
        li.textContent = `${producto.nombre} - ${producto.cantidad} x $${producto.precio} = $${producto.cantidad * producto.precio}`;
        listaCarrito.append(li);
    });

    totalCarritoElemento.textContent = totalCarrito; //se muestra el total
}

cargarProductos();  // llamo a la funcion para cargar los productos













