import React from "react";
import Timer from "./assets/Timer";
import SepLines from "./assets/SepLines";
import "./App.css";
import ImageUploader from "./assets/ImageUploader";

function App() {
  return (
    <div className="back">
      <div style={{ width: "50vw", height: "50vh", fontSize: "3rem" }}>
        <ImageUploader></ImageUploader>
      </div>
      <Timer />
      <Timer />
      <Timer />
      <SepLines></SepLines>
    </div>
  );
}

export default App;
