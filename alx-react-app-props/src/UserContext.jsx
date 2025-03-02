import { createContext, useState } from "react";

// Create UserContext
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Ann", role: "Frontend Engineer" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}  {/* This allows all children components to access the context */}
    </UserContext.Provider>
  );
};
