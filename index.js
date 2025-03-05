const taskInputField = document.querySelector("#tareaInput");
const addTaskButton = document.querySelector("#agregarBtn");
const taskListElement = document.querySelector("#listaTareas");

addTaskButton.addEventListener("click", () => {
    const taskText = taskInputField.value.trim();
    if (!taskText) {
        alert("Por favor, ingresa una tarea");
        return;
    }

    const taskItemElement = document.createElement("li");
    taskItemElement.innerHTML = `${taskText} <button class='eliminar'>X</button>`;
    taskListElement.appendChild(taskItemElement);
    taskInputField.value = "";
});

taskListElement.addEventListener("click", (event) => {
    if (event.target.classList.contains("eliminar")) {
        event.target.parentElement.remove();
    } else {
        event.target.classList.toggle("completado");
    }
});