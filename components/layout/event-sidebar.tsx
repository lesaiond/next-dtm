"use client";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { BuyPremium } from "../ui/buy-premium";
import { useScreenStore } from "@/store/useScreenStore";

export const EventSidebar = () => {
  const [showAll, setShowAll] = useState(false);
  const { isMobile, isTablet, checkScreenSize } = useScreenStore();
  useEffect(() => {
    checkScreenSize(); // Вызываем один раз при монтировании
  }, []);

  const visibleEvents = showAll ? events : events.slice(0, 4);

  return (
    <div
      className={`${
        isMobile
          ? "max-w-[calc(100vw - 10%)] px-[20px]"
          : isTablet
          ? "p-0"
          : "py-9 px-3 pr-[60px] max-w-[380px] min-w-72 "
      }  w-full`}
    >
      <div className="flex justify-between items-center">
        <h1>Calendar</h1>
        <div className="rounded-full p-3 shadow-md">
          <Calendar />
        </div>
      </div>

      <div className="data text-muted-foreground text-xl py-[14px]">
        May 29, 2025
      </div>

      <div className="w-full mb-10">
        <div
          className={`${
            isMobile ? "max-h-[550px]" : "max-h-[370px]"
          } overflow-y-auto mb-5`}
        >
          {visibleEvents.map((event) => (
            <Link
              href={`courses/${event.id}`}
              key={event.id}
              className="flex items-center w-full border-t-2 border-muted py-[14px]"
            >
              <span className="min-w-20">{event.hour}</span>
              <div className="flex flex-col border-l-2 border-foreground pl-3 ml-3">
                <span className="font-medium text-muted-foreground">
                  {event.type}
                </span>
                <span className="text-foreground">{event.subject}</span>
              </div>
            </Link>
          ))}
        </div>
        {events.length > 4 && (
          <Button
            className="w-full font-semibold"
            variant={"outline"}
            onClick={() => setShowAll(!showAll)}
          >
            <span>{showAll ? "Скрыть" : "Показать все"}</span>
          </Button>
        )}
      </div>
      {isMobile ? null : <BuyPremium />}
    </div>
  );
};

const events = [
  {
    id: 1,
    hour: "10:00 AM",
    type: "Meeting",
    subject: "New learning formats",
  },
  {
    id: 2,
    hour: "11:30 AM",
    type: "Call",
    subject: "Project discussion with team",
  },
  {
    id: 3,
    hour: "1:00 PM",
    type: "Lunch",
    subject: "Team lunch at cafeteria",
  },
  {
    id: 4,
    hour: "2:30 PM",
    type: "Workshop",
    subject: "UI/UX best practices",
  },
  {
    id: 5,
    hour: "4:00 PM",
    type: "Presentation",
    subject: "Quarterly performance review",
  },
  {
    id: 6,
    hour: "5:30 PM",
    type: "Brainstorming",
    subject: "Ideas for new feature development",
  },
  {
    id: 7,
    hour: "7:00 PM",
    type: "Networking",
    subject: "Industry professionals meetup",
  },
  {
    id: 8,
    hour: "8:30 PM",
    type: "Webinar",
    subject: "Emerging trends in AI",
  },
  {
    id: 9,
    hour: "9:30 PM",
    type: "Personal",
    subject: "Reading time",
  },
  {
    id: 10,
    hour: "10:30 PM",
    type: "Planning",
    subject: "Goals for the next day",
  },
];
