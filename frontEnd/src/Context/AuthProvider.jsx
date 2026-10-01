import { createContext, useEffect, useReducer } from "react";
import getCookie from "../Utilities/Cookie/getCookie";
import { baseUrl } from "../Utilities/constants";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.data;
    case "LOGOUT":
      return null;
    default:
      return state;
  }
};

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userData, dispatch] = useReducer(AuthReducer, null);
  useEffect(() => {
    (async () => {
      const token = getCookie("auth-token");
      if (token) {
        const response = await fetch(`${baseUrl}/api/user/me`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        if (!response.ok) {
          return;
        }
        const data = await response.json();
        dispatch({ type: "LOGIN", data });
      }
    })();
  }, []);
  return (
    <AuthContext.Provider value={{ userData, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
