/* eslint-disable*/
import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { GlobalContext } from "../../context";
import axios from "axios";
import {
  AiFillBell,
  AiFillHome,
  AiFillMessage,
  AiFillSetting,
  AiOutlineShareAlt,
} from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import PostContainer from "../../components/PostContainer";
import PostCard from "../../components/PostCard";

export default function Homepage() {
  const navigate = useNavigate();
  const { userInfo } = useContext(GlobalContext);
  const [post, setPosts] = useState();
  const [postOption, setPostOption] = useState(false);

  const getPosts = async () => {
    const { data } = await axios.get("http://localhost:4000/getPosts", {
      headers: { Authorization: localStorage.getItem("token") },
    });
    setPosts(data?.posts);
    console.log(data);
  };
  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Layout>
      <div className="bg-[#272727] flex text-slate-300 max-w-7xl mx-auto loginContainer">
        {/* Left container */}
        {postOption && (
          <div className="z-10 fixed left-40 right-40 top-30">
            <PostContainer
              getPosts={getPosts}
              post={post}
              setPosts={setPosts}
              setPostOption={setPostOption}
              postOption={postOption}
            />
          </div>
        )}

        <div className=" w-[30%] rounded-lg m-4 p-4 ">
          <div>
            <p className="flex items-center gap-2 cursor-pointer hover:bg-[#ffffff14] rounded-lg  text-xl mx-2 my-4 px-2 py-2">
              <AiFillHome />
              Home
            </p>
          </div>
          <div>
            <p className="flex items-center gap-2 cursor-pointer hover:bg-[#ffffff14] rounded-lg  text-xl mx-2 my-4 px-2 py-2">
              <AiFillBell />
              Notifications
            </p>
          </div>

          <div>
            <p className="flex items-center gap-2 cursor-pointer hover:bg-[#ffffff14] rounded-lg  text-xl mx-2 my-4 px-2 py-2">
              <AiFillMessage />
              Messages
            </p>
          </div>
          <div>
            <p className="flex items-center gap-2 cursor-pointer hover:bg-[#ffffff14] rounded-lg  text-xl mx-2 my-4 px-2 py-2">
              <AiFillSetting />
              Settings
            </p>
          </div>
          <div
            className="bg-orange-400 text-white font-bold text-xl mx-2 text-center flex items-center justify-center  my-4 p-2 rounded-lg cursor-pointer "
            onClick={() => {
              setPostOption(true);
            }}
          >
            <p className="flex items-center gap-2 cursor-pointer">Post</p>
          </div>
        </div>
        {/* Main container */}
        <div className=" flex flex-col justify-start items-start gap-4 m-4 relative">
          {post && post.length > 0 ? (
            <>
              {post.map((item, ind) => (
                <PostCard
                  item={item}
                  key={ind}
                  getPosts={getPosts}
                  setPosts={setPosts}
                />
              ))}
            </>
          ) : (
            <>
              <h2 className="text-slate-400 font-bold text-2xl w-[330px] flex items-center justify-center mt-4">
                No Posts available
              </h2>
            </>
          )}
        </div>
        {/* Right container */}
        <div className="w-[65%] border border-slate-400 m-4 rounded-lg max-h-fit">
          <h3 className="text-xl text-slate-200 font-bold mb-4 px-8 mt-4">
            What's Happening?
          </h3>
          <div className="flex mt-2 gap-4 p-4">
            <img
              className="w-60 h-full"
              src="https://www.coe.int/documents/1155634/9685754/War+and+Terrorism.jpg/c3c5837f-1a4d-4d70-b277-d0adab2164ba?t=1393949660000"
              alt=""
            />
            <h2 className="">
              The fear of terror and massive killings around the world
              <p className="w-full overflow-y-hidden h-24 text-slate-500 font-sans">
                Acts of war or terrorism challenge the human rights framework
                almost to the point where it seems to collapse. It is hard to
                see any place for human rights when human life is deliberately
                targeted, or where it is seen as "collateral damage" in the
                course of mass bombing campaigns, which either directly or
                indirectly lead to sickness, disease, suffering, destruction of
                homes, and death
              </p>
              <span className="cursor-pointer hover:text-red-500 underline">
                Read more
              </span>
            </h2>
          </div>
          <hr className="border-slate-600" />
          <div className="flex mt-2 gap-4 p-4">
            <img
              className="w-60 h-full"
              src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production%20Library/05-06-2024-UN-Photo-Guterres-Bloomberg.jpg/image1170x530cropped.jpg"
              alt=""
            />
            <h2 className="">
              Michael Bloomberg spotlights best steps now for urgent climate
              action
              <p className="w-full overflow-y-hidden h-24 text-slate-500 font-sans">
                Michael Bloomberg is a business leader, the former three-time
                mayor of New York City and the UN Secretary-General’s Special
                Envoy for climate ambition and solutions. He is also an
                undisputed leader in combatting climate change.
              </p>
              <span className="cursor-pointer hover:text-red-500 underline">
                Read more
              </span>
            </h2>
          </div>
          <hr className="border-slate-600" />
          <div className="flex mt-2 gap-4 p-4">
            <img
              className="w-60 h-full"
              src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production%20Library/05-10-2023_Unsplash_Saudi-Arabia.jpg/image1170x530cropped.jpg"
              alt=""
            />
            <h2 className="">
              World heading towards new temperature records, UN weather watchdog
              warns
              <p className="w-full overflow-y-hidden h-24 text-slate-500 font-sans">
                At least one of the years between now and 2028 will very likely
                set a new temperature record breaking through the crucial 1.5°C
                temperature limit, the UN weather agency, WMO, said on
                Wednesday.
              </p>
              <span className="cursor-pointer hover:text-red-500 underline">
                Read more
              </span>
            </h2>
          </div>
          <hr className="border-slate-600" />
        </div>
      </div>
    </Layout>
  );
}
