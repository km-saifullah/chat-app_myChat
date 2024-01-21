import React from "react";
import FriendRequestItem from "../../utils/FriendRequestItem";
import { BsThreeDotsVertical } from "react-icons/bs";

const FriendRequest = ({ title }) => {
  return (
    <section className="h-[430px] overflow-y-scroll no-scrollbar w-[400px] p-10 shadow-xl rounded-[20px]">
      <div className="flex items-center justify-between">
        <h3 className="text-black text-xl font-semibold font-poppins ">
          {title}
        </h3>
        <div className="bg-gray-200 p-2 rounded-full hover:bg-primary cursor-pointer text-primary hover:text-gray-200">
          <BsThreeDotsVertical />
        </div>
      </div>
      <div>
        <FriendRequestItem />
        <FriendRequestItem />
        <FriendRequestItem />
        <FriendRequestItem />
        <FriendRequestItem />
        <FriendRequestItem />
      </div>
    </section>
  );
};

export default FriendRequest;
