// let api = "https://jsonplaceholder.typicode.com/posts";
// let btn = document.querySelector("button");
// let getData = async () => {
//   try {
//     let res = await fetch(api);
//     let data = await res.json();
//     console.log(data.slice(0, 4));
//   } catch (error) {
//     console.error(error);
//   }
// };

// btn.addEventListener("click", getData);

let getBtn = document.querySelector("#getData");
let postBtn = document.querySelector("#postData");
let updateBtn = document.querySelector("#updateData");
let deleteBtn = document.querySelector("#deleteData");
let getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/posts");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

let postData = async () => {
  let url = "http://localhost:3000/posts";

  try {
    let res = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Post Three",
        body: "Created by Shahzad (again(",
      }),
    });
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Server EError", error);
  }
};

let updateData = async () => {
  try {
    const res = await fetch("http://localhost:3000/posts/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Updated:Hello World",
        body: "This is first post but updated",
      }),
    });
    const updatedData = await res.json();
    console.log(updatedData);
  } catch (error) {
    console.log(error);
  }
};
let deleteData = async () => {
  try {
    fetch("http://localhost:3000/posts/1759956828776", {
      method: "DELETE",
    });
    const message = await res.json();
    console.log(message);
  } catch (error) {}
};
getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", postData);
updateBtn.addEventListener("click", updateData);
deleteBtn.addEventListener("click", deleteData);
