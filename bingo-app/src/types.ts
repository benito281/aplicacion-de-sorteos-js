//Estructura para sorteo
export interface ConfiguracionSorteo {
    min : number;
    max : number;
    cantidad : number;
}

//Estructura para estado del sorteo
export interface EstadoSorteo {
    disponibles: number[];        // más claro que 'disponible'
    historial: number[];
    ultimoSorteado: number | null; // más claro que 'ultimo'
  }
//Controlar visión de la pagina
export type VistaActual = "configuracion" | "evento";