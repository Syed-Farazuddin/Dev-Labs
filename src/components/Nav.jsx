import React from "react";
import { FaSearch } from "react-icons/fa";
import Logo from "../assets/D.png";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="flex bg-slate-100 py-2 px-8 justify-between items-center ">
      <div className="flex items-center justify-center">
        <img className="h-14 w-14" src={Logo} alt="" />
        <p className="text-[30px]">ev Labs</p>
      </div>
      <div className="flex items-center justify-center px-4 py-2 rounded-lg bg-white">
        <input
          type="text"
          className="border-none outline-none"
          placeholder="Search for a profile"
        />
        <p className=" text-slate-400">
          <FaSearch />
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          to={"/register"}
          className="text-textBlue px-4 py-2 rounded-md cursor-pointer font-bold hover:text-buttonBlue"
        >
          Sign up
        </Link>
        <Link
          to={"/login"}
          className="text-textBlue border-[1px] border-textBlue px-4 py-2 rounded-md cursor-pointer font-bold hover:text-buttonBlue"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}

export default Nav;
