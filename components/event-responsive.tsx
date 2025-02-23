"use client";

import { useEffect } from "react";
import { EventSidebar } from "./layout/event-sidebar";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { useScreenStore } from "@/store/useScreenStore";
import { Calendar } from "lucide-react";
import PageContainer from "./layout/PageContainer";

export const EventPersponsive = () => {
  const { isMobile, isTablet, checkScreenSize } = useScreenStore();
  useEffect(() => {
    checkScreenSize(); // Вызываем один раз при монтировании
  }, []);
  return (
    <PageContainer>
      {isMobile ? (
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant={"secondary"} className="fixed bottom-10 right-10 text-foreground rounded-full w-10 h-12">
            <Calendar />

            </Button>
          </DrawerTrigger>
          <DrawerContent className="overflow-y-auto">
            <DrawerHeader>
              <DrawerTitle></DrawerTitle>
            </DrawerHeader>
            <EventSidebar />
          </DrawerContent>
        </Drawer>
      ) : isTablet ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary" className="fixed bottom-10 right-10">
              <Calendar/>
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetTitle>Edit profile</SheetTitle>
            <EventSidebar />
          </SheetContent>
        </Sheet>
      ) : (
        <EventSidebar />
      )}
    </PageContainer>
  );
};
