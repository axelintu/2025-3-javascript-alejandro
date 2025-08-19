const { ask } = require("../helpers/input.js");

async function main() {
  let option = "";
  fruit = [];

  // Qué quieres hacer?
  // 1. Agregar una fruta
  // 2. Elminar una fruta
  // 3. Salir
  while (option !== "3") {
    option = await ask(
      `¿Qué quieres hacer? \n1. Agregar una fruta \n2. Elminar una fruta \n3. Salir\n`
    );

    if (option === "1") {
      const newFruit = await ask("¿Qué fruta deseas agregar? ");
      fruit.push(newFruit);
      console.log(`Se agregó ${newFruit}`);
      console.log(`Estas son las frutas disponibles:`);
      fruit.forEach((element) => {
        console.log(`- ${element}`);
      });
    } else if (option === "2") {
      if (fruit.length === 0) {
        console.log("No hay frutas para eliminar");
        continue;
      } else {
        let fruitToDelete = await ask("¿Qué fruta deseas elminiar? ");
        let index = fruit.indexOf(fruitToDelete);
        if (index !== -1) {
          fruit.splice(index, 1);
          console.log(`${fruitToDelete} ha sido elminada`);
          console.log(`Estas son las frutas disponibles:`);
          fruit.forEach((element) => {
            console.log(`- ${element}`);
          });
        } else {
          console.log("No se encuentra esa fruta, intenta de nuevo");
          continue;
        }
      }
    } else if (option === "3") {
      console.log("Cerrando el programa. ¡Gracias por participar!");
    } else {
      console.log("Opción Invalida");
    }
  }
}
main();
