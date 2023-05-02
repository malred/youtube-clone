import React from "react";
import {
  modeBgColor,
  modeBgSoftColor,
  modeColor,
  modeSoftColor,
  softColorDark,
  softColorLight,
} from "../constants/modes";

const Login = () => {
  return (
    <div
      className={
        "flex flex-col justify-center items-center h-[calc(94vh-3rem)]" +
        modeColor
      }
    >
      {/* wrapper */}
      <div
        className={
          "flex items-center flex-col py-5 px-[3.1rem] gap-[0.63rem]" +
          modeSoftColor +
          modeBgColor
        }
      >
        {/* title */}
        <h1 className="text-2xl font-extrabold">Sign in</h1>
        {/* subtitle */}
        <h2 className="text-xl font-light">to continue to Lamatube</h2>
        {/* input */}
        <input
          placeholder="username"
          className="border-[1px] border-solid rounded-sm p-[0.63rem] w-full
                  dark:border-[#aaaaaa] border-[#606060] bg-transparent "
        />
        <input
          placeholder="password"
          type="password"
          className="border-[1px] border-solid rounded-sm p-[0.63rem] w-full
                  dark:border-[#aaaaaa] border-[#606060] bg-transparent "
        />
        <button
          className={
            "rounded-md border-none py-[0.63rem] px-5 cursor-pointer font-medium " +
            modeBgSoftColor
          }
        >
          Sign in
        </button>
        {/* title */}
        <h1 className="text-2xl font-extrabold">Or</h1>
        {/* input */}
        <input
          placeholder="username"
          className="border-[1px] border-solid rounded-sm p-[0.63rem] w-full
                  dark:border-[#aaaaaa] border-[#606060] bg-transparent "
        />
        <input
          placeholder="email"
          type="email"
          className="border-[1px] border-solid rounded-sm p-[0.63rem] w-full
                  dark:border-[#aaaaaa] border-[#606060] bg-transparent "
        />
        <input
          placeholder="password"
          type="password"
          className="border-[1px] border-solid rounded-sm p-[0.63rem] w-full
                  dark:border-[#aaaaaa] border-[#606060] bg-transparent "
        />
        <button
          className={
            "rounded-md border-none py-[0.63rem] px-5 cursor-pointer font-medium " +
            modeBgSoftColor +
            modeSoftColor
          }
        >
          Sign up
        </button>
      </div>
      {/* more */}
      <div className={"flex text-xs mt-[0.63rem] " + modeSoftColor}>
        English(USA)
        {/* links */}
        <div className="ml-[3.1rem]">
          {/* link */}
          <span className="ml-[1.9rem]">Help</span>
          <span className="ml-[1.9rem]">Privacy</span>
          <span className="ml-[1.9rem]">Terms</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
