import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ViewResume: React.FC = () => {
  return (
    <div className="flex  items-start p-2 ">
      <a
        href="/ppx.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-lg font-semibold text-blue-500 hover:underline"
      >
        <FaArrowRight /> View Resume
      </a>
    </div>
  );
};

export default ViewResume;
