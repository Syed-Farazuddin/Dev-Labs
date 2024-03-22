import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { FaLongArrowAltRight } from "react-icons/fa";

function AnimatedRegister() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [emailChoosen, setEmailChoosen] = useState("");
  const [passwordChoose, setPasswordChoosen] = useState("");
  const [UserNameChoosen, setUserNameChoosen] = useState("");
  const [regexMatched, setRegexMatched] = useState(false);
  const [IsValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  // Regular expression for validating strong passwords

  const validatePassword = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (passwordRegex.test(password)) {
      console.log(password);
      setIsValidPassword(true);
      console.log("Password is strong and can be used");
    } else {
      setIsValidEmail(false);
    }
  };

  async function ValidateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setRegexMatched(emailRegex.test(email));
    if (regexMatched) {
      try {
        const response = await axios.post("http://localhost:4000/CheckEmail", {
          email,
        });
        if (response.data.success) {
          setIsValidEmail(false);
        } else {
          setIsValidEmail(true);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }

  useEffect(() => {
    ValidateEmail();
  }, [email, IsValidEmail]);

  useEffect(() => {
    validatePassword();
    console.log(isValidPassword);
  }, [password, isValidPassword]);

  return (
    <div className="flex items-center justify-center h-[110vh] flex-col registerContainer">
      <div className="flex fixed top-0 right-0 left-0  py-4 px-6 justify-between items-center">
        <Link
          to={"/"}
          className="flex items-center justify-end text-white cursor-pointer"
        >
          <span className="text-4xl">D</span>
          <p className="text-xl">ev Labs</p>
        </Link>
        <Link to={"/login"} className="flex text-white gap-4">
          <p className="text-slate-400">Already have an Account ?</p>
          <span className="hover:underline cursor-pointer">Sign in</span>
        </Link>
      </div>

      <div className="p-10 flex flex-col border-2 border-[#ffffff07]  gap-5 rounded-lg w-[500px] bg-[#ffffff07]">
        <h1 className="text-2xl font-bold text-slate-300">Sign up</h1>

        {/* Enter your email...... Email Field */}

        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="Email" className="text-[#36a8f4]">
              Enter your Email address *
            </label>
            <div className="w-[400px] flex justify-between items-center bg-transparent gap-2">
              {!emailChoosen ? (
                <>
                  <FaLongArrowAltRight className="text-red-400" />
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
                      (IsValidEmail
                        ? " border-[1px] border-green-400 opacity-100 cursor-pointer hover:bg-green-500 hover:text-black"
                        : " border-[1px] border-slate-200 cursor-default")
                    }
                    onClick={() => {
                      if (IsValidEmail) {
                        setEmailChoosen(email);
                      }
                    }}
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

        {/* If email is verified then you can enter password ..... Password Field */}

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
                          "px-4 py-2 rounded-lg text-white font-bold" +
                          (isValidPassword
                            ? " border-[1px] border-green-400  cursor-pointer hover:bg-green-500 hover:text-black"
                            : " border-[1px] border-slate-200 opacity-50 cursor-default")
                        }
                        onClick={() => {
                          if (isValidPassword) {
                            setPasswordChoosen(password);
                          }
                        }}
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

        {/* If email and password is choosen then this will work.... User Id Field */}

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
                          (!IsValidEmail
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
      </div>
      {/* Validation messages */}
      <div className="mt-5 text-slate-400 h-30 flex justify-center items-center flex-col gap-2">
        {IsValidEmail ? (
          ""
        ) : (
          <>
            <p className="text-center">
              Your email is invalid or already choosen
            </p>
          </>
        )}
        {password.length <= 0 ? (
          "Enter your password"
        ) : isValidPassword ? (
          ""
        ) : (
          <>
            <p className="text-center">
              password much contains least 8 characters, containing at least one
              uppercase letter, one lowercase letter, and one digit
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default AnimatedRegister;
