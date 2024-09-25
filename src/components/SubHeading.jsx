"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const SubHeading = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Front End Developer",
          "React Js Developer",
          "MERN Stack Developer",
        ],
        autoStart: true,
        loop: true,
      }}
      className="text-sm mt-1 text-[#808080] font-medium"
    />
  );
};

export default SubHeading;
