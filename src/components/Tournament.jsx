import React from "react"
import Game from "./Game";

function Tournament({tournament}) {

  function revealGames(){
    return tournament.games.map((game, index) => {
      return <Game game={game} key={index}/>
    })
  }

  return (
    <div className="tournament">
      <p className="tournament-name">{tournament.name ? tournament.name : 'No Tournament Name'}</p>
      <div style={{marginLeft:"30px"}} className="games">
        {revealGames()}
      </div>
    </div>
  );
}

export default Tournament;