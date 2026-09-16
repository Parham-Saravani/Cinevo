import { useEffect, useState } from "react";
import removeCookie from "../Utilities/Cookie/removeCookie";
import getCookie from "../Utilities/Cookie/getCookie";
import { Outlet, useNavigate } from "react-router";
import Toast from "../Components/Toast/Toast";
import { baseUrl } from "../Utilities/constants";

function PrivateRoute() {}

function AdminRoute() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
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
          if (!response.ok) {
            Toast({ children: "something went wrong!" });
            return;
          }
          const data = await response.json();

          if (data.message === "INVALID_TOKEN") {
            Toast({ children: "Invalid token. Please log in again." });
            return;
          } else if (data.message === "INVALID_DATA") {
            Toast({ children: "Invalid user data." });
            return;
          }
          if (data.role === "admin") {
            setIsAdmin(true);
          }
          if (!isAdmin) {
            navigate("/", { replace: true });
            Toast({ children: "Access denied!" });
          }
        } catch (error) {
          navigate("/auth", { replace: true });
          removeCookie("auth-token");
        }
      })();
    } else {
      removeCookie("auth-token");
    }
  }, []);
  return <Outlet />;
}

export default AdminRoute;
