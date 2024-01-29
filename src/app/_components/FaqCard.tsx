import Link from "next/link";
import React from "react";

export const FaqCard = () => {
  return (
    <div className="bg-white rounded-md py-4 px-3 gap-4 flex flex-col shadow-lg w-[250px]">
      <h4 className="w-24 font-bold text-neutral-800">How FDs are taxed</h4>
      <p className="text-neutral-800 text-left text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iusto eos
        minus id modi, aut fuga eveniet maxime distinctio voluptatem.
      </p>
      <Link
        href="#"
        className="border-b text-sm w-fit text-[#3B39D9] border-[#3B39D9]"
      >
        Read more...
      </Link>
    </div>
  );
};
