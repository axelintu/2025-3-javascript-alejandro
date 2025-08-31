# 🧩 Reto 09: Mini-Quiz Interactivo

## 🎯 Objetivo

Crear una aplicación de quiz interactiva que combine todos los conceptos aprendidos: arrays, objetos, funciones, ciclos, condicionales y manipulación del DOM. El usuario responderá preguntas de opción múltiple y recibirá retroalimentación en tiempo real.

---

## 🧪 Resultado esperado

Una aplicación de quiz funcional que:

1. 📋 Muestra una pregunta a la vez con opciones múltiples
2. ✅ Permite seleccionar una respuesta y confirmarla
3. ➡️ Avanza automáticamente a la siguiente pregunta
4. 📊 Lleva el conteo de respuestas correctas
5. 🏆 Muestra el puntaje final con retroalimentación
6. 💾 (Opcional) Guarda el mejor puntaje en localStorage

**Ejemplo visual del flujo:**

```
┌─────────────────────────────────┐
│      PREGUNTA 1 DE 10           │
│                                 │
│ ¿Qué operador devuelve el       │
│ residuo de una división?        │
│                                 │
│ ○ /                             │
│ ● %                             │
│ ○ &&                            │
│ ○ ===                           │
│                                 │
│     [Siguiente Pregunta]        │
└─────────────────────────────────┘
```

---

## 🛠️ Archivos del proyecto

Ya tienes los archivos base con esta estructura:

- **`index.html`**: Estructura HTML básica (necesitas completar el contenido)
- **`styles.css`**: Estilos CSS básicos (necesitas agregar estilos para el quiz)
- **`main.js`**: Contiene el array de 10 preguntas de JavaScript (necesitas agregar la lógica)

### 📋 Estado actual de los archivos:

- ✅ **`main.js`**: Array de preguntas completo con 10 preguntas sobre JavaScript
- 🔲 **`index.html`**: HTML básico sin contenido del quiz
- 🔲 **`styles.css`**: CSS vacío (solo reset básico)

---

## 📝 Preguntas incluidas

El archivo `main.js` ya contiene 10 preguntas sobre los temas del curso:

1. Operador módulo (%)
2. Conversión a número entero
3. Ciclo while
4. Creación de arreglos
5. Propiedad length
6. Definición de funciones
7. Palabra clave this
8. Método push()
9. Comparación estricta (===)
10. Estructura switch

---

## 📋 Requisitos técnicos

### 🎯 JavaScript (Ya tienes las preguntas)

Necesitas implementar estas funciones en `main.js`:

- **Variables globales**: `preguntaActual`, `puntaje`, `totalPreguntas`
- **Funciones principales**:
  - `mostrarPregunta()` - Renderiza la pregunta actual
  - `verificarRespuesta(opcionSeleccionada)` - Valida la respuesta
  - `avanzarPregunta()` - Cambia a la siguiente pregunta
  - `mostrarResultados()` - Muestra el puntaje final
  - `iniciarQuiz()` - Inicia el juego

### 🎨 HTML/CSS (Necesitas completar)

En `index.html` agrega:

- Contenedor principal del quiz
- Área para mostrar preguntas
- Botones para las opciones
- Área para mostrar resultados

En `styles.css` agrega:

- Estilos para el contenedor del quiz
- Estilos para botones de opciones
- Estados visual para respuestas (correcta/incorrecta)
- Estilos para la pantalla de resultados

---

## 🧠 Pista para empezar

Con el array de preguntas ya definido, puedes empezar así:

```javascript
// Variables globales (agregar después del array preguntas)
let preguntaActual = 0;
let puntaje = 0;
const totalPreguntas = preguntas.length; // Será 10

// Función para iniciar el quiz
function iniciarQuiz() {
  preguntaActual = 0;
  puntaje = 0;
  mostrarPregunta();
}

// Función principal para mostrar pregunta
function mostrarPregunta() {
  const pregunta = preguntas[preguntaActual];

  // Actualizar el HTML con:
  // 1. Número de pregunta (ej: "Pregunta 3 de 10")
  // 2. Texto de la pregunta
  // 3. Opciones como botones
  // 4. Event listeners en cada opción
}
```

---

## 🏗️ Estructura HTML sugerida

Para `index.html`, puedes usar esta estructura base:

```html
<body>
  <div id="quiz-container">
    <h1>Mini Quiz JavaScript</h1>
    <div id="quiz-content">
      <!-- Pantalla de preguntas -->
    </div>
    <div id="resultado" style="display: none;">
      <!-- Pantalla de resultados -->
    </div>
  </div>

  <script src="main.js"></script>
</body>
```

---

## ✅ Criterios de validación

Tu solución será exitosa cuando:

- [ ] **Preguntas dinámicas**: Las 10 preguntas del array se muestran correctamente
- [ ] **Selección funcional**: Se puede elegir una opción por pregunta
- [ ] **Validación correcta**: Identifica respuestas correctas usando el índice `correcta`
- [ ] **Navegación fluida**: Avanza automáticamente entre las 10 preguntas
- [ ] **Conteo preciso**: Cuenta correctamente las respuestas acertadas
- [ ] **Resultado final**: Muestra puntaje sobre 10 puntos
- [ ] **HTML dinámico**: Genera los elementos de interfaz con JavaScript
- [ ] **Sin errores**: No hay errores en la consola del navegador

---

## 🎨 Conceptos evaluados

Este reto integra todo lo aprendido:

### 📊 **Array de objetos (Ya implementado)**

- Estructura de 10 preguntas con propiedades `pregunta`, `opciones[]`, `correcta`
- Acceso a propiedades y elementos del array

### 🔧 **Funciones por implementar**

- Control de flujo del quiz
- Renderizado dinámico de interfaz
- Cálculo de puntajes

### 🎯 **Lógica de programación**

- Comparación de índices para validar respuestas
- Control de avance entre preguntas
- Manejo de estado del quiz

### 🌐 **Manipulación del DOM**

- Creación dinámica de botones de opciones
- Actualización de contenido de preguntas
- Manejo de eventos de clic

---

## 🚀 Extensiones opcionales

### 📈 **Indicador de progreso**

```javascript
// Mostrar "Pregunta X de 10"
document.getElementById("progreso").textContent = `Pregunta ${
  preguntaActual + 1
} de ${totalPreguntas}`;
```

### 💡 **Retroalimentación visual**

- Mostrar respuesta correcta después de seleccionar
- Cambiar color del botón según si es correcta o incorrecta

### 🏆 **Categorización de resultados**

```javascript
function obtenerMensaje(puntaje, total) {
  const porcentaje = (puntaje / total) * 100;
  if (porcentaje >= 90) return "¡Excelente dominio de JavaScript! 🏆";
  if (porcentaje >= 70) return "¡Muy bien! Tienes buena base 👏";
  if (porcentaje >= 50) return "Buen intento, sigue practicando 📚";
  return "Repasa los conceptos básicos 💪";
}
```

---

## 🧩 Nivel de dificultad

**★★★★☆** - Avanzado

Las preguntas cubren todos los temas del curso:

- Variables y operadores
- Estructuras de control
- Funciones y métodos
- Arrays y objetos
- Conceptos avanzados (this, comparación estricta)

---

## 🎉 ¡Último reto del curso!

Tienes las 10 preguntas listas y una estructura base. Ahora necesitas:

1. **Completar el HTML** con la estructura del quiz
2. **Agregar estilos CSS** para una interfaz atractiva
3. **Implementar la lógica JavaScript** para hacer funcionar el quiz

**¡Mucha suerte! 🚀**

---

> **💡 Tip**: Empieza haciendo que una sola pregunta funcione, luego expande la funcionalidad para todas las preguntas.
