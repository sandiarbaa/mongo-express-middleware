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

// middleware sebagai error handling, ditandai dengan adanya parameter err di parameter ke 1
// kalau nanti dari route ada yg error pokoknya akan menampilkan middleware ini
app.use((err, req, res, next) => {
  console.log("***************");
  console.log("*****ERROR*****");
  console.log("***************");
  // kalau kita buat error dengan throw new error, maka error itu akan masuk ke object err yg di error-handling message nya
  // console.log(err.message);
  next(err); // kalau next nya ga ada error di anggep middleware biasa
}); // tapi kalau ditambahkan maka dia akan mencari middleware atau respons yg menghasilkan atau mengirimkan object throw new error

app.use((req, res) => {
  res.status(404).send("Page not found!");
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
