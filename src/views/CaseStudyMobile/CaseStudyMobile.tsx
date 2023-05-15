import GetInTouchWhite from '@views/WhoWeAre/components/GetInTouchWhite.tsx/GetInTouchWhite';
import dynamic from 'next/dynamic';

const FifthSection = dynamic(() => import('./components/FifthSection'));
const FirstSection = dynamic(() => import('./components/FirstSection'));
const FourthSection = dynamic(() => import('./components/FourthSection'));
const SecondSection = dynamic(() => import('./components/SecondSection'));
const SixthSection = dynamic(() => import('./components/SixthSection'));
const ThirdSection = dynamic(() => import('./components/ThirdSection'));

const CaseStudyMobile = () => {
  return (
    <>
      <div className="pt-[6.8rem] lg:p-[70px]">
        <h1 className="text-center text-[2.57143rem] leading-[1.22222em] pt-8 md:pb-12 pb-10">
          Case <b>studies.</b>
        </h1>
        <div className="mb-[120px] md:mb-[200px]">
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <FifthSection />
          <SixthSection />
        </div>
      </div>

      <div className="w-full">
        <GetInTouchWhite />
      </div>
    </>
  );
};

export default CaseStudyMobile;
