import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const Social = () => {
  return (
    <div className="animate__animated animate__fadeInDown my-10">
      <h4 className="text-[#808080] mb-8">SOCIAL</h4>

      <div className="flex items-center gap-3 text-base transition-transform duration-300 ease-in hover:scale-110 mb-5 group">
        <FaGithub className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold" />
        <Link
          className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold"
          href="https://github.com/sifatullahshoyon"
          target="_blank"
        >
          Github
        </Link>
      </div>

      <div className="flex items-center gap-3 text-base transition-transform duration-300 ease-in hover:scale-110 mb-5 group">
        <FaLinkedin className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold" />
        <Link
          className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold"
          href="https://www.linkedin.com/in/sifatullahshoyon/"
          target="_blank"
        >
          Linkedin
        </Link>
      </div>

      <div className="flex items-center gap-3 text-base transition-transform duration-300 ease-in hover:scale-110 mb-5 group">
        <FaInstagram className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold" />
        <Link
          className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold"
          href="https://www.instagram.com/sifatullahshoyon/"
          target="_blank"
        >
          Instagram
        </Link>
      </div>

      <div className="flex items-center gap-3 text-base transition-transform duration-300 ease-in hover:scale-110 mb-5 group">
        <FaTwitter className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold" />
        <Link
          className="text-[#808080] text-base group-hover:text-white font-medium group-hover:font-bold"
          href="/"
          target="_blank"
        >
          Twitter
        </Link>
      </div>

      <div className="flex items-center gap-3 text-base transition-transform duration-300 ease-in hover:scale-110 mb-5 group">
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
  );
};

export default Social;
