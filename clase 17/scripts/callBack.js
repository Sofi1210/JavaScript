const saludar = (nombrePersona) => {
  // console.log(`Hola ${nombrePersona}`)
  setTimeout(() => {
    console.log(`Hola ${nombrePersona}`)
  }, 3000)
}

const pedirNombre = (callBack) => {
  let nombre = prompt('Ingrese nombre')
  callBack(nombre)
}

pedirNombre(saludar)
