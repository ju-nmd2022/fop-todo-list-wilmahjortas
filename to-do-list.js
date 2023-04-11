const addTaskButton = document.getElementById("addTaskButton");
const container = document.getElementById("container");

addTaskButton.addEventListener("click", addContent);

function addContent() {
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
}
