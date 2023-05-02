import React from "react";
import Comment from "./Comment";
import { fileServer } from "../constants/variables";
const Comments = () => {
  return (
    <div className="">
      {/* new comment */}
      <div className="flex items-center gap-3">
        {/* avatar */}
        <img
          src={fileServer + "/avatar.jpg"}
          alt=""
          className="rounded-half w-50 h-50 object-cover"
        />
        <input
          type="text"
          placeholder="Add a comment..."
          style={{ borderBottom: "1px solid" }}
          className="bg-transparent dark:border-b-[#aaa] border-b-[#606060] outline-none 
                    p-2 w-full"
        />
      </div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <Comment key={i} />
      ))}
    </div>
  );
};

export default Comments;
