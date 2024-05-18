/*eslint-disable*/

import React, { useRef, useState } from "react";
import axios from "axios";
import logo from "../assets/person.png";

function UploadImage({ setImageEdit }) {
  const imageRef = useRef(null);

  const [image, setImage] = useState("");
  const handleImageClick = async () => {
    imageRef.current.click();
  };
  const handleImageUpload = async (e) => {
    e.preventDefault();
    setImageEdit(false);
    const response = await axios.post(
      "http://localhost:4000/uploadImage",
      image
    );
    console.log(image);
    console.log(response);
  };
  return (
    <div className="bg-white flex flex-col items-center justify-center gap-10 py-5 ">
      <div>
        {image ? (
          <img
            className="rounded-full w-40 h-40 mr-2"
            src={URL.createObjectURL(image)}
            alt=""
          />
        ) : (
          <img src={logo} className="rounded-full w-40 h-40 mr-2" />
        )}
      </div>
      <form action="" className="flex items-center justify-center">
        <input
          type="file"
          className="hidden"
          ref={imageRef}
          onChange={(e) => {
            console.log(e.target.files[0]);
            setImage(e.target.files[0]);
          }}
        />
        <div
          className="bg-orange-500 px-4 py-2 rounded-lg font-bold cursor-pointer"
          onClick={() => {
            handleImageClick();
          }}
        >
          Upload Image
        </div>
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
