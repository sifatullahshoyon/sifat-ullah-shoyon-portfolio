"use client";
import Link from "next/link";
import React from "react";
import { GoHome } from "react-icons/go";
import { usePathname } from "next/navigation";
import {
  FaRegUserCircle,
  FaRegEnvelope,
  FaRegFileAlt,
  FaMediumM,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { BsPencilSquare } from "react-icons/bs";
import { SiDailydotdev } from "react-icons/si";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="pl-5">
      {/* Pages Start */}
      <div>
        <div className="flex items-center gap-3 text-base transition mb-5 group">
          <GoHome className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold" />
          <Link
            className={`link ${pathname === "/" ? "active" : "default"}`}
            href="/"
          >
            Home
          </Link>
        </div>
        <div className="flex items-center gap-3 text-base transition mb-5 group">
          <FaRegUserCircle className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold" />
          <Link
            className={`link ${pathname === "/about" ? "active" : "default"}`}
            href="/about"
          >
            About Me
          </Link>
        </div>
        <div className="flex items-center gap-3 text-base transition mb-5 group">
          <FiMonitor className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold" />
          <Link
            className={`link ${pathname === "/work" ? "active" : "default"}`}
            href="/work"
          >
            Work
          </Link>
        </div>
        <div className="flex items-center gap-3 text-base transition mb-5 group">
          <FaRegEnvelope className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold" />
          <Link
            className={`link ${pathname === "/contact" ? "active" : "default"}`}
            href="/contact"
          >
            Contact Me
          </Link>
        </div>
        <div className="flex items-center gap-3 text-base transition mb-5 group">
          <BsPencilSquare className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold" />
          <Link
            className={`link ${pathname === "/blog" ? "active" : "default"}`}
            href="/blog"
          >
            Blog
          </Link>
        </div>
      </div>
      {/* Pages Ends */}

      {/* Resources Start */}
      <div className="my-10">
        <h4 className="text-[#808080] mb-8">RESOURCES</h4>
        <div className="flex items-center gap-3 text-base transition mb-5 group">
          <FaRegFileAlt className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold" />
          <Link
            className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold"
            href="https://drive.google.com/file/d/1-O3DsumGMNyeRGfOd_B5XwzaioAMo8dI/view?usp=sharing"
            target="_blank"
          >
            Resume
          </Link>
        </div>
        <div className="flex items-center gap-3 text-base transition mb-5 group">
          <SiDailydotdev className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold" />
          <Link
            className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold"
            href="https://app.daily.dev/sifatullahshoyon"
            target="_blank"
          >
            Daily Dev
          </Link>
        </div>
        <div className="flex items-center gap-3 text-base transition mb-5 group">
          <FaMediumM className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold" />
          <Link
            className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold"
            href="https://medium.com/@sifatullahshoyon"
            target="_blank"
          >
            Medium
          </Link>
        </div>
      </div>
      {/* Resources Ends */}

      {/* Social Start */}
      <div className="my-10">
        <h4 className="text-[#808080] mb-8">SOCIAL</h4>
        <div className="flex items-center gap-3 text-base transition mb-5 group">
          <FaGithub className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold" />
          <Link
            className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold"
            href="https://github.com/sifatullahshoyon"
            target="_blank"
          >
            Github
          </Link>
        </div>
        <div className="flex items-center gap-3 text-base transition mb-5 group">
          <FaLinkedin className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold" />
          <Link
            className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold"
            href="https://www.linkedin.com/in/sifatullahshoyon/"
            target="_blank"
          >
            Linkedin
          </Link>
        </div>
        <div className="flex items-center gap-3 text-base transition mb-5 group">
          <FaInstagram className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold" />
          <Link
            className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold"
            href="https://www.instagram.com/sifatullahshoyon/"
            target="_blank"
          >
            Instagram
          </Link>
        </div>
        <div className="flex items-center gap-3 text-base transition mb-5 group">
          <FaTwitter className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold" />
          <Link
            className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold"
            href="/"
            target="_blank"
          >
            Twitter
          </Link>
        </div>
        <div className="flex items-center gap-3 text-base transition mb-5 group">
          <FaFacebook className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold" />
          <Link
            className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold"
            href="https://facebook.com/sifatullahshoyon"
            target="_blank"
          >
            Facebook
          </Link>
        </div>
      </div>
      {/* Social Ends */}
    </div>
  );
};

export default Sidebar;
