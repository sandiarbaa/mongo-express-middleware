const express = require("express");
const app = express();
morgan = require("morgan");

// MIDDLEWARE DIGUNAKAN DENGAN METHOD USE DI APP
// app.use adalah method yg akan pertama kali bekerja sebelum mengeksekusi route get dll, atau listen dll
// jadi setelah melakukan/atau mendapatkan request app.use akan dijalankan, dan app.use ini akan bekerja sebelum mengeksekusi responnya
// app.use(() => {
//   console.log("hei");
// });

// app.use(morgan("tiny"));
// app.use(
//   morgan(":method :url :status :res[content-length] - :response-time ms")
// );
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/halaman", (req, res) => {
  res.send("halaman");
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
