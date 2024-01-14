import React from "react";
import { Link } from "react-router-dom";

const AuthToggle = ({ title, routeLink }) => {
  return (
    <p className="pl-[75px] font-openSans text-[14px] font-normal text-[#03014C]">
      Already have an account ?
      <Link
        className="pl-2 cursor-pointer text-[#EA6C00] font-bold"
        to={routeLink}
      >
        {title}
      </Link>
    </p>
  );
};

export default AuthToggle;
