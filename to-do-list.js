/* const addTaskButton = document.getElementById("addTaskButton");

addTaskButton.addEventListener("click", () => {
  const inputTextElement = document.getElementById("content");
  addTaskButton.appendChild(inputTextElement.cloneNode(true));
}); */

const addTaskButton = document.getElementById("addTaskButton");
const inputTextElement = document.getElementById("content");
addTaskButton.addEventListener("click", addContent);

function addContent() {
  // Create a new content div element
  const inputTextElement = document.createElement("div");

  // Add input and button elements to the new content div
  inputTextElement.innerHTML = `
      <input class="textWindow" placeholder="Write task" type="text" />
      <button class="whiteButton">⚪</button>
    `;

  // Append the new content div to the container div
  const container = document.getElementById("container");
  container.appendChild(inputTextElement);
}
