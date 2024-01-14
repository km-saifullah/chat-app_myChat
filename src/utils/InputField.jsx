import React from "react";

const InputField = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input input-bordered input-primary text-headingColor font-semibold text-4 w-[368px]"
    />
  );
};

export default InputField;
