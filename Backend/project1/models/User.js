const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 50,
  },
  age: {
    type: Number,
    required: true,
  },

  weight: {
    type: String,
    required:true
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const userModel = model("User", userSchema);

module.exports = userModel;
