import React from "react";

const year = "2024";
const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

export const MaturityTimeline = () => {
  return (
    <div className="flex items-center relative overflow-hidden">
      {[...Array(3)].map((_, i) => {
        return (
          <div key={i} className="flex flex-col w-32 md:w-52 gap-3">
            <h3 className="text-center text-neutral-400 font-medium">
              {i == 0 ? year : (Number(year) + i).toString()}
            </h3>
            <div className="flex items-center">
              {months.map((month, idx) => (
                <div
                  key={idx}
                  className={`h-44 w-6 ${
                    i === 0
                      ? " bg-blue-marguerite-200"
                      : i === 1
                      ? " bg-[#d1fa9c]"
                      : "bg-[#feecc7]"
                  }  border-r text-center text-neutral-800 text-sm border-white`}
                >
                  <h3 className="border-b-[1px] border-neutral-300">{month}</h3>
                </div>
              ))}
            </div>
          </div>
        );
      })}
      <div className=" absolute w-32 text-xs rounded-lg bg-[#3B39D9] text-center text-neutral-200 top-20">
        <h3>Utkarsh FD 1 </h3>
        <div className=" absolute w-64 text-xs rounded-lg bg-[#3B39D9] text-center text-neutral-200 top-8">
          Shriram FD Plan 2{" "}
        </div>
        <div className=" absolute w-56 text-xs rounded-lg bg-[#3B39D9] text-center text-neutral-200 top-16 left-6">
          Bajaj Finserve FD 1{" "}
        </div>
        <div className=" absolute w-[396px] text-xs rounded-lg bg-[#3B39D9] text-center text-neutral-200 top-24 left-12">
          Mahindra FD Plan 2{" "}
        </div>
      </div>
    </div>
  );
};
