const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

const port = process.env.PORT;
const type = process.env.NODE_ENV;
app.listen(port, () => {
  console.log(`Server running on port ${port} in ${type} mode`);
});
