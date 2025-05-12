"use client";
import { useRouter } from "next/navigation"; // Corrected import
import { LogOut, Moon, Settings, User } from "lucide-react";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { useUserContext } from "@/providers/User_Data";
import { set } from "date-fns";

const LogOutComponent = () => {
  const router = useRouter(); // Using the useRouter hook for navigation
  const { setUserData } = useUserContext();
  const handleLogout = () => {
    // Remove item from local storage
    localStorage.removeItem("firstTimeFormSubmitted");
    setUserData({
      name: "",
      address: "",
      email: "",
      password: "",
      imageUrl: undefined,
    });
    // Redirect to the login page after logout
    router.push("/register"); // Redirect to the login page after logout
  };

  return (
    <DropdownMenuItem variant="destructive" onClick={handleLogout}>
      <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
      Logout
    </DropdownMenuItem>
  );
};

export default LogOutComponent;
