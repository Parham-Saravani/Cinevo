import React, { useEffect } from "react";
import { Outlet } from "react-router";
import NavigationMenu from "../Dashboard/NavigationMenu";

function DashboardLayout() {
  useEffect(() => {
    document.title = "Dashboard | Cinevo";
  }, []);
  return (
    <div className="relative flex h-screen animate-fadeIn">
      <NavigationMenu />
      <main className=" ml-65 mr-10 w-full overflow-auto py-5">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
