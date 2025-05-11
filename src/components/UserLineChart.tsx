"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", frontend: 0, backend: 200 },
  { month: "February", frontend: 150, backend: 260 },
  { month: "March", frontend: 180, backend: 220 },
  { month: "April", frontend: 250, backend: 240 },
  { month: "May", frontend: 300, backend: 270 },
  { month: "June", frontend: 400, backend: 360 },
];


const chartConfig = {
  frontend: {
    label: "Frontend Requests",
    color: "var(--chart-1)",
  },
  backend: {
    label: "Backend Requests",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function UserLineChart() {
  return (
    <ChartContainer config={chartConfig} className="my-10">
      <LineChart
        data={chartData}
        margin={{ left: 12, right: 12 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis tickLine={false} tickMargin={10} axisLine={false} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Line
          dataKey="frontend"
          type="monotone"
          stroke="var(--color-frontend)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="backend"
          type="monotone"
          stroke="var(--color-backend)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
