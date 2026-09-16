import { Outlet } from "react-router";
import AdminNavigationMenu from "../Dashboard/NavigationMenu/AdminNavigationMenu";
import { useEffect, useState } from "react";
import getCookie from "../../Utilities/Cookie/getCookie";
import UserNavigationMenu from "../Dashboard/NavigationMenu/UserNavigationMenu";
import { baseUrl } from "../../Utilities/constants";
function DashboardLayout() {
  const [role, setRole] = useState("");

  useEffect(() => {
    document.title = "Dashboard | Cinevo";
    const token = getCookie("auth-token");
    if (token) {
      (async () => {
        try {
          const response = await fetch(`${baseUrl}/api/user/me`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
          });
          if (!response.ok) throw Error();
          const data = await response.json();
          setRole(data.role);
        } catch (error) {}
      })();
    }
  }, []);
  
  return (
    <div className="relative max-md:px-5 flex h-screen animate-fadeIn">
      {role === "admin" ? <AdminNavigationMenu /> : <UserNavigationMenu />}
      <main className="ml-66 max-lg:ml-60 max-md:ml-0 mr-6 max-md:mr-0 w-full overflow-auto py-5  hide-scroll">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
