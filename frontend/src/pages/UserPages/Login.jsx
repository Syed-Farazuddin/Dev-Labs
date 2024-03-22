/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import logo from "../../assets/D.png";
import { Link } from "react-router-dom";
export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center h-[100vh] flex-col loginContainer">
      <div className="flex fixed top-0 right-0 left-0  py-4 px-6 justify-between items-center">
        <Link
          to={"/"}
          className="flex items-center justify-end text-white cursor-pointer"
        >
          <span className="text-4xl">D</span>
          <p className="text-xl">ev Labs</p>
        </Link>
        <Link to={"/register"} className="flex text-white gap-4">
          <p className="text-slate-400">Don't have an Account ?</p>
          <span className="hover:underline cursor-pointer">Sign In</span>
        </Link>
      </div>

      <div className="px-6 py-10 flex flex-col gap-5 bg-[#ffffff14] rounded-lg  w-[340px]">
        <h1 className="text-3xl text-center text-slate-300 font-bold">
          Sign in
        </h1>
        <div className="flex flex-col gap-2 ">
          <label className="text-slate-300" htmlFor="Email">
            Username or email address
          </label>
          <input
            type="email"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            className="px-4 py-2 rounded-lg border-none outline-blue-900"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-slate-300 text-[18px]" htmlFor="password">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="px-4 py-2 rounded-lg border-none outline-blue-800 "
          />
        </div>

        <button className="px-4 py-2 w-full bg-green-700 rounded-lg text-white">
          Sign In
        </button>
      </div>
    </div>
  );
}
