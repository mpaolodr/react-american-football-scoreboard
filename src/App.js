//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import TopRow from "./TopRow";
import HomeButtons from "./HomeButtons";
import AwayButtons from "./AwayButtons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  //LIONS
  const [homeScore, setHomeScore] = useState(32);
  const [awayScore, setAwayScore] = useState(32);

  const home = e => {
    if (e.target.className === "homeButtons__touchdown") {
      setHomeScore(homeScore + 7);
    } else {
      setHomeScore(homeScore + 3);
    }
  };

  const away = e => {
    if (e.target.className === "awayButtons__touchdown") {
      setAwayScore(awayScore + 7);
    } else {
      setAwayScore(awayScore + 3);
    }
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow
          homeName="Chiefs"
          awayName="Patriots"
          minutes="05"
          seconds="02"
          homeScore={homeScore}
          awayScore={awayScore}
        />
        <BottomRow />
      </section>
      <section className="buttons">
        <HomeButtons func={home} />
        <AwayButtons func={away} />
      </section>
    </div>
  );
}

export default App;
