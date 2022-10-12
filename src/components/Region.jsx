import React from "react"
import Tournament from "./Tournament";

function Region({region}) {

  function revealTournaments(){
    return region.tournaments.map((tournament, index) => {
      return <Tournament tournament={tournament} key={index}/>
    })
  }

  return (
    <div className="region">
      <p className="region-name">{region.name}</p>
      <div style={{marginLeft:"20px"}} className="tournaments">
        {revealTournaments()}
      </div>
    </div>
  );
}

export default Region;