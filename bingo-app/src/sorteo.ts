import type { EstadoSorteo } from "./types";


export function generarRango(min: number, max: number): number[] {
  return Array.from({ length: max - min + 1 }, (_, i) => i + min)
}


export function mezclarRango(rango: number[], cantidad: number): number[] {
  const copia = [...rango]; // spread operator, crea un array nuevo
  let i = copia.length;

  while (i > 0) {
    const j = Math.floor(Math.random() * i);
    i--;
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia.slice(0, cantidad); // cortás a la cantidad pedida
}


export function sacarNumero(estado: EstadoSorteo): EstadoSorteo {
  if (estado.disponibles.length === 0) return estado;

  const numero = estado.disponibles[0];

  return {
    disponibles: estado.disponibles.slice(1), // todo menos el primero
    historial: [...estado.historial, numero],  // historial + número nuevo
    ultimoSorteado: numero
  }
}



