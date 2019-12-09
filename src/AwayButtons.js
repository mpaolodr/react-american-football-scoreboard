import React from "react";

function AwayButtons({ func }) {
  return (
    <div className="awayButtons">
      <button className="awayButtons__touchdown" onClick={func}>
        Away Touchdown
      </button>
      <button className="awayButtons__fieldGoal" onClick={func}>
        Away Field Goal
      </button>
    </div>
  );
}

export default AwayButtons;
