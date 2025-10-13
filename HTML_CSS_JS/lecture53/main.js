// let input = document.getElementById("taskInput");
// let button = document.getElementById("addTaskBtn");
// let ul = document.getElementById("taskList");

// let taskList = [];

// button.addEventListener("click", () => {
//   if (input.value.trim() === "") return;

//   taskList.push({ taskItem: input.value, status: "pending" });
//   input.value = "";
//   renderTasks();
// });

// function renderTasks() {
//   ul.innerHTML = "";

//   taskList.forEach((task, index) => {
//     let li = document.createElement("li");
//     let taskListRight = document.createElement("div");
//     let taskListLeft = document.createElement("div");
//     let statusText = document.createElement("p");
//     let taskText = document.createElement("p");
//     let markDone = document.createElement("button");
//     let markDelete = document.createElement("button");

//     taskText.textContent = task.taskItem;
//     statusText.textContent = task.status;
//     markDone.textContent = "complete";
//     markDelete.textContent = "delete";

//     markDone.addEventListener("click", () => {
//       task.status = "completed";
//       renderTasks();
//     });

//     markDelete.addEventListener("click", () => {
//       taskList.splice(index, 1);
//       renderTasks();
//     });

//     taskListRight.appendChild(taskText);
//     taskListRight.appendChild(statusText);
//     taskListLeft.appendChild(markDone);
//     taskListLeft.appendChild(markDelete);

//     li.appendChild(taskListRight);
//     li.appendChild(taskListLeft);
//     ul.appendChild(li);
//   });
// }

let body = document.querySelector("body");
let wrapper = document.createElement("div");
let button = document.createElement("button");
let colorCode = document.createElement("p");
// let previewBox = document.createElement("div");

button.textContent = "Change color";

wrapper.appendChild(button);
wrapper.appendChild(colorCode);

body.appendChild(wrapper);

let colorHistory = [];
function displayColorHistory() {
    let oldBoxes = document.querySelectorAll(".previewBox");
  oldBoxes.forEach((box) => box.remove());
  
  colorHistory.forEach((singleColor) => {
    let previewBox = document.createElement("div");
  previewBox.classList.add("previewBox");
    previewBox.style.cssText = `
      background-color: rgb(${singleColor});
      border: 1px solid white;
      padding: 0.5rem;
      margin-top: 5px;
      width: 150px;
    `;
    previewBox.textContent = `color code of this box ${singleColor}`;
    wrapper.appendChild(previewBox);
  });

 
}
function changeColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let colorStr = `${r},${g},${b}`;
  colorCode.textContent = `Current color code is rba(${colorStr})`;
  body.style.backgroundColor = `rgb(${colorStr})`;
  colorHistory.push(colorStr);
  console.log(colorHistory);
  displayColorHistory();
}
button.addEventListener("click", changeColor);
displayColorHistory();
