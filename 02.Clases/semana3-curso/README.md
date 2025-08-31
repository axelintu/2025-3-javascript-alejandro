# Semana 3 — Objetos y Proyecto Final

## Objetivo

Comprender la programación orientada a objetos en JavaScript y aplicar todos los conceptos aprendidos en un proyecto integrador.

## Temario y clases

- **Clase 1:** Introducción a objetos: qué son, cómo declararlos y acceder a sus propiedades.
- **Clase 2:** Métodos en objetos: agregar funciones como propiedades, uso de `this` para acceder a valores internos.
- **Proyecto Final:** Integra variables, condicionales, ciclos, arreglos y objetos en una aplicación sencilla.

## Proyectos desarrollados

Esta semana trabajamos con dos proyectos integradores que consolidan todos los conceptos aprendidos:

### 📚 [Student Manager](../student-manager/)

Sistema de gestión de estudiantes que implementa:

- Creación y manipulación de objetos estudiante
- Métodos para calcular promedios y estados académicos
- Uso de arrays de objetos
- Operaciones CRUD básicas

### ✅ [Todo List](../todo-list/)

Lista de tareas interactiva que incluye:

- Objetos para representar tareas
- Métodos para agregar, completar y eliminar tareas
- Estado persistente durante la ejecución
- Filtrado y organización de datos

## ¿Cómo ejecutar los proyectos?

### Student Manager

```bash
cd ../student-manager
node index.js
```

### Todo List

```bash
cd ../todo-list
node index.js
```

## Conceptos aplicados en los proyectos

### Objetos y propiedades

```javascript
const estudiante = {
  nombre: "Ana García",
  edad: 20,
  calificaciones: [85, 92, 78],
};
```

### Métodos en objetos

```javascript
const tarea = {
  titulo: "Estudiar JavaScript",
  completada: false,
  marcarCompletada() {
    this.completada = true;
  },
};
```

### Arrays de objetos

```javascript
const estudiantes = [
  { nombre: "Juan", promedio: 85 },
  { nombre: "María", promedio: 92 },
];
```

## Buenas prácticas implementadas

- ✅ Código modular y organizado en funciones
- ✅ Nombres descriptivos para variables y métodos
- ✅ Comentarios explicativos en código complejo
- ✅ Validación de datos de entrada
- ✅ Manejo de casos especiales y errores

## Recursos útiles

- [Objetos en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects)
- [Programación orientada a objetos](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [Método this](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this)

---

_¡Felicidades por completar el curso de Fundamentos de JavaScript!_ 🎉
