import { createContext,  useState } from "react";

export let Context = createContext("");

// eslint-disable-next-line react/prop-types
export function ContextProvider({ children }) {
  let [sidebarOpen, setSidebarOpen] = useState(true);


  return (
    <Context.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </Context.Provider>
  );
}
