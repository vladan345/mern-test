import React from "react";

export default function Seconds(props) {
  return (
    <div className="Seconds timer-part">
      <div className="outer" id="second">
        <div className="top-front">
          <span className="number">{props.seconds}</span>
        </div>
        <div className="top-back">
          <span className="number">{props.seconds}</span>
        </div>
        <div className="bottom-front">
          <span className="number">{props.seconds}</span>
        </div>
        <div className="bottom-back">
          <span className="number">{props.seconds}</span>
        </div>
      </div>
      <p className="label">seconds</p>
    </div>
  );
}
