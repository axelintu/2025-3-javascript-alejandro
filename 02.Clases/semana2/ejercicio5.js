// Op 1 = agregar una edad
// Op 2 = quitar una edad
// Op 3 = Mostrar analisis
// Op 4 = Salir
const { ask } = require("../helpers/input.js");
async function main() {
  let option = "";
  const ages = [];
  while (option !== "3") {
    option = await ask(
      `¿Qué quieres hacer? \n 1. Agregar una edad \n 2. Mostrar análisis \n 3. Salir \n`
    );
    if (option === "1") {
      const newAge = Number(await ask("¿Qué edad vas a ingresar? "));
      if (isNaN(newAge)) {
        console.log('No es un número, intenta de nuevo.')
        continue;
      }
      ages.push(newAge);
      console.log(`Se agregó ${newAge}`);
      console.log(`Estas son las edades disponibles:`);
      ages.forEach((element) => {
        console.log(`- ${element}`);
      });
    } else if (option === "2") {
      if (ages.length === 0) {
        console.log("No hay edades para revisar");
        continue;
      } else {
        let mayores = 0;
        for (let i = 0; i < ages.length; i++) {
          if (ages[i] >= 18) {
            mayores++;
          }
        }
        console.log(`De un total de: ${ages.length} edades, ${mayores} son mayores de edad.`);
      }
      
    } else if (option === "3") {
      console.log("Cerrando el programa. ¡Gracias por participar!");
    } else {
      console.log("Opción Invalida");
    }
  }
}
main();
