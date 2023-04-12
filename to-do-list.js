let taskArray = [];

const listElement = document.getElementById("taskList");

const addTaskButton = document.getElementById("addTaskButton");
const container = document.getElementById("container");

if (localStorage.inputValue) {
  taskArray = JSON.parse(localStorage.inputValue);
}

addTaskButton.addEventListener("click", function () {
  taskLoop();
  addContent();
});

function addContent() {
  let inputField = document.getElementById("input");
  const inputValue = inputField.value;

  taskArray.push(inputValue);
  localStorage.inputValue = JSON.stringify(taskArray);
  console.log(taskArray);
}

function taskLoop() {
  listElement.innerHTML = "";
  for (let task of taskArray) {
    const taskElement = document.createElement("div");
    taskElement.innerText = task;
    listElement.appendChild(taskElement);

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    taskElement.appendChild(removeButton);
    removeButton.classList.add("remove");

    const index = taskArray.indexOf(task);

    removeButton.addEventListener("click", () => {
      taskArray.splice(index, 1);
      taskLoop();
    });

    const completeButton = document.createElement("button");
    completeButton.innerText = "Complete";
    taskElement.appendChild(completeButton);
    completeButton.classList.add("complete");

    completeButton.addEventListener("click", () => {
      taskElement.style.textDecoration = "line-through";
    });
  }
}

taskLoop();

/* function addContent() {
  const newTaskElement = document.createElement("div");

  const newInputElement = document.createElement("input");
  newInputElement.className = "textWindow";
  newInputElement.placeholder = "Write task";
  newInputElement.type = "text";

  const buttonElement = document.createElement("button");
  buttonElement.className = "whiteButton";
  buttonElement.textContent = "⚪";

  buttonElement.addEventListener("click", function () {
    if (buttonElement.textContent === "⚪") {
      buttonElement.textContent = "🟢";
    } else {
      buttonElement.textContent = "⚪";
    }
  });

  newTaskElement.appendChild(newInputElement);
  newTaskElement.appendChild(buttonElement);

  container.appendChild(newTaskElement);
} */
