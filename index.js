const express = require("express");
const app = express();
morgan = require("morgan");

app.use(morgan("dev"));
app.use((req, res, next) => {
  //next(); // diletakkan sebelum respon
  console.log("middleware pertama");
  next();
  console.log("middleware pertama setelah next");
  // res.send("Hello Middleware");
});

app.use((req, res, next) => {
  console.log("middleware kedua");
  next();
  console.log("middleware kedua setelah next");
  console.log("middleware ketiga setelah next");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/halaman", (req, res) => {
  res.send("halaman");
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
