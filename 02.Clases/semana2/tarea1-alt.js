// Práctica para casa:
// Imprimir números pares del 1 al 100
const { ask } = require('../helpers/input');

async function main() {
  console.log('Estos son los números pares del 1 al 100:');
  let numerosPares = '';
  const inicio = 1;
  const limite = 100;
  for (let i = inicio; i <= limite; i++) {
    if (i%2 === 0) {
      numerosPares = numerosPares + i + ', '
    }
  }
  numerosPares = numerosPares.substring(0, numerosPares.length - 2);
  console.log(numerosPares)
}

main();
