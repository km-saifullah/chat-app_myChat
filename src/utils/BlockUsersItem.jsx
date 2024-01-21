import React from "react";
import Image from "./Image";
import profileImg from "../assets/profile.png";

const BlockUsersItem = () => {
  return (
    <div className="pb-4 border-b-2">
      <div className="pt-[30px] w-[300px] flex justify-between items-center">
        <div className="flex gap-x-[10px] items-center">
          <div className="w-[50px] h-[50px] rounded-full">
            <Image img={profileImg} altText="" />
          </div>
          <div>
            <h4 className="text-[14px] font-poppins font-semibold text-black">
              Raghav
            </h4>
            <p className="text-textColor font-openSans">Today, 8:56pm</p>
          </div>
        </div>
        <div className="bg-btn-bg h-[30px] w-[85px] rounded-[4px] flex items-center justify-center text-white cursor-pointer">
          <button>Unblock</button>
        </div>
      </div>
    </div>
  );
};

export default BlockUsersItem;
