import gsap from "gsap";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import BottomQ from "src/icons/Quote/BottomQ";
import TopQ from "src/icons/Quote/TopQ";

const Img = dynamic(() => import('../partials/Img'));

type Props = {};

const ImgFourthSection = (props: Props) => {
  useEffect(() => {
    const ProjectScrubTl = gsap.timeline({
      scrollTrigger: {
        trigger: "._caseFourthSectionTrigger",
        start: "`top 100%",
        scrub: 0.9,
        // markers: true,
      },
    });
    ProjectScrubTl.to(
      "._projectImg7",
      {
        y: -400,
        duration: 0.6,
      },
      "start"
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pt-[100px] pb-[300px] relative _caseFourthSectionTrigger px-[2.85714rem]">
      <div className="grid grid-cols-2 gap-0 ">
        <div>
          <div>
            <Img
              href={"/case-study/13"}
              imgSrc={"/images/home/slider/13-wol.webp"}
              css={"w-[31.59722vw] -top-[5%] _projectImg7"}
              imgCss={"h-[31.59722vw]"}
              title={"Reveler.io"}
              desc={"Sub Pages Redesign"}
            />
          </div>
          <div>
            <Img
              href={"/case-study/9"}
              imgSrc={"/images/home/slider/9-wol.webp"}
              css={"w-[31.59722vw] top-[70%] _projectImg7"}
              imgCss={"h-[31.59722vw]"}
              title={"Bonsai"}
              desc={"Mobile App UI/UX Design"}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <div className="relative top-0 mr-[10%]">
            <div className="h-[39.02778vw] w-[38.19444vw] bg-redblack xl:p-7 p-8 pr-9">
              <div className="bgCaseStudyComeToghtherDesk h-full w-full">
                <div className="bg-redblack text-white 3xl:w-[55%] xl:w-[61%] desktop:w-[62%] w-[68%] 3xl:pb-3 absolute 3xl:top-[25%] 2xl:top-[25%] xl:top-[19%] desktop:top-[26%] 3xl:left-[18%] xl:left-[19.2%] top-[6%] left-[11%] 2xl:pb-6 2xl:pt-3 3xl:p-0">
                  <div className="3xl:mt-[27px] mt-[20px] mb-[27px]">
                    <TopQ />
                  </div>
                  <h3 className="font-bold text-white text-[1.57143rem] leading-[1.22727em] mb-6">
                    Thinking made visual.
                  </h3>
                  <p className="leading-[1.22727em] 3xl:text-[1.57143rem] text-[1.28571rem]">{`How you invest in how users interact with and perceive your product will ultimately make or break the success of your product.`}</p>
                  <div className="3xl:mt-[27px] my-[27px]">
                    <BottomQ />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgFourthSection;
