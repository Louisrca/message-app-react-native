import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export default CurrentUserProvider = ({ children }) => {
  const [user, setUser] = useState("me");
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
