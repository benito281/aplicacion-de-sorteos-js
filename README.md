<div align="center">
  <img src="./public/ico/f710cc7d8d250fdcddfd21df9fc1c284.png" alt="Logo Bingo App" width="100">

  # 🎲 Aplicación de Sorteos (Bingo App)
  **Sorteos dinámicos por tandas con TypeScript y Tailwind CSS**
</div>

---

## 📖 Acerca del Proyecto

Esta es una aplicación web dinámica diseñada para realizar sorteos o jugar al bingo. Permite configurar rangos personalizados de números y extraerlos de forma aleatoria sin repetición. 

El proyecto fue reescrito recientemente para abandonar herramientas antiguas y adoptar un stack moderno, escalable y con tipado estricto, mejorando significativamente la interfaz de usuario y la experiencia general.

## ✨ Características Principales

Al analizar el código fuente, la aplicación cuenta con las siguientes funcionalidades destacadas:

* **⚙️ Configuración Personalizada:** Permite definir el número mínimo, el número máximo, la cantidad de números a extraer y cuántas "tandas" (rondas) tendrá el sorteo.
* **💾 Persistencia de Datos:** Utiliza `localStorage` para guardar el estado del sorteo en tiempo real. Si actualizas la página o cierras el navegador por accidente, la partida continúa exactamente donde la dejaste.
* **🔄 Sistema de Tandas y Vistas Dinámicas:** * **Vista Evento:** Muestra el número actual sorteado, el número anterior y el historial de la tanda en curso.
  * **Vista Resumen:** Al finalizar una tanda, muestra un resumen claro de los números obtenidos antes de pasar a la siguiente ronda.
* **🔀 Algoritmo de Mezcla Seguro:** Implementa el algoritmo de Fisher-Yates para barajar los números disponibles, garantizando resultados 100% aleatorios y sin duplicados.
* **🎨 Diseño Moderno y Responsivo:** Interfaz gráfica limpia, basada en tarjetas (cards) y construida enteramente con Tailwind CSS.

## 🛠️ Tecnologías Utilizadas

* **[Vite](https://vitejs.dev/)**: Entorno de desarrollo ultra rápido y empaquetador.
* **[TypeScript](https://www.typescriptlang.org/)**: Tipado estático para un código más robusto y libre de errores.
* **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS de utilidad (Utility-first) para un diseño ágil y escalable.
* **HTML5 & DOM API**: Manipulación directa del DOM separada eficientemente de la lógica de estado.

## 🚀 Instalación y Uso

### Requisitos Previos
Necesitarás tener instalado [Node.js](https://nodejs.org/) (versión 16 o superior recomendada) en tu computadora.

### Pasos para ejecutar el proyecto

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/benito281/aplicacion-de-sorteos-js.git
   cd bingo-app
   ```

2. **Instalar dependencias**
   Vite, TypeScript y Tailwind necesitan las dependencias de Node para funcionar.
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo**
   Levanta la aplicación con recarga en caliente (HMR).
   ```bash
   npm run dev
   ```
   El terminal mostrará una URL local (por ejemplo, `http://localhost:5173/`) para abrir en el navegador.

## 📌 Comandos adicionales útiles

- `npm run build`: Compila el proyecto para producción (genera la carpeta `dist/`).
- `npm run preview`: Previsualiza localmente la versión de producción generada.

## 📂 Estructura del proyecto

El código está modularizado aplicando separación de responsabilidades:

```text
📦 bingo-app
 ┣ 📂 src
 ┃ ┣ 📜 main.ts      # Punto de entrada y manejo de eventos del DOM
 ┃ ┣ 📜 state.ts     # Lógica del estado global y persistencia (localStorage)
 ┃ ┣ 📜 sorteo.ts    # Lógica de negocio, algoritmos matemáticos y arreglos
 ┃ ┣ 📜 ui.ts        # Funciones de renderizado y manipulación visual
 ┃ ┣ 📜 types.ts     # Interfaces de TypeScript (EstadoSorteo, etc.)
 ┃ ┗ 📜 style.css    # Importaciones de Tailwind CSS
 ┣ 📜 index.html     # Estructura del maquetado y vistas
 ┗ 📜 package.json   # Dependencias y scripts
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar la interfaz o agregar funciones (como efectos de sonido o exportación de resultados), puedes hacer un fork y enviar un pull request.

## 📝 Notas

1. Reemplaza la URL del paso **Clonar el repositorio** por la ruta real de tu GitHub.
2. Al ser un proyecto Vite, los comandos principales para desarrollo son `npm install` y `npm run dev`.
