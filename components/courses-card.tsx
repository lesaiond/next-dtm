"use client";
import Link from "next/link";
import { Button } from "./ui/button";

interface CoursesCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  lessons: string;
  process: number;
  id: number
}

export const CoursesCard: React.FC<CoursesCardProps> = ({
  icon: Icon,
  title,
  lessons,
  process,
  id,
}) => {
  return (
    <div className="w-full flex flex-col 550:flex-row justify-between items-center gap-3 rounded-2xl shadow p-6">
      <div className="bg-muted p-3 rounded-full">
        <Icon />
      </div>
      <div className="flex flex-col 550:flex-row items-center justify-between w-full">
        <div className="flex items-center gap-3 550:block">
          <h6>{title}</h6>
          <span className="text-muted-foreground font-semibold text-[17px]">
            {lessons}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-muted w-24 lg:w-[200px] h-3 rounded-full">
            <div
              className="bg-secondary h-3 rounded-full"
              style={{ width: `${process}%` }}
            />
          </div>
          <span>{process}%</span>
        </div>
      </div>
      <Link href={`/exams/${id}`}>
        <Button variant={"outline"}>Continue</Button>
      </Link>
    </div>
  );
};
