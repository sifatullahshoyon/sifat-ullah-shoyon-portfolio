import React from "react";
import profilePic from "../../../assets/images/profile-pic.png";
import Image from "next/image";
import SubHeading from "@/components/SubHeading";

const Info = () => {
  return (
    <div className="flex items-center gap-5 my-10">
      <div className="avatar">
        <div className="w-12 h-12 rounded">
          <Image
            src={profilePic}
            alt="profile pic"
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </div>
      {/* Heading */}
      <div className="flex flex-col">
        <h1 className="font-bold text-base text-white">SIFAT ULLAH SHOYON</h1>
        <SubHeading />
      </div>
    </div>
  );
};

export default Info;
