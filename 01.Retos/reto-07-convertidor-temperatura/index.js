const { ask } = require('./helpers/input');

async function main() {
  // 1) Pregunta tipo (C/F) → normaliza a mayúsculas y valida
  const scale = await ask('¿Qué tipo de temperatura ingresarás? (C/F): ');
  const normalizedScale = scale.toUpperCase();
  if (normalizedScale !== 'F' && normalizedScale !== 'C') {
    console.log(`Tipo inválido: usa C o F.`);
    return;
  }

  // 2) Pregunta temperatura → convierte a Number y valida NaN
  let isTempNumber = false;
  let tempNumber = new Number;
  while (isTempNumber === false) {
    const temp = await ask('Ingresa la temperatura: ');
    tempNumber = Number(temp);
    isTempNumber = !isNaN(temp);
    if (isNaN(tempNumber)) {
      console.log(`Temperatura inválida: ingresa un número.`);
    }
  }
  // 3) Según el tipo, calcula la conversión
  let tempC = new Number;
  let tempF = new Number;
  switch (normalizedScale) {
    case 'F':
      tempC = (tempNumber - 32)*5/9;
      tempF = tempNumber;
    break;
    case 'C':
      tempC = tempNumber;
      tempF = tempNumber*9/5+32;
    break;
  }
  // 4) Imprime ambos valores (opcional: formatea con toFixed)
  console.log(`Celcius: ${tempC.toFixed(2)} °C`);
  console.log(`Farenheit: ${tempF.toFixed(2)} °F`);
}

main();