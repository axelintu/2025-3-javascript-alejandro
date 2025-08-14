const { ask } = require('../helpers/input.js');

function diffDays(actualDate, birthDate) {
	const diff = actualDate - birthDate;
	const	edadEnDias = Math.floor(diff/(1000*60*60*24));
	return edadEnDias;
}
function diffMonths(actualDate, birthDate) {
	const diff = actualDate - birthDate;
	const	edadEnMes = Math.floor(diff/(1000*60*60*24*30));
	return edadEnMes;
}
function diffYears(actualDate, birthDate) {
	const diff = actualDate - birthDate;
	const	edadEnAnios = Math.floor(diff/(1000*60*60*24*30*12));
	return edadEnAnios;
}

async function main() {
	const actualDate = new Date ();
	const birthDateDay = Number(await ask('¿Cuál es el día de tu fecha de nacimiento? '));
	const birthDateMonth = Number(await ask('¿Cuál es el mes de tu fecha de nacimiento? '));
	const birthDateYear = Number(await ask('¿Cuál es el año de tu fecha de nacimiento? '));
	
	// const birthDate = await Number(ask('¿Cuál es tu fecha de nacimiento? (formato:YYYY-MM-DD'));
	const birthDate = new Date(`${birthDateYear}-${birthDateMonth}-${birthDateDay}`);
	console.log(`Has vivido aproximadamente: \n${diffDays(actualDate, birthDate)} días \n${diffMonths(actualDate, birthDate)} meses \n${diffYears(actualDate, birthDate)} años`);

}
main();