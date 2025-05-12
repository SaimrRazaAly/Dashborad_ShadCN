"use client";

import React, { createContext, useContext, useState } from "react";
import { FormData } from "@/components/FirstTimeForm";
// Define a type for your user data

// Define a type for your context value
type UserContextType = {
  userData: FormData;
  setUserData: React.Dispatch<React.SetStateAction<FormData>>;
};

// Create the context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider component
export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userData, setUserData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    address: "",
    imageUrl: "",
  });

  // Optional: Persist to localStorage
  // useEffect(() => {
  //   const saved = localStorage.getItem("userData");
  //   // if (saved) setUserData(JSON.parse(saved));
  // }, []);

  // useEffect(() => {
  //   // localStorage.setItem("userData", JSON.stringify(userData));
  // }, [userData]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook to use context
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};
