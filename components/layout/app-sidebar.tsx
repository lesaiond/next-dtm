"use client"

import {
  MessageCircle,
  Home,
  BriefcaseBusiness,
  ChartNoAxesColumn,
  Settings,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Courses",
    url: "/exams",
    icon: BriefcaseBusiness,
  },
  {
    title: "Chats",
    url: "#",
    icon: MessageCircle,
  },
  {
    title: "Grades",
    url: "#",
    icon: ChartNoAxesColumn,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const isAuthPage = pathname === "/authorization";
  if (isAuthPage) {
    return null;
  }
  return (
    <Sidebar className="">
      <SidebarHeader className="mb-7">
        <Link href={"/"}>
          <Image
            src="/logo.png"
            alt="logo"
            className="w-full"
            width={159}
            height={36}
          />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="px-7 py-3 mb-2 h-full">
                      <item.icon size={24} className="scale-[1.75]" />
                      <span className="pl-4">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
