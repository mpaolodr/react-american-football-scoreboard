//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import TopRow from "./TopRow";
import HomeButtons from "./HomeButtons";
import AwayButtons from "./AwayButtons";
import Change from "./changeQuarter";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  //LIONS
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(1);

  const home = e => {
    if (e.target.className === "homeButtons__touchdown") {
      setHomeScore(homeScore + 7);
    } else {
      setHomeScore(homeScore + 3);
    }
  };

  //HANDLER TO INCREASE SCORE MANUALLY

  const away = e => {
    if (e.target.className === "awayButtons__touchdown") {
      setAwayScore(awayScore + 7);
    } else {
      setAwayScore(awayScore + 3);
    }
  };

  //TO CHANGE QUARTERS

  const changeQuarter = () => {
    if (quarter < 4) {
      setQuarter(quarter + 1);
    } else {
      setQuarter(1);
    }
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow
          homeName="Chiefs"
          awayName="Patriots"
          minutes="12"
          seconds="00"
          homeScore={homeScore}
          awayScore={awayScore}
        />
        <BottomRow quarter={quarter} />
      </section>
      <section className="buttons">
        <HomeButtons func={home} />
        <AwayButtons func={away} />
        <Change changeQuarter={changeQuarter} onClick={changeQuarter} />
      </section>
    </div>
  );
}

export default App;
