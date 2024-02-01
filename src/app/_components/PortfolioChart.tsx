"use client";

import dynamic from "next/dynamic";
import React, { useCallback, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

// const PieChart = dynamic(
//   () => import("recharts").then((module) => module.PieChart),
//   { ssr: false }
// );

// const Pie = dynamic(() => import("recharts").then((module) => module.Pie), {
//   ssr: false,
//   loading: <div>Loading</div>,
// });

// const Cell = dynamic(() => import("recharts").then((module) => module.Cell), {
//   ssr: false,
// });

const COLORS = ["#6c63ff", "#59CBD3", "#B9C606", "#FA9D17"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      fontSize={12}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export const PortfolioChart = () => {
  return (
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        cx={80}
        cy={80}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};
