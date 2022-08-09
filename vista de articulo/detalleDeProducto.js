import { articulosServices } from "../ArticulosServices.js";

function crearArticuloDetalle(nombre,imagen,precio,descripcion){
    const tarjeta = document.createElement('div');
    tarjeta.classList.add("producto")
    const contenido = `
            <img src="../${imagen}" class="producto_imagen"></img>
            <div class="producto_descripcion">
                <span class="producto_descripcion__nombre">${nombre}</span>
                <p class="producto_descripcion__precio">${precio}</p>
                <p class="producto_descripcion__detalle">${descripcion}</p>
            </div>`

    tarjeta.innerHTML=contenido
    
       
    return tarjeta
    
}

const listaProductos= await articulosServices.listaProductos()
const detalleArticulo = document.querySelector("[data-productoEnDetalle]")


function mostrarProductoElegido(){

    const url = new URL(window.location);
    const id = url.searchParams.get("id")

    listaProductos.forEach(elemento => {
        if(elemento[5] == id){
            detalleArticulo.appendChild(crearArticuloDetalle(elemento[0],elemento[1],elemento[2],elemento[4]));
        }
    })

}

mostrarProductoElegido()

