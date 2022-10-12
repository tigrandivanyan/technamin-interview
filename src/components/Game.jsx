import React from "react"

function Game({game}) {

  return (
    <div className="Sport">
      <div className="text-value">
        <p>Home:</p>
        <p>{game.home.name}</p>
      </div>
      <div className="text-value">
        <p>Away:</p>
        <p>{game.away.name}</p>
      </div>
      <div className="text-value">
        <p>Markets Count:</p>
        <p>{game.markets_count}</p>
      </div>
      <div className="text-value">
        <p>Score:</p>
        <p>{game.match_info.score}</p>
      </div>
    </div>
  );
}

export default Game;