// let heading = document.getElementById("heading");
// heading.innerText = "this is a heading";
// console.log(heading);

// let para = document.getElementsByClassName("paragraph");
//  let para = document.getElementsByTagName("p");
// let para = document.querySelector(".paragraph");
// let para = document.querySelectorAll(".paragraph");
// console.log(para);

// let para = document.querySelector("#para-box");
// para.innerHTML = '<h1 class="para">now heading.</h1>'
// console.log(para.innerHTML);

// let para = document.querySelector(".para");
// para.outerHTML = '<h1 class="para">now heading.</h1>'
// let body = document.querySelector("body");
// let newHeading = document.createElement("h1");
// newHeading.textContent = "Heloo shahzad"
// body.appendChild(newHeading)
// console.log(newHeading);

// let targetedDiv = document.querySelector("#targetDiv");

let heading = document.querySelector('.heading')
let targetedDiv = heading.parentElement
let newSpan = document.createElement("span");
newSpan.textContent = "This is a span";
newSpan.style.padding ="10px"
targetedDiv.insertAdjacentElement("afterbegin", newSpan);


targetedDiv.removeChild(heading)
console.log(parent)
