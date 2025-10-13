// oBject cloning
let src = {
  name: "shazad",
  age: 25,
  title: "dev",
};
// way 1
// let dest = { ...src };
//way 2

// let dest = Object.assign({}, src);
dest.color = "white";
console.log("src", src);
console.log("dest", dest);
