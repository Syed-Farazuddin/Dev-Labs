/*eslint-disable*/
import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/person.png";
import axios from "axios";
import { IoGlobeOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { FaEdit, FaMapPin } from "react-icons/fa";
import Layout from "../../components/Layout/Layout";
import { GlobalContext } from "../../context";
import { Link, useNavigate } from "react-router-dom";
import UserDetails from "../../components/UserDetails";
import UploadImage from "../../components/UploadImage";
function UserProfile() {
  const { userInfo } = useContext(GlobalContext);
  const [editUserDetails, setEditUserDetails] = useState(false);
  const [imageEdit, setImageEdit] = useState(false);
  // const [editDetails, setEditDetails] = useState(false);
  // const [github, setGithub] = useState("");
  const [githubError, setGithubError] = useState();
  const [gitInfo, setGitInfo] = useState([]);
  const [leetcode, setLeetCode] = useState([]);
  const [CF, setCF] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  const navigate = useNavigate();

  const educationInfo = [
    {
      institute: "Lords institute of engineering and technology",
      degree: "Bachelor of Engineering",
      duration: {
        start: "2020",
        end: "2024",
      },
      scores: {
        marks: false,
        gpa: true,
        score: "9.3",
        totalScore: "10",
      },
      major: "Computer Science",
    },
    {
      institute: "Narayana Junior College",
      degree: "Bachelor of Engineering",
      duration: {
        start: "2020",
        end: "2024",
      },
      scores: {
        marks: true,
        gpa: false,
        score: "905",
        totalScore: "1000",
      },
      major: "Maths, Physics & Chemistry",
    },
    {
      institute: "Geetha High School",
      degree: "Secondary Schooling",
      duration: {
        start: "2016",
        end: "2018",
      },
      scores: {
        marks: false,
        gpa: true,
        score: "9.3",
        totalScore: "10",
      },
      major: "State Board",
    },
  ];

  const profileInfo = {
    name: "Syed Farazuddin",
    title:
      "Final Year BE Student | CSE | Web Developer | MERN | React | Java | Spring boot",
    github: "Syed-Farazuddin",
    leetcode: "syedfaraz2405",
    codeforces: "",
    websiteURL: "",
  };

  useEffect(() => {
    if (editUserDetails) {
      setScrollY(window.scrollY);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      window.scrollTo(0, scrollY);
    }
  }, [editUserDetails, scrollY]);

  const getGitInfo = async () => {
    const response = await axios.get(
      `https://api.github.com/users/${profileInfo?.github}`
    );
    const { data } = response;
    if (data) {
      setGitInfo(data);
    } else {
      setGithubError(true);
    }
  };

  const getLeetCodeInfo = async () => {
    const response = await axios.get(
      `https://leetcode-stats-api.herokuapp.com/${profileInfo?.leetcode}`
    );
    const { data } = response;
    setLeetCode(data);
  };

  const getCodeforcesInfo = async () => {
    const response = await axios.get(
      "https://codeforces.com/api/user.info?handles=Syed_Farazuddin"
    );

    const { data } = response;
    setCF(data);
  };

  useEffect(() => {
    if (userInfo == null) {
      navigate("/");
    }
  });

  useEffect(() => {
    getGitInfo();
  }, []);

  useEffect(() => {
    getLeetCodeInfo();
  }, []);

  useEffect(() => {
    getCodeforcesInfo();
  }, []);

  return (
    <Layout>
      {editUserDetails && (
        <div className="z-10 fixed left-40 right-40 h-[100vh] top-10 bottom-20 w-auto overflow-auto no-scrollbar rounded-lg">
          <UserDetails
            setEditUserDetails={setEditUserDetails}
            editUserDetails={editUserDetails}
          />
        </div>
      )}
      {imageEdit && (
        <div className="z-10 fixed left-40 right-40 h-[100vh] top-10 bottom-20 w-auto overflow-auto no-scrollbar rounded-lg">
          <UploadImage setImageEdit={setImageEdit} />
        </div>
      )}
      <div className="flex justify-start items-start p-10 loginContainer  gap-10 max-w-7xl mx-auto ">
        <div className="flex items-center justify-center flex-col gap-8 ">
          <div className="px-6 py-8 bg-[#ffffff14] rounded-lg ">
            {/* About me */}
            <div className="flex justify-start items-center p-4 rounded-lg gap-2 flex-[20%] ">
              <img
                className="rounded-full w-20 h-20 mr-2"
                onClick={() => {
                  setImageEdit(true);
                }}
                src={logo}
                alt=""
              />
              <div className="flex items-start justify-center flex-col gap-2 mt-4">
                <div className="flex items-center justify-between gap-4 w-full">
                  <h1 className="text-2xl font-bold text-[#eeeeee] w-full">
                    Syed Farazuddin
                  </h1>
                  <Link
                    // to={"/editDetails"}
                    className="text-[#eeeeee] cursor-pointer"
                    onClick={() => {
                      setEditUserDetails(true);
                    }}
                  >
                    <FaEdit />
                  </Link>
                </div>
                <p className="text-slate-200 text-pretty">
                  Final Year BE Student | CSE | Web Developer | MERN | React |
                  Java | Spring boot
                </p>
              </div>
              {/* {editDetails && (
                <>
                  <UserDetails />
                </>
              )} */}
            </div>
            <div>
              {/* Profile items */}
              <div className="flex">
                <div className="flex items-center justify-start text-slate-200 gap-2 ml-10 mt-5 items-center">
                  <p className="text-slate-200">
                    <IoGlobeOutline />
                  </p>
                  <a href="https://syed-farazuddin.github.io/My-Portfolio/">
                    Website
                  </a>
                </div>
                <div className="flex items-center justify-start text-slate-200 gap-2 ml-10 mt-5">
                  <p className="text-slate-200">
                    <FaGithub />
                  </p>
                  <a href="https://syed-farazuddin.github.io/My-Portfolio/">
                    Github
                  </a>
                </div>
                <div className="flex items-center justify-start text-slate-200 gap-2 ml-10 mt-5">
                  <p className="text-slate-200">
                    <SiLeetcode />
                  </p>
                  <a href="https://syed-farazuddin.github.io/My-Portfolio/">
                    Leetcode
                  </a>
                </div>
                <div className="flex items-center justify-start text-slate-200 gap-2 ml-10 mt-5">
                  <p className="text-slate-200">
                    <SiCodeforces />
                  </p>
                  <a href="https://syed-farazuddin.github.io/My-Portfolio/">
                    Codeforces
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-8 bg-[#ffffff14] rounded-lg w-full">
            {/* Education Section */}
            <div className="flex justify-start items-start p-4 rounded-lg gap-2 flex-[40%]">
              <div className="flex items-start justify-center flex-col gap-2 mt-4">
                <div className="flex items-center justify-between gap-4 w-full">
                  <h1 className="text-2xl font-bold text-[#eeeeee] w-full">
                    Education
                  </h1>
                  <div className="text-[#eeeeee] cursor-pointer">
                    <FaEdit />
                  </div>
                </div>
                <div className="text-white">
                  {educationInfo.map((item, index) => (
                    <section key={index} className="my-5">
                      <div className="flex justify-between items-center gap-14">
                        <h1>{item.institute}</h1>
                        <time>
                          {item?.duration?.start} - {item?.duration?.end}
                        </time>
                      </div>
                      <p>{item.major}</p>
                      <div className="flex gap-2 items-center">
                        <h5>Scores:</h5>
                        <p>{item.scores.score}</p>/{" "}
                        <span>{item.scores.totalScore}</span>
                        <p>{item.scores.gpa ? "GPA " : " Marks"}</p>
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-8 bg-[#ffffff14] rounded-lg w-full">
            {/* Experience section  */}
            <div className="flex justify-start items-start p-4 rounded-lg gap-2 flex-[40%]">
              <div className="flex items-start justify-center flex-col gap-2 mt-4">
                <div className="flex items-center justify-between gap-4 w-full">
                  <h1 className="text-2xl font-bold text-[#eeeeee] w-full">
                    Experience
                  </h1>
                  <div className="text-[#eeeeee] cursor-pointer">
                    <FaEdit />
                  </div>
                </div>
                <div className="text-white">
                  {educationInfo.map((item, index) => (
                    <section key={index} className="my-5">
                      <div className="flex justify-between items-center gap-14">
                        <h1>{item.institute}</h1>
                        <time>
                          {item?.duration?.start} - {item?.duration?.end}
                        </time>
                      </div>
                      <p>{item.major}</p>
                      <div className="flex gap-2 items-center">
                        <h5>Scores:</h5>
                        <p>{item.scores.score}</p>/{" "}
                        <span>{item.scores.totalScore}</span>
                        <p>{item.scores.gpa ? "GPA " : " Marks"}</p>
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 py-8 bg-[#ffffff14] rounded-lg w-full">
          <div className="github flex gap-4 items-center justify-center flex-col text-black">
            <div className="githubDetails">
              <>
                <h1 className="text-3xl font-serif text-slate-300  my-4 font-bold flex items-center justify-start gap-4 mb-4">
                  <span>
                    <FaGithub />
                  </span>
                  <p>Github</p>
                </h1>
                <div className="repos flex gap-10  xlg:flex-col xlg:items-center xlg:justify-center mb-4">
                  <img className="h-40 w-40" src={gitInfo?.avatar_url} alt="" />
                  <div className="flex flex-col text-slate-200 gap-4">
                    <h1 className="text-2xl text-white">
                      <span className="">{gitInfo?.login}</span>
                    </h1>
                    <h4 className="text-slate-200">{gitInfo?.bio}</h4>
                    <p className="flex items-center gap-2">
                      <span>
                        <FaMapPin />
                      </span>{" "}
                      {gitInfo?.location}
                    </p>
                    <p>Github Repos Created : {gitInfo?.public_repos}</p>
                  </div>
                </div>
                <img
                  // className="w-0 h-100"
                  src="https://streak-stats.demolab.com/?user=syed-farazuddin"
                  alt="git stats"
                />
                <a
                  href="https://github.com/syed-farazuddin"
                  className="flex gap-4 mt-5 items-start justify-center lg:flex-col xlg:flex-row"
                >
                  <img
                    height="180em"
                    src="https://github-readme-stats-eight-theta.vercel.app/api?username=syed-farazuddin&show_icons=true&include_all_commits=true&count_private=true"
                  />
                  <img
                    height="180em"
                    src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=syed-farazuddin&layout=compact&langs_count=8&include_all_commits=true&count_private=true"
                  />
                </a>
                <img
                  className="mt-5"
                  src="https://github-readme-activity-graph.vercel.app/graph?username=syed-farazuddin"
                  alt=""
                />
              </>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-start flex-col">
            {/* Leetcode stats */}
            <div className="border-[1px] border-slate-400 bg-[#ffffff20] mt-10 p-8 flex justify-center items-center">
              <div className="flex justify-start items-center flex-col gap-4">
                <h1 className="text-slate-200 text-4xl font-extrabold justify-center items-center flex">
                  <p className="flex items-center justify-start gap-2">
                    <span>
                      <SiLeetcode />
                    </span>
                    Leetcode
                  </p>
                </h1>
                <div className="flex">
                  <h1 className=" text-2xl">
                    <div className="w-40 h-40 rounded-full bg-white mt-4 border-8 border-yellow-400 justify-center items-center flex flex-col">
                      <div className="flex text-black text-center text-2xl">
                        {leetcode?.totalSolved}
                      </div>
                      <h1 className="text-3xl">Solved</h1>
                    </div>
                  </h1>
                  <div className="text-white flex justify-center items-start ml-10 text-2xl gap-2 flex-col">
                    <h4 className="text-white text-2xl">
                      Ranking :{" "}
                      <span className="text-red-400">{leetcode?.ranking}</span>
                    </h4>
                    <h1>
                      Easy Solved : {leetcode.easySolved} / {leetcode.totalEasy}
                    </h1>
                    <h1>
                      Medium Solved : {leetcode.mediumSolved} /{" "}
                      {leetcode.totalMedium}
                    </h1>
                    <h1>
                      Hard Solved : {leetcode.hardSolved} / {leetcode.totalHard}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            {/* Codeforces */}
            {CF && CF.result && CF.result.length > 0 ? (
              <div className="border-[1px] border-slate-400 bg-[#ffffff20] mt-10 p-8 flex lg:w-full xlg:w-[80%] justify-center items-center ">
                <div className="flex justify-start items-center flex-col gap-4">
                  <h1 className="text-slate-200 text-4xl font-extrabold">
                    <p className="flex items-center justify-start gap-2">
                      <span>
                        <SiCodeforces />
                      </span>
                      Codeforces
                    </p>
                  </h1>
                  <h4 className="text-white text-2xl flex justify-between items-center gap-9 w-full mt-4">
                    <div className="flex items-center justify-start gap-2">
                      <p> Max Ranking : </p>
                      <span className="text-red-400">
                        {CF?.result[0]?.maxRating}
                      </span>
                    </div>
                    <div className="flex justify-start items-center gap-2">
                      <p>Max Rank: </p>
                      <span className="text-red-400">
                        {CF?.result[0]?.rank}
                      </span>
                    </div>
                  </h4>
                  <div className="flex items-center justify-start text-white text-center text-2xl gap-2">
                    <p> Current Ranking : </p>
                    <span className="text-red-400">
                      {CF?.result[0]?.rating}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserProfile;
