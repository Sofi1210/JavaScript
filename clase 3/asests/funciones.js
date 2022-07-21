
//funcion normal
function saludar(){
    console.log("hola mundo")
}
saludar();

function suma(){
    let suma=2+3;
    console.log(suma)
}
suma()

function despedirse(){
    console.log("tenga un buen dia")
}
despedirse();

//funciones tipo flecha
const suma=(num1,num2)=>{
    let resultado=num1+num2;
    console.log(resultado)
}
suma(5,10)