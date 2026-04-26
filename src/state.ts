import type { EstadoSorteo, VistaActual } from "./types";
import { generarRango, mezclarRango } from "./sorteo";

const STORAGE_KEY = 'estadoSorteo';

//Estado inicial
export let estadoActual: EstadoSorteo = {
    disponibles: [],
    historial: [],
    historialTandas: [],
    tandaEnCurso: [],
    ultimoSorteado: null,
    tandaActual: 1,
    totalTandas: 0,
    numerosPorTanda: 0
}
export let vistaActual: VistaActual = "configuracion";

// 1. Inicializar partida nueva
export function iniciarPartida(
    min: number,
    max: number,
    numerosPorTanda: number,
    totalTandas: number = 1
): void {
    const rango = generarRango(min, max);
    const totalNumeros = numerosPorTanda * totalTandas;
    const rangoListo = mezclarRango(rango, totalNumeros);

    vistaActual = "evento";
    actualizarEstado({
        disponibles: rangoListo,
        historial: [],
        ultimoSorteado: null,
        historialTandas: [],
        tandaEnCurso: [],
        tandaActual: 1,
        totalTandas,
        numerosPorTanda
    });
}

// 2. Actualizar estado
export function actualizarEstado(nuevoEstado: EstadoSorteo): void {
    // reemplazá estadoActual
    estadoActual = nuevoEstado;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(estadoActual));
    localStorage.setItem('vistaActual', vistaActual); 

}

// 3. Recuperar desde localStorage
export function cargarDesdeStorage(): void {
    const guardado = localStorage.getItem(STORAGE_KEY);
    if (guardado) {
        estadoActual = JSON.parse(guardado);
    }
    const vistaGuardada = localStorage.getItem('vistaActual');
    if (vistaGuardada) {
        vistaActual = vistaGuardada as VistaActual; 
    }

}