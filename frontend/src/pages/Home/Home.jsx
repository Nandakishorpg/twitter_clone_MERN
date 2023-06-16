import React from "react";
import logo from "../../assets/images/twitter.png";
import { GrGallery } from "react-icons/gr";
import { AiOutlineFileGif } from "react-icons/ai";
import { BiHomeCircle } from "react-icons/bi";
export default function Home() {
  return (
    <div className="h-screen flex">
      <div className="w-1/4 border border-gray-200 p-5 pl-16">
        <div className="flex flex-col gap-5">
          <div>
            <div>
              <img src={logo} className="h-10" alt="" />
            </div>
          </div>
          <div className="flex  gap-4 items-center">
            <div>
              <BiHomeCircle className="text-2xl" />
            </div>
            <div>
              <span className="font-bold text-xl">Home</span>
            </div>
          </div>
          <div className="flex  gap-4 items-center">
            <div>
              <BiHomeCircle className="text-2xl" />
            </div>
            <div>
              <span className="text-xl">Explore</span>
            </div>
          </div>
          <div className="flex  gap-4 items-center">
            <div>
              <BiHomeCircle className="text-2xl" />
            </div>
            <span className="text-xl">Notifications</span>
          </div>
          <div className="flex  gap-4 items-center">
            <div>
              <BiHomeCircle className="text-2xl" />
            </div>
            <span className="text-xl">Messages</span>
          </div>
          <div className="flex  gap-4 items-center">
            <div>
              <BiHomeCircle className="text-2xl" />
            </div>
            <span className="text-xl">Lists</span>
          </div>
          <div className="flex  gap-4 items-center">
            <div>
              <BiHomeCircle className="text-2xl" />
            </div>
            <span className="text-xl">Bookmarks</span>
          </div>
          <div className="flex  gap-4 items-center">
            <div>
              <BiHomeCircle className="text-2xl" />
            </div>
            <span className="text-xl">Twitter Blue</span>
          </div>
          <div className="flex  gap-4 items-center">
            <div>
              <BiHomeCircle className="text-2xl" />
            </div>
            <span className="text-xl">Profile</span>
          </div>
        </div>
      </div>
      <div className="w-2/4 border border-gray-200 ">
        <div className="h-20 p-5">
          <span className="font-semi-bold text-2xl">Home</span>
        </div>
        <div className="flex">
          <div className="flex-1 flex justify-center h-10 items-center  hover:bg-gray-300">
            <span className="">For you</span>
          </div>
          <div className="flex-1 flex justify-center h-10 items-center  hover:bg-gray-300">
            <span>Following</span>
          </div>
        </div>
        <div className="border h-32">
          <div className="border flex items-center h-1/2 px-4">
            <div className="w-1/6 px-4">
              <img className="h-10" src={logo} alt="" />
            </div>
            {/* <div>
              <span className="text-xl font-thin">What is happening?!</span>
            </div> */}
            <input
              placeholder="What is happening?"
              className="w-full p-2 border-none"
            ></input>
          </div>
          <div className="p-3  flex gap-5  align-center">
            <div className=" px-4 w-3/4 flex gap-5 text-red-500 align-center items-center">
              <GrGallery className="text-xl text-red-500 cursor-pointer" />
              <AiOutlineFileGif className="text-xl text-blue-400 cursor-pointer" />
              <AiOutlineFileGif className="text-xl text-blue-400 cursor-pointer" />
              <AiOutlineFileGif className="text-xl text-blue-400 cursor-pointer" />
              <AiOutlineFileGif className="text-xl text-blue-400 cursor-pointer" />
            </div>
            <div className="">
              <button className="bg-blue-400 rounded-xl px-4 py-1 text-white text-lg">
                Tweet
              </button>
            </div>
          </div>
          <div className="border p-3">
            <span className="text-blue-400 flex justify-center cursor-pointer">
              show 567 tweets
            </span>
          </div>
        </div>
      </div>
      <div className="w-1/4 border border-gray-200 p-5">
        <div className=" flex justify-center">
          <input
            type="text"
            className="rounded-xl p-3 border bg-gray-100"
            placeholder="Search Twitter"
          />
        </div>
      </div>
    </div>
  );
}
