"use client";
import { BellDot } from "lucide-react";
import { SidebarTrigger } from "../ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NotificationPanel } from "../notification-panel";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const AppHeader = () => {
  const pathname = usePathname();
    const isAuthPage = pathname === "/authorization";
    if (isAuthPage) {
      return null;
    }
  return (
    <header className="flex justify-between items-center section_container">
      <h1>Dashboard</h1>
      <SidebarTrigger />
      <div className="flex items-center gap-6">
        <NotificationPanel />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="w-12 h-12">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="User Avatar"
              />
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuItem>
              <Link href={"/settings"}>Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/courses"}>Courses</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/authorization"}>auth</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log("Logout")}>
              Выйти
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
