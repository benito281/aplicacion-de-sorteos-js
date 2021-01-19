let alerta = document.getElementById("mostrar_sorteo");
let muestra=document.getElementById("muestra_numero");

let sorteo1 = [];
let sorteo2 = [];
let sorteo3 = [];

function numerosAleatorios(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


$("#numeros_sorteo").submit(function (e) {
  e.preventDefault();

  let minimo = document.getElementById("min").value;
  let maximo = document.getElementById("max").value;

  let min = parseInt(minimo);
  let max = parseInt(maximo);

  let numero_sorteado = numerosAleatorios(min, max);

  if (isNaN(min) || isNaN(max)) {
    console.log("El formulario no puede estar vacio");
  } else {

    if (sorteo1.length === 10) {
     sorteo2.push(numero_sorteado);
     console.log(sorteo2);

    } else {

      sorteo1.push(numero_sorteado);
      
    }    
      alerta.innerHTML = `${numero_sorteado}`
    console.log(sorteo1);
  }
});
