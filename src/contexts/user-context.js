import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  async function getUser() {
    const dataUserJson = await AsyncStorage.getItem("@userToken");
    const dataUser = JSON.parse(dataUserJson);
    if (dataUser) setCurrentUser(dataUser);
  }

  useEffect(() => {
    getUser();
  });

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
