import gsap from 'gsap';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// dynamic import
const TextSlider = dynamic(() => import('./partials/TextSlider'));

function WorkWithUs() {
  const [updateCounter, setUpdateCounter] = useState({ value: 0 });
  const [yearsCounter, setYearsCounter] = useState({ value: 0 });
  const [teamMemberCounter, setTeamMemberCounter] = useState({ value: 0 });
  const [hqCounter, setHqCounter] = useState({ value: 0 });

  // Gsap Animations
  useEffect(() => {
    const target = {
      value: 0,
    };
    const target2 = {
      value: 0,
    };
    const target3 = {
      value: 0,
    };
    const target4 = {
      value: 0,
    };

    const workWithUsTl = gsap.timeline({
      scrollTrigger: {
        trigger: '._marketLeading',
        start: '100px 95%',
      },
    });
    const workWithUsTl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '._marketLeading',
        start: '100px 95%',
      },
    });
    const workWithUsTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '._marketLeading',
        start: '100px 95%',
      },
    });
    const workWithUsTl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '._marketLeading',
        start: '100px 95%',
      },
    });

    workWithUsTl.to(target, {
      duration: 2,
      value: '+=25',
      roundProps: 'value',
      ease: 'none',
      onUpdate() {
        setUpdateCounter({ value: target.value });
      },
    });
    workWithUsTl1.to(target2, {
      duration: 2,
      value: '+=5',
      roundProps: 'value',
      ease: 'none',
      onUpdate() {
        setYearsCounter({ value: target2.value });
      },
    });
    workWithUsTl2.to(target3, {
      duration: 2,
      value: '+=3',
      roundProps: 'value',
      ease: 'none',
      onUpdate() {
        setTeamMemberCounter({ value: target3.value });
      },
    });
    workWithUsTl3.to(target4, {
      duration: 2,
      value: '+=8',
      roundProps: 'value',
      ease: 'none',
      onUpdate() {
        setHqCounter({ value: target4.value });
      },
    });
  }, []);

  return (
    <section className="_workWithUsSectionTrigger mb-[100px]">
      <div className="grid w-full !h-full lg:h-[44.444vw] grid-cols-1 lg:grid-cols-2">
        <div className="px-6 py-6 bg-redblack lg:p-[1.5rem]">
          <div className="relative flex items-center justify-center w-full h-full backgroundDotsWorkWithUs">
            <div className="w-[70.13333vw]  lg:w-[38.08333vw] 2xl:w-[31.9vw] 3xl:w-[28vw] 3xl:!h-[26vw] my-20 lg:my-0 px-5 lg:px-4 bg-redblack lg:!h-[40vw] flex flex-col justify-center gap-5">
              <TextSlider />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 workWithUsCounts">
          <div className="flex items-center justify-center aspect-square first-letter:h-full w-full bg-[#F1F1F1]">
            <div className="text-center">
              <h3 className="leading-[.81967em] text-[1.85714rem] sm:text-[3.57143rem] text-[#131313] font-bold pb-1.5 lg:pb-2 inline _marketLeading">
                {updateCounter.value}
                {updateCounter.value === 25 && '+'}
              </h3>
              <span className="w-[4.85714rem] h-[2px] bg-primary block mx-auto mt-5 mb-1"></span>
              <p className="leading-[1.23077em] text-[.92857rem] md:text-[1.14286rem] md:leading-[1.1875em] text-[#131313] max-w-[12.85714rem] mx-auto pt-4">
                25+ black owned & operated clients
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center aspect-square w-full h-full bg-primary">
            <div className="text-center">
              <h3 className="leading-[.81967em] text-[1.85714rem] sm:text-[3.57143rem] text-white font-bold pb-1.5 lg:pb-0">
                {yearsCounter.value}
                {yearsCounter.value === 5 && '+'}
              </h3>
              <span className="w-[4.85714rem] h-[2px] bg-white block mx-auto mt-5 mb-1"></span>
              <p className="leading-[1.23077em] text-[.92857rem] md:text-[1.14286rem] md:leading-[1.1875em] text-white max-w-[12.85714rem]] mx-auto pt-4">
                years crushing digital <br /> experiences
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center aspect-square w-full h-full bg-primary">
            <div className="text-center">
              <h3 className="leading-[.81967em] text-[1.85714rem] sm:text-[3.57143rem] text-white font-bold pb-1.5 lg:pb-0">
                {teamMemberCounter.value}
                {teamMemberCounter.value === 3 && '+'}
              </h3>
              <span className="w-[4.85714rem] h-[2px] bg-white block mx-auto mt-5 mb-1"></span>
              <p className="leading-[1.23077em] text-[.92857rem] md:text-[1.14286rem] md:leading-[1.1875em] text-white max-w-[12.85714rem]] mx-auto pt-4">
                fortune500 clients … and <br /> counting{' '}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center aspect-square w-full h-full bg-[#F1F1F1]">
            <div className="text-center">
              <h3 className="leading-[.81967em] text-[1.85714rem] sm:text-[3.57143rem] text-[#131313] font-bold pb-1.5 lg:pb-0">
                {hqCounter.value}
              </h3>
              <span className="w-[4.85714rem] h-[2px] bg-primary block mx-auto mt-5 mb-1"></span>
              <p className="leading-[1.23077em] text-[.92857rem] md:text-[1.14286rem] md:leading-[1.1875em] text-[#131313] max-w-[12.85714rem] mx-auto pt-4">
                awards received for digital campaigns
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkWithUs;
