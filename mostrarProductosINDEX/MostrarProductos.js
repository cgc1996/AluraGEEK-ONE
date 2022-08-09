import { articulosServices } from "../ArticulosServices.js";

function crearArticulo(nombre,imagen,precio,id){
    const tarjeta = document.createElement('div');
    const contenido = `
    <img class="publicaciones_categoria_articulo_imagen" src="${imagen}">
    <div class="publicaciones_categoria_articulo_info">
        <p class="publicaciones_categoria_articulo_info_nombre">${nombre}</p>
        <p class="publicaciones_categoria_articulo_info_precio">${precio}</p>
        <a href="/vista de articulo/detalleDeProducto.html?id=${id}">Ver producto</a>
    </div>`

    tarjeta.innerHTML=contenido
    
    tarjeta.classList.add("publicaciones_categoria_articulo")
    
    return tarjeta
    
}

const listaProductos= await articulosServices.listaProductos()



const categoriaStarWars= document.querySelector("[data-Starwars]");
const categoriaConsolas= document.querySelector("[data-consolas]")
const categoriaDiversos= document.querySelector("[data-diversos]")


function cargarArticulo(){
    
    listaProductos.forEach(elemento => {
        console.log (elemento)
        if (elemento[3] === "Star Wars") {
            categoriaStarWars.appendChild(crearArticulo(elemento[0],elemento[1],elemento[2],elemento[5]));    
        }
        if (elemento[3] === "Consolas") {
            categoriaConsolas.appendChild(crearArticulo(elemento[0],elemento[1],elemento[2],elemento[5]));
        }
        if (elemento[3] === "Diversos") {
            categoriaDiversos.appendChild(crearArticulo(elemento[0],elemento[1],elemento[2],elemento[5]));
        }
    })
    
}

cargarArticulo()



