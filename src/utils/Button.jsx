import React from "react";

const Button = ({ title }) => {
  return (
    <button className="py-4 rounded-[86px] bg-btn-bg w-[368px] text-whiteColor">
      {title}
    </button>
  );
};

export default Button;
