/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import { gsap } from 'gsap/dist/gsap';
import Link from 'next/link';
import { useLayoutEffect } from 'react';
import OverviewSection from '../OverviewSection';

function HeroSection({ data }: any) {
  const tl = gsap.timeline({
    defaults: { duration: 1.4 },
  });

  useLayoutEffect(() => {
    window.requestAnimationFrame(() => {
      tl.to('._topMoreButton', { opacity: 1, x: 0, delay: 0.5 }, 'start')
        .to('._caseStudiesIntro', { opacity: 1, x: 0, delay: 0.5 }, 'start')
        .to(
          '._caseStudiesDec, ._caseStudiesRightDots',
          { opacity: 1, y: 0, delay: 0.5 },
          'start'
        );
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  const fullCaseStudyIds = [11, 12, 13];
  return (
    <>
      <div className="w-full relative z-[2] lg:flex lg:flex-wrap lg:flex-row">
        {/* Case study header left section */}
        <div className="hidden lg:flex-[0_0_auto] lg:w-[5rem] lg:pt-[5rem] lg:block lg:relative">
          <Link href={'/case-study'}>
            <a className="bg-transparent" href="#" aria-label="case study page">
              <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center">
                <div className="header_case_side_link min-h-[200px] text-center m-auto inline-block text-[#000] font-bold hover:text-primary duration-300 group">
                  <span className="inline-block align-middle leading-[1.07143rem] w-[1.07143rem] h-[1.07143rem] mb-[0.71429rem] relative pointer-events-none header_case_side_link_square group-hover:rotate-90">
                    <span className="bg-primary top-0 left-0 absolute w-[0.42857rem] h-[0.42857rem] pointer-events-none"></span>
                    <span className="bg-primary top-0 right-0 absolute w-[0.42857rem] h-[0.42857rem] pointer-events-none"></span>
                    <span className="bg-primary bottom-0 left-0 absolute w-[0.42857rem] h-[0.42857rem] pointer-events-none"></span>
                    <span className="bg-primary bottom-0 right-0 absolute w-[0.42857rem] h-[0.42857rem] pointer-events-none"></span>
                  </span>
                  <span className="inline-block align-middle leading-[1.07143rem] pointer-events-none">
                    All case studies
                  </span>
                </div>
              </div>
            </a>
          </Link>
        </div>

        {/* Case study header center */}
        <div className="relative z-[1] lg:flex-grow lg:shrink lg:basis-[0%] lg:mt-[5rem]">
          <div>
            {data?.heroSectionData?.videoSrc ? (
              <>
                <div className="hidden lg:block">
                  <video
                    className="h-[calc(100svh-10rem)] w-full object-cover"
                    autoPlay
                    muted
                    loop={true}
                    key={data?.heroSectionData?.id}
                    playsInline
                    poster={data?.heroSectionData?.imageUrlLong}
                  >
                    <source src={data?.heroSectionData?.videoSrc} />
                  </video>
                </div>
                <div className="lg:hidden block">
                  <figure className="m-0 relative block before:content-[''] before:top-0 before:bottom-0 before:left-0 before:right-0 before:absolute before:bg-[#000] lg:before:bg-transparent before:opacity-[0.3]">
                    <img
                      src={data?.heroSectionData?.imageUrlSmall}
                      alt="banner"
                      // loading="lazy"
                      className="w-full max-w-full min-h-[100svh] landscape:max-h-[100svh] block lg:hidden h-[calc((5.62px,1vh)*100)] object-cover object-center"
                    />
                  </figure>
                </div>
              </>
            ) : (
              <figure className="m-0 relative block before:content-[''] before:top-0 before:bottom-0 before:left-0 before:right-0 before:absolute before:bg-[#000] lg:before:bg-transparent before:opacity-[0.3]">
                <img
                  src={data?.heroSectionData?.imageUrlLong}
                  alt="banner"
                  // loading="lazy"
                  className="w-[calc(100svw-11.18rem)] max-w-full hidden lg:block h-[calc(100svh-10rem)] object-cover bg-[#f5f5f5] object-center"
                />
                <img
                  src={data?.heroSectionData?.imageUrlSmall}
                  alt="banner"
                  // loading="lazy"
                  className="w-full max-w-full min-h-[100svh] landscape:max-h-[100svh] block lg:hidden h-[calc((5.62px,1vh)*100)] object-cover object-center"
                />
              </figure>
            )}

            <div className="absolute top-0 bottom-0 left-0 right-0 lg:flex before:content-[''] before:table after:content-[''] after:table after:clear-both">
              <div className="lg:flex-grow lg:shrink lg:basis-[0%]">
                <div className="absolute bottom-[2.14286rem] left-[8.33333%] right-[16.66667%] lg:top-1/2 lg:bottom-auto lg:left-[4.53782vw] lg:translate-y-[-50%] z-10">
                  <h4
                    className={`pl-[2.85714rem] uppercase text-[0.92857rem] tracking-[0.13286rem] text-white font-semibold leading-[1.1875em] translate-x-8 _caseStudiesIntro relative my-[1.33em] after:bg-primary after:left-0 after:absolute after:top-[50%] after:translate-y-[-50%] after:h-[2px] after:w-[1.5rem] after:content-[''] ${
                      data?.id === 1 ? 'text-black' : ''
                    }`}
                  >
                    {fullCaseStudyIds.includes(data?.id) && 'FULL'} CASE STUDIES
                  </h4>
                  <h1
                    className={`md:text-[1.85714rem] text-[1.57143rem] my-[0.71429rem] md:leading-[1.23077em] leading-[1.22727em] tracking-normal font-bold text-white opacity-0 translate-x-8 _caseStudiesIntro ${
                      data?.id === 1 ? 'text-black' : ''
                    }`}
                  >
                    {data?.heroSectionData?.imageTitle
                      ? data?.heroSectionData?.imageTitle
                      : 'Verizon'}
                  </h1>
                  <h3
                    className={`m-0 relative text-[1.57143rem] font-[400] leading-[1.22727em] tracking-normal text-white opacity-0 translate-y-8 _caseStudiesDec ${
                      data?.id === 1 ? 'text-black' : ''
                    }`}
                  >
                    {data?.heroSectionData?.imageDesc
                      ? data?.heroSectionData?.imageDesc
                      : 'Sub Pages Redesign'}
                  </h3>
                  <div
                    className={classNames(
                      'cursor-pointer items-center justify-center w-0.5 hidden lg:flex',
                      '_topMoreButton'
                    )}
                  >
                    <div className="-rotate-90 -translate-y-10 relative -mt-5">
                      <span
                        className={classNames(
                          'inline-block w-[150px] h-[2px] bg-white/60 -translate-x-full',
                          '_topMoreButtonLine'
                        )}
                      ></span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0">
                  <button
                    onClick={() => window.scrollTo(0, 910)}
                    className={classNames(
                      'absolute lg:hidden text-white w-[5rem] h-[15rem] bottom-0 border-0 right-0 bg-transparent cursor-pointer',
                      '_topMoreButton opacity-0 -translate-x-8'
                    )}
                  >
                    <span className="text-white rotate-90 translate-y-[-1rem] text-[0.92857rem] relative block">
                      More
                    </span>
                    <span
                      className={classNames(
                        'inline-block w-[46px] h-[2px] -rotate-90 bg-white -translate-x-[50%]  mt-0  absolute !bottom-[3.75rem]',
                        '_topMoreButtonLine'
                      )}
                    ></span>
                  </button>
                </div>
              </div>

              <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none lg:flex-grow lg:shrink lg:basis-[0%] lg:relative">
                <div className="case_study_dots opacity-0 translate-y-10 _caseStudiesRightDots"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Case study header right section */}
        <div className="hidden lg:flex-[0_0_auto] lg:w-[5rem] lg:pt-[5rem] lg:block lg:relative">
          <Link
            href={`/case-study/${
              parseInt(data?.heroSectionData?.id) === 13
                ? 1
                : parseInt(data?.heroSectionData?.id) + 1
            }`}
            passHref
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center">
              <a
                href="#"
                aria-label="case study single page"
                className="header_case_side_link min-h-[200px] text-center m-auto inline-block text-[#000] font-bold leading-[1.42857em] hover:text-primary duration-300"
              >
                <span className="inline-block align-middle leading-[1.07143rem] pointer-events-none">
                  Next
                </span>
              </a>
            </div>
          </Link>
        </div>

        {/* Case study header overview section */}
        <OverviewSection data={data?.overviewSectionData} />
      </div>
    </>
  );
}

export default HeroSection;
