import React, { useState } from "react";
import logo from "../assets/person.png";
import axios from "axios";
import { IoGlobeOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { FaEdit } from "react-icons/fa";
function UserProfile() {
  const [github, setGithub] = useState("");
  const [githubError, setGithubError] = useState();
  const [gitInfo, setGitInfo] = useState([]);
  const [leetcodeUser, setLeetcodeUser] = useState("");
  const [cfUser, setCfUser] = useState("");
  const handleSubmit = async () => {
    // https://api.github.com/users/${name}
    // https://leetcode-stats-api.herokuapp.com/<YOUR_USERNAME>
    // GET https://codeforces.com/api/user.info?handles={userName}

    if (github.length !== 0) {
      const response = await axios.get(
        `https://api.github.com/users/${github}`
      );
      const { data } = response;
      if (data) {
        setGitInfo(data);
      } else {
        setGithubError(true);
      }
      console.log(data);
    }
  };
  return (
    <div className="flex justify-start items-center p-10  bg-[#272727]  gap-10">
      <div className="px-6 py-8 bg-[#353535] rounded-lg">
        <div className="flex justify-start items-start p-4 rounded-lg gap-2 flex-[40%]">
          <img className="rounded-full w-40 h-40 mr-2" src={logo} alt="" />
          <div className="flex items-start justify-center flex-col gap-2 mt-4">
            <div className="flex items-center justify-between gap-4 w-full">
              <h1 className="text-2xl font-bold text-[#eeeeee] w-full">
                Syed Farazuddin
              </h1>
              <div className="text-[#eeeeee] cursor-pointer">
                <FaEdit />
              </div>
            </div>
            <p className="text-slate-200 text-pretty">
              Final Year BE Student | CSE | Web Developer | MERN | React | Java
            </p>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="flex items-center justify-start text-slate-200 gap-2 ml-10 mt-5 items-center">
              <p className="text-slate-200">
                <IoGlobeOutline />
              </p>
              <a href="https://syed-farazuddin.github.io/My-Portfolio/">
                Website
              </a>
            </div>
            <div className="flex items-center justify-start text-slate-200 gap-2 ml-10 mt-5">
              <p className="text-slate-200">
                <FaGithub />
              </p>
              <a href="https://syed-farazuddin.github.io/My-Portfolio/">
                Github
              </a>
            </div>
            <div className="flex items-center justify-start text-slate-200 gap-2 ml-10 mt-5">
              <p className="text-slate-200">
                <SiLeetcode />
              </p>
              <a href="https://syed-farazuddin.github.io/My-Portfolio/">
                Leetcode
              </a>
            </div>
            <div className="flex items-center justify-start text-slate-200 gap-2 ml-10 mt-5">
              <p className="text-slate-200">
                <SiCodeforces />
              </p>
              <a href="https://syed-farazuddin.github.io/My-Portfolio/">
                Codeforces
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 py-8 bg-[#353535] rounded-lg w-full">
        <div className="heading">User name from This page website</div>
        <div className="userDetails">User Details of the same</div>
        <div className="github flex gap-4 items-center justify-center flex-col text-black">
          {/* Github Input box */}
          <div className="github flex  items-start justify-center bg-slate-200 border-[1px] w-[400px] border-slate-700 rounded-lg overflow-hidden text-black">
            <input
              type="text"
              className="px-4 py-2 rounded-lg border-none bg-transparent outline-none w-full text-white"
              onChange={(e) => {
                setGithub(e.target.value);
              }}
              placeholder="Enter your github profile"
            />
            <button
              onClick={handleSubmit}
              className="px-4 py-2 border-none bg-blue-400 rounded-lg"
            >
              Submit
            </button>
          </div>
          {/* Leetcode input box */}
          <div className="github flex  items-start justify-center bg-slate-200  border-[1px] w-full border-slate-700 rounded-lg overflow-hidden">
            <input
              type="text"
              className="px-4 py-2 rounded-lg border-none bg-transparent outline-none w-full text-white"
              onChange={(e) => {
                setLeetcodeUser(e.target.value);
              }}
              placeholder="Enter your leetcode profile"
            />
            <button
              onClick={handleSubmit}
              className="px-4 py-2 border-none bg-blue-400 rounded-lg"
            >
              Submit
            </button>
          </div>
          {/* Codeforces input box */}
          <div className="github flex  items-start justify-center bg-slate-200  border-[1px] w-full border-slate-700 rounded-lg ">
            <input
              type="text"
              className="px-4 py-2 rounded-lg border-none bg-transparent outline-none w-full text-white"
              onChange={(e) => {
                setCfUser(e.target.value);
              }}
              placeholder="Enter your leetcode profile"
            />
            <button
              onClick={handleSubmit}
              className="px-4 py-2 border-none bg-blue-400 rounded-lg"
            >
              Submit
            </button>
          </div>
          {/* Displays your info's */}
          <div className="githubDetails">
            {gitInfo.length > 0 ? (
              <>
                <h1 className="text-4xl font-serif text-textBlue text-center my-4 font-bold">
                  Github Details
                </h1>
                <div className="font-bold text-slate-600  mb-5">
                  <h1 className="text-2xl">
                    UserName : <span className="">{gitInfo?.login}</span>
                  </h1>
                  <h4>Bio : {gitInfo?.bio}</h4>
                </div>
                <div className="repos flex gap-10">
                  <img className="h-80 w-80" src={gitInfo?.avatar_url} alt="" />
                  <div className="flex flex-col">
                    <p>Location : {gitInfo?.location}</p>
                    <p>Github Repos Created : {gitInfo?.public_repos}</p>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="leetcode"></div>
      </div>
    </div>
  );
}

export default UserProfile;
