import { createContext, useReducer } from "react";

const AuthReducer = (state, action) => {
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
  return (
    <AuthContext.Provider value={{ userData, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
