import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { GlobalContext } from "../../context";
import postIcon from "../../assets/person.png";
import postImg from "../../assets/post3.jpg";
import axios from "axios";
import {
  AiFillBell,
  AiFillHome,
  AiFillMessage,
  AiFillSetting,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
  const { userInfo } = useContext(GlobalContext);
  const [post, setPosts] = useState();

  const getPosts = async () => {
    const { data } = await axios.get("http://localhost:4000/getPosts", {
      headers: { Authorization: localStorage.getItem("token") },
    });
    setPosts(data?.posts);
    // if (post) {
    // console.log(post);
    // }
  };

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    getPosts();
    console.log(post);
    // setPosts(posts);
  }, []);

  const posts = [
    {
      name: "John",
      subtitle: "kon bane ga don",
      description:
        "Lorem Ipsum is placeholder text commonly used in the design and printing industry. It is used to fill in spaces in a design layout",
      postUrl: "../../assets/postImg.png",
      postIcon: postIcon,
      likes: 20,
      comments: 5,
      shares: 4,
      bookmarks: 10,
    },
    {
      name: "Syed Faiz",
      subtitle: "kaha se aate hai ye log",
      description:
        "Lorem Ipsum is placeholder text commonly used in the design and printing industry. It is used to fill in spaces in a design layout",
      postUrl: "../../assets/postImg.png",
      postIcon: "../../assets/post2.jpeg",
    },
    {
      name: "John",
      subtitle: "kon bane ga don",
      description:
        "Lorem Ipsum is placeholder text commonly used in the design and printing industry. It is used to fill in spaces in a design layout",
      postUrl: "../../assets/post2.jpeg",
      postIcon: "../../assets/post3.jpg",
    },
    {
      name: "John",
      subtitle: "kon bane ga don",
      description:
        "Lorem Ipsum is placeholder text commonly used in the design and printing industry. It is used to fill in spaces in a design layout",
      postUrl: "../../assets/post3.jpg",
      postIcon: "../../assets/post3.jpg",
    },
  ];

  return (
    <Layout>
      <div className="bg-[#272727] flex  text-slate-300 max-w-7xl mx-auto loginContainer">
        {/* Left container */}
        <div className=" w-[30%] rounded-lg m-4 p-4 ">
          <div>
            <p className="flex items-center gap-2 cursor-pointer hover:bg-[#ffffff14] rounded-lg  text-xl mx-2 my-4 px-2 py-2">
              <AiFillHome />
              Home
            </p>
          </div>
          <div>
            <p className="flex items-center gap-2 cursor-pointer hover:bg-[#ffffff14] rounded-lg  text-xl mx-2 my-4 px-2 py-2">
              <AiFillBell />
              Notifications
            </p>
          </div>

          <div>
            <p className="flex items-center gap-2 cursor-pointer hover:bg-[#ffffff14] rounded-lg  text-xl mx-2 my-4 px-2 py-2">
              <AiFillMessage />
              Messages
            </p>
          </div>
          <div>
            <p className="flex items-center gap-2 cursor-pointer hover:bg-[#ffffff14] rounded-lg  text-xl mx-2 my-4 px-2 py-2">
              <AiFillSetting />
              Settings
            </p>
          </div>
          <div className="bg-orange-400 text-white font-bold text-xl mx-2 text-center flex items-center justify-center  my-4 p-2 rounded-lg cursor-pointer">
            <p className="flex items-center gap-2 cursor-pointer">Post</p>
          </div>
        </div>
        {/* Main container */}
        <div className=" flex flex-col justify-start items-start gap-4 m-4 ">
          {posts.map((item, ind) => (
            <div
              className="bg-[#ffffff14] rounded-lg px-8 py-4 flex flex-col gap-4"
              key={ind}
            >
              <div className="flex gap-2 items-center cursor-pointer">
                <img className="w-10 h-10 rounded-full" src={postIcon} alt="" />
                <div className="flex flex-col">
                  <h1 className="text-[12px]">{item.name}</h1>
                  <p className="text-state-400 text-[10px]">{item.subtitle}</p>
                </div>
              </div>
              <div className="">
                <p>{item.description}</p>
              </div>
              <div className="w-[350px]">
                <img src={postImg} alt="" />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center justify-start gap-4 w-full">
                  <div className="flex justify-start items-center gap-1 hover:text-red-500 cursor-pointer ">
                    <FaRegHeart />
                    <p>{item.likes}</p>
                  </div>
                  <div className="flex justify-start items-center gap-1 hover:text-blue-500 cursor-pointer">
                    <FaRegComment />
                    <p>{item.comments}</p>
                  </div>
                  <div className="flex justify-start items-center gap-1 hover:text-orange-500 cursor-pointer">
                    <AiOutlineShareAlt />
                    <p>{item.shares}</p>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-1 hover:text-green-500 cursor-pointer">
                  <CiBookmark />
                  <p>{item.bookmarks}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Right container */}
        <div className="w-[65%] border border-slate-400 m-4 rounded-lg p-4">
          Right Container
        </div>
      </div>
    </Layout>
  );
}
