import React from "react";

function HomeButtons({ home }) {
  return (
    <div className="homeButtons">
      {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
      <button className="homeButtons__touchdown" onClick={home}>
        Home Touchdown
      </button>
      <button className="homeButtons__fieldGoal" onClick={home}>
        Home Field Goal
      </button>
    </div>
  );
}

export default HomeButtons;
