// import React from "react";

// const Project = () => {
//   const experiences = [
//     {
//       role: "Fowel(AI/tech discuss media App)",
//       period: "June 2023 -- May 2024",
//       description: `Developed "Fowel," a Next.js app for posting and sharing AI tech insights, using Prisma, MongoDB, SWR, Zustand, and Tailwind CSS for efficient state management, data fetching, and responsive design. Implemented features for posting, sharing, and commenting, ensuring seamless user experience and real-time interactions.`,
//       skills: [
//         "Next.js",
//         "TypeScript",
//         "SWR",
//         "Tailwind CSS",
//         "Rest API",
//         "MongoDB",
//         "Prisma",
//         "JWT",
//         "NEXT-AUTH",
//         "OpenAI API",
//         "Node.js",
//         "Shadecdn",
//       ],
//     },
//     {
//       role: "Face Mask Detection",
//       period: "Mar 2022 -- Sep 2022",
//       description: `Leveraged CNNs and MobileNet to successfully identify and distinguish between individuals wearing face masks and those without, contributing to the development of a robust face mask detection system.Training the given model with 99.98% of Accuracy`,
//       skills: [
//         "MoblieNetv2",
//         "Pytorch",
//         "Tensorflow",
//         "Python",
//         "OpenCV",
//         "Deep Learning",
//         "Imultis",
//         "Computer Vision",
//       ],
//     },
//     {
//       role: "Computer Vision Intern",
//       period: "Aug 2021  -- Mar 2022",
//       description: `Spearheaded deep learning model development for image classification, object detection, and segmentation, improving accuracy by 40% and reducing manual labeling by 60%. Led a Face Detection project, achieving a 99.998% accuracy rate, surpassing industry standards with OpenCV, TensorFlow, and PyTorch.`,
//       skills: [
//         "Image Processing",
//         "OpenCV",
//         "Tensorflow",
//         "Computer Vision",
//         "Python",
//         "Deep learning",
//         "AI",
//       ],
//     },
//   ];

//   return (
//     <div className="p-6 rounded-lg text-black lg:w-[500px] lg:ml-[+500px]">
//       <h2 className="text-xl font-bold mb-6 text-black">Projects</h2>
//       {experiences.map((experience, index) => (
//         <div key={index} className="mb-8 p-4 rounded-lg hover:bg-blue-100">
//           <h3 className="text-2xl font-bold text-black">{experience.role}</h3>
//           <p className="text-sm font-semibold text-black">
//             {experience.period}
//           </p>
//           <p className="mt-4 text-md leading-relaxed text-black">
//             {experience.description}
//           </p>
//           <div className="flex flex-wrap gap-2 mt-4">
//             {experience.skills.map((skill, skillIndex) => (
//               <span
//                 key={skillIndex}
//                 className="text-sm px-2 py-1 rounded-full text-black font-semibold hover:bg-blue-400"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Project;
import React from "react";

const Project = () => {
  const experiences = [
    {
      role: "Fowel(AI/tech discuss media App)",
      period: "2024",
      description: `Developed "Fowel," a Next.js app for posting and sharing AI tech insights, using Prisma, MongoDB, SWR, Zustand, and Tailwind CSS for efficient state management, data fetching, and responsive design. Implemented features for posting, sharing, and commenting, ensuring seamless user experience and real-time interactions.`,
      skills: [
        "Next.js",
        "TypeScript",
        "SWR",
        "Tailwind CSS",
        "Rest API",
        "MongoDB",
        "Prisma",
        "JWT",
        "NEXT-AUTH",
        "OpenAI API",
        "Node.js",
        "Shadecdn",
      ],
      link: "https://ai-chat-dusky-gamma.vercel.app/",
    },

    {
      role: "Text-to-Image Generator",
      period: "2023-2024",
      description: `Created a groundbreaking Text-to-Image Generator using Python and advanced NLP techniques to translate textual descriptions into images with remarkable accuracy. Leveraged technologies like Stable Diffusion, Torch, GenAI, and OpenCV to achieve state-of-the-art image generation, producing high-quality and diverse images.`,
      skills: [
        "Python",
        "NLP",
        "Stable Diffusion",
        "Transformer",
        "GenAI",
        "Deep learning",
      ],
      link: "https://github.com/ABHI080201/Plant-Disease-Detection",
    },
    {
      role: "Plant Disease Detection",
      period: "2023-2024",
      description: `Utilizes Convolutional Neural Networks (CNN) for plant disease detection and classification. Implements a REST API with FASTAPI, integrated with Postman for testing, and containerized using Docker. Frontend developed with React.js for a user-friendly interface.`,
      skills: [
        "Image Processing",
        "OpenCV",
        "Tensorflow",
        "Python",
        "Computer Vision",

        "Deep learning",
        "AI",
      ],
      link: "https://github.com/ABHI080201/Plant-Disease-Detection",
    },
    {
      role: "Face Mask Detection",
      period: "2022-2023",
      description: `Leveraged CNNs and MobileNet to successfully identify and distinguish between individuals wearing face masks and those without, contributing to the development of a robust face mask detection system. Trained the given model with 99.98% accuracy.`,
      skills: [
        "MoblieNetv2",
        "Pytorch",
        "Tensorflow",
        "Python",
        "OpenCV",
        "Deep Learning",
        "Imultis",
        "Computer Vision",
      ],
      link: "https://github.com/ABHI080201/Face_Mask_Detection",
    },
  ];

  return (
    <div className="p-6 rounded-lg text-black lg:w-[500px] lg:ml-[+500px]">
      <h2 className="text-xl font-bold mb-6 text-black">Projects</h2>
      {experiences.map((experience, index) => (
        <div
          key={index}
          className="mb-6 hover:bg-blue-100 ml-[-20px] lg:mb-8 p-4 rounded-lg hover:bg-blue-100"
        >
          <h3 className="text-2xl font-bold text-black flex justify-between items-center">
            {experience.role}
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-xl rounded-full hover:bg-blue-400"
            >
              &#128279;
            </a>
          </h3>
          <p className="text-sm font-semibold text-black">
            {experience.period}
          </p>
          <p className="mt-4 text-md leading-relaxed text-black">
            {experience.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {experience.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="text-sm px-2 py-1 rounded-full text-black font-semibold hover:bg-blue-400"
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

export default Project;
