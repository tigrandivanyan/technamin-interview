import React from "react"
import Tournament from "./Tournament";

function Region({region}) {

  function revealTournaments(){
    return region.tournaments.map((tournament, index) => {
      return <Tournament tournamnet={tournament} key={index}/>
    })
  }

  return (
    <div className="Region">
      {region.name}
      <div style={{marginLeft:"20px"}} className="tournaments">
        {revealTournaments()}
      </div>
    </div>
  );
}

export default Region;