import React from "react";
import { MdMenuOpen } from "react-icons/md";
import Logo from "@/components/Shared/Logo/Logo";

const MenuBtn = () => {
  return (
    <label
      htmlFor="my-drawer-2"
      className="px-2 py-4 -mb-2 drawer-button text-white flex flex-row-reverse justify-between items-center lg:hidden"
    >
      <MdMenuOpen className="h-8 w-8" />
      {/* logo */}
      <Logo />
    </label>
  );
};

export default MenuBtn;
