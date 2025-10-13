// let firstdiv = document.querySelector(".fdiv");
// let seconddiv = document.getElementById("sdiv");

// // firstdiv.style.cssText =
// //   "padding:1rem; background-color: #1E3A5F; color:#fff; border-radius: 1.5rem; margin: 1rem 9px;";

// // firstdiv.setAttribute(
// //   "style",
// //   "padding:1rem; background-color: #080d13ff; color:#ffff; border-radius: 1.5rem; margin: 1rem 9px;"
// // );
// firstdiv.setAttribute("id", "firstDiv");
// // seconddiv.style.cssText =
// //   "padding:1rem; background-color: #4B0082; color:#fff; border-radius: 1.5rem; margin: 1rem 9px;";

// seconddiv.setAttribute("class", "secondDiv");

// let backgroundColor = ["#FF6347", "#46b478ff", "#DAA520", "#c32be2ff"];

// let para = document.querySelectorAll("p");
// para.forEach((p, index) => {
//   console.log(p);
//   p.style.cssText = `background-color: ${backgroundColor[index]}; padding: 0.5rem; border-radius: 0.5rem`;
// });
// firstdiv.classList.add("fdiv3");
// firstdiv.classList.replace("fdiv2", "fdiv4");
// // firstdiv.classList.remove("fdiv3");

// console.log(firstdiv.classList.contains("fdiv8"));

let profileCard = document.createElement("div");
let myName = document.createElement("h2");
let bio = document.createElement("p");
let myLocation = document.createElement("p");
let body = document.querySelector("body");
profileCard.classList.add("profile-card");
profileCard.style.cssText =
  "   background-color: #080d13ff;   padding: 1rem; color: #ffff; border-radius: 1.5rem; font-family: 'poppins', san-serif";
myName.textContent = "Shahzad Ahmad";
bio.textContent = "Hi Im a full-stack developer";
myLocation.textContent = "Mumbai";
body.appendChild(profileCard);
profileCard.appendChild(myName);

profileCard.appendChild(myLocation);
profileCard.removeChild(myLocation)