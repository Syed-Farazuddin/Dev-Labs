import React, { useState } from "react";
import logo from "../../assets/D.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:4000/register", {
      email,
      userName,
      password,
    });
    console.log(response);
    if (response.data.success) {
      navigate("/login");
    }
  };
  return (
    <div className="flex items-center justify-center h-[100vh] flex-col normalRegister">
      <div className="flex fixed top-0 right-0 left-0  py-4 px-6 justify-between items-center">
        <Link to={"/"} className="flex items-center justify-end">
          <img className="h-10 w-10" src={logo} alt="" />
          <p>ev Labs</p>
        </Link>
        <div className="flex gap-4 items-center justify-center">
          <p className="text-slate-900">Already have an Account ?</p>
          <Link
            to={"/login"}
            className="text-slate-900 cursor-pointer border-slate-700 border-2 px-2 py-1 rounded-md"
          >
            Sign in
          </Link>
        </div>
      </div>
      <h1 className="text-xl mb-4 font-bold flex justify-center items-end gap-2 text-black">
        Welcome to
        {/* <div className="flex justify-center items-end ml-2">
          <p className="text-white">Dev Labs</p>
        </div> */}
        <div className="flex items-center justify-end">
          <img className="h-10 w-10" src={logo} alt="" />
          <p className="text-black">ev Labs</p>
        </div>
      </h1>
      <div className="p-10 flex flex-col  gap-5 bg-[#ffffff25] rounded-lg">
        <h1 className="text-2xl text-slate-600 font-bold">Sign up</h1>
        <div className="flex flex-col gap-2">
          {/* <label htmlFor="Email" className="text-slate-600 font-bold">
            Email address
          </label> */}
          <input
            type="email"
            value={email}
            placeholder="Enter your email address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="px-4 py-2 rounded-lg bg-[#ffffff40] outline-[#ffffff02]  placeholder:text-slate-600"
          />
        </div>
        <div className="flex flex-col gap-2">
          {/* <label htmlFor="password" className="text-slate-600 font-bold">
            Password
          </label> */}
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Create your password"
            type="password"
            className="px-4 py-2 rounded-lg bg-[#ffffff40] outline-[#ffffff02]  placeholder:text-slate-600"
          />
        </div>
        <div className="flex flex-col gap-2">
          {/* <label htmlFor="password" className="text-slate-600 font-bold">
            Password
          </label> */}
          <input
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="Create your user name"
            type="text"
            className="px-4 py-2 rounded-lg bg-[#ffffff40] outline-[#ffffff02]  placeholder:text-slate-600"
          />
        </div>

        <button
          className="px-4 py-2 w-full bg-[#ef629f] rounded-lg text-white"
          onClick={() => {
            handleSubmit();
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Register;
