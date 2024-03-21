import React, { useState } from "react";
import logo from "../../assets/D.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:4000/register", {
      email,
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
        <div className="flex items-center justify-end">
          <img className="h-10 w-10" src={logo} alt="" />
          <p>ev Labs</p>
        </div>
        <div className="flex text-white gap-4">
          <p className="text-slate-400">Already have an Account ?</p>
          <span className="hover:underline cursor-pointer">Sign in</span>
        </div>
      </div>
      <h1 className="text-xl mb-4 font-bold flex justify-center items-end gap-2 text-white">
        Welcome to
        <div className="flex justify-center items-end ml-2">
          <p className="text-white">Dev Labs</p>
        </div>
      </h1>
      <div className="p-10 flex flex-col  gap-5 bg-slate-500 rounded-lg">
        <h1>Sign up</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="Email">Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="px-4 py-2 rounded-lg border-2 border-slate-400 outline-blue-500"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="px-4 py-2 rounded-lg border-2 border-slate-400 outline-blue-500 "
          />
        </div>

        <button
          className="px-4 py-2 w-full bg-buttonBlue rounded-lg text-white"
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
