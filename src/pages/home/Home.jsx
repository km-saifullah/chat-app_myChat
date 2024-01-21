import React from "react";
import UserList from "./UserList";
import Friends from "./Friends";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <section className="px-[40px] py-[40px]">
      <div className="container mx-auto">
        <div className="w-full">
          <SearchBar />
        </div>
        <div className="flex gap-x-[40px]">
          <UserList title="User List" />
          <Friends title="Friends" />
        </div>
      </div>
    </section>
  );
};

export default Home;
