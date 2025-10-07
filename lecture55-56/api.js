let currentIndex = 0;
let limit = 10;
const container = document.getElementById("postsContainer");
const button = document.getElementById("viewMore");
let allPosts = [];

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Network response not ok");
    }
    return res.json();
  })
  .then((posts) => {
    allPosts = posts;
    showPosts();
  })
  .catch((err) => console.log("Error fetchign posts", err));

function showPosts() {
  const nextPosts = allPosts.slice(currentIndex, currentIndex + limit);
  nextPosts.forEach((post) => {
    let para = document.createElement("p");
    para.textContent = `${post.id} : ${post.title}`;
    container.appendChild(para);
  });

  currentIndex = currentIndex + limit;
  if (currentIndex >= allPosts.length) {
    button.style.display = "none";
  }
  console.log(currentIndex);
}

button.addEventListener("click", showPosts);
