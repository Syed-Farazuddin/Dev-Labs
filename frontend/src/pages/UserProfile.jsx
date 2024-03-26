import React, { useEffect, useState } from "react";
import logo from "../assets/person.png";
import axios from "axios";
import { IoGlobeOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { FaEdit, FaMapPin } from "react-icons/fa";
function UserProfile() {
  const [github, setGithub] = useState("");
  const [githubError, setGithubError] = useState();
  const [gitInfo, setGitInfo] = useState([]);
  const handleSubmit = async () => {
    // https://api.github.com/users/${name}
    // https://leetcode-stats-api.herokuapp.com/<YOUR_USERNAME>
    // GET https://codeforces.com/api/user.info?handles={userName}

    const response = await axios.get(
      `https://api.github.com/users/Syed-Farazuddin`
    );
    const { data } = response;
    if (data) {
      setGitInfo(data);
    } else {
      setGithubError(true);
    }
    console.log(data);
  };
  useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <div className="flex justify-start items-start p-10 bg-[#000000]  gap-10">
      <div className="flex items-center justify-center flex-col gap-8">
        <div className="px-6 py-8 bg-[#252525] rounded-lg">
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
                Final Year BE Student | CSE | Web Developer | MERN | React |
                Java
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
        <div className="px-6 py-8 bg-[#252525] rounded-lg">
          <div className="flex justify-start items-start p-4 rounded-lg gap-2 flex-[40%]">
            <div className="flex items-start justify-center flex-col gap-2 mt-4">
              <div className="flex items-center justify-between gap-4 w-full">
                <h1 className="text-2xl font-bold text-[#eeeeee] w-full">
                  Education
                </h1>
                <div className="text-[#eeeeee] cursor-pointer">
                  <FaEdit />
                </div>
              </div>
              <div className="text-white">
                <div className="flex justify-between items-center gap-14">
                  <h1>Lords institute of engineering and technology</h1>
                  <time>2020 - 2024</time>
                </div>
                <p>CSE</p>
              </div>
            </div>
          </div>
          <div>
            {/* <div className="flex">
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
            </div> */}
          </div>
        </div>
      </div>
      <div className="px-6 py-8 bg-[#252525] rounded-lg w-full">
        <div className="github flex gap-4 items-center justify-center flex-col text-black">
          <div className="githubDetails">
            <>
              <h1 className="text-4xl font-serif text-slate-300  my-4 font-bold flex items-center justify-start gap-4 mb-4">
                <span>
                  <FaGithub />
                </span>
                <p>Github</p>
              </h1>
              <div className="repos flex gap-10">
                <img className="h-80 w-80" src={gitInfo?.avatar_url} alt="" />
                <div className="flex flex-col text-slate-200 gap-4">
                  <h1 className="text-2xl text-white">
                    <span className="">{gitInfo?.login}</span>
                  </h1>
                  <h4 className="text-slate-200">{gitInfo?.bio}</h4>
                  <p className="flex items-center gap-2">
                    <span>
                      <FaMapPin />
                    </span>{" "}
                    {gitInfo?.location}
                  </p>
                  <p>Github Repos Created : {gitInfo?.public_repos}</p>
                  <img
                    src="https://streak-stats.demolab.com/?user=syed-farazuddin&theme=dark"
                    alt="git stats"
                  />
                </div>
              </div>
              <a
                href="https://github.com/syed-farazuddin"
                className="flex gap-4 mt-5 items-start justify-center"
              >
                <img
                  height="180em"
                  src="https://github-readme-stats-eight-theta.vercel.app/api?username=syed-farazuddin&show_icons=true&theme=algolia&include_all_commits=true&count_private=true"
                />
                <img
                  height="180em"
                  src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=syed-farazuddin&layout=compact&langs_count=8&theme=algolia&include_all_commits=true&count_private=true"
                />
              </a>
              <img
                className="mt-5"
                src="https://github-readme-activity-graph.vercel.app/graph?username=syed-farazuddin&theme=react-dark"
                alt=""
              />
            </>
          </div>
        </div>
        {/* Leetcode stats */}
        <div className="leetcode"></div>
      </div>
    </div>
  );
}

export default UserProfile;
