const taskInput = document.getElementById("taskInput")
const taskList = document.getElementById("taskList")
tasks = JSON.parse(localStorage.getItem("tasks")) || []

function addTask(){
  const taskText = taskInput.value.trim()
  if(taskText === "") return

  const task = {text: taskText}
  tasks.push(task)
  localStorage.setItem("tasks", JSON.stringify(tasks))
  taskInput.value = ""
  displayTasks()
}

(function() {
  document.querySelector('input').addEventListener('keydown', function(el) {
    if (el.keyCode === 13) {
      addTask()
    }
  })
  })()

function deleteTask(index) {
  tasks.splice(index, 1)
  localStorage.setItem("tasks", JSON.stringify(tasks))
  displayTasks()
}

function editTask(index) {
  const newTaskText = prompt("Редагувати запис: ", tasks[index].text)
  if(newTaskText !== null){
    tasks[index].text = newTaskText
    localStorage.setItem("tasks", JSON.stringify(tasks))
    displayTasks()
  }
}

function displayTasks(){
  taskList.innerHTML = ""
  tasks.forEach((task, index) => {
    const li = document.createElement("li")
    li.innerHTML= `
    <span>${task.text}</span>
    <hr>
    <button class="edit-button" onclick="editTask(${index})">Редагувати</button>
    <button class="delete-button" onclick="deleteTask(${index})">Видалити</button>
    `
    taskList.appendChild(li)
  })
}
