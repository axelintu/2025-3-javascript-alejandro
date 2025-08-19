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
  operadorTexto = '';
  resultado = new Number;

  switch(operador) {
    case '+':
      operadorTexto = 'suma';
      resultado = numero1 + numero2;
      break;
    case '-':
      operadorTexto = 'resta';
      resultado = numero1 - numero2;
      break;    
    case '*':
      operadorTexto = 'multiplicación';
      resultado = numero1 * numero2;
      break;
    case '/':
      operadorTexto = 'división';
      if(numero2 > 0) {
        resultado = numero1 / numero2;
      } else {
        console.log('El divisor debe ser mayor que 0');
        return;
      }
      break;
  }
  console.log('El resultado de tu operación ('+ operadorTexto +') es: ' + resultado);
}

main();