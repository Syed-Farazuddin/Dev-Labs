import React, { useState } from "react";
import axios from "axios";
function UploadImage() {
  const [image, setImage] = useState("");
  const handleImageUpload = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:4000/uploadImage", {
      image,
    });
    console.log(image);
    console.log(response);
  };
  return (
    <div>
      <form action="">
        <input
          type="file"
          onChange={(e) => {
            console.log(e.target.value);
            setImage(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            handleImageUpload(e);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UploadImage;
