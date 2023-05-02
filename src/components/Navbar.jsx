import React from "react";
import { SearchIcon } from "../constants/icons";
import { darkTheme, lightTheme } from "../constants/modes";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    //  container
    <div className={"sticky top-0 h-14" + darkTheme + lightTheme}>
      {/* wrapper */}
      <div className="flex items-center h-full py-0 px-5 justify-end relative">
        {/* search */}
        <div
          className="absolute left-0 right-0 m-auto w-[40%] flex justify-between  items-center
                    p-[0.3rem] border-[1px] border-solid border-[#ccc] rounded-[0.2rem]"
        >
          {/* input */}
          <input
            className="focus:outline-none w-full mr-1 border-none bg-transparent"
            type="text"
            placeholder="Search"
          />
          <SearchIcon fontSize={20} />
        </div>
        <Link to="/signin">
          <button
            className="py-1 px-4 bg-transparent border-[1px] border-solid border-[#3ea6ff]
                    text-[#3ea6ff] rounded-md cursor-pointer flex items-center gap-1"
          >
            SIGN IN
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
