import React, { useState } from "react";
import "./ImageUp.css";

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ position: "absolute", width: "50vw", height: "50vh" }}>
      <label
        htmlFor="imgIn"
        className="imgIn"
      >
        change meme
      </label>
      <input
        name="imgIn"
        id="imgIn"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {
        <div>
          <img
            src={selectedImage}
            alt="Please select meme"
            style={{ width: "50vw", height: "50vh" }}
          />
        </div>
      }
    </div>
  );
};

export default ImageUploader;
