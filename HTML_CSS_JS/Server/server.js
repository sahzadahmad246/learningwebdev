const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let posts = [{ id: 1, title: "Hello World", body: "This is my first post" }];
app.get("/", (req, res) => {
  res.json(posts);
});
app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/posts", (req, res) => {
  const newPost = { id: Date.now(), ...req.body };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.put("/posts/:id", (req, res) => {
  const { id } = req.params;
  const index = posts.findIndex((p) => p.id == id);
  if (index === -1) {
    res.status(404).json({ message: "post not found" });
  }
  posts[index] = { ...posts[index], ...req.body };
  res.json(posts[index]);
});

app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  const index = posts.findIndex((p) => p.id == id);
  if (index === -1) {
    return res.status(404).json({ message: "post not found" });
  }
  posts = posts.filter((p) => p.id != id);
  res.json({ message: "Post deleted" });
});
app.listen(3000, console.log("Server is running on Port 3000"));
