"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";

const weekData = [
  { day: "Mon", hours: 3 },
  { day: "Tue", hours: 1.5 },
  { day: "Wed", hours: 4.5 },
  { day: "Thu", hours: 4 },
  { day: "Fri", hours: 2.8 },
  { day: "Sat", hours: 1.5 },
  { day: "Sun", hours: 2 },
];

const monthData = Array.from({ length: 30 }, (_, i) => ({
  day: `Day ${i + 1}`,
  hours: Math.random() * 5,
}));

const yearData = Array.from({ length: 12 }, (_, i) => ({
  day: new Date(0, i).toLocaleString("default", { month: "short" }),
  hours: Math.random() * 5,
}));

type TimeRange = "day" | "week" | "month" | "year";

export default function StatsChart() {
  const [timeRange, setTimeRange] = useState<TimeRange>("week");

  const getData = () => {
    switch (timeRange) {
      case "day":
        return weekData.slice(0, 1);
      case "week":
        return weekData;
      case "month":
        return monthData;
      case "year":
        return yearData;
      default:
        return weekData;
    }
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow border">
      <div className="flex items-center justify-between mb-6">
        <h6>
          {timeRange.charAt(0).toUpperCase() + timeRange.slice(1)}ly Overview
        </h6>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="w-4 h-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTimeRange("day")}>
              Daily View
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimeRange("week")}>
              Weekly View
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimeRange("month")}>
              Monthly View
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimeRange("year")}>
              Yearly View
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="h-[300px] -ml-10">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            height={300}
            data={getData()}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            barGap={2} // Минимальный зазор между колонками одной категории
            barCategoryGap={5} // Расстояние между категориями колонок
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${value}h`}
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="100%" stopColor="#ff758c" stopOpacity={1} />
                <stop offset="0%" stopColor="#ff7eb3" stopOpacity={1} />
              </linearGradient>
            </defs>
            <Bar
              dataKey="hours"
              fill="url(#colorGradient)"
              radius={[10, 10, 0, 0]}
              barSize={45} // Уменьшил ширину колонок
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
