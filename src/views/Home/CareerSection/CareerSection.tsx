import GoMoreLink from "@components/GoMore/GoMoreLink";
import gsap from "gsap";
import { useEffect } from "react";
import { careerLeft } from "src/constant";
import ChevronRightICon from "src/icons/ChevronRightICon";

function CareerSection() {
  // Gsap Animations
  useEffect(() => {
    const CareerSectionTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "._carrerTrigger",
        start: "top 70%",
      },
      defaults: { duration: 0.8 },
    });

    CareerSectionTimeline.to(
      "._careerLeftSideLines",
      {
        y: 0,
        opacity: 1,
      },
      "start"
    )
      .to(
        "._careerLeftSideLinesBottomBorder",
        {
          width: "100%",
        },
        "-=.7"
      )
      .to(
        "._careerLeftSideLinesRightIcon",
        {
          x: 0,
          opacity: 1,
        },
        "-=.7"
      )
      .to(
        "._careerRightSideTexts",
        {
          y: 0,
          opacity: 1,
        },
        "start"
      )
      .to("._careerRightSideFindOutMore", { x: 0, opacity: 1 }, "start");
  }, []);
  return (
    <section className="mb-[4rem] lg:mb-[6rem] xl:mb-[14rem] lg:pl-[140px] px-10 lg:pr-[70px] _carrerTrigger">
      <div className="grid grid-cols-1 lg:grid-cols-[4fr,3fr] gap-[50px] lg:gap-[9%]">
        <div className="space-y-6 order-2 lg:order-none">
          {careerLeft.map(({ text, url }, i) => {
            return (
              <a
                key={"rhsadhh_" + i}
                href={url}
                className="_careerLeftSideLines translate-y-3 opacity-0 group flex items-center justify-between relative pb-6 before:absolute before:bottom-[-2px] before:z-[2] before:left-0 before:w-0 before:h-1 before:bg-[#BEBEBE] hover:before:h-1 lg:hover:before:w-full before:duration-500 before:bg-gradient-to-r before:from-redblack before:to-primary hover:text-primary"
              >
                <div className="bottom-0 left-0 h-px bg-[#BEBEBE] w-0 absolute _careerLeftSideLinesBottomBorder"></div>
                <h4 className="section-sub-title text-[22px] leading-[27px]">
                  {text}
                </h4>
                <span className="opacity-0 -translate-x-4 _careerLeftSideLinesRightIcon">
                  <span className="inline-block lg:group-hover:translate-x-3 duration-500">
                    <ChevronRightICon />
                  </span>
                </span>
              </a>
            );
          })}
        </div>

        <div className="space-y-4 lg:space-y-6 order-1 lg:order-none">
          <div className="flex gap-5 items-center _careerRightSideTexts -translate-y-8 opacity-0 mb-10 lg:mb-0">
            <span className="inline-block w-5 h-0.5 bg-redblack"></span>
            <h5 className="uppercase font-primary font-semibold text-[13px] leading-[20px] tracking-[.13286rem] text-redblack">
              Careers
            </h5>
          </div>

          <h3 className="text-[26px] leading-[32px] font-bold text-redblack _careerRightSideTexts -translate-y-8 opacity-0">
            Work with us.
          </h3>
          <p className="tracking-[0.02em] text-[#5A5A5A] text-[22px] leading-[27px] font-primary font-normal _careerRightSideTexts -translate-y-8 opacity-0 pr-24">
            There’s always room for game-changers in our Digital Gregg.
          </p>

          <div className="!mt-[50px] _careerRightSideFindOutMore translate-x-8 opacity-0 hidden lg:inline-block">
            <GoMoreLink text="Find out more here" url="/careers" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerSection;
