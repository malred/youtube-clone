import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Video from "./pages/Video.jsx";
import { Menu, Navbar } from "./components/index";
import { darkBlackTheme, lightGrayTheme } from "./constants/modes";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <>
      <div className="flex">
        {/* menu */}
        <Menu />
        {/* main */}
        <div className={"flex-[7]" + darkBlackTheme + lightGrayTheme}>
          <Navbar />
          {/* wrapper */}
          <div className="py-[1.12rem] px-[1.62rem]">
            {/* video cards */}
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="/signin" element={<Login />} />
                <Route path="/video">
                  <Route path=":id" element={<Video />} />
                </Route>
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
