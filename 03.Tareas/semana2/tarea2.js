// Práctica para casa:
// Imprimir números pares del 1 al 100

const { ask } = require('../helpers/input'); // Importa la función 'ask' (no se usa en este ejercicio).

async function main() {
  let contador = 1; // Variable para contar desde 1.
  let limite = 100; // Variable que indica hasta dónde contar.

  console.log('Ciclo While');
  // Usa un ciclo while para contar del 1 al 100.
  while (contador <= limite) {
    // Si el número actual es par (se puede dividir entre 2 sin residuo)...
    if (contador % 2 === 0) {
      console.log(`El número ${contador} es par`); // Muestra el número par.
    }
    contador++; // Suma 1 al contador para pasar al siguiente número.
  }

  console.log('Ciclo For');
  // Usa un ciclo for para contar del 0 al 100.
  for (let i = 0; i <= 100; i++) {
    // Si el número actual es par...
    if (i % 2 === 0) {
      console.log(`El número ${i} es par`); // Muestra el número par.
    }
  }

  let pares = []; // Crea una lista vacía para guardar los números pares.
  console.log('Ciclo For de 2 en 2');
  // Usa un ciclo for que avanza de 2 en 2, empezando en 0 y terminando en 100.
  for (let i = 0; i <= 100; i = i + 2) {
    pares.push(i); // Agrega el número par a la lista.
  }
  // Muestra todos los números pares juntos.
  console.log('Los numeros pares del 1 al 100 son: ', pares);

}

// Ejecuta la función principal para iniciar el programa.
main();