import gsap from 'gsap';
import Link from 'next/link';
import { useEffect } from 'react';

type Props = {};

const ImgThirdSection = (props: Props) => {
  useEffect(() => {
    const ProjectScrubTl = gsap.timeline({
      scrollTrigger: {
        trigger: '._caseThirdSectionTrigger',
        start: '`top 100%',
        scrub: 0.8,
        // markers: true,
      },
    });
    ProjectScrubTl.to(
      '._projectImg5',
      {
        y: -250,
        duration: 0.6,
      },
      'start'
    );
    const ProjectScrubTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '._caseThirdSectionTrigger',
        start: '`top 100%',
        scrub: 0.8,
        // markers: true,
      },
    });
    ProjectScrubTl2.to(
      '._projectImg6',
      {
        y: -300,
        duration: 0.6,
      },
      'start'
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pb-[100px] relative _caseThirdSectionTrigger">
      <div className="grid grid-cols-2 gap-0 ">
        <div>
          <div className="relative mt-28 mb-20 grow shrink basis-[40%] before:content-[''] before:table after:content-[''] after:table after:clear-both">
            <div className="float-left w-[39vw] h-[39.23611vw] relative _caseStudiesTrigger">
              <Link className="translate-y-[1.23364%]" href="/case-study/7">
                <div className="m-0 relative z-[1] block overflow-hidden bg-transparent after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[70%] case-study-overlay _projectImg5 group">
                  <div className="p-0 h-[39.23611vw] bg-black relative overflow-hidden cursor-pointer">
                    <video
                      className="w-full top-[12%] h-full object-cover group-hover:scale-125 duration-[400ms] ease-in-out"
                      autoPlay
                      muted
                      loop={true}
                      playsInline
                    >
                      <source src="/videos/widen-hero-mobile.mp4" />
                    </video>
                    <div className="absolute bottom-0 left-0 h-full w-full group-hover:bg-[rgba(0,0,0,0.6)] duration-[400ms] flex flex-col justify-end z-10">
                      <div className="p-[2.14286rem] w-max">
                        <h2 className="text-white font-semibold text-[1.14286rem] md:text-[1.57143rem] lg:text-[1.14286rem] mb-[0.5rem]">
                          Winden
                        </h2>
                        <p className="text-white font-normal text-[1rem] md:text-[1.42857rem] lg:text-[1rem]">
                          UI/UX Design & Dev
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {/* <Img
            href={"/case-study/7"}
            imgSrc={"/images/home/slider/7-wol.webp"}
            css={"w-[39.23611vw] top-[12%] _projectImg5"}
            imgCss={"h-[39.23611vw]"}
            title={"Winden"}
            desc={"UI/UX Design & Dev"}
          /> */}
        </div>

        <div className="relative -right-[60px]">
          <div className="relative 3xl:top-[17%] top-[15%]">
            <div className="3xl:h-[39vw] h-[35vw] w-[46.25vw] bg-redblack pt-6 px-8">
              <div className="bgRapChatCaseStudyDesk h-full w-full"></div>
            </div>
          </div>

          <div
            className={`absolute overflow-hidden group w-[30.55556vw] top-[15%] z-1 ml-[12%] 2xl:ml-[65px] _projectImg6`}
          >
            <Link href="/case-study/8" passHref>
              <div className="relative z-[1] block bg-transparent after:content-[''] after:absolute after:-bottom-10 after:left-0 after:right-0 after:h-[70%] case-study-overlay group cursor-pointer">
                <div className="relative bg-black">
                  <video
                    className="w-full h-[30.55556vw] object-cover group-hover:scale-125 duration-[400ms] ease-in-out"
                    autoPlay
                    muted
                    loop={true}
                    playsInline
                  >
                    <source src="/videos/onekey-hero-mobile.mp4" />
                  </video>
                  <div className="absolute bottom-0 left-0 h-full w-full group-hover:bg-[rgba(0,0,0,0.6)] duration-[400ms] flex flex-col justify-end z-10">
                    <div className="p-[2.14286rem] w-max">
                      <h2 className="text-white font-semibold text-[1.14286rem] mb-[0.5rem]">
                        OneKey
                      </h2>
                      <p className="text-white font-normal text-[1rem]">
                        UI/UX Design
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/* <Img
            href={"/case-study/8"}
            imgSrc={"/images/home/slider/8-wol.webp"}
            css={
              "w-[30.55556vw] top-[15%] z-1 ml-[12%] 2xl:ml-[65px] _projectImg6"
            }
            imgCss={"h-[30.55556vw]"}
            title={"OneKey"}
            desc={"UI/UX Design"}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default ImgThirdSection;
