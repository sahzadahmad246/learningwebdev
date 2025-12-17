const express = require("express");

const app = express();
const item = require("./routes/item");

app.use(express.json());
app.use("/api", item);
app.listen(3000, () => console.log("server is running on port 3000"));
