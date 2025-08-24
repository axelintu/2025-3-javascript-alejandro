# Reto 08 — Análisis de Calificaciones

## 🎯 Objetivo

Practicar el uso de funciones, ciclos y condicionales para analizar un arreglo de calificaciones.

## 📝 Instrucciones

1. Abre el archivo `index.js` y escribe tu función llamada `analizarCalificaciones`. Esta función debe recibir un arreglo de números (del 0 al 100) que representan las calificaciones de estudiantes.
2. La función debe devolver un objeto con la siguiente información:
   - **Cantidad de aprobados** (calificaciones ≥ 70)
   - **Cantidad de reprobados** (calificaciones < 70)
   - **Promedio general**
   - **La calificación más alta y la más baja**

## 💡 Pistas

- Usa un ciclo para recorrer el arreglo y contar aprobados/reprobados.
- Calcula el promedio sumando todas las calificaciones y dividiendo entre el total.
- Para encontrar la calificación más alta y más baja, compara cada elemento con los valores actuales.
- Devuelve un objeto con los resultados.

## 🚦 Ejemplo de uso

```js
const resultado = analizarCalificaciones([80, 60, 90, 70, 50]);
console.log(resultado);
// Debería mostrar algo como:
// {
//   aprobados: 3,
//   reprobados: 2,
//   promedio: 70,
//   mayor: 90,
//   menor: 50
// }
```

## 🛠️ ¿Cómo ejecutar?

1. Escribe tu función en el archivo `index.js`.
2. Puedes probar tu función agregando un arreglo de calificaciones directamente en el código y usando `console.log` para mostrar el resultado.
3. Si quieres, puedes pedir al usuario que ingrese las calificaciones usando la función `ask` que ya está importada en el archivo. Por ejemplo, puedes pedirle al usuario que escriba las calificaciones separadas por comas y luego convertirlas en un arreglo de números.

```js
// Ejemplo para leer calificaciones del usuario:
const entrada = await ask("Escribe las calificaciones separadas por coma:");
const calificaciones = entrada.split(",").map(Number);
const resultado = analizarCalificaciones(calificaciones);
console.log(resultado);
```

## 📚 Recursos útiles

- [Ciclos for en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Funciones en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions)
- [Objetos en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects)
- [Método split](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [Método map](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

---

> **Recuerda:** No copies soluciones completas. El reto es practicar y aprender resolviendo el problema
