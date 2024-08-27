const express = require("express");
const app = express();
morgan = require("morgan");

app.use(morgan("dev"));

app.use((req, res, next) => {
  //req.method = "PUT"; // meng-overwrite method saja bisa apa lagi membuat properti baru
  //req.timeRequest = Date.now(); // secara default properti timeRequest tidak ada, ini menambahkan sendiri untuk mencoba saja kalao di middleware itu bisa mengotak atik object req dan res
  // console.log(req.method, req.url);
  next();
});

// di dalam app.use kita juga dapat menambahkan suatu path sama seperti route
// app.use("/hello", (req, res, next) => {
//   res.send("hello");
// });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/halaman", (req, res) => {
  console.log(req.timeRequest);
  res.send("halaman");
});

// app.use bisa digunakan juga di paling bawah sini, bukan hanya di atas
// karena dia di paling bawah, kita tidak perlu menambahkan next
app.use((req, res) => {
  // res.send("Page not found!");
  res.status(404).send("Page not found!");
});
// sama fungsinya dengan ini, cuman kalau ini kan menggunakan route, masih bisa didahulukan middleware
// app.get("/*", (req, res) => {
//   res.send("Page not found!");
// });

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
