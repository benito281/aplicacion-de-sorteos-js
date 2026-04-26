import type {EstadoSorteo, VistaActual} from './types.ts'
//Configuración del sorteo
const vistaConfiguracion = document.querySelector('#vista-configuracion') as HTMLDivElement;

//Resumen
const vistaResumen = document.querySelector('#vista-resumen') as HTMLDivElement;
const resumenTanda = document.querySelector('#resumen-tanda') as HTMLDivElement;
const resumenNumeros = document.querySelector('#resumen-numeros') as HTMLDivElement;



//Evento
const vistaEvento = document.querySelector('#vista-evento') as HTMLDivElement;
const numeroActual = document.querySelector('#numero-actual') as HTMLDivElement;
const numeroAnterior = document.querySelector('#numero-anterior') as HTMLDivElement;
const contador = document.querySelector('#contador') as HTMLDivElement;
const historial = document.querySelector('#historial') as HTMLDivElement;



export function mostrarVista(vista: VistaActual): void {
  if (vista === "configuracion") {
      vistaConfiguracion.classList.remove('oculta');
      vistaEvento.classList.add('oculta');
      vistaResumen.classList.add('oculta');
  } else if (vista === "resumen") {
      vistaResumen.classList.remove('oculta');
      vistaConfiguracion.classList.add('oculta');
      vistaEvento.classList.add('oculta');
  } else {
      vistaEvento.classList.remove('oculta');
      vistaConfiguracion.classList.add('oculta');
      vistaResumen.classList.add('oculta');
  }
}
  
export function renderEstado(estado: EstadoSorteo): void {
  numeroActual.textContent = estado.ultimoSorteado?.toString() ?? '-';
  
  const penultimo = estado.historial[estado.historial.length - 2];
  numeroAnterior.textContent = penultimo?.toString() ?? '-';
  
  const total = estado.disponibles.length + estado.historial.length;
  contador.textContent = `${estado.historial.length} / ${total} sorteados`;
  
  // Agregamos clases de Tailwind al span (fondo gris, texto oscuro, bordes redondeados)
  historial.innerHTML = estado.historial
  .map(n => `<span class="bg-slate-100 border border-slate-200 text-slate-700 px-3 py-1 rounded-md text-sm font-semibold shadow-sm">${n}</span>`)
  .join('');
}

export function renderResumen(estado: EstadoSorteo): void {
  resumenTanda.textContent = `Tanda ${estado.tandaActual - 1} de ${estado.totalTandas}`;
  
  const ultimaTanda = estado.historialTandas[estado.historialTandas.length - 1];
  
  // Fichas más grandes y coloridas para la vista de resumen
  resumenNumeros.innerHTML = ultimaTanda
      .map(n => `<span class="bg-indigo-100 text-indigo-800 border border-indigo-200 px-5 py-3 rounded-lg text-xl font-bold shadow-sm">${n}</span>`)
      .join('');
}