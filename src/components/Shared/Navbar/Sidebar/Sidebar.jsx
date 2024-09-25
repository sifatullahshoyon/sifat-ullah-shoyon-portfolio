import React from "react";
import Navlink from "./Navlink";
import Resources from "./Resources";
import Social from "./Social";

const Sidebar = () => {
  return (
    <div className="pl-5">
      <Navlink />
      <Resources />
      <Social />
    </div>
  );
};

export default Sidebar;
