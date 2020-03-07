const fs = require("fs");
const haversine = require("haversine");
async function findTheNearest(orgin) {
  const naturalPoints = JSON.parse(
    fs.readFileSync("./data/points.json", "utf8")
  );

  let onlyDistances = [];

  let pointsObject = [];

  let start = {
    latitude: orgin[1],
    longitude: orgin[0]
  };

  let options = {
    unit: "km"
  };

  naturalPoints.points.forEach((e, id) => {
    // add only distance array items

    //add points object items
    let end = {
      latitude: e.cordinates[1],
      longitude: e.cordinates[0]
    };
    onlyDistances.push(haversine(start, end, options));
    pointsObject.push({
      id,
      distance: haversine(start, end, options),
      city: e.city,
      name: e.name,
      coords: e.cordinates,
      unit: "km"
    });
  });

  const smallestPoint = Math.min(...onlyDistances);

  const findTheNearestObject = () => {
    return new Promise((resolve, reject) => {
      pointsObject.find(e => {
        if (e.distance === smallestPoint) {
          resolve(e);
        }
      });
    });
  };

  return await findTheNearestObject();
}

exports.findTheNearest = findTheNearest;
