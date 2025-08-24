# Semana 2 — Ciclos y Arreglos

## Objetivo

Manejar estructuras repetitivas y colecciones de datos.

## Conceptos clave

- Ciclos (`while`, `for`)
- Condicionales (`if`, `else`)
- Funciones
- Arreglos (arrays)

## Temario y clases

- **Clase 1:** Ciclos while (cuando no se sabe cuántas repeticiones habrá) y for (cuando sí se sabe).
- Introducción a arreglos (arrays): qué son, cómo acceder, modificar y recorrer elementos.
- **Clase 2:** Combinar bucles con condicionales para filtrar datos.
- Uso de funciones con arreglos para calcular promedios, filtrar o transformar datos.

## Ejercicios

- **ejercicio1.js**: Recorrido de arreglos y uso de ciclos for y while. Variante: recorre el arreglo en orden inverso.
- **ejercicio2.js**: Selección de elementos en arreglos usando ciclos y condicionales. Variante: permite elegir más de un elemento.
- **ejercicio3.js**: Menú interactivo para agregar y eliminar elementos de un arreglo. Variante: permite editar elementos.
- **ejercicio4.js**: Funciones para análisis estadístico y búsqueda en arreglos. Variante: busca elementos que cumplen una condición personalizada.
- **ejercicio5.js**: Contar elementos que cumplen una condición (mayores de edad). Variante: cuenta menores de edad.
- **ejercicio6.js**: Manipulación de cadenas (invertir una palabra). Variante: verifica si la palabra es un palíndromo.

## Tabla de métodos de arreglos

| Método     | Descripción                          | Ejemplo              |
| ---------- | ------------------------------------ | -------------------- |
| `push`     | Agrega un elemento al final          | `arr.push(5)`        |
| `pop`      | Elimina el último elemento           | `arr.pop()`          |
| `shift`    | Elimina el primer elemento           | `arr.shift()`        |
| `unshift`  | Agrega un elemento al inicio         | `arr.unshift(1)`     |
| `splice`   | Agrega/elimina elementos en posición | `arr.splice(2, 1)`   |
| `indexOf`  | Busca la posición de un elemento     | `arr.indexOf('Ana')` |
| `includes` | Verifica si existe un elemento       | `arr.includes(10)`   |

## ¿Cómo ejecutar?

Abre una terminal en esta carpeta y ejecuta:

```
node ejercicio1.js
```

Reemplaza el nombre del archivo por el que quieras probar.

### Sugerencias para estructurar y probar el código

- Divide tu código en funciones pequeñas y reutilizables.
- Usa `console.log` para mostrar resultados y depurar.
- Prueba tus funciones con diferentes datos y casos límite.

## Recursos útiles

- [Arreglos en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Ciclos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Funciones](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions)
