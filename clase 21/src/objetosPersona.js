class persona {
  constructor(nombre, edad, genero, pais, cedula) {
    this.nombre = nombre
    this.edad = edad
    this.genero = genero
    this.pais = pais
    this.cedula = cedula
  }

  

  mostrarPais() {
    console.log(this.pais)
  }
  get getnombre() {
    return this.nombre
  }
}



const persona2 = new persona('steven', 26, 'masculino', 'colombia', 123)
console.log(persona2.getnombre)
