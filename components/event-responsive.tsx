"use client";

import { useEffect, useState } from "react";
import { EventSidebar } from "./layout/event-sidebar";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { useScreenStore } from "@/store/useScreenStore";
import { BuyPremium } from "./ui/buy-premium";
import { Calendar } from "lucide-react";

export const EventPersponsive = () => {
  const { isMobile, isTablet, checkScreenSize } = useScreenStore();
  useEffect(() => {
    checkScreenSize(); // Вызываем один раз при монтировании
  }, []);

  console.log("isMobile", isMobile);
  console.log("isTablet", isTablet);

  return (
    <>
      {isMobile ? (
        <Drawer>
          <DrawerTrigger>
            <Button variant={"secondary"} className="text-primary fixed bottom-10 right-10 text-foreground rounded-full w-10 h-12">
            <Calendar />

            </Button>
          </DrawerTrigger>
          <DrawerContent className="overflow-y-auto">
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
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
    </>
  );
};
