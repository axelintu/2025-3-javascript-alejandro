"use strict";

let students = [];
window.onload = function () {
  const stored = localStorage.getItem('students');
  if (stored) {
    students=JSON.parse(stored);
  }
  displayStudents();
  updateAverage();
}

function addStudent() {
  const name = document.getElementById('nameInput').value.trim();
  if(name === '' || name=== isNaN) {
    alert('Debes de capturar un nombre valido');
    return;
  }
  const inputGrade = document.getElementById('gradeInput').value;
  if ((inputGrade > 100 || inputGrade < 0) || inputGrade === '') {
    alert('Debes de capturar una calificación valida');
    return;
  } 
  const grade = parseFloat(inputGrade);
  const student = { 
    name, 
    grade, 
    status: grade >= 70 ? "Passed" : "Failed"
  }
  students.push(student);
  displayStudents();
  updateAverage();
  saveToLocalStorage();
  document.getElementById('nameInput').value = "";
  document.getElementById('gradeInput').value = "";
}

function displayStudents() {
  const list = document.getElementById('studentList');
  list.innerHTML=``;
  for(let i=0; i < students.length; i++) {
    const li = document.createElement('li');
    li.classList.add(students[i].status === 'Passed' ? 'passed' : 'failed');
    li.innerHTML = `<p>${students[i].name} - ${students[i].grade} - ${students[i].status}</p>`;
    list.appendChild(li);
  }
}
function updateAverage() {
  if (students.length === 0) {
    return;
  }
  let total = 0;
  for(let i = 0; i <students.length; i++) {
    total = total + students[i].grade;
  }
  let average = total/students.length;
  document.getElementById('averageDisplay').innerHTML=`<strong>Average Grade: ${average.toFixed(2)}</strong>`;
}

function saveToLocalStorage () {
  localStorage.setItem('students',JSON.stringify(students))
}