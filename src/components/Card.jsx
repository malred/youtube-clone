import React from "react";
import { modeSoftColor } from "../constants/modes";

const Card = ({ type, id }) => {
  const scale = type === "sm" ? "flex mb-10 " : " mb-11 w-[22.5rem] ";
  const scaleCover = type === "sm" ? " h-[8rem] " : " h-[12.6rem] ";
  const scaleImg = type == "sm" ? " hidden " : "";
  const scaleDetail = type === "sm" ? "ml-1" : " mt-3 pb-3 ";
  return (
    <div
      className={
        " cursor-pointer dark:bg-[#413a3a80] bg-[#9f959515] rounded-md " + scale
      }
    >
      {/* cover */}
      <img
        className={" flex-[1] bg-[#999] rounded-md w-[100%] " + scaleCover}
        src="http://localhost:10101/files/cover.jpg"
        alt=""
      />
      {/* details */}
      <div className={"flex-[1] flex gap-3 items-start " + scaleDetail}>
        {/* channel image */}
        <img
          className={" w-10 h-10 rounded-half bg-[#999]" + scaleImg}
          src="http://localhost:10101/files/avatar.jpg"
          alt=" "
        />
        {/* texts */}
        <div className="">
          {/* title */}
          <h1 className={"text-base font-medium" + modeSoftColor}>
            Test Video
          </h1>
          {/* channel name */}
          <h2 className="text-sm my-1 mx-0">Lama Dev</h2>
          {/* info */}
          <div className={"text-sm " + modeSoftColor}>
            660,908 views · 1 day ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
