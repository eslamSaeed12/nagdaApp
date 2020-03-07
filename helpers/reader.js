const fs = require("fs");

class reader {
  readSync(path) {
    return fs.readFileSync(path, "utf8");
  }

  json(data) {
    return JSON.parse(data);
  }
}

module.exports = new reader();
