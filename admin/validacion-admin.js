const inputUsuario = document.querySelector('[data-inputUsuario]');
const inputPass = document.querySelector('[data-inputContraseña]');


const btnLogin = document.querySelector('[data-botonIngresar]');


function validarAdmin (evento) { 
    const usuario= inputUsuario.value;
    const pass= inputPass.value;
    evento.preventDefault()
    if(usuario==="admin" & pass==="admin"){
        console.log("contraseña correcta")
        window.location.href ="./admin/articulos-admin.html"
    }else{
        
        alert("Contraseña Equivocada")
    }
};

btnLogin.addEventListener("click", validarAdmin);

