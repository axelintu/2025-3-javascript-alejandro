const { ask } = require('../helpers/input.js');

async function main() {
  const age = Number(await ask('¿Cuántos años tienes? '));
  const gender = await ask('Cuál es tu género? (masculino/femenino) ');
    
  switch(gender) {
    case 'femenino': 
      if(age <= 12) {
        console.log('Eres una niña');
      } else if (age >12 && age <18) {
        console.log('Eres una adolescente');
      } else if (age > 18 && age <60) {
        console.log('Eres un adulto femenino');
      } else if (age > 60) {
        console.log('Eres un adulto mayor femenino');
      }
    break;
        case 'masculino': 
      if(age <= 12) {
        console.log('Eres un niño');
      } else if (age >12 && age <18) {
        console.log('Eres un adolescente');
      } else if (age > 18 && age <60) {
        console.log('Eres un adulto masculino');
      } else if (age > 60) {
        console.log('Eres un adulto mayor masculino');
      }
    break;
  }

    if(age <= 12 && gender === 'femenino') {
        console.log('Eres una niña');
    } else if (age <= 12 && gender === 'masculino') {
        console.log('Eres un niño');
    } else if (age > 12 && age <18 && gender !== 'masculino') {
        console.log('Eres una adolescente');
    } else if (age > 12 && age <18 && gender === 'masculino') {
        console.log('Eres un adolescente');
    } else if (age > 18 && age < 60 && gender === 'femenino') {
        console.log('Eres un adulto femenino');
    } else if (age > 60 && gender === 'femenino') {
        console.log('Eres un adulto mayor femenino');
    } else if (age > 60 && gender === 'masculino') {
        console.log('Eres un adulto masculino');
    } else {
        console.log('No se encontraron resultados');
    }
}

main();