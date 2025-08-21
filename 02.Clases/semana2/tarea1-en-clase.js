// Práctica para casa:
// Imprimir números pares del 1 al 100
const { ask } = require('../helpers/input');

async function main() {
  let contador = 1;
  const limite = 100;
  console.log('Ciclo while');
  while (contador <= limite) {
    if(contador % 2 === 0) console.log(`El número ${contador} es par`);
    contador++;
  } 
  console.log('Ciclo for');
  contador = 1;
  for (let i = contador; i <= limite; i++) {
    if (i%2 == 0) {
      console.log(`El número ${i} es par`);
    }
  }
}

main();
