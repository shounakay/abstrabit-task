"use client";

import Image from "next/image";
import Link from "next/link";
import phone from "@/../public/phone.svg";
import mail from "@/../public/mail.svg";
import transaction from "@/../public/transaction.svg";
import profile from "@/../public/profile.svg";
import fd from "@/../public/profile-2.svg";
import logout from "@/../public/logout.svg";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

export const RightNav = () => {
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  return (
    <div className="lg:flex hidden items-center gap-12 text-neutral-950 font-semibold text-sm">
      <Link href="#">Dashboard</Link>
      <Link href="#">FAQs</Link>
      <Link
        href="#"
        onClick={() => {
          setIsProfileOpen(false);
          setIsSupportOpen((prev) => !prev);
        }}
        className="relative"
      >
        <h2>Support</h2>
        {isSupportOpen ? (
          <div
            onClick={() => setIsSupportOpen((prev) => !prev)}
            className="absolute top-6 border border-neutral-300 rounded-md right-8 w-48 bg-white flex flex-col px-2"
          >
            <div className="text-[#3B39D9] flex items-center gap-3 px-3 py-2">
              <Image src={phone} alt="phone" />
              <div className="text-[10px]">
                <h2>+918877737777</h2>
                <h2>+918877756666</h2>
              </div>
            </div>
            <div className="text-[#3B39D9] border-t-[1px] border-neutral-300 flex items-center gap-3 px-3 py-2">
              <Image src={mail} alt="phone" />
              <div className="text-[10px]">
                <h2>support@silverbuller.in</h2>
                <h2>info@silverbullet.in</h2>
              </div>
            </div>
          </div>
        ) : null}
      </Link>
      <button
        type="button"
        onClick={() => {
          setIsSupportOpen(false);
          setIsProfileOpen((prev) => !prev);
        }}
        className="relative border-cerulean-blue-600 border-[1px] flex items-center gap-1 rounded-2xl ml-3 px-[14px] py-2"
      >
        <div className="flex items-center gap-2">
          <FaUser style={{ color: "#4a4ed4" }} />
          {isProfileOpen ? <GoChevronUp /> : <GoChevronDown />}
        </div>
        {isProfileOpen ? (
          <div className="absolute border border-neutral-300 top-9 right-8 px-3 py-2 w-48 bg-white rounded-md flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image src={profile} alt="profile" />
              <h3 className="font-medium text-xs text-neutral-500">
                My Profile
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <Image src={fd} alt="profile" />
              <h3 className="font-medium text-xs text-neutral-500">My FDs</h3>
            </div>
            <div className="flex items-center gap-3">
              <Image src={transaction} alt="profile" />
              <h3 className="font-medium text-xs text-neutral-500">
                My Transactions
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <Image src={logout} alt="profile" />
              <h3 className="font-medium text-xs text-neutral-500">Logout</h3>
            </div>
          </div>
        ) : null}
      </button>
    </div>
  );
};
