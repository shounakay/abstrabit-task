"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/rack-ext-logo.svg";
import menu from "../../../public/hamburger.svg";
import { RightNav } from "./RightNav";
import { NavItems } from "./NavItems";

export const Nav = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="w-full shadow-2xl border-b-[1px]">
        <nav className="flex items-center w-full bg-white py-4 px-6 lg:px-36 justify-between">
          <Image src={logo} alt="logo" />
          <RightNav />
          <div
            className="lg:hidden block text-neutral-800"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <Image src={menu} alt="menu" className="text-neutral-800" />
          </div>
        </nav>
      </header>
      {isMenuOpen ? (
        <section className=" z-10 min-h-full bg-neutral-800 px-8 py-14">
          <NavItems />
        </section>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
