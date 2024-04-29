import React, { useContext, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { GlobalContext } from "../../context";
import postIcon from "../../assets/person.png";
import postImg from "../../assets/postImg.png";
import {
  AiFillBell,
  AiFillHome,
  AiFillMessage,
  AiFillNotification,
  AiFillSetting,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { FaRegComment, FaRegHeart, FaShare } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

export default function Homepage() {
  const { userInfo } = useContext(GlobalContext);
  useEffect(() => {
    console.log(userInfo);
  }, []);

  const posts = [
    {
      name: "John",
      subtitle: "kon bane ga don",
      description:
        "Lorem Ipsum is placeholder text commonly used in the design and printing industry. It is used to fill in spaces in a design layout",
      postUrl: "../../assets/postImg.png",
      postIcon: postIcon,
    },
    {
      name: "John",
      subtitle: "kon bane ga don",
      description:
        "Lorem Ipsum is placeholder text commonly used in the design and printing industry. It is used to fill in spaces in a design layout",
      postUrl: "../../assets/postImg.png",
      postIcon: "../../assets/postIcon.png",
    },
    {
      name: "John",
      subtitle: "kon bane ga don",
      description:
        "Lorem Ipsum is placeholder text commonly used in the design and printing industry. It is used to fill in spaces in a design layout",
      postUrl: "../../assets/postImg.png",
      postIcon: "../../assets/postIcon.png",
    },
    {
      name: "John",
      subtitle: "kon bane ga don",
      description:
        "Lorem Ipsum is placeholder text commonly used in the design and printing industry. It is used to fill in spaces in a design layout",
      postUrl: "../../assets/postImg.png",
      postIcon: "../../assets/postIcon.png",
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
        <div className="w-full flex flex-col justify-start items-start gap-4 m-4  ">
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
              <div className="actions flex items-center justify-between">
                {/* import {FaRegHeart} from "react-icons/fa"; */}
                <div className="w-[25%] flex gap-10 items-center justify-between">
                  <div className="hover:bg-red-100 hover:rounded-full w-5 h-5 flex items-center justify-center">
                    <FaRegHeart className="cursor-pointer hover:text-red-500 text-2xl  z-20" />
                  </div>
                  <FaRegComment className="cursor-pointer hover:text-blue-500 text-2xl hover:bg-text-red-500 hover:rounded-full" />
                  <AiOutlineShareAlt className="cursor-pointer hover:text-red-500 text-2xl hover:bg-text-red-500 hover:rounded-full" />
                </div>
                <div>
                  <CiBookmark className="cursor-pointer hover:text-red-500" />
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
