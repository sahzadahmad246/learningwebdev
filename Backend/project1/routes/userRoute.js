const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
});

router.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
});
router.post("/users", async (req, res) => {
  try {
    const { name, age, weight } = req.body;
    const newUser = new User({ name, age, weight });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
});

router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, age, weight } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, age, weight },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      updatedUser,
      success: true,
      message: "user updated ",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
});

router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleteUser = await User.findByIdAndDelete(id);
    if (!deleteUser) {
      res.json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "user deleted ",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
});
module.exports = router;
