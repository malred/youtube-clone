import React from "react";
import { modeColor, modeSoftColor, softColorLight } from "../constants/modes";
import {
  SaveIcon,
  ShareIcon,
  ThumbDownIcon,
  ThumbUpIcon,
} from "../constants/icons";
import Comments from "../components/Comments";
import { fileServer } from "../constants/variables";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Video = () => {
  return (
    <div className="flex gap-6">
      {/* content */}
      <div className="flex-[5]">
        {/* VideoWrapper */}
        <div className="">
          {/* <iframe
            width="100%"
            height="720"
            src={fileServer+"/a1.mp4"}
          ></iframe> */}
          <video width="100%" height="720" className="border-none" controls>
            <source
              title="test"
              src={fileServer + "/a1.mp4"}
              type="video/mp4"
            />
            你的浏览器不支持该播放器
          </video>
        </div>
        {/* Title */}
        <h1 className={"text-lg font-normal mt-5 mb-10" + modeColor}>
          Test Video
        </h1>
        {/* details */}
        <div className="flex items-center justify-between">
          {/* info */}
          <span className={modeSoftColor + "text-sm"}>
            7,948,154 views · Jun 22, 2022
          </span>
          {/* buttons */}
          <div className={"flex gap-4" + modeColor}>
            {/* button */}
            <div className="flex items-center cursor-pointer gap-1">
              <ThumbUpIcon fontSize={22} />
              123
            </div>
            <div className="flex items-center cursor-pointer gap-1">
              <ThumbDownIcon fontSize={22} />
              dislike
            </div>
            <div className="flex items-center cursor-pointer gap-1">
              <ShareIcon fontSize={22} />
              share
            </div>
            <div className="flex items-center cursor-pointer gap-1">
              <SaveIcon fontSize={22} />
              save
            </div>
          </div>
        </div>
        <hr
          className={
            "my-4 mx-0 border-[0.5px] border-solid border-[#aaaaaa] dark:border-[#606060]"
          }
        />
        {/* channel */}
        <div className="flex justify-between">
          {/* channel info */}
          <div className="flex gap-5">
            {/* image */}
            <img
              src={fileServer + "/logo.png"}
              alt=""
              className="rounded-half w-50 h-50 object-cover"
            />
            {/* channel detail */}
            <div className="flex flex-col ">
              {/* channel name */}
              <span className="font-medium">Malred</span>
              {/* channel counter */}
              <span className={"mt-1 mb-5 text-sm" + modeSoftColor}>
                200K subcribers
              </span>
              {/* description */}
              <p className="text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, enim esse necessitatibus eos iure, placeat
                reprehenderit soluta maxime facere, saepe fugiat molestias neque
                quos tempore voluptatum cupiditate animi tempora at.
              </p>
            </div>
          </div>
          {/* subscribe */}
          <button className="bg-red-600 text-white font-medium border-none rounded-md h-max py-[0.63rem] px-4 cursor-pointer">
            Subscribe
          </button>
        </div>
        <hr
          className={
            "my-4 mx-0 border-[0.5px] border-solid border-[#aaaaaa] dark:border-[#606060]"
          }
        />
        <Comments />
      </div>
      {/* recommendation */}
      <div className="flex-[2]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
          <Link to={"/video/" + i}>
            <Card key={i} id={i} type={"sm"} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Video;
