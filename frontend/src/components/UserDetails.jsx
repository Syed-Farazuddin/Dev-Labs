import React, { useState } from "react";
import axios from "axios";
import Layout from "./Layout/Layout";

function UserDetails() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [github, setGithub] = useState("");
  const [website, setWebsite] = useState("");
  const [leetcode, setLeetCode] = useState("");
  const [codeforces, setCodeforces] = useState("");
  const [error, setError] = useState("");

  const handleUpdate = () => {
    console.log("Update");
  };

  return (
    <Layout>
      <div className="flex items-center justify-center h-auto flex-col loginContainer mt-0">
        <div className="px-6 py-10 flex flex-col gap-8 bg-[#ffffff14] rounded-lg w-[500px] mt-20">
          <h1 className="text-3xl text-center text-slate-300 font-bold">
            Update Profile Details
          </h1>
          <div className="flex flex-col gap-2">
            <label className="text-slate-300" htmlFor="Email">
              Name
            </label>
            <input
              type="email"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              className="px-4 py-2 rounded-lg border-none outline-blue-900 w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-slate-300 text-[18px]" htmlFor="password">
              Description / Title
            </label>
            <div className="flex items-center justify-center bg-white rounded-lg  outline-blue-800  py-2 px-4">
              <input
                type="text"
                className="rounded-lg border-none outline-none w-full"
                value={bio}
                onChange={(e) => {
                  setBio(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-slate-300 text-[18px]" htmlFor="password">
              Website
            </label>
            <div className="flex items-center justify-center bg-white rounded-lg  outline-blue-800  py-2 px-4">
              <input
                type="text"
                className="rounded-lg border-none outline-none w-full"
                value={website}
                onChange={(e) => {
                  setWebsite(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-slate-300 text-[18px]" htmlFor="password">
              Github
            </label>
            <div className="flex items-center justify-center bg-white rounded-lg  outline-blue-800  py-2 px-4">
              <input
                type="text"
                className="rounded-lg border-none outline-none w-full"
                value={github}
                onChange={(e) => {
                  setGithub(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-slate-300 text-[18px]" htmlFor="password">
              Codeforces
            </label>
            <div className="flex items-center justify-center bg-white rounded-lg  outline-blue-800  py-2 px-4">
              <input
                type="text"
                className="rounded-lg border-none outline-none w-full"
                value={codeforces}
                onChange={(e) => {
                  setCodeforces(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-300 text-[18px]" htmlFor="password">
              Leetcode
            </label>
            <div className="flex items-center justify-center bg-white rounded-lg  outline-blue-800  py-2 px-4">
              <input
                type="text"
                className="rounded-lg border-none outline-none w-full"
                value={leetcode}
                onChange={(e) => {
                  setLeetCode(e.target.value);
                }}
              />
            </div>
          </div>

          <button
            className="px-4 py-2 w-full bg-green-800 rounded-lg text-white"
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
    </Layout>
  );
}

export default UserDetails;
