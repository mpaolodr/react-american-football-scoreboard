import React from "react";

function AwayButtons({ away }) {
  return (
    <div className="awayButtons">
      <button className="awayButtons__touchdown" onClick={away}>
        Away Touchdown
      </button>
      <button className="awayButtons__fieldGoal" onClick={away}>
        Away Field Goal
      </button>
    </div>
  );
}

export default AwayButtons;
