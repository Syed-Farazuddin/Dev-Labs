import React from "react";
import { AiFillDelete } from "react-icons/ai";
import {} from "react-icons/fa";
import { GrVolumeMute } from "react-icons/gr";
import { IoPin } from "react-icons/io5";
function HandlePost() {
  return (
    <div className="absolute">
      <ul className="flex items-center justify-center">
        <li className="flex items-center justify-center">
          <AiFillDelete />
          Delete
        </li>
        <li className="flex items-center justify-center">
          <IoPin />
          Pin to your profile
        </li>
        <li className="flex items-center justify-center">
          <GrVolumeMute />
          Mute this post
        </li>
      </ul>
    </div>
  );
}

export default HandlePost;
