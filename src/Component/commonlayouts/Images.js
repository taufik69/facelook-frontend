import React from "react";

const Images = ({ className, imgsrc }) => {
  return <img className={className} src={imgsrc} alt={imgsrc} />;
};

export default Images;
