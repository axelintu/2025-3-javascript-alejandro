const { ask } = require('../helpers/input');
function promediar(numberArray) {
  let total = 0;
  numberArray.forEach(dato => {
    total += dato;
  });
  return total/numberArray.length;
}
function obtenerMayor(numberArray) {
  let mayor = numberArray[0];
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > mayor) {
      mayor = numberArray[i];
    }
  }
  return mayor;
}
function obtenerMenor(numberArray) {
  let menor = numberArray[0];
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] < menor) {
      menor = numberArray[i];
    }
  }
  return menor;
}
function resumenEstadistico(numberArray) {
  const promedio = promediar(numberArray);
  const mayor = obtenerMayor(numberArray);
  const menor = obtenerMenor(numberArray);
  return { promedio, mayor, menor };
}
function printResumenEstadistico(numberArray, name) {
  const resumen = resumenEstadistico(numberArray);
  console.log(`El resumen estadístico de ${name} (${numberArray}) es: \n Promedio: ${resumen.promedio} \n Mayor: ${resumen.mayor} \n Menor: ${resumen.menor}`);
}
function nombresConVocalOldSchool(nombres) {
  const vocales = ['a','e','i','o','u'];
  const resultado = [];
  for (let i = 0; i < nombres.length; i++) {
    let primerLetra = nombres[i][0].toLowerCase();
    for (let j = 0; j < vocales.length; j++) {
      if (vocales[j] === primerLetra) {
        resultado.push(nombres[i]);
      }
    }    
  }
  return resultado;
}
function nombresConVocalConForEach(nombres) {
  const vocales = ['a','e','i','o','u','á','é','í','ó','ú'];
  const resultado = [];
  nombres.forEach(nombre => {
    let primeraLetra = nombre[0].toLowerCase();
    vocales.forEach(vocal=> {
      if(vocal === primeraLetra) resultado.push(nombre);
    });
  })
  return resultado;
}
function nombresConVocal(nombres) {
  const vocales = ['a','e','i','o','u','á','é','í','ó','ú'];
  const resultado = [];
  for (let i = 0; i < nombres.length; i++) {
    if (vocales.includes(primeraLetra)) {
      resultado.push(nombres[i])
    }
  }
  return resultado;
}
async function main () {
  const edades = [12, 21, 25, 34, 35];
  const lista = [4,20,8,2,26,38];
  const datos = [79, 80, 90, 100, 85];
  const nombres = ['Pedro', 'Alejandro', 'Ana', 'Miguel', 'Abel'];

  console.log(`El promedio de las edades: ${edades} = ${promediar(edades).toFixed(2)}`);
  console.log(`El número mayor de: ${lista} = ${obtenerMayor(lista)}`);
  console.log(`El promedio de: ${datos} es ${obtenerMenor(datos)}`);

  printResumenEstadistico(edades, 'edades');
  printResumenEstadistico(lista, 'lista');
  printResumenEstadistico(datos, 'datos');

  console.log(`Los nombres de entre ${nombres} que comienzan con vocal son: \n ${nombresConVocalConForEach(nombres)}`)
}
main();