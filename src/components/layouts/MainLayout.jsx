import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <section className="flex justify-between items-start">
        <div>
          <Outlet />
        </div>
        <div>
          <Sidebar />
        </div>
      </section>
    </>
  );
};

export default MainLayout;
