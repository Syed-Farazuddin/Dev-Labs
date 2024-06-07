import React, { useContext } from "react";
import { GlobalContext } from "../context";
import D from "../assets/D.png";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { CiTrophy } from "react-icons/ci";
import { GrResources } from "react-icons/gr";

export default function Header() {
  const navigate = useNavigate();

  const { userInfo } = useContext(GlobalContext);

  const HandleSignOut = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4  bg-[#353535] loginContainer">
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
          <Link className=" text-lg flex items-center justify-center gap-1  hover:text-orange-500">
            <GrResources />
            Learning
          </Link>
          <Link className=" text-lg flex items-center justify-center gap-1 hover:text-orange-500">
            <CiTrophy />
            Compete
          </Link>
          <Link
            to={"/user"}
            className="text-lg flex items-center justify-center gap-1 hover:text-orange-500"
          >
            <p>
              <AiOutlineUser />
            </p>
            <span>{userInfo?.name}</span>
          </Link>
          <button
            className="border-2 border-slate-500 px-4 py-2 rounded-lg hover:text-orange-500"
            onClick={() => {
              HandleSignOut();
            }}
          >
            Sign out
          </button>
        </ul>
      </div>
    </nav>
  );
}
