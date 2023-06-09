/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";
import { useState } from "react";

const MainLayOut = () => {
    const [isDark,setIsDark] = useState(false);
    // const handleColorMode = () => {}
  return (
    <div className={`lg:px-5 mx-auto lg:py-5 ${isDark ? 'bg-black' :'bg-white'}`}>
      <NavBar></NavBar>
      <p onClick={() => setIsDark(!isDark)} className={`border p-4 w-fit mt-3 hover:cursor-pointer font-bold ${isDark? 'text-white': 'text-black'}`}>
       {isDark ? "Light Mode" : "Dark Mode"}
      </p>
      <Outlet className={``}></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
