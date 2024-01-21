import React from "react";
import UserList from "./UserList";
import Friends from "./Friends";
import FriendRequest from "./FriendRequest";
import SearchBar from "./SearchBar";
import BlockUsers from "./BlockUsers";

const Home = () => {
  return (
    <section className="px-[150px]">
      <div className="container mx-auto">
        <div className="shadow-3xl py-3 w-full h-[40px] rounded-[20px] px-[23px]">
          <SearchBar />
        </div>
        <div className="w-full flex items-center gap-x-[80px] gap-y-5 flex-wrap">
          <UserList title="User List" />
          <Friends title="Friends" />
          <FriendRequest title="Friend Request" />
          <BlockUsers title="Blocked Users" />
        </div>
      </div>
    </section>
  );
};

export default Home;
