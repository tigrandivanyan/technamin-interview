import React from "react"
import { useEffect, useState } from "react";
import Sport from "./components/Sport";
import getData from './functions/getData';
import restructureGameInfo from "./functions/restructureGameInfo";

function Main() {

  const [data, setData] = useState()

  useEffect(() => {
    setData(restructureGameInfo(getData()));
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  function revealSports() {
    return data?.map((sport, index) =>{
      return <Sport sport={sport} key={index}/>
    })
  }

  return (
    <div className="main">
      {revealSports()}
    </div>
  );
}

export default Main;
