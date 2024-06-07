import React from "react";
import { FaSearch } from "react-icons/fa";
import Logo from "../assets/D.png";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="flex py-4 px-8 justify-between items-center loginContainer">
      <div className="flex items-center justify-center">
        <img className="h-14 w-14" src={Logo} alt="" />
        <p className="text-[30px]">ev Labs</p>
      </div>
      <div className="flex items-center justify-center px-4 py-2 rounded-lg bg-white">
        <p className=" text-slate-400">
          <FaSearch />
        </p>
        <input
          type="text"
          className="border-none outline-none px-4 py-1"
          placeholder="Search for a profile"
        />
      </div>
      <div className="flex gap-4">
        <Link
          to={"/register"}
          className="text-slate-300 px-4 py-2 rounded-md cursor-pointer font-bold hover:text-buttonBlue"
        >
          Sign up
        </Link>
        <Link
          to={"/login"}
          className="text-slate-400 border-[1px] border-slate-500 px-4 py-2 rounded-md cursor-pointer font-bold hover:text-buttonBlue"
        >
          Sign in
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
