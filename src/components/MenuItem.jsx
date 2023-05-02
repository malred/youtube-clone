import React from "react";
import { Link } from "react-router-dom";
const MenuItem = ({ name, icon, to }) => {
  return (
    <Link to={to}>
      <div className="hover:bg-[#aaaaaa92] rounded-sm flex items-center gap-20px cursor-pointer py-2 px-1">
        {icon}
        {name}
      </div>
    </Link>
  );
};

export default MenuItem;
