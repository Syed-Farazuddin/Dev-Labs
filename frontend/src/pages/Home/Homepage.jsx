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
} from "react-icons/ai";

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
      <div className="bg-[#272727] flex  text-slate-300">
        <div className="bg-[#303030] w-[30%] rounded-lg m-4 p-4">
          <div>
            <p className="flex items-center gap-2 cursor-pointer hover:bg-slate-600 rounded-lg  text-xl mx-2 my-4 px-2 py-2">
              <AiFillHome />
              Home
            </p>
          </div>
          <div>
            <p className="flex items-center gap-2 cursor-pointer hover:bg-slate-600 rounded-lg  text-xl mx-2 my-4 px-2 py-2">
              <AiFillBell />
              Notifications
            </p>
          </div>

          <div>
            <p className="flex items-center gap-2 cursor-pointer hover:bg-slate-600 rounded-lg  text-xl mx-2 my-4 px-2 py-2">
              <AiFillMessage />
              Messages
            </p>
          </div>
          <div>
            <p className="flex items-center gap-2 cursor-pointer hover:bg-slate-600 rounded-lg  text-xl mx-2 my-4 px-2 py-2">
              <AiFillSetting />
              Settings
            </p>
          </div>
          <div className="bg-orange-400 text-white font-bold text-xl mx-2 text-center flex items-center justify-center  my-4 p-2 rounded-lg">
            <p className="flex items-center gap-2 cursor-pointer">Post</p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-4 m-4 ">
          {posts.map((item, ind) => (
            <div
              className="bg-[#565656] px-4 py-2 flex flex-col gap-4"
              key={ind}
            >
              <div className="flex gap-1 items-center cursor-pointer">
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
            </div>
          ))}
        </div>
        <div className="w-[25%] border border-slate-400 m-4 rounded-lg p-4">
          Right Container
        </div>
      </div>
    </Layout>
  );
}
