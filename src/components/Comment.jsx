import React from "react";
import { fileServer } from "../constants/variables";
import { modeColor, modeSoftColor } from "../constants/modes";

const Comment = () => {
  return (
    <div className="flex gap-3 my-8 mx-0">
      {/* avatar */}
      <img
        src={fileServer + "/avatar.jpg"}
        alt=""
        className="rounded-half w-50 h-50 object-cover"
      />
      {/* details */}
      <div className={"flex gap-3 flex-col" + modeColor}>
        {/* name */}
        <span className="font-medium text-sm">
          Malred
          {/* date */}
          <span className={"text-xs font-normal ml-2" + modeSoftColor}>
            2 years ago
          </span>
        </span>
        {/* text */}
        <span className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
          officia praesentium quia aspernatur laboriosam, ipsam ipsum ratione
          deserunt debitis, veniam minima natus voluptate, earum officiis
          consequuntur nesciunt distinctio tenetur modi.
        </span>
      </div>
    </div>
  );
};

export default Comment;
