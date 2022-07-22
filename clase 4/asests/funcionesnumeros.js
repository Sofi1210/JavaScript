console.log(Math.E)//DEVUELVE LA CONSTANTE DE EULER
console.log(Math.PI)//devuelve el resultado de pi
console.log(Math.pow(2,2))
console.log(2*3)

let numero1=30;
let numero2=82;
console.log(Math.min(numero1,numero2));
console.log(Math.max(numero1,numero2));

const numeroPI=3.1416

console.log(Math.round(numeroPI))//DEVUELVE EL NUMERO ENTERO MAS CERCANO
console.log(Math.ceil(numeroPI))//devuelve el numero entero mas pequeño pero hacia arriba
console.log(Math.random()*(numero1-numero2)+numero1)//manda un numero al azar 

const numeros=[0,20,10,5,30]
console.log(typeof numeros)
console.log(`el numero menor es: ${Math.min(...numeros)}`);
console.log(`el numero mayor es: ${Math.max(...numeros)}`);
