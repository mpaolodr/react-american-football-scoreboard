import React from "react";

function Change({ changeQuarter }) {
  return (
    <div className="change">
      <button className="change__button" onClick={changeQuarter}>
        Change Quarter
      </button>
    </div>
  );
}

export default Change;
