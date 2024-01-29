import Image from "next/image";
import React from "react";
import logo from "../../../public/rack-ext-logo.svg";
import menu from "../../../public/hamburger.svg";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import { RightNav } from "./RightNav";

export const Nav = () => {
  return (
    <header className="w-full shadow-2xl border-b-[1px]">
      <nav className="flex items-center w-full bg-white py-4 px-6 lg:px-36 justify-between">
        <Image src={logo} alt="logo" />
        <RightNav />
        <div className="lg:hidden block text-neutral-800">
          <Image src={menu} alt="menu" className="text-neutral-800" />
        </div>
      </nav>
    </header>
  );
};
