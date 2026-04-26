import { iniciarPartida, actualizarEstado, estadoActual, cargarDesdeStorage } from "./state";
import { sacarNumero } from "./sorteo";
import { mostrarVista, renderEstado, renderResumen} from "./ui"
import { vistaActual } from "./state";

//Configuración
const inputMin = document.querySelector('#input-min') as HTMLInputElement;
const inputMax = document.querySelector('#input-max') as HTMLInputElement;
const inputCantidad = document.querySelector('#input-cantidad') as HTMLInputElement;
const inputTandas = document.querySelector('#input-tandas') as HTMLInputElement;
const btnComenzar = document.querySelector("#btn-comenzar") as HTMLButtonElement;

//Evento
const btnSortear = document.querySelector('#btn-sortear') as HTMLButtonElement;
const btnNuevaPartida = document.querySelector('#btn-nueva-partida') as HTMLButtonElement;

//Partida
const btnSiguienteTanda = document.querySelector('#btn-siguiente-tanda') as HTMLButtonElement;
const btnFinalizar = document.querySelector('#btn-finalizar') as HTMLButtonElement;
void btnSiguienteTanda;


cargarDesdeStorage();
mostrarVista(vistaActual);
btnComenzar.addEventListener("click", () => {
    iniciarPartida(inputMin.valueAsNumber, inputMax.valueAsNumber, inputCantidad.valueAsNumber, inputTandas.valueAsNumber);
    mostrarVista("evento");
})

btnSortear.addEventListener("click", () => {
    const estadoNuevo = sacarNumero(estadoActual);
    actualizarEstado(estadoNuevo);
        if (estadoNuevo.tandaEnCurso.length === 0 && estadoNuevo.historialTandas.length > 0) {
        mostrarVista("resumen");
        renderResumen(estadoNuevo); // ← importar de ui.ts
    } else {
        renderEstado(estadoNuevo);
    }
});

[btnNuevaPartida, btnFinalizar].forEach(
    btnB => btnB.addEventListener("click", () => mostrarVista("configuracion"))
);

btnSiguienteTanda.addEventListener("click", () => {
    mostrarVista("evento");
});