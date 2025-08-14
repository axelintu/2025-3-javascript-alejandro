const { ask } = require('../helpers/input.js');

async function main() {
  // TODO: Crear una calculadora simple que realice operaciones básicas:
  // 1.- Pedir el primer número
  // 2.- Pedir el segundo número
  // 3.- Pedir operador

  const numero1 = Number(await ask('Ingresa el primer número: '));
  if (isNaN(numero1)) {
    console.log('No es un número');
    return;
  };
  const operador = await ask(`Introduce el operador de tu operación: 
    + (suma), 
    - (resta), 
    * (multiplicación), 
    / (división) 
`);
  if (!(operador === '+' || operador === '-' || operador === '*' || operador === '/')) {
    console.log(operador + ' no es un operador valido');
    return;
  }
  const numero2 = Number(await ask('Ingresa el segundo número: '));
  let resultado = {
    tipo: '',
    final: 0
  };

  switch(operador) {
    case '+':
      resultado.tipo = 'suma';
      resultado.final = numero1 + numero2;
      break;
    case '-':
      resultado.tipo = 'resta';
      resultado.final = numero1 - numero2;
      break;    
    case '*':
      resultado.tipo = 'multiplicación';
      resultado.final = numero1 * numero2;
      break;
    case '/':
      resultado.tipo = 'división';
      if(numero2 > 0) {
        resultado.final = numero1 / numero2;
      } else {
        console.log('El divisor debe ser mayor que 0');
        return;
      }
      break;
  }
  console.log('El resultado de tu operación ('+ resultado.tipo +') es: ' + resultado.final);
}

main();