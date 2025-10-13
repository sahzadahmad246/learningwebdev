// let t1 = performance.now();
// for (let i = 1; i <= 100; i++) {
//   let para = document.createElement("p");
//   para.textContent = `this is para ${i}`;
//   document.body.appendChild(para);
// }
// let t2 = performance.now();
// console.log(`time taken by code 1 is ${t2 - t1} seconds`);

// let t3 = performance.now();
// let myDiv = document.createElement("div");
// for (let i = 1; i <= 100; i++) {
//   let para = document.createElement("p");
//   para.textContent = `this is para ${i}`;
//   myDiv.appendChild(para);
// }
// document.body.appendChild(myDiv);
// let t4 = performance.now();
// console.log(`time taken by code 2 is ${t4 - t3} seconds`);

// let t5 = performance.now();
// let fragment = document.createDocumentFragment();
// for (let i = 0; i <= 100; i++) {
//   let para = document.createElement("p");
//   para.textContent = `this is para ${i}`;
//   fragment.appendChild(para);
// }
// document.body.appendChild(fragment);
// let t6 = performance.now();
// console.log(`time taken by code 3 is ${t6 - t5} seconds`);

let quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don’t let yesterday take up too much of today.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "You learn more from failure than from success.",
  "Push yourself, because no one else is going to do it for you.",
];

let button = document.getElementById("quoteBtn");
let display = document.getElementById("quoteDisplay");
button.style.cssText =
  "background-color: rgb(10,48,62); color:#fff; border: none; padding:1rem; border-radius:1rem;";
function changeColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return (colorStr = `${r},${g},${b}`);
}
let bgColor = changeColor();

display.style.cssText = `background-color:rgb(${bgColor}); padding:1rem; border-radius:1rem; color:#fff`;

function showQuote() {
  let quoteIndex = Math.floor(Math.random() * quotes.length);
  let bgColor = changeColor();
  console.log(bgColor);
  display.textContent = quotes[quoteIndex];
  display.style.cssText = `background-color:rgb(${bgColor}); padding:1rem; border-radius:1rem; color:#fff`;
}
button.addEventListener("click", showQuote);
