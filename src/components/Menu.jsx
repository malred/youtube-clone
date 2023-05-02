import React, { useEffect, useState } from "react";
import Logo from "../img/logo.png";
import { useTheme } from "../hooks";
import { darkTheme, lightTheme } from "../constants/modes";
import { getTheme } from "../context/ThemeProvider";
import { menus, menus1, menus2, menus3 } from "../constants/datas";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import { AccountIcon, SunIcon } from "../constants/icons";
// todo: MenuContainer->获取要获取的频道类型,然后传给menu组件,menu组件动态请求后台视频数据
const Menu = () => {
  // 切换主题,按钮的颜色也变换
  const { toggleTheme } = useTheme();
  const [mode, setMode] = useState("dark");
  useEffect(() => {
    getTheme() == "dark" ? setMode("dark") : setMode("Light");
  });
  return (
    <div
      className={
        "sticky top-0 flex-[1.2] h-[100vh] overflow-scroll text-sm " +
        darkTheme +
        lightTheme
      }
    >
      <div className="py-18 px-26">
        <Link to={"/"}>
          {/* logo */}
          <div className="flex items-center gap-5px font-bold mb-25 ">
            <img className="h-25 mr-4" src={Logo} alt="logo" />
            LamaTube
          </div>
        </Link>
        {menus.map((m) => (
          <MenuItem key={m.name} to={m.to} name={m.name} icon={m.icon} />
        ))}
        <hr className="my-4 mx-0 border-[0.5px] border-solid border-[#373737]" />
        {menus1.map((m) => (
          <MenuItem key={m.name} to={m.to} name={m.name} icon={m.icon} />
        ))}
        <hr className="my-4 mx-0 border-[0.5px] border-solid border-[#373737]" />
        {/* login */}
        <div className="">Sign in to like videos, comment, and subscribe.</div>
        <Link to={"/signin"}>
          <button
            className="py-1 px-4 bg-transparent border-[1px] border-solid border-[#3ea6ff]
                    text-[#3ea6ff] rounded-md mt-[0.6rem] cursor-pointer flex items-center gap-1"
          >
            <AccountIcon fontSize={20} />
            SIGN IN
          </button>
        </Link>
        <hr className="my-4 mx-0 border-[0.5px] border-solid border-[#373737]" />
        <h2 className="text-sm font-medium text-[#aaaaaa] ">
          BEST TO LAMATUBE
        </h2>
        {menus2.map((m) => (
          <MenuItem key={m.name} to={m.to} name={m.name} icon={m.icon} />
        ))}
        <hr className="my-4 mx-0 border-[0.5px] border-solid border-[#373737]" />
        {menus3.map((m) => (
          <MenuItem key={m.name} to={m.to} name={m.name} icon={m.icon} />
        ))}
        <div
          onClick={() => {
            toggleTheme();
            setMode("dark" ? "light" : "dark");
          }}
          className="flex items-center gap-20px cursor-pointer py-2 px-0"
        >
          <SunIcon fontSize={26} />
          {mode} Mode
        </div>
      </div>
    </div>
  );
};

export default Menu;
