import React from "react";
import "./index.css";

function SecondsCounter({ seconds }) {
  const padded = String(seconds).padStart(6, "0");
  const digits = padded.split("");
  return (
    <div className="seconds-counter d-flex align-items-center">
      <div className="clock-icon me-3">
        <i className="fa-solid fa-clock fa-2x"></i>
      </div>
      <div className="digits d-flex">
        {digits.map((d, i) => (
          <div key={i} className="digit-box">
            {d}
          </div>
        ))}
      </div>
    </div>
  );
}
export default SecondsCounter;
