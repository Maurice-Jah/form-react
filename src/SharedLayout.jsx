import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <div>Footer</div>
    </>
  );
};

export default SharedLayout;
