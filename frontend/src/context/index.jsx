import { createContext } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const check = {
    name: "Syed Faraz",
    dob: "24-05-2003",
  };
  return (
    <GlobalContext.Provider value={{ check }}>
      {children}
    </GlobalContext.Provider>
  );
}
