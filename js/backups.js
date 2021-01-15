
let alerta=document.getElementById("mostrar_sorteo");

function mostrarValor(tipo,valor,divElement){
divElement.innerHML=enviaModal(tipo,valor);
}

function enviaModal(tipo,valor){
return `
    <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog modal-notify modal-${tipo}" role="document">
    <!--Content-->
    <div class="modal-content">
      <!--Header-->
      <div class="modal-header">
        <p class="heading lead">Numeros sorteados</p>

        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="white-text">&times;</span>
        </button>
      </div>

      <!--Body-->
      <div class="modal-body">
        <div class="text-center">
          
          <p>${valor}</p>
        </div>
      </div>

      <!--Footer-->
      <div class="modal-footer justify-content-center">
        <a type="button" class="btn btn-outline-warning waves-effect" data-dismiss="modal">Sortear Otro</a>
      </div>
    </div>
    <!--/.Content-->
  </div>
</div>
`
}

$(mostrarValor("success","hello world",alerta)).show();


document.querySelector("#numeros_sorteo").addEventListener("submit",function(e){
    e.preventDefault();

    
    let minimo=document.getElementById("min").value;
    let maximo=document.getElementById("max").value;
    
    
    let min=parseInt(minimo);
    let max=parseInt(maximo);
      
    console.log(min,max);
});
/* Posible para agregar a futuro no borrar */
/* 
function verificarExistencia(numero_sorteado){
if (sorteo1.includes(numero_sorteado)) return true;
return false;
} */



let alerta = document.getElementById("mostrar_sorteo");

let sorteo1 = [];
let sorteo2 = [];
let sorteo3 = [];

function numerosAleatorios(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function longitudArray(array) {
  if (array.length === 10) {
    return false;
  } else {
    return true;
  }
}

function busqueda_repetido(array){
  if (array) {
    array.find(item=>{
      if (item==item) {
        return false;
      }
      else{
        return true;
      }
    })
  }
}
$("#numeros_sorteo").submit(function (e) {
  e.preventDefault();

  let minimo = document.getElementById("min").value;
  let maximo = document.getElementById("max").value;

  let min = parseInt(minimo);
  let max = parseInt(maximo);

  let numero_sorteado = numerosAleatorios(min, max);
  let busqueda=busqueda_repetido(sorteo1);
  if (isNaN(min) || isNaN(max)) {
    console.log("El formulario no puede estar vacio");
  } else {

    if (sorteo1.length === 10) {
      return false;
    } else {
      sorteo1.push(numero_sorteado);
    }

    console.log(sorteo1);
  }
});




