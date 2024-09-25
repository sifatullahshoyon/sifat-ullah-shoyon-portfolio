import Link from "next/link";
import React from "react";
import { FaRegFileAlt, FaMediumM } from "react-icons/fa";
import { SiDailydotdev } from "react-icons/si";

const Resources = () => {
  return (
    <div className="animate__animated animate__fadeInDown my-10">
      <h4 className="text-[#808080] mb-8">RESOURCES</h4>

      <div className="flex items-center gap-3 text-base transition-transform duration-300 ease-in hover:scale-110 mb-5 group">
        <FaRegFileAlt className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold" />
        <Link
          className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold"
          href="https://drive.google.com/file/d/1-O3DsumGMNyeRGfOd_B5XwzaioAMo8dI/view?usp=sharing"
          target="_blank"
        >
          Resume
        </Link>
      </div>

      <div className="flex items-center gap-3 text-base transition-transform duration-300 ease-in hover:scale-110 mb-5 group">
        <SiDailydotdev className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold" />
        <Link
          className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold"
          href="https://app.daily.dev/sifatullahshoyon"
          target="_blank"
        >
          Daily Dev
        </Link>
      </div>

      <div className="flex items-center gap-3 text-base transition-transform duration-300 ease-in hover:scale-110 mb-5 group">
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
  );
};

export default Resources;
