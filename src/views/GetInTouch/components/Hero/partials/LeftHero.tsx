import gsap from 'gsap';
import { useEffect, useRef } from 'react';

type Props = {};

const LeftHero = (props: Props) => {
  const tl = gsap.timeline({
    defaults: { duration: 1 },
  });
  const tl1 = gsap.timeline({
    defaults: { duration: 1 },
  });

  const heroGetInTouch = useRef(null);
  const getInTouchDec = useRef(null);

  useEffect(() => {
    tl.to(heroGetInTouch.current, { x: 0, opacity: 1, delay: 0.2 }, 'start');
    tl1.to(getInTouchDec.current, { y: 0, opacity: 1, delay: 0.2 }, 'start');
  }, []);

  return (
    <div className="flex items-center px-10 lg:pr-0 lg:pl-[50px] mb-[18px] md:mb-[10px] lg:mb-0">
      <div className="space-y-14">
        <div
          ref={heroGetInTouch}
          className="flex items-center gap-5 -translate-x-6 opacity-0"
        >
          <div className="w-[1.5rem] h-[2px] bg-primary"></div>
          <h4 className="text-[#131313] font-semibold text-[.92857rem] tracking-widest uppercase">
            Contact Us
          </h4>
        </div>

        <div ref={getInTouchDec} className="opacity-0 translate-y-8">
          <div className="leading-[44px] lg:leading-[1.22222em] text-[2.57143rem] lg:text-[1.71429rem] xl:text-[2.57143rem] text-[#131313] font-light lg:w-[24.5rem] mb-20">
            <div className="flex gap-3">Start the </div>
            <strong className="font-bold">conversation.</strong>
          </div>

          <div className="text-[#4a4a4a] leading-[20px] lg:leading-[1.22727em] text-[14px] lg:text-[1.42857rem] 2xl:text-[1.57143rem] lg:max-w-[15rem] 2xl:max-w-[23.57143rem] space-y-5">
            <p className='mb-[3.57143rem] lg:mb-0'>
              Every beautiful relationship starts with a{' '}
              <strong>simple hello</strong>. So let’s chat. It might just be the
               start of something memorable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftHero;
