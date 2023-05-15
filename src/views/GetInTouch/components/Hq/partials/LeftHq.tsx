import GoMore from '@components/GoMore';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import MapIcon from 'src/icons/MapIcon';

type Props = {};

const LeftHq = (props: Props) => {
  const hqDec = useRef(null);
  const ourHq = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '._hqDec',
        start: 'top 95%',
      },
      defaults: { duration: 0.5 },
    });
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '._hqDec',
        start: 'top 95%',
      },
      defaults: { duration: 0.5 },
    });
    tl.to(hqDec.current, { x: 0, opacity: 1, delay: 0.2 }, 'start');
    tl1.to(ourHq.current, { y: 0, opacity: 1, delay: 0.2 }, 'start');
  }, []);

  return (
    <div className="left__hq">
      <div className="flex items-center px-10 lg:pr-0 lg:pl-[50px]">
        <div className="space-y-5">
          <div
            ref={ourHq}
            className="flex items-center gap-5 opacity-0 -translate-y-8"
          >
            <div className="w-[1.5rem] h-[2px] bg-primary"></div>
            <h4 className="text-[#131313] font-semibold text-[.92857rem] tracking-widest uppercase">
              OUR HQ
            </h4>
          </div>

          <div ref={hqDec} className="-translate-x-6 opacity-0 _hqDec">
            <div className="leading-[1.22727em] md:leading-[1.23077em] lg:leading-[44px] text-[1.57143rem] md:text-[1.85714rem] text-[#131313] font-bold mb-7 lg:mb-5">
              Come say hi in person.
            </div>

            <div className="text-[#4a4a4a] lg:max-w-[67%]">
              <p className="leading-[1.22727em] text-[1.57143rem]">
                750 E Main St Stamford, <br />
                CT 06902, USA
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[65px] px-10 lg:pr-0 lg:pl-[50px] pb-[100px]">
        <div className='pl-3 mb-10'>
        <MapIcon/>
        </div>
        <div className="flex items-center gap-5 mt-5">
          <GoMore
            text=" View on Google Maps"
            url="https://goo.gl/maps/xruFVvyFRBBMcwsh6"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftHq;
