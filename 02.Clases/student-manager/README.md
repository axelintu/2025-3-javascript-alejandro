# 📚 Student Manager - Sistema de Gestión de Estudiantes

## 🎯 Descripción del proyecto

Sistema de gestión de estudiantes que permite crear, administrar y analizar información académica utilizando objetos, arrays y métodos en JavaScript.

## 🧠 Conceptos cubiertos

### Objetos en JavaScript

- Creación de objetos con propiedades y métodos
- Acceso y modificación de propiedades
- Uso de `this` para referenciar propiedades internas

### Métodos personalizados

- Funciones como propiedades de objetos
- Cálculo de promedios y análisis de datos
- Métodos para determinar estado académico

### Arrays de objetos

- Colecciones de estudiantes
- Iteración sobre arrays complejos
- Filtrado y búsqueda de elementos

## 📋 Funcionalidades implementadas

- ✅ **Crear estudiante**: Genera objetos estudiante con nombre, edad y calificaciones
- ✅ **Calcular promedio**: Método que calcula automáticamente el promedio de calificaciones
- ✅ **Estado académico**: Determina si el estudiante está aprobado o reprobado
- ✅ **Agregar calificación**: Permite añadir nuevas calificaciones
- ✅ **Listar estudiantes**: Muestra todos los estudiantes registrados
- ✅ **Buscar estudiante**: Encuentra estudiante por nombre
- ✅ **Estadísticas generales**: Promedio general del grupo y mejor estudiante

## 🚀 Cómo ejecutar

```bash
# Navegar al directorio del proyecto
cd student-manager

# Ejecutar el programa principal
node index.js
```

## 📝 Estructura del código

```
student-manager/
├── index.js          # Programa principal con menú interactivo
├── estudiante.js     # Definición del objeto Estudiante (si aplica)
└── README.md         # Este archivo
```

## 💡 Ejemplo de uso

```javascript
// Crear un estudiante
const estudiante = {
  nombre: "Ana García",
  edad: 20,
  calificaciones: [85, 92, 78, 88],

  // Método para calcular promedio
  calcularPromedio() {
    const suma = this.calificaciones.reduce((total, cal) => total + cal, 0);
    return suma / this.calificaciones.length;
  },

  // Método para determinar estado
  estaAprobado() {
    return this.calcularPromedio() >= 70;
  },
};

console.log(`${estudiante.nombre}: ${estudiante.calcularPromedio()}`);
console.log(`Estado: ${estudiante.estaAprobado() ? "Aprobado" : "Reprobado"}`);
```

## 🎯 Objetivos de aprendizaje alcanzados

- [x] Crear y manipular objetos con propiedades y métodos
- [x] Implementar la palabra clave `this` correctamente
- [x] Trabajar con arrays de objetos complejos
- [x] Aplicar operaciones matemáticas en métodos
- [x] Crear interfaces de usuario básicas en consola
- [x] Integrar todos los conceptos del curso en un proyecto funcional

---

**📚 Proyecto desarrollado en Semana 3 - Fundamentos de JavaScript**
