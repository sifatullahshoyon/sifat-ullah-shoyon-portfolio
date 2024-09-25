import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "@/assets/images/logo/logo.png";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={logo}
        className="w-20 h-20"
        alt="logo"
        loading="lazy"
        placeholder="blur"
      />
    </Link>
  );
};

export default Logo;
