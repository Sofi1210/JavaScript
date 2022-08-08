let titulo = document.querySelectorAll('h1')

for (let i = 0; i < titulo.length; i++) {
  titulo[i].className = 'titulo'
}

titulo[1].id = 'titulo1'
titulo[2].id = 'titulo2'

console.log(titulo)

let imagen=document.getElementById("imagen")

imagen.setAttribute("src","https://image.freepik.com/vector-gratis/dibujos-animados-lindo-gato_142499-46.jpg")

let enlace=document.querySelector("a")
enlace.setAttribute("href", "https://www.google.com/")






