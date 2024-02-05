import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaqCard } from "./FaqCard";

export const Faq = () => {
  return (
    <section className="flex flex-col xss:w-80 xs:w-[440px] md:w-[600px] lg:w-[800px] 2xl:w-full gap-4">
      <div className="flex justify-between items-center text-neutral-800">
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-lg">Get Answer</h4>
          <p className="font-semibold text-sm ">to all your questions</p>
        </div>
        <div className="flex gap-4 items-center cursor-pointer">
          <FaChevronLeft style={{ color: "#d9dade", fontSize: 24 }} />
          <FaChevronRight style={{ fontSize: 24 }} />
        </div>
      </div>
      <div className="flex items-center gap-4 xl:gap-0 justify-between flex-wrap">
        {Array.from({ length: 3 }, (v, i) => (
          <FaqCard key={i} />
        ))}
      </div>
    </section>
  );
};
