import React from "react";

const Brithdate = ({ className, datearr, onChange, value, name }) => {
  return (
    <select className={className} onChange={onChange} name={name}>
      <option value={value}> {name}</option>
      {datearr.map((item, index) => (
        <option value={datearr.length !== 12 ? item : index + 1} key={index}>
          {item <= 9 && "0"}
          {item}
        </option>
      ))}
    </select>
  );
};

export default Brithdate;
