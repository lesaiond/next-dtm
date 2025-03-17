"use client";

import { ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Activity {
  name: string;
  percentage: number;
  color: string;
}

const activities: Activity[] = [
  { name: "Study", percentage: 60, color: "#df6690" },
  { name: "Exams", percentage: 40, color: "#ffc75b" },
];

export default function ActivityCard() {
  const totalPercentage = 76;
  const cx = "98";
  const cy = "98";
  const radius = "85";
  const cwidth = "24";

  return (
    <Card className="w-full lg:w-[500px]">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <h6>Activities</h6>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 px-2">
              Week <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>This Week</DropdownMenuItem>
            <DropdownMenuItem>Last Week</DropdownMenuItem>
            <DropdownMenuItem>Last Month</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="relative flex justify-center mb-8">
          <svg className="w-[196px] h-[196px] -rotate-90">
            <circle
              cx={cx}
              cy={cy}
              r={radius}
              stroke="rgb(229, 231, 235)"
              strokeWidth={cwidth}
              fill="none"
            />
            {activities.map((activity, index) => {
              const previousPercentages = activities
                .slice(0, index)
                .reduce((sum, act) => sum + act.percentage, 0);

              const circumference = 2 * Math.PI * 85;
              const offset =
                (circumference * (100 - activity.percentage)) / 100;
              const rotation = (previousPercentages * 360) / 100;

              return (
                <circle
                  key={activity.name}
                  cx={cx}
                  cy={cy}
                  r={radius}
                  stroke={activity.color}
                  strokeWidth={cwidth}
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    transformOrigin: `${cx}px ${cy}px`,
                  }}
                />
              );
            })}
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
            {totalPercentage}%
          </div>
        </div>
        <div className="space-y-2">
          {activities.map((activity) => (
            <div
              key={activity.name}
              className="flex items-center justify-between border-b-2 last:border-b-0 pb-1"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: activity.color }}
                />
                <span className="text-[17px] font-medium">{activity.name}</span>
              </div>
              <span className="text-[17px] text-muted-foreground">
                {activity.percentage}%
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
