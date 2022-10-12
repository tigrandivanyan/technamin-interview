import React from "react"

function Game({game}) {

  return (
    <div className="Sport">
      home:
      {game.home.name} <br/>
      away:
      {game.home.away} <br/>
      markets_count:
      {game.markets_count} <br/>
      score:
      {game.match_info.score} <br/>
    </div>
  );
}

export default Game;