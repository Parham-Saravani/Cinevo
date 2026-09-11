import React from "react";
import { Outlet } from "react-router";

function DashboardLayout() {
  return (
    <>
      <header>Mene</header>
      <Outlet />
    </>
  );
}

export default DashboardLayout;
