function domLoaded() {
    const addBtn = document.getElementById("addBtn");
    const taskInput = document.getElementById("newTask");

    addBtn.addEventListener("click", addBtnClick);

    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addBtnClick();
        }
    });
}

function addBtnClick() {
    const taskInput = document.getElementById("newTask");
    const newTask = taskInput.value;

    if (newTask !== "") {
        addTask(newTask);
        taskInput.value = "";
        taskInput.focus();
    }
}

function addTask(task) {
    const li = document.createElement("li");

    li.innerHTML = '<span class="task-text">' + task +
   '</span><button class="done-btn"><span class="x-icon">&#10006;</span></button>';

    const ol = document.querySelector("ol");
    ol.appendChild(li);

    const doneButtons = document.querySelectorAll(".done-btn");
    doneButtons[doneButtons.length -1].addEventListener("click", removeTask);
}

function removeTask(event){
    const li = event.target.closest("li");
    const ol = li.parentNode;

    ol.removeChild(li);
}

document.addEventListener("DOMContentLoaded", domLoaded);