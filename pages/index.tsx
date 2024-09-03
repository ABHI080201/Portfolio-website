import Image from "next/image";
import { Inter } from "next/font/google";
import ProfileCard from "./components/Imageinfo";
import AboutUs from "./components/Aboutus";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col grid-col-span-2 lg:flex-row ">
      <div className="bg-[#eff1f3] h-[800px] w-full">
        <ProfileCard />
      </div>
      <div className="bg-[#eff1f3] h-[900px] w-full">
        <AboutUs />
      </div>
    </div>
  );
}
