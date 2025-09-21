"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Navbar = () => {
  const route = usePathname() || "";
  return (
    <section className="flex justify-between items-center px-4 mx-8">
      <div className="flex gap-8 items-center">
        <div>
          <Image src="/logo.webp" alt="Logo" width={100} height={100} />
        </div>
        <div className="flex gap-6">
          <Link
            href="/"
            className={`text-blue-900 p-2 mb-2 hover:border-b-2 cursor-pointer ${
              route === "/" ? "border-b-2" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/faqs"
            className={`text-blue-900 p-2 mb-2 hover:border-b-2 cursor-pointer ${
              route === "/faqs" ? "border-b-2" : ""
            }`}
          >
            FAQs
          </Link>
        </div>
      </div>
      <div className="text-blue-900 text-lg cursor-pointer hover:text-blue-700">
        <div className="flex items-center">
          <div>Book a call</div>
          <BsArrowUpRightCircle className="ml-2" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
