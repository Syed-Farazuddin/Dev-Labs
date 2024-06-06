import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="w-full loginContainer text-white flex gap-20 text-2xl mt-6 border-t-[1px] border-slate-500 py-4 px-8 max-w-7xl mx-auto hover:text-red-400">
      <div className="flex flex-col gap-1">
        <Link
          to={"/homepage"}
          className="text-2xl text-slate-300 font-serif font-bold "
        >
          Devhub
        </Link>
        <p className="text-slate-400 text-sm w-[200px]">
          A world of developers. Where dreams becomes reality
        </p>
      </div>
      <div className="flex gap-10 items-start justify-between ">
        <div className="flex flex-col gap-2">
          <p className=" text-sm text-slate-500 cursor-pointer hover:text-slate-400">
            About us
          </p>
          <p className=" text-sm text-slate-500 cursor-pointer hover:text-slate-400">
            Contact us
          </p>{" "}
          <p className=" text-sm text-slate-500 cursor-pointer hover:text-slate-400">
            Resources
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className=" text-sm text-slate-500 cursor-pointer hover:text-slate-400">
            Home
          </p>
          <p className=" text-sm text-slate-500 cursor-pointer hover:text-slate-400">
            News
          </p>{" "}
          <p className=" text-sm text-slate-500 cursor-pointer hover:text-slate-400">
            Resources
          </p>
        </div>
        <div className="flex flex-col gap-2 text-slate-400 ml-20 text-[18px]">
          <h3>All Copyrights@2023 reserved</h3>
        </div>
        <div className="flex flex-col gap-2 text-slate-400 ml-20 text-[18px]">
          <h4>Follow us on</h4>
          <div className="flex items-center justify-center gap-4">
            <p className="cursor-pointer hover:text-red-400">
              <FaFacebook />
            </p>
            <p className="cursor-pointer hover:text-red-400">
              <FaInstagram />
            </p>
            <p className="cursor-pointer hover:text-red-400">
              <FaXTwitter />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
