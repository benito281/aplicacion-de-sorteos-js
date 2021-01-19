let numero_sorteados = document.getElementById("mostrar_sorteo");
let muestra_numeros_sorteados=document.getElementById("muestra_numero");

let mostrar_sorteo=document.getElementById("mostrar_array");

let sorteo1 = [];
let sorteo2 = [];
let sorteo3 = [];

let sorteado1=[];


function numerosAleatorios(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



  
$("#numeros_sorteo").submit(function (e) {
  e.preventDefault();

  let minimo = document.getElementById("min").value;
  let maximo = document.getElementById("max").value;
  let cantidad_de_numeros=document.getElementById("cantidad").value;
  

  let min = parseInt(minimo);
  let max = parseInt(maximo);
  let cantidad= parseInt(cantidad_de_numeros);
  
if (minimo == "" || maximo == "" || cantidad_de_numeros == "") {
  console.log("Debe rellenar los campos");
}
else{
/* -----------------------GENERO UN ARREGLO CON NUMEROS SIN REPETIR----------------------------- */
for (let i = 0; i < cantidad; i++) {

  let numero_sorteado = numerosAleatorios(min, max);
  let numero_repetido=false;

  sorteo1.forEach((element)=>{
    if (element==numero_sorteado) {
      numero_repetido=true
    }
  });
      if (numero_repetido==false) {
        sorteo1.push(numero_sorteado);
      }   

      if (sorteo1.length==cantidad) {
        numero_sorteados.innerHTML = `!Buena suerte!`
      }
}
/* ------------------------------------------------------------------------------------------------ */

}


console.log(sorteo1);


});

function sorteo(array,array2){
  mostrar(array,array2);
  let resultado = array[Math.floor(Math.random() * array.length)];
  let repetido=false;
      array2.find(function(index){
        if (index==resultado) {
          repetido=true;
        }
      })
    if (repetido==false) {
      array2.push(resultado)
    }
    let numeros_agregado=array2[array2.length-1];
    numero_sorteados.innerHTML = `${numeros_agregado}`
}


function mostrar(array,array2){
 if (array2.length===array.length) {
   
    muestra_numeros_sorteados.innerHTML =` ${array2} `;

 }
 else{
    return false;
 }
}

