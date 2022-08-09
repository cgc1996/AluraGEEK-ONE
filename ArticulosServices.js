const listaProductos = () => fetch("https://sheets.googleapis.com/v4/spreadsheets/1mCTmyJgjKrPOS-at8Z7yd4AGzN6eN9oGnekDQKpC5IQ/values/Articulos!A:F?key=AIzaSyBov5CprGr4C89oMiBYDjRzgG904g8mBbo").then((respuesta) => respuesta.json()).then(datos => datos.values)


/* const detalleProducto = (id) => {
    return fetch (`http://localhost:3001/producto/${id}`).then(respuesta => respuesta.json())
}; */

export const articulosServices = {
    listaProductos,
    /* detalleProducto */
}