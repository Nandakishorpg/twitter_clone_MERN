import React from "react";
import logo from "../../assets/images/twitter.png";
import { AiOutlineClose } from "react-icons/ai";
import { TextField, Button } from "@mui/material";
import applelogo from "../../assets/images/apple-logo.png";
import googlelogo from "../../assets/images/google-logo.png";
import axios from "axios";

export default function Register({ handleRegister }) {
  const handle = () => {
    handleRegister(false);
  };
  return (
    <>
      <div className="container mx-auto flex gap-5 flex-col xl:w-6/12 w-5/6 ">
        <div className="py-7 flex   xl:justify-center">
          <span className="text-3xl font-semibold ">Join twitter today</span>
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
          <button className="border rounded-xl bg-black text-white shadow-sm p-1 w-full  font-bold py-2 ">
            Create account
          </button>
        </div>

        <div className="flex justify-center  transition ease-in duration-3s">
          <span>already have an account?</span>
          <span className="pl-2 text-blue-600 cursor-pointer" onClick={handle}>
            login
          </span>
        </div>
      </div>
    </>
  );
}
