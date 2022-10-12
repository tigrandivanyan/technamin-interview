import React from "react"
import Region from "./Region";

function Sport({sport}) {

  function revealRegions(){
    return sport.regions.map((region, index) => {
      return <Region region={region} key={index}/>
    })
  }

  return (
    <div className="Sport">
      {sport.name}
      <div style={{marginLeft:"10px"}} className="regions">
        {revealRegions()}
      </div>
    </div>
  );
}

export default Sport;