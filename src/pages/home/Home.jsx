import React from "react";
import UserList from "./UserList";
import Friends from "./Friends";
import FriendRequest from "./FriendRequest";
import SearchBar from "./SearchBar";
import BlockUsers from "./BlockUsers";

const Home = () => {
  return (
    <section className="px-[60px] py-[20px]">
      <div className="container mx-auto">
        <div className="w-full">
          <SearchBar />
        </div>
        <div className="w-full flex items-center justify-between flex-wrap">
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
