import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <section className="min-h-screen  bg-cyan-100">
        <div className=" p-3 max-w-3xl mx-auto pt-16">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Layout;
