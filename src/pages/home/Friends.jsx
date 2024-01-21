import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import FriendsItem from "../../utils/FriendsItem";

const Friends = ({ title }) => {
  return (
    <section className="h-[445px] overflow-y-scroll no-scrollbar w-[370px] p-10 shadow-xl rounded-[20px]">
      <div className="flex items-center justify-between">
        <h3 className="text-black text-xl font-semibold font-poppins ">
          {title}
        </h3>
        <div className="bg-gray-200 p-2 rounded-full hover:bg-primary cursor-pointer text-primary hover:text-gray-200">
          <BsThreeDotsVertical />
        </div>
      </div>
      <div>
        <FriendsItem />
        <FriendsItem />
        <FriendsItem />
        <FriendsItem />
        <FriendsItem />
      </div>
    </section>
  );
};

export default Friends;
