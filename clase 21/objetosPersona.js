const persona1 = {
  nombre: 'Steven',
  edad: 26,
  genero: 'masculino',
  pais: 'colombia',
  cedula: 123,
}

class persona {
  constructor(nombre, edad, genero, pais, cedula) {
    this.nombre = nombre
    this.edad = edad
    this.genero = genero
    this.pais = pais
    this.cedula = cedula
  }
}

const persona = new persona('Steven', '26', 'masculino', 'colombia', '123')
