import React from "react";

const InputField = ({
  className,
  type,
  placeholder,
  id,
  name,
  onChange,
  value,
}) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};

export default InputField;
