import { createContext, useContext, useState } from "react";

const UserContext = createContext()

const UserProvider = ({ children }) => {

  const [users, setUsers] = useState(null);
  const [user, setUser] = useState(null);

  return(
    <UserContext.Provider value={{ users, setUsers, user, setUser }}>
      {children}
    </UserContext.Provider>
  )

}

const useUserContext = () => useContext(UserContext)

export { UserContext, UserProvider, useUserContext }