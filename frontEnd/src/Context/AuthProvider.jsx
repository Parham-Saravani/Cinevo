import { createContext, useEffect, useReducer } from "react";

const AuthReducer = async (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.data;
    default:
      return state;
  }
};

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userData, dispatch] = useReducer(AuthReducer, null);
  useEffect(() => {
    console.log(userData);
  },[userData]);
  return (
    <AuthContext.Provider value={{ userData, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
