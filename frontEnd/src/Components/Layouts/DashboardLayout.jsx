import React from "react";
import { Outlet } from "react-router";
import NavigationMenu from "../Dashboard/NavigationMenu";

function DashboardLayout() {
  return (
    <div className="flex bg-amber-50 h-screen">
      <NavigationMenu />
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
