import gsap from 'gsap';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const Hero = dynamic(() => import('./components/Hero'));

const Careers = () => {
  const tl = gsap.timeline({
    defaults: { duration: 1.4 },
  });

  useEffect(() => {
    tl.to('._topTitle', { opacity: 1, y: 0, delay: 0.2 }, 'start').to(
      '._careerTopDec',
      { x: 0, opacity: 1, delay: 0.2 },
      'start'
    );
  }, []);

  return (
    <div className="w-full relative z-[2] lg:flex lg:flex-wrap lg:flex-row">
      <div className="pt-[8.3rem] lg:pt-[10rem] mb-[1.78571rem] w-full lg:mb-[12.5rem]">
        <h1 className="mb-[3.92857rem] relative font-bold text-center tracking-normal text-[2.57143rem] leading-[1.22222em] my-[0.67em] _topTitle opacity-0 -translate-y-10">
          Careers.
        </h1>
        <h3 className="text-[1rem] max-w-[64.28571rem] px-[2.5rem] m-auto relative font-normal text-center leading-[1.22727em] tracking-normal xl:px-[3.85714] xl:text-[1.57143rem] -translate-x-10 opacity-0 _careerTopDec">
          We’re always expanding our lively, hard-working group of creators,
          believers, and achievers.
          <span className="xl:inline-block xl:ml-[0.57143rem] hidden font-normal text-center">
            <strong className="font-bold">Let’s do great work together.</strong>
          </span>
        </h3>
        <h4 className="block text-center mt-[2.14286rem] relative text-[1.14286rem] leading-[1.1875em] my-[1.33em] font-bold xl:hidden -translate-x-10 opacity-0 _careerTopDec">
          Let’s do great work together.
        </h4>
        <Hero />
      </div>
    </div>
  );
};

export default Careers;
