const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

let tasks = [];

addTaskButton.addEventListener('click',()=>{
    const taskText = todoInput.value.trim();
    if(taskText ==="") return;

    const newText = {
        id: Date.now(),
        text: taskText, 
        completed: false
    }

    tasks.push(newText);
    todoInput.value = "";  // clear input
    console.log(tasks);
    
})