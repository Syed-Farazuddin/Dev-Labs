import { createContext } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const userInfo = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : null;
  return (
    <GlobalContext.Provider value={{ userInfo }}>
      {children}
    </GlobalContext.Provider>
  );
}
