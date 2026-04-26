//Estructura para sorteo
export interface ConfiguracionSorteo {
  min: number;
  max: number;
  numerosPorTanda: number;  
  totalTandas: number;      
}

//Estructura para estado del sorteo
export interface EstadoSorteo {
  disponibles: number[];
  historial: number[];           // todos los sorteados (todas las tandas)
  historialTandas: number[][];   // agrupados por tanda
  tandaEnCurso: number[];
  ultimoSorteado: number | null;
  tandaActual: number;
  totalTandas: number;
  numerosPorTanda: number;
}
//Controlar visión de la pagina
export type VistaActual = "configuracion" | "evento" | "resumen";