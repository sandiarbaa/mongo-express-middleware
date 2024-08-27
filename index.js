const express = require("express");
const app = express();
morgan = require("morgan");

app.use(morgan("dev"));
app.use((req, res, next) => {
  // console.log(req.method, req.url);
  next();
});

// gambaran penggunaan middleware untuk authentication
// tapi middleware ini masih diterapkan ke semua route
app.use((req, res, next) => {
  const { password } = req.query;
  if (password === "admin") {
    next();
  }
  res.send("Perlu masukkan password!");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/halaman", (req, res) => {
  console.log(req.timeRequest);
  res.send("halaman");
});

app.get("/admin", (req, res) => {
  res.send("Hello admin");
});

app.use((req, res) => {
  res.status(404).send("Page not found!");
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
