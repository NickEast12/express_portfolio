// require
const express = require("express");
const ejs = require("ejs");
const port = process.env.PORT || 8090;

//initialisation
const app = express();

// ejs rendering
app.set("view engine", "ejs");

// setting static folder route
app.use(express.static("public"));
app.use(express.static("public/images"));
// rendering pages with ejs
app.get("/", (req, res) => {
  res.render("index");
});
// app listen on port
app.listen(port, () => {
  console.log(`server started on port: ${port}`);
});
