import React, { useEffect, useState } from "react";
import logo from "../../assets/D.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";

function AnimatedRegister() {
  const onSubmit = async () => {
    const response = await axios.post("http://localhost:4000/register", {
      email,
      password,
    });
    const { data } = await response;
    console.log(data);
  };
  async function handleOnChange() {
    const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    const response = await axios.post("http://localhost:4000/CheckEmail", {
      email,
    });
    console.log(response.data);
    if (response.data.success && !email.match(regex)) {
      console.log("Email Already exists");
      setInvalidEmail(false);
    } else {
      console.log("Invalid email");
      setInvalidEmail(true);
    }
  }
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [emailChoosen, setEmailChoosen] = useState("");
  const [passwordChoose, setPasswordChoosen] = useState("");
  const [UserNameChoosen, setUserNameChoosen] = useState("");

  const [invalidEmail, setInvalidEmail] = useState(true);

  useEffect(() => {
    handleOnChange();
  }, [email]);

  return (
    <div className="flex items-center justify-center h-[100vh] flex-col registerContainer">
      <div className="flex fixed top-0 right-0 left-0  py-4 px-6 justify-between items-center">
        <div className="flex items-center justify-end text-white cursor-pointer">
          <span className="text-4xl">D</span>
          <p className="text-xl">ev Labs</p>
        </div>
        <Link to={"/login"} className="flex text-white gap-4">
          <p className="text-slate-400">Already have an Account ?</p>
          <span className="hover:underline cursor-pointer">Sign in</span>
        </Link>
      </div>

      <form
        className="p-10 flex flex-col border-2 border-[#ffffff07]  gap-5 rounded-lg w-[500px] bg-[#ffffff07]
"
      >
        <h1 className="text-2xl font-bold text-slate-300">Sign up</h1>

        {/* Enter your email */}

        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="Email" className="text-slate-200">
              Enter your Email address *
            </label>
            <div className="w-[400px] flex justify-between items-center bg-transparent gap-2">
              {!emailChoosen ? (
                <>
                  <input
                    type="email"
                    className="px-2 py-2 rounded-lg outline-blue-500 bg-transparent w-[80%] text-white"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <button
                    className={
                      "px-4 py-2 rounded-lg text-white" +
                      (!invalidEmail
                        ? " border-[1px] border-green-200 opacity-50 cursor-auto"
                        : " border-[1px] border-slate-200 ")
                    }
                    onClick={() => setEmailChoosen(email)}
                  >
                    Continue
                  </button>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-start gap-2">
                    <p className="text-green-400">
                      <TiTick />
                    </p>
                    <p className="text-white">{emailChoosen}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* If email is verified then you can enter password */}

        {emailChoosen && (
          <>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2 ">
                <label htmlFor="Email" className="text-slate-200">
                  Create your Password *
                </label>
                <div className="w-[400px] flex justify-between items-center bg-transparent gap-2">
                  {!passwordChoose ? (
                    <>
                      <input
                        type="email"
                        className="px-2 py-2 rounded-lg outline-blue-500 bg-transparent w-[80%] text-white"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                      <button
                        className={
                          "px-4 py-2 rounded-lg text-white" +
                          (!invalidEmail
                            ? " border-[1px] border-green-200 opacity-50 cursor-auto"
                            : " border-[1px] border-slate-200 ")
                        }
                        onClick={() => setPasswordChoosen(password)}
                      >
                        Continue
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-start gap-2">
                        <p className="text-green-400">
                          <TiTick />
                        </p>
                        <p className="text-white">{passwordChoose}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}

        {/* If email and password is choosen then this will work */}

        {passwordChoose && (
          <>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2 ">
                <label htmlFor="Email" className="text-slate-200">
                  Create your UserName *
                </label>
                <div className="w-[400px] flex justify-between items-center bg-transparent gap-2">
                  {!UserNameChoosen ? (
                    <>
                      <input
                        type="email"
                        className="px-2 py-2 rounded-lg outline-blue-500 bg-transparent w-[80%] text-white"
                        value={userName}
                        onChange={(e) => {
                          setUserName(e.target.value);
                        }}
                      />
                      <button
                        className={
                          "px-4 py-2 rounded-lg text-white" +
                          (!invalidEmail
                            ? " border-[1px] border-green-200 opacity-50 cursor-auto"
                            : " border-[1px] border-slate-200 ")
                        }
                        onClick={() => setUserNameChoosen(userName)}
                      >
                        Continue
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-start gap-2">
                        <p className="text-green-400">
                          <TiTick />
                        </p>
                        <p className="text-white">{UserNameChoosen}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
        {/* If email and password is choosen then this will work */}

        {UserNameChoosen && (
          <>
            <div className="flex justify-between items-center gap-2 text-white">
              <p className="text-blue-300">Hurray! Last step to sign up</p>
              <button className="border-[1px] font-bold hover:bg-green-500 text-white rounded-lg border-green-500 px-2 py-2 ">
                Sign up
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default AnimatedRegister;
