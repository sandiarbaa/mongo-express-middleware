const express = require("express");
const app = express();
morgan = require("morgan");

app.use(morgan("dev"));

app.use((req, res, next) => {
  //req.method = "PUT"; // meng-overwrite method saja bisa apa lagi membuat properti baru
  req.timeRequest = Date.now(); // secara default properti timeRequest tidak ada, ini menambahkan sendiri untuk mencoba saja kalao di middleware itu bisa mengotak atik object req dan res
  console.log(req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/halaman", (req, res) => {
  console.log(req.timeRequest);
  res.send("halaman");
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
