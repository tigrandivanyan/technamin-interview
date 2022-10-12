import React from "react"
import Game from "./Game";

function Tournament({tournament}) {

  function revealGames(){
    return tournament.games.map((game, index) => {
      return <Game game={game} key={index}/>
    })
  }

  return (
    <div className="Tournament">
      {tournament.name}
      <div style={{marginLeft:"30px"}} className="games">
        {revealGames()}
      </div>
    </div>
  );
}

export default Tournament;