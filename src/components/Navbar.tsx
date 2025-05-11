import { Settings, User } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

// drop down
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./mini_comp/Theme_Toggle";
import { SidebarTrigger } from "./ui/sidebar";
import LogOutComponent from "./mini_comp/LogOut";
// drop down

const Navbar = () => {
  return (
    <nav className=" p-4 flex items-center justify-between">
      {/* LEFT */}
      <SidebarTrigger />
      {/* we can also make cutom btn using useSideBar Hook */}
      {/* Right */}
      <div className="flex items-center gap-4">
        <Link href={"/"}>Dashboard</Link>
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger>
            {" "}
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/140326161?v=4" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="h-[1.2rem] w-[1.2rem] mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-[1.2rem] w-[1.2rem] mr-2" /> Setting
            </DropdownMenuItem>
            <LogOutComponent />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
