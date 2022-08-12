const EventEmitter = require("events");

const url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    //send an http request
    console.log(message);
    //manualy evoce an event
    this.emit("messageLogged", { id: 1, url: "htts://" });
  }
}

module.exports = Logger;
