import React from "react";

const Checkbox = (props) => {
  return (
    <div className=" w-full cursor-pointer rounded  bg-normal_white_color p-3  focus:outline-none">
      <input
        id={props.value}
        name="=gender"
        value={props.value}
        type="radio"
        className="scale-125 cursor-pointer"
        onChange={props.onChange}
      />
      <label htmlFor={props.value} className="ml-2 font-popins">
        {props.value}
      </label>
    </div>
  );
};

export default Checkbox;
