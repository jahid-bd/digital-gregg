import dynamic from "next/dynamic";
// const Home = dynamic(() => import("@views/Home"));
import type { NextPage } from "next";
const GetInTouchWhite = dynamic(
  () => import("@views/WhoWeAre/components/GetInTouchWhite.tsx/GetInTouchWhite")
);
const MobileHeroSection = dynamic(() => import("@views/Home/MobileHeroSection"));
const HeroSection = dynamic(() => import("@views/Home/HeroSection"));
const WhatWeDoSection = dynamic(() => import("@views/Home/WhatWeDoSection"));
const BrandSection = dynamic(() => import("@views/Home/BrandSection"));
const WhoWeAreSection = dynamic(() => import("@views/Home/WhoWeAreSection"));

// export const config = { amp: true };

const HomePage: NextPage = () => {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <MobileHeroSection />
      <HeroSection />
      <div className="lg:h-0 md:h-[70px]"></div>
      <WhatWeDoSection />
      <BrandSection />
      <div className="md:my-[1rem] lg:my-[12rem] xl:my-[15rem]"></div>
      <WhoWeAreSection />
      <GetInTouchWhite />
    </div>
  );
};

export default HomePage;
