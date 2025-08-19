const { ask } = require('../helpers/input.js');

async function main() {
  const frutas = [
    'Manzana',
    'Fresa',
    'Tuna',
    'Mango',
    'Guayava',
    'Naranja'
  ];
  const cajon = Number(await ask(`¿Qué cajón quieres abrir? (1-${frutas.length}) `));
  // Validación
  // if() {

  // }
  for (let i = 1; i <= frutas.length; i++) {
    if(i == cajon) {
      console.log(`En el cajon ${i} hay ${frutas[i-1]}`);
    }
  }
  console.log(frutas[cajon-1])
}
main();