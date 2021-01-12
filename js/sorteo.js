/* Elemento de alerta */
let alerta=document.getElementById("mostrar_sorteo");

let sorteo1=[];

function numerosAleatorios(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}

/* Posible para agregar a futuro no borrar */
/* 
function verificarExistencia(numero_sorteado){
if (sorteo1.includes(numero_sorteado)) return true;
return false;
} */




$("#numeros_sorteo").submit(function (e) { 
    e.preventDefault();
    let minimo=document.getElementById("min").value;
    let maximo=document.getElementById("max").value;
    let min=parseInt(minimo);
    let max=parseInt(maximo);
    let numero_sorteado=numerosAleatorios(min,max);

    sorteo1.push(numero_sorteado);
   
   
    console.log(sorteo1);

});