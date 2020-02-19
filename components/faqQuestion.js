import { useState } from "react";
import Fab from "./fab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons/faArrowDown";

const Question = props => {
  const [slideDown, setSlideDown] = useState(false);

  function slider() {
    if (slideDown) {
      return {
        maxHeight: "100vh"
      };
    }
  }

  const styles = {
    mainView: {
      backgroundColor: "#eee",
      borderRadius: 9
    }
  };
  return (
    <section className={"py-4 px-5"} style={styles.mainView}>
      <div className={"d-flex flex-row  justify-content-between"}>
        <h2
          className={"text-muted text-right"}
          onClick={() => setSlideDown(!slideDown)}
          style={{ cursor: "pointer" }}
        >
          {props.title}
        </h2>
        <button
          style={{
            color: "#756363",
            backgroundColor: "#D1D1D1",
            borderColor: "transparent",
            borderRadius: "50%",
            height: "50px",
            width: "50px",
            outline: "none",
            fontSize: "23px"
          }}
          className="shadow simple-hover"
          onClick={() => setSlideDown(!slideDown)}
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </div>
      <p
        className="lead text-right px-2 transtional-slider-down d-flex align-items-center"
        style={{ ...slider(), overflow: "hidden" }}
      >
        {props.answear}
      </p>
      <hr />
    </section>
  );
};

export default Question;
