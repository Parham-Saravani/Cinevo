import { data, Outlet } from "react-router";
import AdminNavigationMenu from "../Dashboard/NavigationMenu/AdminNavigationMenu";
import { useEffect, useState } from "react";
import getCookie from "../../Utilities/Cookie/getCookie";
import UserNavigationMenu from "../Dashboard/NavigationMenu/UserNavigationMenu";
import { baseUrl } from "../../Utilities/constants";
import AdminTopBar from "../Dashboard/elements/AdminTopBar";
import UserTopBar from "../Dashboard/elements/UserTopBar";
function DashboardLayout() {
  const [role, setRole] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

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
          setUserData(data);
          setRole(data.role);
        } catch (error) {
        } finally {
          setLoading(false);
        }
      })();
    }
  }, []);

  return (
    <div className="relative flex h-screen animate-fadeIn">
      {role === "admin" ? <AdminNavigationMenu /> : <UserNavigationMenu />}
      <main className="max-lg:ml-55 max-md:ml-0 w-full overflow-auto hide-scroll">
        {role === "admin" ? (
          <AdminTopBar loading={loading} {...userData} />
        ) : (
          <UserTopBar loading={loading} {...userData} />
        )}

        <section className="px-5 max-lg:ml-0 max-md:mr-0 ml-60 py-5">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default DashboardLayout;
