import "./styles.css";
import Options from "./Components/options.jsx";
import Rules from "./Components/rules.jsx";
import Map from "./Components/map.jsx";
import React, { useState } from "react";

//******************** */
//READ the bottom comments
//******************** */

export default function App() {
  //win codition using Points var
  let [Points, setpoints] = useState(0);
  if (Points === 4) {
    alert("Pirate booty acquired");
  }

  //counts hits until loss
  let [hits, setHits] = useState(0);
  if (hits === 3) {
    alert("You got sent to Davy Jones's locker");
  }

  return (
    <div className="App">
      {/* use this h1 tag as a reference to help 
      get a better idea on styling each component */}
      <h1 className="meat">
        <marquee>Treasure Quest</marquee>
      </h1>
      <Rules />
      <h1> Points: {Points} </h1>
      <h1> Hits: {hits} </h1>
      {/* Map: passes the usestate vars defined above as props */}
      <Map
        Points={Points}
        setpoints={setpoints}
        hits={hits}
        setHits={setHits}
      />
      <Options setpoints={setpoints} setHits={setHits} />

      <h4 className="btmText">&copy; Copyright by the Pirates🏴 ☠️</h4>
    </div>
  );
}

/*
to do:
  drip up the site
  make proper win condition
  lose condition too

bugs:
  chest and kraken can be clicked more than once to inc scores
  reset inital img after reset buttion clicked
  after win or loss, user can still select other squares

*/
