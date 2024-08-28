const express = require("express");
const app = express();
morgan = require("morgan");

app.use(morgan("dev"));
const auth = (req, res, next) => {
  const { password } = req.query;
  if (password === "admin") {
    console.log("2");
    next();
  }
  // res.send("Perlu masukkan password!");
  throw new Error("Perlu masukkan password");
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

app.use((req, res) => {
  res.status(404).send("Page not found!");
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
