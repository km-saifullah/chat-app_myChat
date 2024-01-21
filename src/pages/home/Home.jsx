import React from "react";
import UserList from "./UserList";
import Friends from "./Friends";
import FriendRequest from "./FriendRequest";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <section className="px-[40px] py-[40px]">
      <div className="container mx-auto">
        <div className="w-full">
          <SearchBar />
        </div>
        <div className="w-full flex gap-x-[100px] items-center justify-between flex-wrap">
          <UserList title="User List" />
          <Friends title="Friends" />
          <FriendRequest title="Friend Request" />
        </div>
      </div>
    </section>
  );
};

export default Home;
