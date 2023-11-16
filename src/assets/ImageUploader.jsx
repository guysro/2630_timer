import React, { useState } from "react";
import "./ImageUp.css";

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [op, setOp] = useState("Add Meme");

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setOp("");

      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label
        htmlFor="imgIn"
        className="imgIn"
      >
        {op}
      </label>
      <input
        name="imgIn"
        id="imgIn"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {
        <div style={{ margin: 0, width: "50vw", height: "50vh" }}>
          <img
            src={selectedImage}
            alt=""
            style={{ position: "absolute", width: "50vw", height: "50vh", border: "none", margin: 0 }}
          />
        </div>
      }
    </div>
  );
};

export default ImageUploader;
