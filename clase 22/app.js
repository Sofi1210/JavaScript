//const texto = 'I S A'

//let patron = new RegExp(/\s/)

//console.log(patron.test(texto))

const txt = "Phython es el mejor lenguaje de programacion 2022"

const txtReplaced=txt.replace(/\d/g,"$")

console.log(txtReplaced)

const user="Sofia"

const patronUser=/^[a-zA-Z0-9]{3,16}$                /

console.log(patronUser.test(user))