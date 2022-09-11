import React, { useEffect } from "react";
import { updateDisplay } from "../../../utils/animation";

import "./Unit.css";

function Unit(props) {
  useEffect(() => {
    updateDisplay(props.unitValue, props.unit);
  }, [props.unitValue, props.unit]);

  return (
    <div className="Seconds timer-part">
      <div className="outer" id={props.unit}>
        <div className="top-front">
          <span className="number">{props.unitValue}</span>
        </div>
        <div className="top-back">
          <span className="number">{props.unitValue}</span>
        </div>
        <div className="bottom-front">
          <span className="number">{props.unitValue}</span>
        </div>
        <div className="bottom-back">
          <span className="number">{props.unitValue}</span>
        </div>
      </div>
      <p className="label">{props.unit}s</p>
    </div>
  );
}

export default Unit;
