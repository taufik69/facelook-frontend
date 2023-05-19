import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import Search from "./Search";
const Menu = () => {
  const [show, setshow] = useState(null);
  useEffect(() => {
    window.addEventListener("resize", (value) => {
      console.clear();
      console.log(value.currentTarget.innerWidth);
    });
  }, []);
  return (
    <div className="flex items-center justify-end gap-x-12">
      <div className="flex  items-center justify-between  font-popins font-bold text-normal_white_color">
        <div className="text-normal_white_color">
          <GoThreeBars />
        </div>
        <div>
          <Link to="/">
            <h4>Careers</h4>
          </Link>
        </div>

        <div>
          <Link to="/">
            <h4>Store</h4>
          </Link>
        </div>

        <div>
          <Link to="/">
            <h4>FaQ</h4>
          </Link>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </div>

      <div>
        <Search />
      </div>
    </div>
  );
};

export default Menu;
