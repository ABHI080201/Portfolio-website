import React from "react";
import Image from "next/image";
import ConnectWith from "./connectwith";
import ViewResume from "./ViewResume";
import SidebarMenu from "./SidebarMenu";

const ProfileCard = () => {
  return (
    <div className="flex justify-center items-center lg:ml-[+400px] lg:mt-8 md:flex md:items-start md:ml-[-180px]">
      <div className="flex flex-col items-start gap-2 mt-7 ml-[10px]">
        <div className="flex items-center p-2 gap-4 sm:flex-row flex-row-reverse ml-[-10px] lg:ml-[+30px] md:ml-[-30px]">
          <Image
            src="/pic.jpeg"
            alt="Abhishek"
            width={120}
            height={120}
            className="rounded-full aspect-square object-cover"
          />
          <div className="flex flex-col gap-2 ml-3 mt-2 sm:ml-0 sm:mt-0 lg:w-[400px]">
            <h1 className="text-2xl font-bold text-gray-700 lg:text-4xl lg:w-[400px]">
              Abhishek Dandgawhal
            </h1>
            <span className="text-md font-semibold text-gray-500 sm:text-2xl lg:w-[400px]">
              Software Developer | Data Scientist
            </span>
          </div>
        </div>
        <div className="flex items-center w-full sm:w-[500px] p-2 lg:w-[500px]">
          <p className="text-sm text-gray-700  sm:text-lg justify-text  md:ml-[-20px] lg:ml-[+30px] lg:w-[600px]">
            Software and Full-Stack AI Developer crafting intuitive digital
            experiences and AI solutions with seamless design and functionality,
            ensuring user satisfaction and seamless interactions.
          </p>
        </div>
        <div className="flex flex-col items-start ml-[+5px] md:ml-[-10px] lg:ml-[+30px]">
          <ViewResume />
          <SidebarMenu />
          <ConnectWith />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
