// let paragraph = document.getElementById("paragraph");
// let button = document.getElementById("btn");

// // button.addEventListener("click", () => {
// //   paragraph.textContent = "Content changed in paragraph";
// // });

// let changeText = (event) => {
//   console.log(event);
//   paragraph.textContent = "Content changed in paragraph";
// };

// button.addEventListener("click", changeText);
// // button.removeEventListener("click", changeText);
// let anchor = document.getElementById("anchor");

// anchor.addEventListener("click", (e) => {
//   e.preventDefault();
//   anchor.style.cssText =
//     "text-decoration:none; color:#fff; background-color:#4B0082; padding:0.5rem; border-radius:1rem;";
//   anchor.textContent = "Text Changed";
// })

// let paragraphs = document.querySelectorAll("p");
// let wrapper = document.querySelector("#wrapper");
// let highLighter = document.createElement("div");
// highLighter.classList.add("highlighter");
// wrapper.appendChild(highLighter);

// let showClickedPara = (event) => {
//   if (event.target.nodeName === "SPAN") {
//     highLighter.style.display = "block";
//     highLighter.textContent = `span "${event.target.textContent}" was clicked`;
//   }
// };
// paragraphs.forEach((para) => {
//   para.addEventListener("click", showClickedPara);
// });
// paragraphs.forEach((para) => {
//   highLighter.classList.add("highlighter");
//   wrapper.appendChild(highLighter);
//   para.addEventListener("click", () => {
//     highLighter.style.display = "block";
//   });
// });
