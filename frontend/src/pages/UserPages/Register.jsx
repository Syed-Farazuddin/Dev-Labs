import React, { useState } from "react";
import logo from "../../assets/D.png";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center h-[100vh] flex-col">
      <h1 className="text-xl mb-4 font-bold flex justify-center items-end gap-2">
        Sign up to{" "}
        <div className="flex justify-center items-end ml-2">
          <img className="w-10 h-10" src={logo} alt="" />
          <p>ev Labs</p>
        </div>
      </h1>
      <div className="p-10 flex flex-col  gap-5 bg-slate-200 rounded-lg">
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

        <button className="px-4 py-2 w-full bg-buttonBlue rounded-lg text-white">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Register;
