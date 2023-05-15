import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import LeftOthers from './partials/LeftOthers';
import RightOthers from './partials/RightOthers';

type Props = {};

const OtherWords = (props: Props) => {
  const othersLeft = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '._leftOthers',
        start: 'top 80%',
      },
      defaults: { duration: 1.1 },
    });
    tl.to(othersLeft.current, { x: 0, opacity: 1, delay: 0.2 }, 'start');
  }, []);

  return (
    <section className="__otherWordBg">
      <div className="3xl:pb-48 xl:pb-32 lg:pb-28 pb-12 ">
        <div className="mt-0 lg:h-full pt-[80px] lg:p-[70px] lg:pb-0 xl:pb-[70px] grid grid-cols-1 lg:grid-cols-[40%_60%]">
          <div
            ref={othersLeft}
            className="grid grid-cols-1 items-center px-10 lg:pr-0 lg:pl-[50px] -translate-x-6 opacity-0 _leftOthers"
          >
            <LeftOthers />
          </div>
          <div className="h-full w-full xl:px-[100px] px-[40px] py-[80px] pt-[40px] lg:pt-[80px]">
            <RightOthers />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherWords;
