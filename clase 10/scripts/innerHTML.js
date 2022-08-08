const animales=["Perro","Gatos","Panda","Koala"]

let ul=document.querySelector("ul");

 // ul.innerHTML=`<li>HTML</li>
//<li>CSS</li>
//<li>javascript<li>
//<li>React<li>`,


let skillsConcat=""
for (let i = 0; i < animales.length; i++) {
    skillsConcat= skillsConcat+ `<li>${animales[i].toUpperCase(b      )}</li>`;
}
 
ul.innerHTML=skillsConcat