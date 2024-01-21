import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import UserListItem from "../../utils/UserListItem";

const UserList = ({ title }) => {
  return (
    <section className="h-[430px] overflow-y-scroll no-scrollbar w-[400px] p-10 shadow-xl rounded-[20px]">
      <div className="flex items-center justify-between">
        <h3 className="text-black text-xl font-semibold font-poppins ">
          {title}
        </h3>
        <div className="bg-gray-200 p-2 rounded-full hover:bg-[#3887BE] cursor-pointer text-[#3887BE] hover:text-gray-200">
          <BsThreeDotsVertical />
        </div>
      </div>
      <div>
        <UserListItem />
        <UserListItem />
        <UserListItem />
        <UserListItem />
        <UserListItem />
      </div>
    </section>
  );
};

export default UserList;
