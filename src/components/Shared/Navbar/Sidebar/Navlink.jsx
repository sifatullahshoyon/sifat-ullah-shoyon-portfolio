"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHome } from "react-icons/go";
import { FaRegUserCircle, FaRegEnvelope } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { BsPencilSquare } from "react-icons/bs";

const Navlink = () => {
  const pathname = usePathname();
  return (
    <div className="animate__animated animate__fadeInDown">
      <div className="flex items-center gap-3 text-base mb-5 group transition-transform duration-300 ease-in hover:scale-110">
        <GoHome className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold" />
        <Link
          className={`link ${
            pathname === "/" ? "active" : "default"
          } group-hover:text-white`}
          href="/"
        >
          Home
        </Link>
      </div>

      <div className="flex items-center gap-3 text-base transition-transform duration-300 ease-in hover:scale-110 mb-5 group">
        <FaRegUserCircle className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold" />
        <Link
          className={`link ${
            pathname === "/about" ? "active" : "default"
          } group-hover:text-white`}
          href="/about"
        >
          About Me
        </Link>
      </div>

      <div className="flex items-center gap-3 text-base transition-transform duration-300 ease-in hover:scale-110 mb-5 group">
        <FiMonitor className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold" />
        <Link
          className={`link ${
            pathname === "/work" ? "active" : "default"
          } group-hover:text-white`}
          href="/work"
        >
          Work
        </Link>
      </div>

      <div className="flex items-center gap-3 text-base transition-transform duration-300 ease-in hover:scale-110 mb-5 group">
        <FaRegEnvelope className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold" />
        <Link
          className={`link ${
            pathname === "/contact" ? "active" : "default"
          } group-hover:text-white`}
          href="/contact"
        >
          Contact Me
        </Link>
      </div>

      <div className="flex items-center gap-3 text-base transition-transform duration-300 ease-in hover:scale-110 mb-5 group">
        <BsPencilSquare className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold" />
        <Link
          className={`link ${
            pathname === "/blog" ? "active" : "default"
          } group-hover:text-white`}
          href="/blog"
        >
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Navlink;
