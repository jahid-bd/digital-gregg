import { NextPage } from 'next';
import dynamic from 'next/dynamic';
const BrandSection = dynamic(() => import('./BrandSection'));
const MobileHeroSection = dynamic(() => import('./MobileHeroSection'));
const HeroSection = dynamic(() => import('./HeroSection'));
const WhatWeDoSection = dynamic(() => import('./WhatWeDoSection'));
const WhoWeAreSection = dynamic(() => import('./WhoWeAreSection'));
const GetInTouchWhite = dynamic(
  () => import('@views/WhoWeAre/components/GetInTouchWhite.tsx/GetInTouchWhite')
);

const Home: NextPage = () => {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <MobileHeroSection />
      <HeroSection />
      <div className="lg:h-0 md:h-[70px]"></div>
      <WhatWeDoSection />
      <BrandSection />
      {/* <AwardSection /> */}
      <div className="md:my-[1rem] lg:my-[12rem] xl:my-[15rem]"></div>
      <WhoWeAreSection />
      {/* <CareerSection /> */}
      <GetInTouchWhite />
    </div>
  );
};

export default Home;
