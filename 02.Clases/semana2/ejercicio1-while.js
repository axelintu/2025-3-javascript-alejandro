const { ask } = require('../helpers/input.js');

async function main() {
  let limite = Number(await ask('¿Hasta cuál número quieres contar? '));
  let contador = 1;
  while(contador <= limite) {
    console.log(contador);
    contador++;
  }
}
main();