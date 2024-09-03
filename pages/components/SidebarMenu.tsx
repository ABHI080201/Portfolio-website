// SidebarMenu.tsx
import React from "react";
import Link from "next/link"; // Importing Link from Next.js

const SidebarMenu: React.FC = () => {
  const menuItems = [
    { name: "ABOUT", href: "#about" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "PROJECTS", href: "#projects" },
    { name: "EDUCATION", href: "#education" },
    { name: "ACHIEVEMENTS & CERTIFICATIONS", href: "#achievements" },
  ];

  return (
    <div className="flex flex-col p-4 items-start text-black">
      {menuItems.map((item) => (
        <Link key={item.name} href={item.href}>
          <span className="group flex items-center mb-4 text-md font-semibold transition-all duration-300 hover:text-black cursor-pointer">
            {/* Line Animation */}
            <span className="block h-px w-4 bg-black transition-all duration-300 group-hover:w-12"></span>
            {/* Menu Item Text */}
            <span className="ml-2">{item.name}</span>
          </span>
        </Link>
      ))}
    </div>
  );
};

export default SidebarMenu;
