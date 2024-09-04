import Image from "next/image";
import { Inter } from "next/font/google";
import ProfileCard from "./components/Imageinfo";
import AboutUs from "./components/Aboutus";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Education from "./components/Education";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="bg-[#eff1f3] w-full lg:w-[300px] relative">
        <div className="lg:sticky lg:top-0">
          <ProfileCard />
        </div>
      </div>
      <div className="bg-[#eff1f3] w-full lg:flex flex-col">
        <AboutUs />
        <Experience />
        <Project />
        <Education />
      </div>
    </div>
  );
}
