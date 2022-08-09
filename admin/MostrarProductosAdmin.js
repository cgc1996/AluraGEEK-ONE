import { articulosServices } from "../ArticulosServices.js";

function crearArticuloAdmin(nombre,imagen,precio,categoria,id){
    const tarjeta = document.createElement('div');
    tarjeta.classList.add("publicaciones-admin_container")
    const contenido = `
            <div class="publicaciones_container_articulo">
                <img class="publicaciones_container_articulo_imagen" src="../${imagen}">
                <div class="publicaciones_container_articulo_info">
                    <p class="publicaciones_container_articulo_info_nombre">${nombre}</p>
                    <p class="publicaciones_container_articulo_info_precio">${precio}</p>
                    <p class="publicaciones_container_articulo_info_codigo">Categoria:${categoria}</p>
                    <p class="publicaciones_container_articulo_info_codigo">Cod:${id}</p>
                </div>
                <div class="publicaciones_container_articulo_opciones">
                    <button class="boton-opciones"><img src="/assets/img/generales/boton-borrar.png" alt="eliminar"></button>
                    <button class="boton-opciones"><img src="/assets/img/generales/boton-editar.png" alt="editar"></button>
                </div>
            </div>`

    tarjeta.innerHTML=contenido
    
       
    return tarjeta
    
}

const listaProductos=  await articulosServices.listaProductos()

console.log(listaProductos)

const articulosAdmin = document.querySelector("[data-articulosAdmin]")

function cargarArticulosAdmin(){
    
    listaProductos.forEach(elemento=> {
        
         articulosAdmin.appendChild(crearArticuloAdmin(elemento[0],elemento[1],elemento[2],elemento[3],elemento[5]))

    })
    
}

cargarArticulosAdmin()





