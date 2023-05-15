/* eslint-disable @next/next/no-img-element */
import { useTogetherSectionScrollHeight } from '@state/index';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

type Props = {};

const Together = (props: Props) => {
  const sectionScrollHeight = useRef<HTMLDivElement>(null!);
  const [scrollHeight, setScrollHeight] = useTogetherSectionScrollHeight();

  useEffect(() => {
    setScrollHeight(sectionScrollHeight.current?.clientHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollHeight]);

  // Gsap Animations
  useEffect(() => {
    const workWithUsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '._togetherSectionTrigger',
        start: 'top 90%',
      },
    });
    workWithUsTimeline.to(
      '._togetherSectionTrigger',
      {
        y: 0,
        opacity: 1,
      },
      'start'
    );
  }, []);

  return (
    <section className="pt-[50px] lg:pt-[120px]" ref={sectionScrollHeight} id="TopToDown">
      <div className="lg:text-center font-light px-10 lg:px-0 text-[1.57143rem] leading-[1.25em] lg:leading-[1.3em] _togetherSectionTrigger -translate-y-6 opacity-0 text-[#131313] pb-[44px] lg:pb-[5px]">
        <span className='w-[1.5rem] h-[2px] bg-primary inline-block mb-9 lg:hidden'></span>
        <h5 className='font-medium'>
          <strong>Together, no challenge is too big.</strong>
        </h5>
        <div className='flex justify-end mt-10 mb-10'>
        <span className='w-[1.5rem] h-[2px] bg-primary inline-block text-right lg:hidden'></span>
        </div>
      </div>

      {/* <div className="">
        <div className="grid 3xl:grid-cols-3 md:grid-cols-2">
          <div className="col-span-2 order-1 3xl:order-none">
            <img src="/imgs/whoweare/g1.jpg" alt="" />
          </div>

          <div className="3xl:col-span-1 md:col-span-2 order-2 3xl:order-none">
            <div className="grid md:grid-cols-2 3xl:grid-cols-none">
              <div className="3xl:row-span-1">
                <img src="/imgs/whoweare/g2.jpg" alt="" />
              </div>
              <div className="3xl:row-span-1">
                <img src="/imgs/whoweare/g3.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="3xl:col-span-1 md:col-span-2 order-4 3xl:order-none">
            <div className="grid md:grid-cols-2 3xl:grid-cols-none">
              <div className="3xl:row-span-1">
                <img src="/imgs/whoweare/g4.jpg" alt="" />
              </div>
              <div className="3xl:row-span-1">
                <img src="/imgs/whoweare/g5.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="col-span-2 order-3 3xl:order-none">
            <img src="/imgs/whoweare/g6.jpg" alt="" />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Together;
