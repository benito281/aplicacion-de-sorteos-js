
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