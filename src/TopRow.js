import React from "react";

function TopRow({
  homeTeam,
  awayTeam,
  minutes,
  seconds,
  homeScore,
  awayScore
}) {
  return (
    <div className="topRow">
      <div className="home">
        <h2 className="home__name">{homeTeam}</h2>
        <div className="home__score">{homeScore}</div>
      </div>
      <div className="timer">
        {minutes}:{seconds}
      </div>
      <div className="away">
        <h2 className="away__name">{awayTeam}</h2>
        <div className="away__score">{awayScore}</div>
      </div>
    </div>
  );
}

export default TopRow;
