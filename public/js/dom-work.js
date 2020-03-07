class domWork {
  addErrorWidget({ msg, code, linkOfSolution }) {
    try {
      let options = {
        msg,
        code,
        linkOfSolution
      };

      // handle error if there is any one of them empty
      for (let Ioption in options) {
        if (!options[Ioption]) {
          throw new Error(`${Ioption} should not empty`);
        }
      }

      const DomObject = {
        close: document.querySelector("#close-error-widget-btn"),
        code: document.querySelector("#error-code-placeholder"),
        msg: document.querySelector("#error-msg-placeholder"),
        link: document.querySelector("#link-solution"),
        widget: document.querySelector("#error-widget")
      };

      DomObject.widget.classList.remove("d-none");
      DomObject.code.textContent = code;
      DomObject.msg.textContent = msg;
      DomObject.link.href = linkOfSolution;

      DomObject.close.addEventListener(
        "click",
        () => {
          if (!DomObject.widget.classList.contains("d-none")) {
            DomObject.widget.classList.add("d-none");
          }
        },
        true
      );
      // hide error msg event
      DomObject.close.addEventListener("click", e => {});
    } catch (e) {
      console.log(e);
    }
  }

  onFindUserLocation(btnDomClass, cb) {
    const findlocationbtn = document.querySelector(btnDomClass);
    findlocationbtn.addEventListener("click", e => {
      cb();
    });
  }

  HideMapControllers(findMeClass, findPoliceStation) {
    let findMeButton = document.querySelector(findMeClass);
    let findPoliceStationBtn = document.querySelector(findPoliceStation);
    findMeButton.remove();
    findPoliceStationBtn.remove();
  }

  addPolicePointsListToDom(points, listClass, RouteProvider, map) {
    let pointsDomList = document.querySelector(listClass);
    points.forEach((e, id) => {
      let liElement = document.createElement("li");
      liElement.style.textAlign = "center";
      liElement.style.cursor = "pointer";
      liElement.textContent = e.name;
      liElement.setAttribute("class", "list-group-item police-point-list-item");
      liElement.addEventListener("click", () => {
        RouteProvider.flyTo(map, [e.cordinates[1], e.cordinates[0]], 15);
      });
      pointsDomList.appendChild(liElement);
    });
  }

  routeFetcherEvent(btnClass, cb) {
    const findRouteBtn = document.querySelector(btnClass);
    findRouteBtn.addEventListener("click", () => {
      cb();
    });
  }

  addPopUp(PopUpClass, status) {
    const popUpDom = document.querySelector(PopUpClass);
    const popUpWidgetDom = popUpDom.parentNode;
    if (
      popUpWidgetDom.classList.contains("animated") &&
      popUpWidgetDom.classList.contains("fadeOut")
    ) {
      popUpWidgetDom.classList.remove("animated");
      popUpWidgetDom.classList.remove("fadeOut");
    }
    if (!status) {
      popUpWidgetDom.classList.add("alert-danger");
      popUpDom.textContent = "حدث خطأ ما ";
    }
    popUpDom.textContent = "تمت بنجاح";
    popUpWidgetDom.classList.add("alert-success");
    setTimeout(() => {
      popUpWidgetDom.classList.add("animated", "fadeOut");
    }, 1000);
  }

  addRouteInfoToWidget(
    widgetClassDom,
    durationDom,
    DistanceDom,
    closeBtnDom,
    durationBySecond,
    DistanceByMeter
  ) {
    let widgetEl = document.querySelector(widgetClassDom);
    let durationEl = document.querySelector(durationDom);
    let distanceEl = document.querySelector(DistanceDom);
    let closeBtn = document.querySelector(closeBtnDom);

    if (widgetEl.classList.contains("d-none")) {
      widgetEl.classList.remove("d-none");
    }
    closeBtn.addEventListener("click", () => {
      widgetEl.remove();
    });
    durationEl.textContent = (durationBySecond / 60).toFixed(2) + " M";
    distanceEl.textContent = (DistanceByMeter / 1000).toFixed(2) + " KM";
  }
}

const injectedDomWORK = new domWork();

export default injectedDomWORK;
