import React, { useContext } from "react";
import { GlobalContext } from "../context";
import D from "../assets/D.png";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Header() {
  const { userInfo } = useContext(GlobalContext);
  console.log(userInfo.name);
  return (
    <div className="flex justify-between items-center px-6 py-4  bg-[#353535]">
      <Link
        to={"/homepage"}
        className="text-2xl text-slate-300 font-serif font-bold "
      >
        Devhub
      </Link>
      <div className="w-[25%] border-2 px-4 py-1 rounded-full mx-10 flex items-center justify-start gap-2 bg-[#D9D9D9]">
        <AiOutlineSearch />
        <input
          type="text"
          className="border-none outline-none bg-transparent placeholder:text-black"
          placeholder="Search "
        />
      </div>
      <div>
        <ul className="flex items-center gap-10 text-slate-200">
          <Link className=" text-lg flex items-center justify-center gap-1">
            Learning
          </Link>
          <Link className=" text-lg flex items-center justify-center gap-1">
            Compete
          </Link>
          <Link
            to={"/user"}
            className="text-lg flex items-center justify-center gap-1"
          >
            <p>
              <AiOutlineUser />
            </p>
            <span>{userInfo?.name}</span>
          </Link>
        </ul>
      </div>
    </div>
  );
}
