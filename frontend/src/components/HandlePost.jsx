/*eslint-disable*/

import React from "react";
import { AiFillDelete } from "react-icons/ai";
import {} from "react-icons/fa";
import { GrVolumeMute } from "react-icons/gr";
import { IoPin } from "react-icons/io5";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { TiCancel } from "react-icons/ti";
import axios from "axios";

function HandlePost({ editPostDetails, getPosts }) {
  console.log(editPostDetails);
  const handleDeletePost = async () => {
    const response = await axios.post(
      "http://localhost:4000/deletePost",
      {
        id: editPostDetails._id,
      },
      { headers: { Authorization: localStorage.getItem("token") } }
    );
    console.log(response);
    getPosts();
  };
  return (
    <div className="absolute bg-white flex flex-col gap-4 w-fit right-0 opacity-70 top-2 text-slate-700">
      <ul className="flex items-start justify-center flex-col">
        <li className="flex items-center justify-start gap-2 hover:bg-slate-400 px-4 py-2 w-full">
          <HiOutlineEmojiSad />
          Not Interested in this post
        </li>
        <li className="flex items-center justify-start gap-2 hover:bg-slate-400 px-4 py-2 w-full">
          <TiCancel />
          Block this user
        </li>
        <li
          className="flex items-center justify-start gap-2 hover:bg-slate-400 px-4 py-2 w-full"
          onClick={() => {
            handleDeletePost();
          }}
        >
          <AiFillDelete />
          Delete
        </li>
        <li className="flex items-center justify-start gap-2 hover:bg-slate-400 px-4 py-2 w-full">
          <IoPin />
          Pin to your profile
        </li>
        <li className="flex items-center justify-start gap-2 hover:bg-slate-400 px-4 py-2 w-full">
          <GrVolumeMute />
          Mute this post
        </li>
      </ul>
    </div>
  );
}

export default HandlePost;
