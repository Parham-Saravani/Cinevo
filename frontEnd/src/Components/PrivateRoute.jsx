import { useEffect, useState } from "react";
import removeCookie from "../Utilities/Cookie/removeCookie";
import getCookie from "../Utilities/Cookie/getCookie";
import { Outlet, useNavigate } from "react-router";
import Toast from "../Components/Toast/Toast";
import { baseUrl } from "../Utilities/constants";

function PrivateRoute() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState();
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
          if (!response.ok) throw Error();
          const data = await response.json();

          if (data.message === "INVALID_TOKEN") {
            throw Error("Invalid token. Please log in again.");
          } else if (data.message === "INVALID_DATA") {
            throw Error("Invalid user data.");
          }

          setIsLogin(true);
        } catch (error) {
          navigate("/auth", { replace: true });
          removeCookie("auth-token");
          Toast({ children: error.message });
        }
      })();
    } else {
      removeCookie("auth-token");
    }
  }, []);
  return <Outlet />;
}

export default PrivateRoute;
