import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="p-6 text-black mt-[75px]  ml-[-10px]  lg:w-[500px]  lg:ml-[+500px]">
      <h2 className="text-xl font-bold mb-4">ABOUT</h2>
      <div className="hover:bg-blue-100">
        <p className="mb-6 text-md leading-relaxed">
          Welcome! Im thrilled to have you here. Allow me to introduce myself —
          Im Abhishek Dandgawhal, a passionate Developer with excellent academic
          credentials and professional experience in leadership, technology, and
          management.
        </p>
        <p className="mb-6 text-md leading-relaxed">
          As a recent graduate, I am eager to embark on my journey as a Software
          Developer. My academic projects and self-driven learning have equipped
          me with skills in ReactJs, Next.js, TypeScript, Data Science, Machine
          Learning, Python, Deep learning, Docker, and FastAPI. I am a dedicated
          learner, passionate about expanding my knowledge and contributing to
          innovative technology solutions.
        </p>

        <p className="text-md leading-relaxed">
          I pride myself on being concise and clear in my communication,
          enabling me to collaborate with diverse teams effectively.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
