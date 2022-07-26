let numeros=[5,6,2,7,3,4]

console.log(numeros)//imprime el vector
console.log(numeros.length)//imprime el tamaño del vector

console.warn("ciclo para vector")
for (let i = 0; i <= numeros.length; i++) {

   
    if (numeros[i]%2==0) {
        console.log(`el numero ${i} es par`)
    }else{
        console.log(`el numero ${i} es impar`)
    }
      console.log(i)           
    }
console.warn("FOR OF")
    for (const numero of numeros) {
        console.log(numero)
    }
console.warn("for in")
    for (const key in numeros) {
    
        if(key==2) {
            console.log(numeros[key])
        }
        }
    
        console.warn("foreach")

        numeros.forEach(Element => {
            console.log(Element)
        }
            )