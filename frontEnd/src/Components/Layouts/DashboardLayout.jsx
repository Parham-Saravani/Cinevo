import { data, Outlet } from "react-router";
import AdminNavigationMenu from "../Dashboard/NavigationMenu/AdminNavigationMenu";
import { useContext, useEffect, useState } from "react";
import getCookie from "../../Utilities/Cookie/getCookie";
import UserNavigationMenu from "../Dashboard/NavigationMenu/UserNavigationMenu";
import { baseUrl } from "../../Utilities/constants";
import AdminTopBar from "../Dashboard/elements/AdminTopBar";
import UserTopBar from "../Dashboard/elements/UserTopBar";
import { AuthContext } from "../../Context/AuthProvider";
function DashboardLayout() {
  const {
    userData: { role },
  } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative flex h-screen animate-fadeIn">
      {role === "admin" ? <AdminNavigationMenu /> : <UserNavigationMenu />}
      <main className="max-lg:ml-55 max-md:ml-0 w-full overflow-auto hide-scroll">
        {role === "admin" ? (
          <AdminTopBar loading={loading} />
        ) : (
          <UserTopBar loading={loading} />
        )}

        <section className="px-5 max-lg:ml-0 max-md:mr-0 ml-60 py-5">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default DashboardLayout;
