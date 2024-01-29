"use client";

import React from "react";
import { GoChevronDown } from "react-icons/go";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { PortfolioChart } from "./PortfolioChart";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const Portfolio = () => {
  return (
    <section className="w-[500px] bg-white flex flex-col gap-6 rounded-md px-4 py-3 text-neutral-700 shadow-xl">
      <div className="flex items-center justify-between text-sm ">
        <h2 className="font-semibold ">Your FD Portfolio</h2>
        <button
          type="button"
          className="flex items-center gap-1 rounded-md border-[0.5px] border-silver-300 px-3 py-2"
        >
          <span>Deposit Amt</span>
          <GoChevronDown />
        </button>
      </div>
      <div className="flex items-center gap-7">
        <PortfolioChart />
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 text-xs">
            <span className="w-3 h-3 bg-[#6C63FF] rounded-3xl" />
            <p>Bajaj Finserve</p>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="w-3 h-3 bg-[#FA9D17] rounded-3xl" />
            <p>Shriram Finance</p>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="w-3 h-3 bg-[#B9C606] rounded-3xl" />
            <p>Mahindra Finance</p>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="w-3 h-3 bg-[#59CBD3] rounded-3xl" />
            <p>Utkarsh Small Finance Bank</p>
          </div>
        </div>
      </div>
    </section>
  );
};
