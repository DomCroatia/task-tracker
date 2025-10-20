const taskList = document.querySelector(".tasks");
const newTaskInput = document.querySelector(".new-task-input");
const submitBtn = document.querySelector(".submit");

let counter = 0;

newTaskInput.addEventListener("keydown", createTask);
submitBtn.addEventListener("click", createTask);

function createTask(event) {
  const value = newTaskInput.value;

  if (event.key === "Enter" || event.type == "click") {
    if (value.trim() == "") {
      newTaskInput.value = "";
      return;
    }

    const div = document.createElement("div");
    div.classList.add("item");
    taskList.appendChild(div);

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = `input-${counter}`;
    div.appendChild(input);

    const label = document.createElement("label");
    label.innerText = value;
    label.htmlFor = `input-${counter}`;
    div.appendChild(label);

    const img = document.createElement("img");
    img.src = "./assets/can_trash_icon.png";
    img.alt = "Submit";
    div.appendChild(img);

    img.addEventListener("click", () => {
      div.remove();
    });

    counter++;
    newTaskInput.value = "";
  }
}
