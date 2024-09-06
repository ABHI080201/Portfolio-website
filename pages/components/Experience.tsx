import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Analysed",
      period: "June 2023 -- May 2024",
      description: `Optimized app performance, improving speed by 30% and reducing load times by 20%. Streamlined team collaboration, boosting project delivery efficiency by 25% and cutting rework time by 40%. Leveraged MERN stack (MongoDB, Express.js, React.js, Node.js) to achieve 100% successful project deliveries.`,
      skills: [
        "React",
        "TypeScript",
        "CSS",
        "Rest API",
        "Webpack",
        "Three.js",
        "MongoDb",
        "React Router",
        "Next.js",
        "Vite",
        "Plotly.js",
      ],
    },
    {
      role: "Data Science Intern",
      company: "LetsGrowMore",
      period: "Mar 2022 -- Sep 2022",
      description: `Collaborated with cross-functional teams to identify business problems and develop data-driven solutions, improving data quality to 95% efficiency. Developed predictive models using Python and R, enhancing decision-making processes. Designed ML models with over 95% accuracy on large datasets.`,
      skills: [
        "Data Science",
        "Machine Learning",
        "Tensorflow",
        "Python",
        "NLP",
        "Data Visualization",
        "Power BI",
        "Statstics",
      ],
    },
    {
      role: "Computer Vision Intern",
      company: "TheSparksFoundation",
      period: "Aug 2021  -- Mar 2022",
      description: `Spearheaded deep learning model development for image classification, object detection, and segmentation, improving accuracy by 40% and reducing manual labeling by 60%. Led a Face Detection project, achieving a 99.998% accuracy rate, surpassing industry standards with OpenCV, TensorFlow, and PyTorch.`,
      skills: [
        "Image Processing",
        "OpenCV",
        "Tensorflow",
        "Python",
        "Computer Vision",
        "Deep learning",
        "AI",
      ],
    },
  ];

  return (
    <div className=" p-6 rounded-lg text-black   lg:w-[500px] lg:ml-[+500px]  ">
      <h2 className="text-xl font-bold mb-6 text-black">EXPERIENCE</h2>
      {experiences.map((experience, index) => (
        <div
          key={index}
          className=" mb-6 hover:bg-blue-100 ml-[-20px] lg:mb-8 p-4 rounded-lg hover:bg-blue-100 "
        >
          <p className="text-sm font-semibold text-black">
            {experience.period}
          </p>
          <h3 className="text-2xl font-bold text-black">{experience.role}</h3>
          <p className="text-md font-semibold text-black">
            {experience.company} <span>&rarr;</span>
          </p>
          <p className="mt-4 text-md leading-relaxed text-black">
            {experience.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4 ">
            {experience.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className=" text-sm px-2 py-1 rounded-full text-black font-semibold bg-blue-200 hover:bg-blue-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
