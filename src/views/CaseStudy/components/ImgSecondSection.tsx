import React, { useEffect, useLayoutEffect } from 'react'
import gsap from "gsap";
import dynamic from 'next/dynamic';

const Img = dynamic(() => import('../partials/Img'));

type Props = {}

const ImgSecondSection = (props: Props) => {

  useLayoutEffect(() => {
    const ProjectScrubTl = gsap.timeline({
      scrollTrigger: {
        trigger: "._caseSecondSectionTrigger",
        start: "`top 100%",
        scrub: 1
      },
    });
    ProjectScrubTl.to(
      "._projectImg3",
      {
        y: -300,
        duration: 0.6,
      },
      "start"
    );
    const ProjectScrubTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "._caseSecondSectionTrigger",
        start: "`top 100%",
        scrub: 1,
      },
    });
    ProjectScrubTl2.to(
      "._projectImg4",
      {
        y: -300,
        duration: 0.6,
      },
      "start"
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    return (
      <div className="3xl:pb-[500px] pb-[400px] relative _caseSecondSectionTrigger">
        <div className="grid grid-cols-3 gap-0 ">
          {/* red box left site */}
          <div>
            <div className="h-[13.19444vw] w-[13.19444vw] bg-primary absolute 3xl:top-[35%] top-[30%] 3xl:left-[19%] left-[19.5%]"></div>
          </div>

          <div className=""></div>

          {/* red box right site */}
          <div className="flex justify-end">
            <div className="h-[13.19444vw] w-[13.19444vw] bg-primary"></div>
          </div>
        </div>

        <Img
          href={"/case-study/5"}
          imgSrc={"/images/home/slider/5-wol.webp"}
          css={"w-[26.04167vw] top-[15%] z-1 left-10 _projectImg3"}
          imgCss={"!h-[26.04167vw]"}
          title={"Blakademik"}
          desc={"UI/UX Design & Dev"}
        />

        <Img
          href={"/case-study/6"}
          imgSrc={"/images/home/slider/6-wol.webp"}
          css={"w-[23.88889vw] bottom-0 z-1 right-10 _projectImg4"}
          imgCss={"h-[23.88889vw]"}
          title={"RapChat"}
          desc={"Mobile UI/UX Design"}
        />
      </div>
    );
}

export default ImgSecondSection