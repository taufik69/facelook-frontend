import React from "react";

const CommonButton = ({ className, btninside, type }) => {
  return (
    <div>
      <button className={className} type={type}>
        {btninside}
      </button>
    </div>
  );
};

export default CommonButton;
