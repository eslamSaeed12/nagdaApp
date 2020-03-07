class routesHelper {
  addAnimateUserMarker(map, userlocation) {
    var size = 100;

    // implementation of CustomLayerInterface to draw a pulsing dot icon on the map
    // see https://docs.mapbox.com/mapbox-gl-js/api/#customlayerinterface for more info
    var pulsingDot = {
      width: size,
      height: size,
      data: new Uint8Array(size * size * 4),

      // get rendering context for the map canvas when layer is added to the map
      onAdd: function() {
        var canvas = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext("2d");
      },

      // called once before every frame where the icon will be used
      render: function() {
        var duration = 1000;
        var t = (performance.now() % duration) / duration;

        var radius = (size / 2) * 0.3;
        var outerRadius = (size / 2) * 0.7 * t + radius;
        var context = this.context;

        // draw outer circle
        context.clearRect(0, 0, this.width, this.height);
        context.beginPath();
        context.arc(
          this.width / 2,
          this.height / 2,
          outerRadius,
          0,
          Math.PI * 2
        );
        context.fillStyle = "rgba(255, 200, 200," + (1 - t) + ")";
        context.fill();

        // draw inner circle
        context.beginPath();
        context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
        context.fillStyle = "rgba(255, 100, 100, 1)";
        context.strokeStyle = "white";
        context.lineWidth = 2 + 4 * (1 - t);
        context.fill();
        context.stroke();

        // update this image's data with data from the canvas
        this.data = context.getImageData(0, 0, this.width, this.height).data;

        // continuously repaint the map, resulting in the smooth animation of the dot
        map.triggerRepaint();

        // return `true` to let the map know that the image was updated
        return true;
      }
    };
    if (!this.checkSourceExist(map, "user-location")) {
      map.addImage("pulsing-dot", pulsingDot, { pixelRatio: 2 });
      map.addSource("user-location", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: userlocation
              }
            }
          ]
        }
      });
      map.addLayer({
        id: "user-location",
        type: "symbol",
        source: "user-location",
        layout: {
          "icon-image": "pulsing-dot"
        }
      });
    }
    this.flyTo(map, userlocation, 15);
  }

  addUserMarker(map, mapgl, userlocation) {
    if (!map.getSource("user-location")) {
      map.loadImage("http://localhost:3001/media/marker.png", function(
        err,
        image
      ) {
        if (err) throw err;
        map.addImage("user-marker-png", image);
        map.addSource("user-location", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: userlocation
                },
                properties: {
                  title: "user location"
                }
              }
            ]
          }
        });
        map.addLayer({
          id: "userpoint-layer",
          type: "symbol",
          source: "user-location",
          layout: {
            "icon-image": "user-marker-png",
            "icon-size": 0.05
          }
        });
      });
      this.flyTo(map, userlocation, 15);
    } else {
      this.flyTo(map, userlocation, 15);
    }
  }

  findUserLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        pos => {
          resolve([pos.coords.longitude, pos.coords.latitude]);
        },
        err => {
          reject(err);
        },
        {
          enableHighAccuracy: true
        }
      );
    });
  }

  geojsonCretor(cordsArray) {
    return {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: cordsArray
      }
    };
  }

  async addPolicePointsToMap(map, iconUrl, points) {
    const featuresAsGeoJson = [];
    points.forEach(e => {
      featuresAsGeoJson.push({
        type: "feature",
        geometry: {
          type: "Point",
          coordinates: [e.cordinates[1], e.cordinates[0]]
        },
        properties: {
          title: e.name,
          city: e.city,
          popup: `<h5 class="text-center cairo">${e.name}</h5>
                <h6 class="text-muted text-center cairo">${e.city}</h6>
                <span class="d-none" data-cordinates="${e.cordinates[0]},${e.cordinates[1]}"></span>`
        }
      });
    });
    map.loadImage(iconUrl, function(err, image) {
      if (err) throw err;
      map.addImage("policeStation", image);
      map.addSource("police-points", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: featuresAsGeoJson
        }
      });
      map.addLayer({
        id: "police-station-layers",
        type: "symbol",
        source: "police-points",
        layout: {
          "icon-image": "policeStation",
          "icon-size": 0.05
        }
      });
    });
  }

  addNavigationControl(map, mapgl) {
    map.addControl(new mapgl.NavigationControl());
  }

  addPopUpForPoliceStations(map, mapgl) {
    map.on("click", "police-station-layers", function(e) {
      let cordinates = e.features[0].geometry.coordinates.slice();
      let rowHtml = e.features[0].properties.popup;
      while (Math.abs(e.lngLat.lng - cordinates[0]) > 180) {
        cordinates[0] += e.lngLat.lng > cordinates[0] ? 360 : -360;
      }

      new mapgl.Popup()
        .setLngLat(cordinates)
        .setHTML(rowHtml)
        .addTo(map);

      map.on("mouseenter", "police-station-layers", function() {
        map.getCanvas().style.cursor = "pointer";
      });

      // Change it back to a pointer when it leaves.
      map.on("mouseleave", "police-station-layers", function() {
        map.getCanvas().style.cursor = "";
      });
    });
  }

  flyTo(map, to, zoom) {
    map.flyTo({
      center: to,
      essential: true,
      zoom
    });
  }

  setRealTimeUserMarker(map, intervalSeconds, userSource, realtimeData) {
    if (map.getSource(userSource)) {
      window.setInterval(() => {
        map.getSource(userSource).setData(realtimeData);
      }, intervalSeconds);
    }

    return null;
  }

  watchLocation() {
    return new Promise((resolve, reject) => {
      window.navigator.geolocation.watchPosition(
        position => {
          resolve([position.coords.latitude, position.coords.longitude]);
        },
        err => {
          reject(err);
        },
        { enableHighAccuracy: true }
      );
    });
  }

  addRouteSource(RouteCoordsArray, map) {
    if (map.getSource("route")) {
      map.getSource("route").setData(RouteCoordsArray);
    } else {
      if (!map.getLayer("police-route-layer")) {
        map.addLayer({
          id: "police-route-layer",
          type: "line",
          source: {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {},
              geometry: {
                type: "LineString",
                coordinates: RouteCoordsArray
              }
            }
          },
          layout: {
            "line-join": "round",
            "line-cap": "round"
          },
          paint: {
            "line-color": "#4264FB",
            "line-width": 4
          }
        });
      }
      this.flyTo(map, RouteCoordsArray[0], 15);
    }
  }

  checkSourceExist(map, sourceID) {
    if (!map.getSource(sourceID)) {
      return false;
    }
    return true;
  }

  changeSourceData(geojsonNewData, map, sourceID) {
    map.getSource(sourceID).setData(geojsonNewData);
  }
}

const routeHelperClass = new routesHelper();

export default routeHelperClass;
