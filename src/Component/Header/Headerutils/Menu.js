import React from "react";
import { Link } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
const Menu = () => {
  return (
    <div className="flex items-center gap-x-12 ">
      <div>
        <GoThreeBars />
      </div>
      <div className="flex items-center gap-9 ">
        <Link to="/">
          <h4>Careers</h4>
        </Link>

        <Link to="/">
          <h4>Store</h4>
        </Link>

        <Link to="/">
          <h4>FaQ</h4>
        </Link>
      </div>
      <div>
        <BsThreeDots />
      </div>
    </div>
  );
};

export default Menu;
