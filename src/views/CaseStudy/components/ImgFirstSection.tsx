/* eslint-disable @next/next/no-img-element */
import gsap from 'gsap';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect } from 'react';

const NXTImg = dynamic(() => import('../partials/NXTImg'));

type Props = {};

const ImgFirstSection = (props: Props) => {
  useEffect(() => {
    const ProjectScrubTl = gsap.timeline({
      scrollTrigger: {
        trigger: '._caseStudiesTrigger',
        start: '`top 30%',
        scrub: 0.9,
      },
    });
    ProjectScrubTl.to(
      '._projectImg1',
      {
        y: -300,
        duration: 0.6,
      },
      'start'
    );
    const ProjectScrubTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '._caseStudiesTrigger',
        start: '`top 30%',
        scrub: 0.9,
      },
    });
    ProjectScrubTl2.to(
      '._projectImg2',
      {
        y: -300,
        duration: 0.6,
      },
      'start'
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="md:px-5 relative flex-1 min-w-[1px]">
        <div>
          <div className="flex flex-row flex-wrap relative">
            <div className="relative mt-28 mb-20 grow shrink basis-[40%] before:content-[''] before:table after:content-[''] after:table after:clear-both">
              <div className="float-left w-[31.59722vw] h-[31.59722vw] relative _caseStudiesTrigger">
                <Link className="translate-y-[1.23364%]" href="/case-study/1">
                  <div className="m-0 relative z-[1] block overflow-hidden bg-transparent after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[70%] case-study-overlay _projectImg1 group">
                    <div className="p-0 h-[31.59vw] bg-[#f5f5f5] relative overflow-hidden cursor-pointer">
                      <video
                        className="w-full top-[12%] h-full object-cover group-hover:scale-125 duration-[400ms] ease-in-out"
                        autoPlay
                        muted
                        loop={true}
                        playsInline
                      >
                        <source src="/videos/verizon-hero.mp4" />
                      </video>
                      <div className="absolute bottom-0 left-0 h-full w-full group-hover:bg-[rgba(0,0,0,0.6)] duration-[400ms] flex flex-col justify-end z-10">
                        <div className="p-[2.14286rem] w-max">
                          <h2 className="text-white font-semibold text-[1.14286rem] md:text-[1.57143rem] lg:text-[1.14286rem] mb-[0.5rem]">
                            Verizon
                          </h2>
                          <p className="text-white font-normal text-[1rem] md:text-[1.42857rem] lg:text-[1rem]">
                            Sub Pages Redesign
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="-left-[2.5vw] -top-[2.5vw] h-[13.19444vw] w-[13.19444vw] bg-primary absolute -z-10"></div>
              </div>
            </div>

            <div className="relative max-w-[60%] mb-0 grow shrink basis-[60%] before:content-[''] before:table after:content-[''] after:table after:clear-both">
              <div className="float-right w-[39.58333vw] h-[39.58333vw] relative _projectTrigger2">
                <Link className="translate-y-[1.23364%]" href="/case-study/2">
                  <div className="m-0 relative z-[1] block overflow-hidden bg-transparent after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[70%] case-study-overlay _projectImg2 group">
                    <div className="p-0 h-[39.58333vw] bg-black overflow-hidden group cursor-pointer">
                      <NXTImg
                        src="/images/home/slider/2-wol.webp"
                        alt="the north face"
                      />
                      <div className="absolute bottom-0 left-0 h-full w-full group-hover:bg-[rgba(0,0,0,0.6)] duration-[400ms] flex flex-col justify-end z-10">
                        <div className="p-[2.14286rem] w-max">
                          <h2 className="text-white font-semibold text-[1.14286rem] md:text-[1.57143rem] lg:text-[1.14286rem] mb-[0.5rem]">
                            The North Face®
                          </h2>
                          <p className="text-white font-normal text-[1rem] md:text-[1.42857rem] lg:text-[1rem]">
                            CMYK UI/UX Design
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="-right-[2.5vw] -top-[2.5vw] h-[13.19444vw] w-[13.19444vw] bg-primary absolute -z-10"></div>
              </div>
            </div>

            <div className="relative mt-20 mb-0 grow shrink basis-[40%] max-w-[40%] before:content-[''] before:table after:content-[''] after:table after:clear-both _projectTrigger3">
              <div className="float-left ml-[5.4vw] w-[26.0416vw] h-[26.0416vw] relative">
                <Link className="translate-y-[1.23364%]" href="/case-study/3">
                  <div className="m-0 relative z-[1] block overflow-hidden bg-transparent after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[70%] case-study-overlay _projectImg1 group">
                    <div className="p-0 h-[26.0416vw] bg-black overflow-hidden group cursor-pointer">
                      {/* <img
                        className="block border-0 max-w-full h-full w-full object-cover object-[50%,50%] group-hover:scale-125 duration-[400ms] ease-in-out"
                        src="/images/home/slider/3-wol.webp"
                        alt=""
                      /> */}
                      <NXTImg
                        src="/images/home/slider/3-wol.webp"
                        alt="Harlem Capital"
                      />
                      <div className="absolute bottom-0 left-0 h-full w-full group-hover:bg-[rgba(0,0,0,0.6)] duration-[400ms] flex flex-col justify-end z-10">
                        <div className="p-[2.14286rem] w-max">
                          <h2 className="text-white font-semibold text-[1.14286rem] md:text-[1.57143rem] lg:text-[1.14286rem] mb-[0.5rem]">
                            Harlem Capital
                          </h2>
                          <p className="text-white font-normal text-[1rem] md:text-[1.42857rem] lg:text-[1rem]">
                            Website Redesign
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="grow mt-20 shrink basis-[60%] max-w-[60%] before:content-[''] before:table after:content-[''] after:table after:clear-both _projectTrigger4">
              <div className="float-right h-[30.90416vw] w-[30.90416vw] relative">
                <Link className="translate-y-[1.23364%]" href="/case-study/4">
                  <div className="m-0 relative z-[1] block overflow-hidden bg-transparent after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[70%] case-study-overlay _projectImg2 group">
                    <div className="p-0 h-[30.90416vw] bg-black overflow-hidden group cursor-pointer">
                      {/* <img
                        className="block border-0 max-w-full h-full w-full object-cover object-[50%,50%] group-hover:scale-125 duration-[400ms] ease-in-out"
                        src="/images/home/slider/4-wol.webp"
                        alt=""
                      /> */}
                      <NXTImg
                        src="/images/home/slider/4-wol.webp"
                        alt="OpenPhone"
                      />
                      <div className="absolute bottom-0 left-0 h-full w-full group-hover:bg-[rgba(0,0,0,0.6)] duration-[400ms] flex flex-col justify-end z-10">
                        <div className="p-[2.14286rem] w-max">
                          <h2 className="text-white font-semibold text-[1.14286rem] md:text-[1.57143rem] lg:text-[1.14286rem] mb-[0.5rem]">
                            OpenPhone
                          </h2>
                          <p className="text-white font-normal text-[1rem] md:text-[1.42857rem] lg:text-[1rem]">
                            Desktop APP UI/UX
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="h-[35.97vw] top-[25.72222%] left-[14.53782%] w-[57.08333vw] bg-[#333333] z-[-1] absolute right-0 bottom-0 pt-10 pb-5 px-5 translate-y-[-6.59375%]">
              <div className="bgCaseStudyDesk h-full w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ImgFirstSection;
