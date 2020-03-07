import routeProvider from "/js/routes-helper.js";
import errorProvider from "/js/errors-helper.js";
import domProvider from "/js/dom-work.js";
import apiProvider from "/js/api-helper.js";
async function main() {
  try {
    const pointsObject = (await apiProvider.fetchPolicePoints()).points;

    // find the user location syncrounsly
    const userLocation = await routeProvider.findUserLocation();

    // insert mapbox token
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZXNsYW0tc2FlZWQxMiIsImEiOiJjazc5ZzB0OXIwb3BkM21ueWQ0djRxcjh2In0.dxcqkO-qHxufc6xSMzJZ2Q";

    mapboxgl.setRTLTextPlugin(
      "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
      null,
      true // Lazy load the plugin
    );
    // initialize map
    const mapGl = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/mapbox/light-v10", // stylesheet location
      center: userLocation, // starting position [lng, lat]
      zoom: 9 // starting zoom
    });

    domProvider.addPolicePointsListToDom(
      pointsObject,
      "#police-points-list-dom-reference",
      routeProvider,
      mapGl
    );
    routeProvider.addNavigationControl(mapGl, mapboxgl);

    // on map load
    mapGl.on("load", async () => {
      await routeProvider.addPolicePointsToMap(
        mapGl,
        "http://localhost:3001/media/policeman.png",
        pointsObject
      );
      // add police points to the map
      routeProvider.addPopUpForPoliceStations(mapGl, mapboxgl);
      domProvider.onFindUserLocation("#find-me", () => {
        if (!mapGl.getSource("user-location")) {
          routeProvider.addAnimateUserMarker(mapGl, userLocation);
          window.navigator.geolocation.watchPosition(
            pos => {
              let dataGeoJsonUserLocation = {
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [pos.coords.longitude, pos.coords.latitude]
                    }
                  }
                ]
              };
              mapGl.getSource("user-location").setData(dataGeoJsonUserLocation);
            },
            err => {
              throw err;
            },
            { enableHighAccuracy: true }
          );
        } else {
          mapGl.flyTo({
            center: userLocation,
            essential: true,
            zoom: 15
          });
        }
      });

      domProvider.routeFetcherEvent("#find-police-station-btn", async () => {
        routeProvider.addAnimateUserMarker(mapGl, userLocation);
        if (!routeProvider.checkSourceExist(mapGl, "user-location")) {
          routeProvider.addAnimateUserMarker(mapGl, userLocation);
          window.navigator.geolocation.watchPosition(
            pos => {
              let dataGeoJsonUserLocation = {
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [pos.coords.longitude, pos.coords.latitude]
                    }
                  }
                ]
              };
              mapGl.getSource("user-location").setData(dataGeoJsonUserLocation);
            },
            err => {
              throw err;
            },
            { enableHighAccuracy: true }
          );
        } else {
          mapGl.flyTo({
            center: userLocation,
            essential: true,
            zoom: 15
          });
        }
        let nearestPoint = await (
          await apiProvider.findNearestPoint(routeProvider.findUserLocation)
        ).json();
        if (!mapGl.getSource("route")) {
          let routeToPoliceStationData = await (
            await apiProvider.fetchRouteData(
              userLocation,
              [nearestPoint.coords[1], nearestPoint.coords[0]],
              "driving"
            )
          ).json();
          routeProvider.addRouteSource(
            routeToPoliceStationData.routes[0].geometry.coordinates,
            mapGl
          );
          let fetchRouteDataStatus = true;
          if (!routeToPoliceStationData) {
            fetchRouteDataStatus = false;
          }
          domProvider.addPopUp(
            "#route-status-placeholder",
            fetchRouteDataStatus
          );
          domProvider.addRouteInfoToWidget(
            "#route-info-widget",
            "#duration",
            "#distance",
            "#close-route-info",
            routeToPoliceStationData.routes[0].duration,
            routeToPoliceStationData.routes[0].distance
          );
        }
      });
    });
  } catch (e) {
    if (e.code === 1) {
      domProvider.HideMapControllers(
        ".find-my-location",
        ".find-police-station"
      );
      domProvider.addErrorWidget({
        msg: errorProvider.errors().geolocationPermision.msg,
        code: errorProvider.errors().geolocationPermision.code,
        linkOfSolution: "s"
      });
    }
  }
}

main().catch(e => {
  console.log(e);
});
