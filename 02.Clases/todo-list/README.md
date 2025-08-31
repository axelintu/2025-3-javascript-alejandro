# ✅ Todo List - Lista de Tareas Interactiva

## 🎯 Descripción del proyecto

Sistema de lista de tareas que permite crear, gestionar y organizar tareas utilizando objetos, métodos y manipulación de arrays en JavaScript.

## 🧠 Conceptos cubiertos

### Objetos con estado

- Objetos que representan entidades del mundo real (tareas)
- Propiedades para almacenar información de estado
- Métodos que modifican el estado interno

### Gestión de collections

- Arrays como contenedores de objetos
- Operaciones de agregado, eliminación y modificación
- Filtrado y búsqueda en collections

### Flujo de control avanzado

- Menús interactivos con múltiples opciones
- Validación de entrada del usuario
- Manejo de casos especiales

## 📋 Funcionalidades implementadas

- ✅ **Agregar tarea**: Crea nuevas tareas con título y descripción
- ✅ **Listar tareas**: Muestra todas las tareas con su estado
- ✅ **Marcar como completada**: Cambia el estado de una tarea
- ✅ **Eliminar tarea**: Remueve tareas de la lista
- ✅ **Filtrar tareas**: Muestra solo pendientes o completadas
- ✅ **Contador de tareas**: Estadísticas de tareas completadas vs pendientes
- ✅ **Búsqueda**: Encuentra tareas por título o descripción

## 🚀 Cómo ejecutar

```bash
# Navegar al directorio del proyecto
cd todo-list

# Ejecutar el programa principal
node index.js
```

## 📝 Estructura del código

```
todo-list/
├── index.js          # Programa principal con menú interactivo
├── tarea.js          # Definición del objeto Tarea (si aplica)
└── README.md         # Este archivo
```

## 💡 Ejemplo de uso

```javascript
// Crear una tarea
const tarea = {
  id: 1,
  titulo: "Aprender JavaScript",
  descripcion: "Completar ejercicios de objetos",
  completada: false,
  fechaCreacion: new Date(),

  // Método para marcar como completada
  completar() {
    this.completada = true;
    this.fechaCompletada = new Date();
  },

  // Método para obtener información
  obtenerInfo() {
    const estado = this.completada ? "✅" : "⏳";
    return `${estado} ${this.titulo} - ${this.descripcion}`;
  },
};

// Usar los métodos
tarea.completar();
console.log(tarea.obtenerInfo());
```

## 🔄 Flujo del programa

1. **Inicio**: Muestra menú principal con opciones
2. **Selección**: Usuario elige una acción
3. **Ejecución**: Se ejecuta la funcionalidad seleccionada
4. **Actualización**: Se actualiza la lista de tareas
5. **Repetición**: Regresa al menú principal

## 🎯 Objetivos de aprendizaje alcanzados

- [x] Modelar entidades reales como objetos JavaScript
- [x] Implementar métodos que modifiquen el estado del objeto
- [x] Gestionar collections (arrays) de objetos
- [x] Crear interfaces de usuario interactivas
- [x] Aplicar filtrado y búsqueda en datos
- [x] Integrar ciclos, condicionales y funciones en un proyecto cohesivo

## 🚀 Posibles extensiones

- Persistencia de datos en archivos
- Fechas de vencimiento para tareas
- Categorías o etiquetas
- Prioridades de tareas
- Interfaz web con HTML/CSS

---

**✅ Proyecto desarrollado en Semana 3 - Fundamentos de JavaScript**
