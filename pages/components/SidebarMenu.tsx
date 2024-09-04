import React, { useState, useEffect } from "react";
import Link from "next/link"; // Importing Link from Next.js

const SidebarMenu: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  const menuItems = [
    { name: "ABOUT", href: "#aboutus" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "PROJECTS", href: "#projects" },
    { name: "EDUCATION", href: "#education" },
    { name: "ACHIEVEMENTS & CERTIFICATIONS", href: "#achievements" },
  ];

  useEffect(() => {
    const sections = menuItems.map((item) => document.querySelector(item.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 } // Adjust the threshold as needed
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [menuItems]);

  return (
    <div className="flex flex-col p-4 items-start text-black">
      {menuItems.map((item) => (
        <Link key={item.name} href={item.href}>
          <span
            className={`group flex items-center mb-4 text-md font-semibold transition-all duration-300 hover:text-black cursor-pointer ${
              activeSection === item.href.slice(1)
                ? "text-black"
                : "text-gray-500"
            }`}
          >
            {/* Line Animation */}
            <span
              className={`block h-px w-4 bg-black transition-all duration-300 ${
                activeSection === item.href.slice(1)
                  ? "w-12"
                  : "group-hover:w-12"
              }`}
            ></span>
            {/* Menu Item Text */}
            <span className="ml-2">{item.name}</span>
          </span>
        </Link>
      ))}
    </div>
  );
};

export default SidebarMenu;
