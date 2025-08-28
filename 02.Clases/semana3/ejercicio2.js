const { ask } = require('../helpers/input');
async function main() {
  let menuInput = 'a';
  const menu = '¿Qué quieres hacer? \n c: Agregar una calificación \n a: Mostrar Analisis \n q: Salir del programa';
  const calificaciones = [];
  while (menuInput !== 'q') {
    menuInput = await ask(menu);
    switch (menuInput) {
      case a:
        const resultado = analizarCalificaciones(calificaciones);
        console.log(resultado);
        break;
      case c:
        handleNewGrade(calificaciones);
        break;
      default:
        break;
    }
  }
}
main();