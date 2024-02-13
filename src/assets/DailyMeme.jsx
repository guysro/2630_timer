import React from "react";
import ImageUploader from "./ImageUploader";

function DailyMeme() {
  return (
    <div style={{ width: "50vw", height: "50vh", position: "relative" }}>
      <ImageUploader />
      {/* <img
        alt="no meme :("
        src="./ground.jpg"
        style={{ height: "50vh", width: "50vw", top: 0, left: 0, zIndex: 1 }}
      /> */}
    </div>
  );
}

export default DailyMeme;
