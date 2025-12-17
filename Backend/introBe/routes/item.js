const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.body);
  res.send("Heloo orls bhai");
});

router.post("/items", (req, res) => {
  res.status(201).json({ s: "shd", d: "djjd" });
});
router.put("/items/:id", (req, res) => {
  res.json("this is a put reqest");
});
router.delete("/items/:id", (req, res) => {
  res.send("this is a delete reqest");
});

module.exports = router;
