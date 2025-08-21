// Práctica para casa:
// Imprimir números pares del 1 al 100
const { ask } = require('../helpers/input');

async function main() {
  console.log('Estos son los números pares del 1 al 100:');
  let numerosPares = ''
  for (let i = 1; i <= 100; i++) {
    if (i%2 == 0) {
      numerosPares = numerosPares + i + ', '
    }
  }
  numerosPares = numerosPares.substring(0, numerosPares.length - 2);
  console.log(numerosPares)
}

main();
