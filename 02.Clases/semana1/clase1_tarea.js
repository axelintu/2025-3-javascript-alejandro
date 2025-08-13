const { ask } = require('../helpers/input.js');

async function main() {
  // TODO: Crear una calculadora simple que realice operaciones básicas:
  // 1.- Pedir el primer número
  // 2.- Pedir el segundo número
  // 3.- Pedir operador

  const numero1 = Number(await ask('Dame el primer número: '));
  const numero2 = Number(await ask('Dame el segundo número: '));
  const operador = await ask(`Introduce el operador de tu operación: + (suma), - (resta), * (multiplicación), / (división) `);
  let resultado = 0;

  switch(operador) {
    default:
      console.log(operador + ' no es un operador valido');
      break;
    case '+':
      console.log('Suma');
      resultado = numero1 + numero2;
      break;
    case '-':
      console.log('Resta');
      resultado = numero1 - numero2;
      break;    
    case '*':
      console.log('Multiplicación');
      resultado = numero1 * numero2;
      break;
    case '/':
      console.log('División');
      resultado = numero1 / numero2;
      break;
  }
  console.log('El resultado de tu operación es: ' + resultado);
}

main();