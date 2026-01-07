"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { FiUser } from "react-icons/fi";

const data = [
  {
    name: "April",
    AV: 4000,
    RV: 2400,
    amt: 2400,
  },
  {
    name: "May",
    AV: 3000,
    RV: 1398,
    amt: 2210,
  },
  {
    name: "June",
    AV: 2000,
    RV: 9800,
    amt: 2290,
  },
  {
    name: "July",
    AV: 2780,
    RV: 3908,
    amt: 2000,
  },
  {
    name: "August",
    AV: 1890,
    RV: 4800,
    amt: 2181,
  },
  {
    name: "September",
    AV: 2390,
    RV: 3800,
    amt: 2500,
  },
  {
    name: "October",
    AV: 3490,
    RV: 4300,
    amt: 2100,
  },
];

export default function Activity() {
  return (
    <>
      <div className="col-span-2 overflow-hidden rounded border border-stone-300">
        {/* Header */}
        <div className="p-3 sm:p-4">
          <h3 className="flex items-center gap-1.5 font-medium text-sm sm:text-base">
            <FiUser className="text-base sm:text-lg" />
            Activity
          </h3>
        </div>

        {/* Chart */}
        <div className="h-56 sm:h-64 px-2 sm:px-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 0, right: 0, left: -4, bottom: 0 }}
            >
              <CartesianGrid stroke="#e4e4e7" />

              <XAxis
                dataKey="name"
                padding={{ right: 4 }}
                axisLine={false}
                tickLine={false}
                className="text-[10px] sm:text-xs font-medium"
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                className="text-[10px] sm:text-xs font-medium"
              />

              <Tooltip
                wrapperClassName="rounded text-xs sm:text-sm"
                labelClassName="text-[10px] sm:text-xs text-stone-500"
              />

              <Legend wrapperStyle={{ fontSize: "12px" }} />

              <Line
                type="monotone"
                dataKey="RV"
                stroke="#18181b"
                fill="#18181b"
                activeDot={{ r: 6 }}
              />

              <Line
                type="monotone"
                dataKey="AV"
                stroke="#5b21b6"
                fill="#5b21b6"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
