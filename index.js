const express = require("express");
const app = express();
morgan = require("morgan");

const ErrorHandler = require("./ErrorHandler");

app.use(morgan("dev"));
const auth = (req, res, next) => {
  const { password } = req.query;
  if (password === "admin") {
    console.log("2");
    next();
  }
  // res.send("Perlu masukkan password!");
  // res.status(401);
  throw new ErrorHandler("Perlu masukkan password", 401);
};

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/halaman", (req, res) => {
  console.log(req.timeRequest);
  res.send("halaman");
});

app.get("/error", (req, res) => {
  bird.fly;
});

app.get("/admin", auth, (req, res) => {
  res.send("Hello admin");
});

app.get("/general/error", (req, res) => {
  // default
  throw new ErrorHandler(); // ini akan memakai middleware error di bawah yg ke-2 ini
});

// app.use((err, req, res, next) => {
//   console.log("***************");
//   console.log("*****ERROR*****");
//   console.log("***************");
//   next(err);
// });

app.use((err, req, res, next) => {
  // object err sejauh ini saya tau nya dia ada properti status dan message
  const { status = 403, message = "Something went wrong" } = err; // kalau status doang dia akan undefined, makanya kita isikan 500 sebagai contoh
  // res.status(status).send(err.message);
  // res.status(status).send("Error");
  res.status(status).send(message); // kalau ada error tidak spesifik, dia akan memunculkan si something went wrong itu
  // tapi kalau spesifiki maka akan dimunculkan error message dari si object errornya
});

app.use((req, res) => {
  res.status(404).send("Page not found!");
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
