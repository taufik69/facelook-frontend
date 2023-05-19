import React from "react";
import { FaCartArrowDown, FaSms } from "react-icons/fa";
import { VscBellDot } from "react-icons/vsc";
import { TfiSettings } from "react-icons/tfi";
const Headericon = () => {
  return (
    <div>
      <div className="flex cursor-pointer justify-end gap-x-16 text-xl text-normal_white_color">
        <div className="relative before:absolute before:-left-6 before:-top-3 before:h-[50px] before:w-[1px] before:bg-normal_white_color before:content-['']">
          <FaCartArrowDown />
        </div>
        <div>
          <FaSms />
        </div>
        <div className="relative after:absolute after:-right-8 after:-top-3 after:h-[50px] after:w-[1px] after:bg-normal_white_color after:content-[''] ">
          <VscBellDot />
        </div>
        <div>
          <TfiSettings />
        </div>
      </div>
    </div>
  );
};

export default Headericon;
