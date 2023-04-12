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

//help from Daniel Lidén on how to display the array on the screen
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
      localStorage.inputValue = JSON.stringify(taskArray);
      localStorage.removeItem(taskElement.innerText);
      taskLoop();
    });

    const completeButton = document.createElement("button");
    completeButton.innerText = "✅";
    taskElement.appendChild(completeButton);
    completeButton.classList.add("complete");

    // got some help from ChatGTP

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
