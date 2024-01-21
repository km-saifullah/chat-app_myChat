import React from "react";
import { FaRegSquarePlus } from "react-icons/fa6";
import Image from "../utils/Image";
import pImage from "../assets/profile.png";

const UserListItem = () => {
  return (
    <div className="pb-4 border-b-2">
      <div className="pt-[30px] w-[300px] flex justify-between items-center">
        <div className="flex gap-x-[10px] items-center">
          <div className="w-[50px] h-[50px] rounded-full">
            <Image img={pImage} altText="" />
          </div>
          <div>
            <h4 className="text-[14px] font-poppins font-semibold text-black">
              Raghav
            </h4>
            <p className="text-textColor font-openSans">Today, 8:56pm</p>
          </div>
        </div>
        <div className="bg-btn-bg h-[30px] w-[30px] rounded-[4px] flex items-center justify-center text-white cursor-pointer">
          <FaRegSquarePlus />
        </div>
      </div>
    </div>
  );
};

export default UserListItem;
