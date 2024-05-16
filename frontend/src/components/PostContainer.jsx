/* eslint-disable*/
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";

function PostContainer({ postOption, setPostOption, post, setPosts }) {
  const modelRef = useRef();

  const handlePostSubmit = async () => {
    if (description !== null || image !== null) {
      const { data } = await axios.post(
        "http://localhost:4000/createPost",
        {
          description,
          image,
        },
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      const userAuth = JSON.parse(localStorage.getItem("auth"));
      console.log(userAuth);
      setPosts((prev) => {
        return [
          {
            description,
            image,
            userAuth: { userName: userAuth.name, email: userAuth.email },
          },
          ...prev,
        ];
      });
      console.log(post);
    }
    setPostOption(false);
    // window.location.reload();
  };

  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [scrollY, setScrollY] = useState(0);

  const outsideClick = (e) => {
    if (postOption && !modelRef?.current?.contains(e.target)) {
      setPostOption(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", outsideClick);
  }, []);

  // useEffect(() => {
  //   if (postOption) {
  //     setScrollY(window.scrollY);
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //     window.scrollTo(0, scrollY);
  //   }
  // }, []);

  useEffect(() => {}, [handlePostSubmit]);

  return (
    <div
      className="bg-white flex flex-col items-center justify-center gap-10 rounded-xl py-5"
      ref={modelRef}
    >
      <button
        onClick={() => {
          setPostOption(false);
        }}
        className="text-slate-900 self-end mr-20 font-extrabold bg-slate-200 px-2 py-2 rounded-full"
      >
        <AiOutlineClose className="text-lg" />
      </button>
      <div className="flex flex-col gap-2 w-full justify-start items-center">
        <label
          htmlFor="description"
          className="text-xl font-bold text-slate-900 justify-start text-left w-1/2 px-4"
        >
          Title / Description
        </label>
        <textarea
          value={description}
          rows={4}
          cols={4}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          type="text"
          id="description"
          className="border rounded-lg text-slate-800 px-4 py-2 w-1/2"
          placeholder="Enter what you want to post"
        />
      </div>
      <div className="flex flex-col gap-2 w-full justify-start items-center">
        <label
          htmlFor="description"
          className="text-xl font-bold text-slate-900 justify-start text-left w-1/2 px-4"
        >
          Image URL
        </label>
        <input
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
          type="text"
          id="description"
          className="border rounded-lg text-slate-800 px-4 py-2 w-1/2"
          placeholder="Enter what you want to post"
        />
        <button
          className="bg-orange-500 text-white my-5 px-4 py-2  w-1/2 rounded-lg"
          onClick={() => {
            handlePostSubmit();
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default PostContainer;
