"use client";

import { useState } from "react";
import { Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Notification {
  id: string;
  title: string;
  project: string;
  time: string;
}

export function NotificationPanel() {
  const [notifications] = useState<Notification[]>([
    {
      id: "1",
      title: "New Requested date",
      project: "Training 965",
      time: "1 hour ago",
    },
    {
      id: "2",
      title: "New Requested date",
      project: "Training 965",
      time: "1 hour ago",
    },
    {
      id: "3",
      title: "New Requested date",
      project: "Training 965",
      time: "1 hour ago",
    },
    {
      id: "4",
      title: "New Requested date",
      project: "Training 965",
      time: "1 hour ago",
    },
  ]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-full p-3 shadow-md"
        >
          <Bell className="h-5 w-5 " />
          {notifications.length > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-secondary text-[10px] font-medium text-white flex items-center justify-center">
              {notifications.length}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[380px]">
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <h2 className="text-sm font-medium">Notifications</h2>
          <span className="text-xs text-muted-foreground">
            {notifications.length}
          </span>
        </div>
        <ScrollArea className="h-[300px]">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-start gap-4 px-4 py-3 hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Bell className="h-4 w-4 text-background" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-primary">
                    {notification.project}
                  </p>
                  <span className="text-xs text-muted-foreground">
                    {notification.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
