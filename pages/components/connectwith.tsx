import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const ConnectWith: React.FC = () => {
  return (
    <div className="flex flex-col items-start  text-black lg:mt-20 ">
      <div className="flex gap-4 mb-2">
        <a
          href="https://www.linkedin.com/in/abhishekdandgawhal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl hover:text-blue-500" />
        </a>

        <a
          href="https://github.com/ABHI080201"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl hover:text-gray-500" />
        </a>

        <a href="abhishekdandgawhal@gmail.com">
          <FaEnvelope className="text-2xl hover:text-red-500" />
        </a>

        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-2xl hover:text-pink-500" />
        </a>

        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-2xl hover:text-blue-700" />
        </a>
      </div>
      <p className="hidden lg:block text-sm text-gray-700">
        Copyright © 2024 | Abhishek Dandgawhal
      </p>
    </div>
  );
};

export default ConnectWith;
