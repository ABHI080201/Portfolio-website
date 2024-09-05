import React from "react";

const achievements = [
  {
    year: "2021",
    title: "Python Intermediate Certificate from CISCO Certification",
  },
  {
    year: "2021",
    title: "AWS [Amazon Web Services] Cloud Practitioner Certification",
  },
  {
    year: "2022",
    title:
      "Getting rated 3-Star Coder on CodeChef Competitive Programming Platform",
  },
  {
    year: "2022",
    title: "Secured Global Rank 144 in CodeChef Contest",
  },
  {
    year: "2022",
    title: "Machine Learning Expert certification",
  },
  {
    year: "2023",
    title:
      "Published Research Paper on Emergency Healthcare Services Management System",
  },
  {
    year: "2024",
    title: "Solved 450+ questions on LeetCode",
  },
];

const Achieve: React.FC = () => {
  return (
    <div className="text-white p-6 lg:w-[500px] lg:ml-[+500px]">
      <h2 className="text-xl font-bold mb-4 text-black">
        ACHIEVEMENTS & CERTIFICATIONS
      </h2>
      <ul className="p-2 rounded-lg list-none space-y-4 hover:bg-blue-100">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start">
            <span className="font-bold w-24 text-black flex-shrink-0">
              {achievement.year}
            </span>
            <span className="text-md  text-black ml-3">
              {achievement.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achieve;
