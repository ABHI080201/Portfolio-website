import React from "react";
import Image from "next/image";
import ConnectWith from "./connectwith";
import ViewResume from "./ViewResume";
import SidebarMenu from "./SidebarMenu";

const ProfileCard = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-start gap-2 mt-7">
        <div className="flex items-center p-2 gap-4 sm:flex-row flex-row-reverse">
          <Image
            src="/pic.jpeg"
            alt="Abhishek"
            width={120}
            height={120}
            className="rounded-full aspect-square object-cover"
          />
          <div className="flex flex-col gap-2 ml-3 mt-2 sm:ml-0 sm:mt-0">
            <h1 className="text-3xl font-bold text-gray-700 sm:text-4xl">
              Abhishek Dandgawhal
            </h1>
            <span className="text-lg font-semibold text-gray-500 sm:text-xl">
              Software Developer | Data Scientist
            </span>
          </div>
        </div>
        <div className="flex items-center w-full sm:w-[400px] p-2">
          <p className="text-sm text-gray-700 sm:text-lg justify-text">
            Software and Full-Stack AI Developer crafting intuitive digital
            experiences and AI solutions with seamless design and functionality,
            ensuring user satisfaction and seamless interactions.
          </p>
        </div>
        <div>
          <ViewResume />
          <SidebarMenu />
          <ConnectWith />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
