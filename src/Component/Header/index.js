import React from "react";
import Logo from "./Headerutils/Logo";
import { Link } from "react-router-dom";
import Menu from "./Headerutils/Menu";
import Headericon from "./Headerutils/Headericon";
const index = () => {
  return (
    <>
      <div className="flex items-center bg-primary_color px-7 py-5 sm:flex-wrap">
        <div className="w-[10%] px-5">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="w-[54%]">
          <Menu />
        </div>
        <div className="w-[35%]">
          <Headericon />
        </div>
      </div>
    </>
  );
};

export default index;
