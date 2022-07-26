
//ciclo for en javascript
let cont=0,acum=0;
for (let i = 0; i <=100; i++) {
//1.acum=acum+i
acum+=i
if (i%2==0) {
    console.log(`el numero ${i} es par`)
}else{
    console.log(`el numero ${i} es impar`)
}
  console.log(i)
}
console.log(`el acumulador está en: ${acum}`)

//funcion para ver si es par  o impar

const isPair=(num)=>{
    if(num%2==0) {
        console.log(`el numero es par`);
    }else{
        console.log(`el numero es impar`);
    }
}
isPair(122);
isPair(125);