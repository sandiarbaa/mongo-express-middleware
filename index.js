const express = require("express");
const app = express();
morgan = require("morgan");

app.use(morgan("dev"));
// app.use((req, res, next) => {
//   // console.log(req.method, req.url);
//   console.log("1");
//   next();
// });

// gambaran penggunaan middleware untuk authentication
// tapi middleware ini masih diterapkan ke semua route
// app.use((req, res, next) => {
//   const { password } = req.query;
//   if (password === "admin") {
//     next();
//   }
//   res.send("Perlu masukkan password!");
// });

// itu diatas diubah menjadi function dan dipanggil di route yg spesifik ingin menggunakan middleware ini
// ini function yg berisikan middleware
const auth = (req, res, next) => {
  const { password } = req.query;
  if (password === "admin") {
    console.log("2");
    next();
  }
  res.send("Perlu masukkan password!");
};

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/halaman", (req, res) => {
  console.log(req.timeRequest);
  res.send("halaman");
});

// kalau sudah gini, sebelum mengeksekusi respon atau apa yg ada di parameter ke3 dari get nya, akan di cek dulu middleware yg dipasangnya
// apakah http request nya lolos filter atau tidak di middleware nya dalam contoh ini middleware auth
// kalau berhasil maka akan melewati next yg ad di middleware itu, dan akan menjalankan parameter ke 3
app.get("/admin", auth, (req, res) => {
  res.send("Hello admin");
});

// middleware bisa juga di tuliskan langsung di parameter route nya di get ini
// tapi kaya gini ga cantik sintaksnya, bagusnya sih di pisah
// app.get(
//   "/admin",
//   (req, res, next) => {
//     const { password } = req.query;
//     if (password === "admin") {
//       console.log("2");
//       next();
//     }
//     res.send("Perlu masukkan password!");
//   },
//   (req, res) => {
//     res.send("Hello admin");
//   }
// );

// di app.get ini setelah path itu bisa mengisikan banyak callback
// dan callbacknya itu bisa digunakan untuk memanggil middleware atau dibuat sebagai middleware
// dan dapat middlewarenya ini bisa lebih dari 1 tinggal di pisah aja pake koma ,
// atau bisa berisikan kumpulan array yg berisikan middleware

app.use((req, res) => {
  res.status(404).send("Page not found!");
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
