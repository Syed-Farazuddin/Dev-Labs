/* eslint-disable*/
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";

function UserDetails({ editUserDetails, setEditUserDetails }) {
  const modelRef = useRef();

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [github, setGithub] = useState("");
  const [website, setWebsite] = useState("");
  const [leetcode, setLeetCode] = useState("");
  const [codeforces, setCodeforces] = useState("");
  const [error, setError] = useState("");

  const handleUpdate = async () => {
    const { data } = await axios.put(
      "http://localhost:4000/updateProfile",
      { name, bio, website, github, leetcode, codeforces },
      { headers: { Authorization: localStorage.getItem("token") } }
    );
    if (data.success) {
      setEditUserDetails(false);
      window.location.reload();
    } else {
      setError(data.message);
    }
  };

  const handleOutsideClick = (e) => {
    if (editUserDetails && !modelRef?.current?.contains(e.target)) {
      setEditUserDetails(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
  }, [handleOutsideClick, editUserDetails]);

  return (
    <div
      className="bg-white flex flex-col items-center justify-center gap-10 py-5"
      ref={modelRef}
    >
      <button
        onClick={() => {
          setEditUserDetails(false);
        }}
        className="text-slate-900 self-end mr-20 font-extrabold bg-slate-200 px-2 py-2 rounded-full"
      >
        <AiOutlineClose className="text-lg" />
      </button>
      <div className="flex flex-col gap-6 w-full justify-start items-center">
        <h1 className="text-3xl text-center text-slate-800 font-serif font-extrabold my-5">
          Update Profile Details
        </h1>
        <div className="flex flex-col gap-2 w-full justify-start items-center">
          <label
            htmlFor="name"
            className="text-xl font-bold text-slate-900 justify-start text-left w-1/2 px-4"
          >
            UserName
          </label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            id="name"
            className="border rounded-lg text-slate-800 px-4 py-2 w-1/2"
            placeholder="Enter your userName"
          />
        </div>
        {/* Update bio / title of profile */}
        <div className="flex flex-col gap-2 w-full justify-start items-center">
          <label
            htmlFor="bio"
            className="text-xl font-bold text-slate-900 justify-start text-left w-1/2 px-4"
          >
            Title
          </label>
          <input
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
            type="text"
            id="bio"
            className="border rounded-lg text-slate-800 px-4 py-2 w-1/2"
            placeholder="Enter your profile title"
          />
        </div>
        {/* Update website details */}
        <div className="flex flex-col gap-2 w-full justify-start items-center">
          <label
            htmlFor="website"
            className="text-xl font-bold text-slate-900 justify-start text-left w-1/2 px-4"
          >
            Website
          </label>
          <input
            value={website}
            onChange={(e) => {
              setWebsite(e.target.value);
            }}
            type="text"
            id="website"
            className="border rounded-lg text-slate-800 px-4 py-2 w-1/2"
            placeholder="Enter your deployed website url"
          />
        </div>
        {/* Update github userName*/}
        <div className="flex flex-col gap-2 w-full justify-start items-center">
          <label
            htmlFor="github"
            className="text-xl font-bold text-slate-900 justify-start text-left w-1/2 px-4"
          >
            Github
          </label>
          <input
            value={github}
            onChange={(e) => {
              setGithub(e.target.value);
            }}
            type="text"
            id="github"
            className="border rounded-lg text-slate-800 px-4 py-2 w-1/2"
            placeholder="Enter your github user name"
          />
        </div>
        {/* Update codeforces userName */}
        <div className="flex flex-col gap-2 w-full justify-start items-center">
          <label
            htmlFor="codeforcesco"
            className="text-xl font-bold text-slate-900 justify-start text-left w-1/2 px-4"
          >
            Codeforces
          </label>
          <input
            value={codeforces}
            onChange={(e) => {
              setCodeforces(e.target.value);
            }}
            type="text"
            id="codeforces"
            className="border rounded-lg text-slate-800 px-4 py-2 w-1/2"
            placeholder="Enter your codeforces user name"
          />
        </div>
        {/* Update leetcode userName */}
        <div className="flex flex-col gap-2 w-full justify-start items-center">
          <label
            htmlFor="leetcode"
            className="text-xl font-bold text-slate-900 justify-start text-left w-1/2 px-4"
          >
            Leetcode
          </label>
          <input
            value={leetcode}
            onChange={(e) => {
              setLeetCode(e.target.value);
            }}
            type="text"
            id="leetcode"
            className="border rounded-lg text-slate-800 px-4 py-2 w-1/2"
            placeholder="Enter what you want to post"
          />
        </div>

        <button
          className="px-4 py-2 w-1/2 bg-green-800 rounded-lg text-white"
          onClick={() => {
            handleUpdate();
          }}
        >
          Update
        </button>
      </div>
      <div className="errorMessages mt-5 uppercase">
        <p className="h-5 text-red-500">{error}</p>
      </div>
    </div>
  );
}

export default UserDetails;
