import React from "react";
import Logo from "./Headerutils/Logo";
import { Link } from "react-router-dom";
import Menu from "./Headerutils/Menu";
const index = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-primary_color px-7 py-5">
        <div className="max-w-[10%] ">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="max-w-[60%]">
          <Menu />
        </div>
        <div className="max-w-[30%]">
          <h1>tuafi sila</h1>
        </div>
      </div>
    </>
  );
};

export default index;
