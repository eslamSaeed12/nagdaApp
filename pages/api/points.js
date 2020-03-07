const fs = require("fs");
function parsePoints() {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/points.json", "utf8", function(err, contents) {
      if (err) reject(err);
      resolve(JSON.parse(contents));
    });
  });
}

export default async (req, res) => {
  try {
    const { token } = req.headers;
    const secretToken = req.token;
    if (token != secretToken) {
      res.status(401).send({ error: { message: "unAuthorized !" } });
    } else {
      // read all points from the file
      res.status(201).json(await parsePoints());
    }
  } catch (e) {
    console.log(e);
  }
};
