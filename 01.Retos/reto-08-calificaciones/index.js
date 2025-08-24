const { ask } = require('./helpers/input');

function analizarCalificaciones(grades) {
  let analysis = {
    aprobados: 0,
    reprobados: 0,
    promedio: 0,
    mayor: grades[0],
    menor: grades[0]
  };
  let total = 0;
  for (let i = 0; i < grades.length; i++) {
    if(grades[i] >= 70) analysis.aprobados++;
    if(grades[i] <  70) analysis.reprobados++;
    total = total+grades[i];
    if(analysis.mayor < grades[i]) analysis.mayor = grades[i];
    if(analysis.menor > grades[i]) analysis.menor = grades[i];
  }
  analysis.promedio = total/grades.length;
  return analysis;
}

async function main() {
  const inputCalificaciones = await ask('Escribe las calificaciones separadas por coma: ');
  const calificaciones = inputCalificaciones.split(',').map(Number);
  calificacionesHC = [92,90,55,81,64,72,80,99];
  const resultado = analizarCalificaciones(calificaciones);
  console.log(resultado);
}
main();