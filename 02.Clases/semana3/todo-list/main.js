"use strict";

function addTask() {
  const input = document.getElementById('taskInput');
  // debugger;
  const taskText = input.value.trim();
  if(taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `<span onclick="toggleComplete(this)">${taskText}</span>
    <div class='task-buttons'>
      <button onclick='deleteTask(this)'>Delete</button>
    </div>
    `;
    document.getElementById('taskList').appendChild(li);
    input.value = '';
  }
}
function deleteTask(btn) {
  btn.closest('li').remove();
}
function toggleComplete(span) {
  span.closest('li').classList.toggle('task-complete');
}

function handleKeyPress(e) {
  // debugger;
  if(e.keyCode === 13){
    addTask();
  }
}