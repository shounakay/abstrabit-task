import Link from "next/link";
import React from "react";

export const NavItems = () => {
  return (
    <div className="flex flex-col gap-16">
      <Link
        href="/"
        className="border-masala-300 max-w-fit cursor-pointer border-b-4 text-2xl font-semibold text-neutral-200"
      >
        Home
      </Link>
      <Link
        href="/tasks"
        className="border-masala-300 max-w-fit cursor-pointer border-b-4 text-2xl font-semibold text-neutral-200"
      >
        Dashboard
      </Link>
      <Link
        href="/auth/signin"
        className="border-masala-300 max-w-fit cursor-pointer border-b-4 text-2xl font-semibold text-neutral-200"
      >
        FAQ
      </Link>
      <Link
        href="/auth/signup"
        className="border-masala-300 max-w-fit cursor-pointer border-b-4 text-2xl font-semibold text-neutral-200"
      >
        Support
      </Link>
    </div>
  );
};
