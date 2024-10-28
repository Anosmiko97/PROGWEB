const addTaskBtn = document.querySelector("#confirm-add-task");
const tasksContainer = document.querySelector("#tasks");
let tasks = [];

function saveInLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteFromLocalStorage(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveInLocalStorage(); 
}

function asignId() {
    return Date.now(); 
}

function editStatus(taskId, completed) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        task.completed = completed;
        saveInLocalStorage(); 
    }
}

function createDiv(text, id, completed) {
    let newDiv = document.createElement("div");
    newDiv.classList = "container-fluid d-flex justify-content-between align-center gap-2 border-bottom p-2"; 

    let checkBoxDiv = document.createElement("div");
    checkBoxDiv.classList = "checkbox";

    let formCheckDiv = document.createElement("div");
    formCheckDiv.classList = "form-check";

    let input = document.createElement("input");
    input.classList = "check form-check-input";
    input.type = "checkbox";
    input.checked = completed; 
    input.dataset.id = id; 

    let label = document.createElement("label");
    label.classList = "form-check-label";
    label.innerHTML = text;

    let btn = document.createElement("button");
    btn.innerText = 'Eliminar';
    btn.classList = "delete-btn btn btn-danger";
    btn.dataset.id = id;

    formCheckDiv.appendChild(input);
    formCheckDiv.appendChild(label);
    checkBoxDiv.appendChild(formCheckDiv);
    newDiv.appendChild(checkBoxDiv);
    newDiv.appendChild(btn);

    return newDiv;
}

function makeDeleteBtn() {
    const deleteBtns = document.getElementsByClassName("delete-btn");
    for (let btn of deleteBtns) {
        btn.addEventListener("click", () => {
            const taskId = Number(btn.dataset.id);
            tasks = tasks.filter(task => task.id !== taskId);
            deleteFromLocalStorage(taskId);
            btn.parentElement.remove(); 

            if (emptyTaskList()) {
                oneTaskInList = false; 
                tasksContainer.innerHTML = "<p>No hay tareas, agrega una con el boton superior</p>";
            }
        });
    }
}

function makeCheckBoxInput() {
    const checkboxInput = document.getElementsByClassName("check");

    for (let box of checkboxInput) {
        box.addEventListener("change", () => {
            const taskId = Number(box.dataset.id); 
            editStatus(taskId, box.checked); 
        });
    }
}

function emptyTaskList() {
    return tasks.length === 0;
}

function addTask() {
    const taskToDo = document.querySelector("#task-todo");
    const newTask = {
        task: taskToDo.value,
        completed: false,
        id: asignId()
    };
    
    tasks.push(newTask);
    saveInLocalStorage(); 

    return createDiv(newTask.task, newTask.id, newTask.completed); 
}

let oneTaskInList = false;

addTaskBtn.addEventListener("click", () => {
    if (oneTaskInList === false) {
        tasksContainer.innerHTML = "";
        oneTaskInList = true; 
        let newTask = addTask();
        tasksContainer.appendChild(newTask);
        makeDeleteBtn();
        makeCheckBoxInput();
    } else {
        let newTask = addTask();
        tasksContainer.appendChild(newTask);
        makeDeleteBtn();
        makeCheckBoxInput();
    }
});

window.addEventListener("load", () => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = storedTasks; 

    tasks.forEach(task => {
        const newTask = createDiv(task.task, task.id, task.completed);
        tasksContainer.appendChild(newTask);
    });

    makeDeleteBtn();
    makeCheckBoxInput();
});
