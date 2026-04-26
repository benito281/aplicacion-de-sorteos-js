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

  return copia.slice(0, cantidad); // corta la cantidad pedida
}

export function sacarNumero(estado: EstadoSorteo): EstadoSorteo {
  if (estado.disponibles.length === 0) return estado;

  const numero = estado.disponibles[0];
  const nuevaTandaEnCurso = [...estado.tandaEnCurso, numero];

  //Tandas
  if (nuevaTandaEnCurso.length === estado.numerosPorTanda) {
    // Tanda completa
    return {
      // completá vos los campos
      disponibles:     estado.disponibles.slice(1),
      historial:       [...estado.historial, numero],
      historialTandas: [...estado.historialTandas, nuevaTandaEnCurso],        
      tandaEnCurso:    [],              
      ultimoSorteado:  numero,
      tandaActual:     estado.tandaActual + 1,             
      totalTandas:     estado.totalTandas,             
      numerosPorTanda: estado.numerosPorTanda          
      
    }
  }

  // tanda no completa 
  return {
    disponibles:     estado.disponibles.slice(1),
    historial:       [...estado.historial, numero],
    historialTandas: estado.historialTandas,        
    tandaEnCurso:    nuevaTandaEnCurso,              
    ultimoSorteado:  numero,
    tandaActual:     estado.tandaActual,             
    totalTandas:     estado.totalTandas,             
    numerosPorTanda: estado.numerosPorTanda          
  }
}


