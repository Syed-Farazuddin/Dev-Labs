/*eslint-disable */

import React, { useContext, useState, useEffect, useRef } from "react";
// import { BsThreeDots } from "react-icons/bs";
import { GlobalContext } from "../context";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { AiOutlineShareAlt } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
// import HandlePost from "./HandlePost";
import { TiTrash } from "react-icons/ti";
import axios from "axios";
function PostCard({ item, getPosts }) {
  const { userInfo } = useContext(GlobalContext);
  const [editPostDetails, setEditPostDetails] = useState(null);
  const [popUpPos, setPopUpPos] = useState(null);
  const [managePost, setManagePost] = useState(false);

  const handleDeletePost = async (i) => {
    const response = await axios.post(
      "http://localhost:4000/deletePost",
      {
        id: i?.ItemData?._id,
      },
      { headers: { Authorization: localStorage.getItem("token") } }
    );
    console.log(response);
    getPosts();
  };

  //   const handleManagePost = (event) => {
  //     const managePos = event.target.getBoundingClientRect();
  //     setPopUpPos({ left: managePos.left, top: managePos.bottom });
  //     setManagePost(true);
  //     setEditPostDetails(item);
  //   };
  const handleLike = async (postDetails) => {
    console.log(postDetails);
    const userID = userInfo.id;
    const { data } = await axios.post(
      "http://localhost:4000/updateLikes",
      { postDetails, userID },
      {
        headers: { Authorization: localStorage.getItem("token") },
      }
    );
    getPosts();
  };
  useEffect(() => {}, [handleLike]);

  return (
    <section className="bg-[#ffffff14] rounded-lg px-8 py-4 flex flex-col gap-4 relative">
      <div className="flex gap-2 items-center cursor-pointer">
        <img className="w-10 h-10 rounded-full" src={item?.image} alt="" />
        <div className="flex flex-col w-full">
          <div className="w-full flex justify-between items-center mb-2">
            <div className="flex flex-col pt-1 items-start justify-start">
              <h1 className="text-[12px]">
                {item?.userAuth?.userName === null
                  ? userInfo.name
                  : item?.userAuth?.userName}
              </h1>
              <p className="text-state-400 text-[10px]">
                {item?.userID?.details?.bio}
              </p>
            </div>
            <button
              className="relative border rounded-full p-1 border-slate-500 text-lg hover:text-red-500"
              onClick={() => {
                handleDeletePost({ ItemData: item });
              }}
              //   onClick={(event) => {
              //     handleManagePost(event);
              //   }}
              //   handleDe
            >
              {/* <BsThreeDots /> */}
              <TiTrash />
            </button>
            {/* {managePost && (
              <HandlePost
                getPosts={getPosts}
                popUpPos={popUpPos}
                editPostDetails={editPostDetails}
              />
            )} */}
          </div>
        </div>
      </div>
      <div className="">
        <p>{item.description}</p>
      </div>
      <div className="w-[350px]">
        <img src={item?.image} alt="" />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-start gap-4 w-full">
          <div
            className="flex justify-start items-center gap-1 hover:text-red-500 cursor-pointer"
            onClick={() => {
              handleLike(item);
            }}
            // import { FaHeart } from "react-icons/fa";
          >
            {item?.likedBy?.indexOf(userInfo.id) !== -1 ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="" />
            )}
            <p>{item?.likes}</p>
          </div>
          <div className="flex justify-start items-center gap-1 hover:text-blue-500 cursor-pointer">
            <FaRegComment />
            <p>{item?.comments}</p>
          </div>
          <div className="flex justify-start items-center gap-1 hover:text-orange-500 cursor-pointer">
            <AiOutlineShareAlt />
            <p>{item?.shares}</p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-1 hover:text-green-500 cursor-pointer">
          <CiBookmark />
          <p>{item.bookmarks}</p>
        </div>
      </div>
    </section>
  );
}

export default PostCard;
