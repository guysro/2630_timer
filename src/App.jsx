import React from "react";
import Timer from "./assets/Timer";
import SepLines from "./assets/SepLines";
import DailyMeme from "./assets/DailyMeme";
import "./App.css";

function App() {
  return (
    <div className="back">
      <div style={{ width: "50vw", height: "50vh", fontSize: "3rem" }}>
        <DailyMeme></DailyMeme>
      </div>
      <Timer />
      <Timer />
      <Timer />
      <SepLines></SepLines>
    </div>
  );
}

export default App;
