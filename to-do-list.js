//asked both chatGTP and Daniel Lidén for some help to get some inspiration on how to solve the localstorage

let taskArray = [];

const listElement = document.getElementById("taskList");

const addTaskButton = document.getElementById("addTaskButton");
const container = document.getElementById("container");

if (localStorage.inputValue) {
  taskArray = JSON.parse(localStorage.inputValue);
}

addTaskButton.addEventListener("click", function () {
  addContent();
  taskLoop();
});

function addContent() {
  let inputField = document.getElementById("input");
  const inputValue = inputField.value;

  taskArray.push(inputValue);
  localStorage.inputValue = JSON.stringify(taskArray);
  console.log(taskArray);

  inputField.value = "";
}

function taskLoop() {
  listElement.innerHTML = "";
  for (let task of taskArray) {
    const taskElement = document.createElement("div");
    taskElement.classList.add("inputText");
    taskElement.innerText = task;
    listElement.appendChild(taskElement);

    const removeButton = document.createElement("button");
    removeButton.innerText = "❌";
    taskElement.appendChild(removeButton);
    removeButton.classList.add("remove");

    const index = taskArray.indexOf(task);

    removeButton.addEventListener("click", () => {
      taskArray.splice(index, 1);
      taskLoop();
    });

    const completeButton = document.createElement("button");
    completeButton.innerText = "✅";
    taskElement.appendChild(completeButton);
    completeButton.classList.add("complete");

    if (localStorage.getItem(taskElement.innerText)) {
      taskElement.style.color = "green";
    }

    completeButton.addEventListener("click", () => {
      taskElement.style.color = "green";

      localStorage.setItem(taskElement.innerText, "completed");
    });
  }
}

taskLoop();
