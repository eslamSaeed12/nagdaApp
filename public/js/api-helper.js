class apiHelper {
  fetchPolicePoints() {
    const options = {
      secretKey:
        "acbc9a58167e26c4d44fd16dd241436b592599ae8bf8f81c6aace2b8a2ced4ff"
    };
    return new Promise((resolve, reject) => {
      fetch("http://localhost:3001/api/points", {
        method: "POST",
        headers: {
          token: options.secretKey
        }
      })
        .then(async e => {
          resolve(await e.json());
        })
        .catch(e => reject(e));
    });
  }
  async findNearestPoint(findLocation) {
    const token =
      "acbc9a58167e26c4d44fd16dd241436b592599ae8bf8f81c6aace2b8a2ced4ff";
    let location = await findLocation();
    return await fetch("http://localhost:3001/api/nearest", {
      method: "post",
      headers: {
        token,
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        origin: [location[1], location[0]]
      })
    });
  }

  async fetchRouteData(origin, destination, mode) {
    const token =
      "pk.eyJ1IjoiZXNsYW0tc2FlZWQxMiIsImEiOiJjazc5ZzB0OXIwb3BkM21ueWQ0djRxcjh2In0.dxcqkO-qHxufc6xSMzJZ2Q";
    let url = `https://api.mapbox.com/directions/v5/mapbox/${mode}/${origin[0]},${origin[1]};${destination[0]},${destination[1]}?alternatives=true&geometries=geojson&steps=true&access_token=${token}`;
    return fetch(url);
  }
}

const injectedApiHelper = new apiHelper();
export default injectedApiHelper;
