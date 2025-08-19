const { ask } = require('../helpers/input.js');

async function main() {
  const diasSemana = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
  const dia = await ask('Te voy a mostrar un día de la semana \nIngresa un número del 1 al 7: ');
  if(isNaN(dia) || !(dia >= 1 && dia <= 7)) {
    console.log(`${dia} ☠️ No es un número del 1 al 7`);
    return; 
  } 
  console.log(`El día ${dia} de la semana es: ${diasSemana[dia-1]}`);
}

main();