const { ask } = require('./helpers/input');
function getPassingAndFAiled(grades) {
  let passing = 0; 
  let failed = 0;
  for (let i = 0; i < grades.length; i++) {
    if(grades[i] >= 70) {
      passing++;
    } else {
      failed++;
    }
  }
  return { passing, failed };
}
function getAverage(grades) {
  let total = 0;
  for (let i = 0; i < grades.length; i++) {
    total = total+grades[i];
  }
  const average = Number((total/grades.length).toFixed(2));
  return average;
}
function getTopAndBottom(grades) {
  const top = Math.max(...grades);
  const bottom = Math.min(...grades);
  return { top, bottom };
}

function analizarCalificaciones(grades) {
  const { passing, failed } = getPassing(grades);
  const { top, bottom } = getTopAndBottom(grades);
  let analysis = {
    aprobados: passing,
    reprobados: failed,
    promedio: getAverage(grades),
    mayor: top,
    menor: bottom
  };
  return analysis;
}

async function main() {
  const inputCalificaciones = await ask('Escribe las calificaciones separadas por coma: ');
  const calificaciones = inputCalificaciones.split(',').map(Number);
  // calificacionesHC = [92,90,55,81,64,72,80,99]; // For testing
  const resultado = analizarCalificaciones(calificaciones);
  console.log(resultado);
}
main();