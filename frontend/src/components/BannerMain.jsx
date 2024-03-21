import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import banner from "../assets/dev.webp";
import banner1 from "../assets/dev1.jpeg";
import ai from "../assets/ai.jpg";
import person from "../assets/person.png";
import { Link } from "react-router-dom";
function Main() {
  const [email, setEmail] = useState("");
  return (
    <div className="mt-10">
      {/* First section */}
      <div className="flex flex-col gap-2 h-[100vh] py-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-headings text-6xl font-extrabold text-center ">
            Start your developer journey
          </h1>
          <p className="text-subtitles text-xl text-center">
            Riding the Wave of Innovation, Networking Globally, and Elevating
            Developer Profiles
          </p>
          <div className="flex items-center justify-center gap-2 ">
            <div className="flex border-2 border-slate-300 justify-between items-center w-[50%]">
              <input
                type="text"
                value={email}
                placeholder="Enter your email address"
                className="px-4 py-2 outline-none border-none w-full"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <p className="text-[20px] mr-2 text-slate-500">
                <MdOutlineMail />
              </p>
            </div>
            <Link
              to={"/register"}
              className="w-[15%] bg-buttonBlue px-4 py-2 flex items-start justify-center text-white hover:bg-textBlue"
            >
              <button className="cursor-pointer">Sign Up</button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center justify-center mx-auto mt-6">
          <img className="" src={banner1} alt="" />
          <img className="h-[225px]" src={banner} alt="" />
        </div>
      </div>
      {/* Second section */}
      <div className="flex max-w-6xl mx-auto items-center justify-center flex-col h-[100vh] gap-20">
        <h1 className="text-headings text-6xl font-extrabold text-center">
          Discover, Share and Connect
        </h1>
        <div className="flex justify-center items-center max-w-6xl mx-auto gap-10">
          <p className="text-subtitles text-xl text-center w-[30%]">
            Make your connections globally, Learn from different professionals,
            Share your Experiences, Explore new technologies, Get best learning
            paths!
          </p>
          <img className="w-80 h-80" src={ai} alt="" />
        </div>
      </div>
      {/* Third Section */}
      <div className="flex items-center max-w-6xl mx-auto flex-col  mt-10 gap-10 h-[100vh]">
        <h1 className="text-headings text-6xl font-extrabold text-center">
          Discover an Entire different Development space
        </h1>
        <div className="flex justify-center items-center gap-10">
          <p className="text-subtitles text-xl text-center w-[30%]">
            Unleashing Your Potential, Building Your Profile and Thriving in the
            Tech Community
          </p>
          <img className="h-80 w-80" src={person} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Main;
