// membuat class ErrorHandler yg extends dari object Error punya javascript
// kita bisa definisikan erronya di sini
// class ErrorHandler extends Error {
//   constructor(message, statusCode) {
//     super(message);
//     this.statusCode = statusCode;
//     // misal di sini, kalau awalan nya 4 berarti fail, kalau bukan selain 4 berarti error
//     // kalau yg errornya di awali dengan 4 itu biasanya errornya terjadi di sisi client contoh 404
//     // kalau selain 4 itu biasanya errornya terjadi di server kaya misal 500
//     this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
//     this.operational = true;
//     Error.captureStackTrace(this, this.constructor);
//   }
// }

class ErrorHandler extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }
}

module.exports = ErrorHandler;
