//sessionStorage.setItem("id",123)

//console.log(sessionStorage.getItem("id"));

const usuario={
   nombre:"SofiiTa zApAtiCa",
    edad:12,
correo:"zapatasofia814@gmail.com"


}

const jsonUsuario=JSON.stringify(usuario,undefined,4)

localStorage.setItem(usuario.correo,jsonUsuario)

console.log(localStorage.getItem(usuario.correo));

