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
            navigate("/", { replace: true });
            return;
          } else if (data.message === "INVALID_DATA") {
            Toast({ children: "Invalid user data." });
            removeCookie("auth-token");
            return;
          }
          if (data.role === "admin") {
            setIsAdmin(true);
          }
          if (data.role !== "admin") {
            navigate("/", { replace: true });
            Toast({ children: "Access denied!" });
            return;
          }
        } catch (error) {
          navigate("/auth", { replace: true });
          removeCookie("auth-token");
          return;
        }
      })();
    } else {
      removeCookie("auth-token");
      navigate("/auth", { replace: true });
    }
  }, []);
  return <Outlet />;
}

export default AdminRoute;
