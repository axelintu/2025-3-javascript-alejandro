const { ask } = require('./helpers/input');

function analizarCalificaciones(calificaciones) {
  let analisis = {
    aprobados: 0,
    reprobados: 0,
    promedioGeneral: 0,
    calificacionTop: 0,
    calificacionBottom: 0
  };
  return analisis;
}

async function main() {
  calificaciones = [9.2, 9, 6.4,7.2,8,9.9]
  console.log(analizarCalificaciones(calificaciones))
}

main();