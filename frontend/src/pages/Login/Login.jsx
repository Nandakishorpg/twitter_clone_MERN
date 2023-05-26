import { React, useState } from "react";
import logo from "../../assets/images/twitter.png";
import { AiOutlineClose } from "react-icons/ai";
import { TextField, Button, IconButton } from "@mui/material";
import applelogo from "../../assets/images/apple-logo.png";
import googlelogo from "../../assets/images/google-logo.png";
import axios from "axios";
import Register from "../register/Register";

export default function Login() {
  const [userName, setUserName] = useState({ user: "" });
  const [register, setRegister] = useState(false);
  console.log("username>>>>>", userName);

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:2000/login",
        userName
      );

      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-stone-400 h-screen flex   justify-center items-center ">
      <div className="bg-white xl:rounded-lg    xl:w-5/12 xl:h-5/6 w-full h-full xl:justify-center items-center   flex flex-col p-2     ">
        <div className=" pb-10 xl:pb-6  flex  relative   w-full ">
          <div className="  left-0 transform  -translate-y-1/2 absolute ">
            <IconButton>
              <AiOutlineClose className="xl:inline hidden" />
            </IconButton>
          </div>

          <div className=" left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute">
            <img className="h-14 xl:h-8 cursor-pointer" src={logo} alt="" />
          </div>
        </div>
        {register ? (
          <Register handleRegister={setRegister} />
        ) : (
          <div className="container mx-auto flex gap-5 flex-col xl:w-6/12 w-5/6 ">
            <div className="py-7 flex   xl:justify-center">
              <span className="text-3xl font-semibold">Sign in to twitter</span>
            </div>
            <div className="flex justify-center">
              <button className="border rounded-xl shadow-sm p-1 w-full justify-center items-center gap-4 align-middle   flex  font-bold py-2 ">
                <img className="h-6 xl:h-5 " src={googlelogo} alt="" />
                Sign in with Google
              </button>
            </div>
            <div className="flex justify-center">
              <button className="border rounded-xl shadow-sm p-1 w-full justify-center items-center gap-4 align-middle   flex  font-bold py-2 ">
                <img className="h-6 xl:h-5" src={applelogo} alt="" />
                Sign in with Apple
              </button>
            </div>

            <div className="flex justify-center">
              <TextField
                id="outlined-basic"
                label="Phone,email or username"
                variant="outlined"
                className="shadow-sm  p-1 w-full   py-2"
                onChange={(event) => setUserName({ user: event.target.value })}
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleLogin}
                className="border rounded-xl bg-black text-white shadow-sm p-1 w-full  font-bold py-2 "
              >
                Next
              </button>
            </div>
            {register === false && (
              <div className="flex justify-center">
                <button className="border rounded-xl shadow-sm p-1 w-full py-2 font-bold">
                  Forgot password?
                </button>
              </div>
            )}

            <div className="flex justify-center  transition ease-in duration-3s">
              <>
                <span>Don't have an account?</span>
                <span
                  className="pl-2 text-blue-600 cursor-pointer"
                  onClick={() => setRegister(true)}
                >
                  {" "}
                  sign up
                </span>
              </>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
