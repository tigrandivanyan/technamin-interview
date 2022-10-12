import React from "react"

function Game({game}) {

  const {home, away, markets_count, match_info} = game ? game : {};

  return (
    <div className="game">
      <div className="text-value">
        <p>Home:</p>
        {
          home?.name ? 
            <p>{home?.name}</p>
          : 
            <p style={{color:'red'}}>No home name</p>
        }
      </div>
      <div className="text-value">
        <p>Away:</p>
        {
          away?.name ? 
            <p>{away?.name}</p>
          : 
            <p style={{color:'red'}}>No away name</p>
        }
      </div>
      <div className="text-value">
        <p>Markets Count:</p>
        {
          markets_count ? 
            <p>{markets_count}</p>
          : 
            <p style={{color:'red'}}>No markets count</p>
        }
      </div>
      <div className="text-value">
        <p>Score:</p>
        {
          match_info?.score ? 
            <p>{match_info?.score}</p>
          : 
            <p style={{color:'red'}}>No match info</p>
        }
      </div>
    </div>
  );
}

export default Game;