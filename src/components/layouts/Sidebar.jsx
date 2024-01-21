import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import profileImg from "../../assets/profile.png";
import Image from "../../utils/Image";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-[168px] h-[100vh] bg-btn-bg">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-[130px]">
          <div className="mt-[38px] flex items-center justify-center flex-col gap-[10px] text-white font-poppins">
            <Image img={profileImg} alt="Profile Image" />
            <h3>John Doe</h3>
          </div>
          <div>
            <ul className="flex items-center justify-center flex-col gap-[100px]">
              <li className="text-white text-3xl">
                <NavLink to="/home">
                  <IoHomeOutline />
                </NavLink>
              </li>
              <li className="text-white text-3xl">
                <NavLink to="/messages">
                  <AiFillMessage />
                </NavLink>
              </li>
              <li className="text-white text-3xl">
                <NavLink to="/notification">
                  <IoIosNotificationsOutline />
                </NavLink>
              </li>
              <li className="text-white text-3xl">
                <NavLink to="/settings">
                  <IoSettingsOutline />
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="text-white text-3xl cursor-pointer">
            <FiLogOut />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
