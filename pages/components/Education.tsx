import React from "react";

const Education = () => {
  const experiences = [
    {
      role: "D.Y Patil College of Engineering Akurdi, Pune",
      company: "B.E in Instrumentation and Control Engineering",
      period: "Aug 2019 -- July 2023",
      description: `I had the privilege of studying at D.Y. Patil College of Engineering Akurdi Pune, where I completed my B.E. in Instrumentation and Control Engineering. The college provided a vibrant academic environment that fueled my passion for technology and innovation. Beyond academics, I actively participated in various technical events, working as a Tech Lead and taking part in numerous hackathons and coding competitions. These experiences significantly enhanced my technical skills, leadership abilities, and teamwork, contributing to my holistic development as an engineer.`,
    },
    {
      role: "Aadarsh Jr. College, Akola",
      company: "11-12th Computer Science",
      period: "June 2017 -- May 2019",
      description: `I attended Aadarsh Jr. College in Akola, where I completed my 11th and 12th with a focus on Computer Science. This period laid the foundation for my passion in technology, providing me with essential skills in programming and computational thinking, which have been instrumental in shaping my academic and career pursuits.`,
    },
    {
      role: "Khandelwal English High School",
      company: "10th",
      period: "June 2016 -- June 2017 ",
      description: `I completed my 10th grade at Khandelwal English High School from June 2016 to June 2017, achieving a commendable 91.40% grade. During this time, I developed a strong academic foundation and honed essential skills in problem-solving and critical thinking. The supportive environment and rigorous curriculum prepared me for future academic challenges`,
    },
  ];

  return (
    <div className=" p-6 rounded-lg text-black   lg:w-[500px] lg:ml-[+500px]  ">
      <h2 className="text-xl font-bold mb-6 text-black">Education</h2>
      {experiences.map((experience, index) => (
        <div
          key={index}
          className="mb-6 hover:bg-blue-100 ml-[-20px] lg:mb-8 p-4 rounded-lg hover:bg-blue-100"
        >
          <h3 className="text-2xl font-bold text-black">{experience.role}</h3>
          <p className="text-md font-semibold text-black">
            {experience.company} <span>&rarr;</span>
          </p>
          <p className="text-sm font-semibold text-black">
            {experience.period}
          </p>
          <p className="mt-4 text-md leading-relaxed text-black">
            {experience.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Education;
