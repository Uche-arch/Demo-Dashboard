"use client";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

import { FiEye } from "react-icons/fi";

const data = [
  {
    subject: "Transportation",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Store",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Packaging",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Wages",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Tax",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "Stocks",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default function Usage() {
  return (
    <>
      <div className="overflow-hidden rounded border border-stone-300">
        {/* Header */}
        <div className="p-3 sm:p-4">
          <h3 className="flex items-center gap-1.5 font-medium text-sm sm:text-base">
            <FiEye className="text-base sm:text-lg" />
            Usage
          </h3>
        </div>

        {/* Chart */}
        <div className="h-56 sm:h-64 px-2 sm:px-4">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
              <PolarGrid />

              <PolarAngleAxis
                dataKey="subject"
                className="text-[10px] sm:text-xs"
              />

              <PolarRadiusAxis
                angle={30}
                domain={[0, 150]}
                className="text-[10px] sm:text-xs"
              />

              <Radar
                name="Cost"
                dataKey="A"
                stroke="#5b21b6"
                fill="#5b21b6"
                fillOpacity={0.4}
              />

              <Radar
                name="Maintenance"
                dataKey="B"
                stroke="#18181b"
                fill="#18181b"
                fillOpacity={0.4}
              />

              <Legend wrapperStyle={{ fontSize: "12px" }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
