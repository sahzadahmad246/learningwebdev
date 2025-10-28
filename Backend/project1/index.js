const express = require("express");
const connectDB = require("./db");
const app = express();
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
dotenv.config();
connectDB();
app.use(express.json());
app.use("/api", userRoute);
app.use("/", (req, res) => {
  res.send("this is home page");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
