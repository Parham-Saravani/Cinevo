import { Outlet } from "react-router";
import AdminNavigationMenu from "../Dashboard/NavigationMenu/AdminNavigationMenu";
import { useEffect, useState } from "react";
import getCookie from "../../Utilities/Cookie/getCookie";
import UserNavigationMenu from "../Dashboard/NavigationMenu/UserNavigationMenu";

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
          console.log(data);
          setRole(data.role);
        } catch (error) {}
      })();
    }
    [];
  } , []);
  return (
    <div className="relative flex h-screen animate-fadeIn">
      {role === 'admin' ? <AdminNavigationMenu/> : <UserNavigationMenu/>}
      <main className="ml-66 mr-6 w-full overflow-auto py-5 custom-scroll">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
