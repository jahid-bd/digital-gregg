import GoMoreLink from '@components/GoMore/GoMoreLink';
import { useWhatWeDoScrollHeight } from '@state/index';
import gsap from 'gsap';
import dynamic from 'next/dynamic';
import React, { useEffect, useRef } from 'react';
import { whatWeDoCategory } from 'src/constant';

const MobileSlider = dynamic(() => import('./MobileSlider'));
const WWDCard = dynamic(() => import('./partials/WWDCard'));

// Use React.memo to memoize the component
const MemoizedComponent = React.memo(WWDCard);

function WhatWeDoSection() {
  const sectionScrollHeight = useRef<HTMLDivElement>(null!);

  const [scrollHeight, setScrollHeight] = useWhatWeDoScrollHeight();

  useEffect(() => {
    setScrollHeight(sectionScrollHeight.current?.clientHeight);
  }, [scrollHeight]);

  // Gsap Animations
  useEffect(() => {
    const WhatWeDoTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '._whatWeDoSectionTrigger',
        start: 'top 65%',
      },
    });

    WhatWeDoTimeline.to(
      '._whatWeDoNameText, ._whatWeDoTitleDesc, ._whatWeDoGoMoreBtn',
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 1.1,
      }
    ).to(
      '._whatWeDoCategories',
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.1,
      },
      '-=.8'
    );
  }, []);

  return (
    // lg:my-[14rem] mb-[4rem] mt-[9rem] flex items-center lg:pr-[70px] lg:pl-[90px] 2xl:pl-[140px]
    <section
      ref={sectionScrollHeight}
      id="TopToDown"
      className="mt-[5.5rem] mb-[5rem] lg:mb-[15.7rem] lg:mt-[10rem] 2xl:mt-[14rem] lg:mx-[5rem] xl:px-[3.85714rem] lg:pl-[3.85714rem] lg:pr-0 px-[2.5rem]   _whatWeDoSectionTrigger"
    >
      <div className="lg:grid desktop:gap-[30px] xl:gap-[150px]   gap-[50px]  lg:grid-cols-[4fr,8fr] 2xl:grid-cols-[3fr,9fr] xl:grid-cols-[3fr,8fr] lg:items-start ">
        <div className="space-y-[60px] lg:space-y-[40px] md:w-[90%] desktop:w-[65%]">
          <div className="space-y-6 lg:space-y-8">
            <div className="flex gap-5 items-center translate-x-8 opacity-0 _whatWeDoNameText">
              <span className="inline-block w-5 h-0.5 bg-redblack"></span>
              <p className="uppercase font-primary font-semibold text-[13px] tracking-[.13286rem] leading-[20px] text-redblack">
                SERVICES
              </p>
            </div>
            <div className="space-y-8 _whatWeDoTitleDesc opacity-0 translate-y-8">
              <h2 className="text-[26px] leading-[32px] font-bold w-full ">
                Innovation and impact.
              </h2>
              <p className="leading-[27px] text-[22px] text-[#4A4A4A] font-primary ">
                Here, there is only{' '}
                <strong className="text-primary">ONE GOAL</strong>: Create and
                optimize every user experience in a way that generates real
                results.
              </p>
            </div>
            <div className="lg:hidden ">
              <MobileSlider />
            </div>
          </div>
          <div className="-translate-x-8 opacity-0 _whatWeDoGoMoreBtn flex justify-center lg:justify-start">
            <GoMoreLink text="Discover More" url="/services" />
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-2 xl:grid-cols-2 desktop:grid-cols-4 gap-[70px] xl:pl-0 lg:pl-[5rem] hidden">
          {whatWeDoCategory.map((item, i) => (
            <MemoizedComponent data={item} key={`${i}wwwd`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
