const sanitizer = require("striptags");
const reader = require("../../helpers/reader");
const { findTheNearest } = require("../../helpers/nearest.point");

export default async (req, res) => {
  try {
    const { token } = req.headers;
    const { origin } = req.body;
    const originalToken = req.token;
    if (token !== originalToken) {
      res.status(401).json("unAuthorized !");
    }

    if (!origin) {
      res.status(400).json("origin location is missing !");
    }

    const nearest = await findTheNearest(origin);
    res.status(302).json(nearest);
  } catch (e) {
    console.log(e);
  }
};
