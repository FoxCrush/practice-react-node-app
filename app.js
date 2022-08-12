// const os = require("os");
// const fs = require("fs");

// const Logger = require("./logger");
// const logger = new Logger();

// //regiter a listner
// logger.on("messageLogged", (arg) => {
//   console.log("Listner called", arg);
// });

// const files = fs.readdirSync("./");
// console.log(files);

// fs.readdir("./", function (err, files) {
//   if (err) console.log("ERROR", err);
//   else console.log("ASYNC RESULT", files);
// });

// const totalMemory = os.totalmem;
// const freeMemory = os.freemem;
// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// // //one more test event listner
// // emitter.on("testLogging", ({ data }) => {
// //   console.log(data);
// // });
// // //one more test event evocing
// // emitter.emit("testLogging", { data: "test logging message" });

// logger.log("sent message");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("RESPONSE MSG");
    res.end();
  }

  if (req.url === "/data") {
    res.write("SENDING DATA");
    res.end();
  }
});

server.listen(3000);
