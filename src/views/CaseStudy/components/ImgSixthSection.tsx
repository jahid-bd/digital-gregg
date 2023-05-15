import gsap from 'gsap';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const Img = dynamic(() => import('../partials/Img'));

type Props = {};

const ImgSixthSection = (props: Props) => {

  useEffect(() => {
    const ProjectScrubTl = gsap.timeline({
      scrollTrigger: {
        trigger: '._caseSixSectionTrigger',
        start: '`top 100%',
        scrub: 0.9,
        // markers: true,
      },
    });
    ProjectScrubTl.to(
      '._projectImg9',
      {
        y: -300,
        duration: 0.6,
      },
      'start'
    );
    const ProjectScrubTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '._caseSixSectionTrigger',
        start: '`top 100%',
        scrub: 0.9,
        // markers: true,
      },
    });
    ProjectScrubTl2.to(
      '._projectImg10',
      {
        y: -300,
        duration: 0.6,
      },
      'start'
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="3xl:pb-[400px] pb-[200px] relative _caseSixSectionTrigger">
      <div className="grid grid-cols-3 gap-0 ">
        {/* red box left site */}
        <div>
          <div className="h-[13.19444vw] w-[13.19444vw] bg-primary absolute 3xl:top-[45%] top-[42%] 3xl:left-[19%] left-[20%]"></div>
        </div>

        <div className=""></div>

        {/* red box right site */}
        <div className="flex justify-end">
          <div className="h-[13.19444vw] w-[13.19444vw] bg-primary"></div>
        </div>
      </div>

      <Img
        href={"/case-study/11"}
        imgSrc={"/images/home/slider/11-wol.webp"}
        css={"w-[26.04167vw] top-[30%] z-1 left-10 _projectImg9"}
        imgCss={"h-[26.04167vw]"}
        title={"iDreamers App"}
        desc={"Mobile App Design"}
      />

      <Img
        href={"/case-study/12"}
        imgSrc={"/images/home/slider/12-wol.webp"}
        css={"w-[23.88889vw] top-[50%] z-1 right-10 _projectImg10"}
        imgCss={"h-[23.88889vw]"}
        title={"Black Girls Code"}
        desc={"Website Redesign"}
      />
    </div>
  );
};

export default ImgSixthSection;
