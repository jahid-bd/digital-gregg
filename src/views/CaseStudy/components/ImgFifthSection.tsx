import gsap from 'gsap';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import BottomQ from 'src/icons/Quote/BottomQ';
import TopQ from 'src/icons/Quote/TopQ';

const Img = dynamic(() => import('../partials/Img'));

type Props = {};

const ImgFifthSection = (props: Props) => {
  useEffect(() => {
    const ProjectScrubTl = gsap.timeline({
      scrollTrigger: {
        trigger: '._caseFifthSectionTrigger',
        start: '`top 100%',
        scrub: 0.9,
      },
    });
    ProjectScrubTl.to(
      '._projectImg8',
      {
        y: -250,
        duration: 0.6,
      },
      'start'
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="3xl:pb-[200px] relative _caseFifthSectionTrigger">
      <div className="pt-[-50px]">
        <div className="flex justify-center">
          <div className="flex justify-end">
            <div className="bg-redblack pt-6 desktop:pb-6 pb-8 pl-5 xl:pl-6 3xl:w-[56.73611vw] w-[70vw] lg:w-[59.02778vw] lg:h-[40.98927vw] xl:h-[35.97222vw]">
              <div className="bgEverythingCaseStudyDesk h-full w-full">
                <div className="relative 3xl:left-[7%] left-[7.5%] h-full">
                  <div className="flex items-center 3xl:max-w-[35rem] xl:max-w-[40rem] max-w-[26.56rem] h-full">
                    <div className="bg-redblack 3xl:px-10 xl:pr-12 xl:pb-7 xl:pt-10 2xl:py-8 pl-8 pr-7 py-8 lg:py-4 text-white ">
                      <div className="mb-[28px]">
                        <TopQ />
                      </div>
                      <h5 className="font-bold text-white text-[1.57143rem] leading-[1.22727em] mb-3">
                        These&apos;s a reason for everything
                      </h5>
                      <p className="leading-[1.22727em] text-[1.28571rem] 3xl:text-[1.57143rem] 3xl:w-full lg:w-[80%]">
                        Nothing less, nothing more. The focus with every design
                        should be getting rid of the unnecessary. Every element
                        should serve a purpose.
                      </p>
                      <div className="mt-[28px]">
                        <BottomQ />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Img
            href={'/case-study/10'}
            imgSrc={'/images/home/slider/10-wol.webp'}
            css={'w-[38.19444vw] h- -top-14 right-0 _projectImg8'}
            imgCss={'h-[38.19444vw]'}
            title={'NAACP'}
            desc={'UI/UX Design'}
          />
        </div>
      </div>
    </div>
  );
};

export default ImgFifthSection;
