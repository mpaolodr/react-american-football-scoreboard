import React from "react";

function Change({ changeQuarter }) {
  return (
    <div className="homeButtons">
      <button onClick={changeQuarter}>Change Quarter</button>
    </div>
  );
}

export default Change;
