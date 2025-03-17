"use client";
import ActivityCard from "@/components/shared/activity-card";
import { CoursesCard } from "@/components/shared/courses-card";
import { MiniCard, MiniCardSup } from "@/components/shared/mini-card";
import StatsChart from "@/components/shared/stats-chart";
import {
  ChartBar,
  Braces,
  Palette,
  Ratio,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      <section className="flex flex-wrap justify-center lg:flex-nowrap lg:justify-between gap-4 w-full section_container">
        {miniCardData.map((card) => (
          <MiniCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            stat={card.stat}
            id={card.id}
          />
        ))}
        <MiniCardSup />
      </section>

      <section className="section_container flex flex-wrap justify-center lg:flex-nowrap gap-4">
        <StatsChart />
        <ActivityCard />
      </section>

      <section className="section_container flex flex-col gap-4">
        <div className="flex items-center">
          <h6>My Courses</h6>
          <span className="font-semibold bg-primary ml-2 py-[2px] px-[9.5px] rounded-full">
            {coursesCardData.length}
          </span>
        </div>

        {coursesCardData.map((course) => (
          <CoursesCard
            key={course.id}
            id={course.id}
            icon={course.icon}
            title={course.title}
            lessons={course.lessons}
            process={course.process}
          />
        ))}
      </section>
    </div>
  );
}

const miniCardData = [
  {
    id: 1,
    icon: ChartBar,
    title: "Average Rating",
    stat: "8/10",
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "Active Tasks",
    stat: "12 Tasks",
  },
];

const coursesCardData = [
  {
    id: 1,
    icon: Ratio,
    title: "Web Design",
    lessons: "10 Lessons",
    process: 50,
  },
  {
    id: 2,
    icon: Braces,
    title: "Java Script",
    lessons: "7 Lessons",
    process: 30,
  },
  {
    id: 3,
    icon: Palette,
    title: "UI Design",
    lessons: "17 Lessons",
    process: 80,
  },
];
