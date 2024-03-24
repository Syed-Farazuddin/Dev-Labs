import React, { useState } from "react";
import axios from "axios";
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
    <div className="flex justify-start items-center  py-5">
      <div className="flex-[10%] border-2 border-red-400">Menu Bar</div>
      <div className="flex-[80%] flex items-center gap-5 flex-col border-2 border-blue-900">
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
