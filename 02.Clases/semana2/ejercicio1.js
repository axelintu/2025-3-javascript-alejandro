const { ask } = require('../helpers/input.js');
async function saludar (nombre) {
  console.log(`Hola estmada(o): ${nombre}, espero que tengas un buen día`);
}
async function main() {
  const personas = [
    "Pedro",
    "Juan",
    "María",
    "Ana",
    "Karla"
  ];
  const personasAlfabetico = [
    "Ana",
    "Juan",
    "Karla",
    "María",
    "Pedro"
  ];
  console.log('---- Orden orignal');
  for(let i=0; i<personas.length ; i++) {
    saludar(personas[i]);
  }
  console.log('---- Orden descendente');
  for(let j = personasAlfabetico.length -1; j >=0; j--) {
    saludar(personasAlfabetico[j]);
  }
  console.log('---- Orden ascendente');
  for (let i = 0; i < personasAlfabetico.length; i++) {
    saludar(personasAlfabetico[i]);
  }

}
main();