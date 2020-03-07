const express = require("express");
const next = require("next");
require("dotenv").config();
const port = parseInt(process.env.PORT, 10) || 3001;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const path = require("path");
const bodyparser = require("body-parser");
app.prepare().then(() => {
  const server = express();

  server.use((req, res, next) => {
    req.token = process.env.secretKey;
    next();
  });
  server.use(express.static("public"));
  server.get("/web-app", (req, res) => {
    res.sendFile(path.join(__dirname, "static-page/index.html"));
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
