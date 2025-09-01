"use strict";

const preguntas = [
  {
    pregunta: '¿Qué operador devuelve el residuo de una división?',
    opciones: ['/', '%', '&&', '==='],
    correcta: 1
  },
  {
    pregunta: '¿Cuál método convierte un string a número entero?',
    opciones: ['parseInt()', 'toString()', 'JSON.parse()', 'slice()'],
    correcta: 0
  },
  {
    pregunta: '¿Qué estructura repite un bloque mientras una condición sea verdadera?',
    opciones: ['if', 'while', 'switch', 'try/catch'],
    correcta: 1
  },
  {
    pregunta: '¿Cuál opción crea correctamente un arreglo?',
    opciones: ['let a = {};', 'let a = [];', 'let a = ();', 'let a = <>;'],
    correcta: 1
  },
  {
    pregunta: '¿Qué imprime: [1,2,3].length?',
    opciones: ['2', '3', '"3"', 'undefined'],
    correcta: 1
  },
  {
    pregunta: '¿Cómo defines una función clásica?',
    opciones: ['function f(){}', 'let f = []', 'const f = {}', 'new Function[]'],
    correcta: 0
  },
  {
    pregunta: '¿Qué palabra clave accede a las props dentro de un método de objeto?',
    opciones: ['self', 'this', 'that', 'me'],
    correcta: 1
  },
  {
    pregunta: '¿Qué método agrega un elemento al final de un arreglo?',
    opciones: ['push()', 'pop()', 'shift()', 'unshift()'],
    correcta: 0
  },
  {
    pregunta: 'Condicional estricta por tipo y valor:',
    opciones: ['==', '=', '===', '!=='],
    correcta: 2
  },
  {
    pregunta: '¿Qué estructura selecciona entre múltiples casos?',
    opciones: ['switch', 'choose', 'case_of', 'select'],
    correcta: 0
  }
];

let preguntaActual = 0;
let puntaje = 0;
let totalPreguntas = preguntas.length;
const siguienteBtn = document.getElementById('siguientePregunta');

function mostrarPregunta() {
  const quizTitle = document.getElementById('quizQuestion');
  const pregunta = preguntas[preguntaActual];
  document.getElementById("progressBar").style.width = `${ (preguntaActual+1) / totalPreguntas *100 }%`;
  
  quizTitle.innerHTML = `<h2>${pregunta.pregunta}</h2>`;
  document.getElementById("progreso").textContent = `Pregunta ${ preguntaActual + 1 } de ${totalPreguntas}`;
  const quizOptions = document.getElementById('quizOptions');
  quizOptions.innerHTML = '';
  siguienteBtn.setAttribute("disabled", "");
  for (let i = 0; i < pregunta.opciones.length; i++) {
    const option = pregunta.opciones[i];
    const div = document.createElement('div');
    div.classList.add('quiz-option')
    div.innerHTML = `<input type="radio" id="option-${i}" name="pregunta-${preguntaActual}" value="${i}" onclick="enableSiguiente()"><label for="option-${i}" onclick="enableSiguiente()">${option}</label>`;
    quizOptions.appendChild(div);
  }
}

function verificarRespuesta(opt) {
  const checked = parseInt(document.querySelector('input[type="radio"]:checked').value);
  if (opt === checked) puntaje++; 
}

function avanzarPregunta() {
  verificarRespuesta(preguntas[preguntaActual].correcta);
  preguntaActual++;
  if (preguntaActual < preguntas.length) {
    mostrarPregunta();
  } else {
    mostrarResultados();
  }
}

function mostrarResultados() {
  const resultadoMsg = `${obtenerMensaje(puntaje, totalPreguntas)}`;
  const resultadoEl = document.createElement('div');
  const resultadoPuntuacion = document.createElement('div');
  resultadoEl.innerHTML = resultadoMsg;
  resultadoPuntuacion.innerHTML = `El resultado de tu quiz es ${ puntaje }`;
    console.log(resultadoMsg);
  const resultado = document.getElementById('resultado');
  resultado.appendChild(resultadoPuntuacion);
  resultado.appendChild(resultadoEl);
  resultado.style.display = 'block';
  document.getElementById('quizContent').style.display = 'none';
  
  const controls = document.getElementsByClassName('quiz-controls');
  for (let i = 0; i < controls.length; i++) {
      controls[i].style.display = 'none';
  }
}
function iniciarQuiz() {
  mostrarPregunta();
}

function enableSiguiente () {
  siguienteBtn.removeAttribute("disabled");
}

function obtenerMensaje(puntaje, total) {
  const porcentaje = (puntaje / total) * 100;
  if (porcentaje >= 90) return "¡Excelente dominio de JavaScript! 🏆";
  if (porcentaje >= 70) return "¡Muy bien! Tienes buena base 👏";
  if (porcentaje >= 50) return "Buen intento, sigue practicando 📚";
  return "Repasa los conceptos básicos 💪";
}

iniciarQuiz();