import React from "react";

const InputField = ({ type, placeholder, name, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input input-bordered input-primary text-headingColor font-semibold text-4 w-[368px]"
    />
  );
};

export default InputField;
