// import React from "react";
// import ProfileCard from "./components/Imageinfo";
// import AboutUs from "./components/Aboutus";
// import Experience from "./components/Experience";
// import Project from "./components/Project";
// import Education from "./components/Education";
// import Achieve from "./components/Achive";

// const Home = () => {
//   return (
//     <div className="flex flex-col lg:flex-row">
//       <div className="bg-[#eff1f3] w-full lg:w-[300px] relative">
//         <div className="lg:sticky lg:top-0">
//           <ProfileCard />
//         </div>
//       </div>
//       <div className="bg-[#eff1f3] w-full lg:flex flex-col">
//         <section id="aboutus">
//           <AboutUs />
//         </section>
//         <section id="experience">
//           <Experience />
//         </section>
//         <section id="projects">
//           <Project />
//         </section>
//         <section id="education">
//           <Education />
//         </section>
//         <section id="achievements">
//           <Achieve />
//         </section>
//       </div>
//     </div>
//   );
// };

import React from "react";
import ProfileCard from "./components/Imageinfo";
import AboutUs from "./components/Aboutus";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Education from "./components/Education";
import Achieve from "./components/Achive";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row z-10 relative">
      <div className="bg-[#eff1f3] w-full lg:w-[300px] relative">
        <div className="lg:sticky lg:top-0">
          <ProfileCard />
        </div>
      </div>
      <div className="bg-[#eff1f3] w-full lg:flex flex-col">
        <section id="aboutus">
          <AboutUs />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="achievements">
          <Achieve />
        </section>
      </div>
    </div>
  );
};

export default Home;
