import { useLayoutEffect } from "react";
import gsap from "gsap";
const parse = require('html-react-parser');

interface Props {
  count: string;
  title: string;
  subTitle: string;
  body: string;
  isSecondPage?: boolean;
  isBreakTitle?: string;
}

const SectionHeaderCount: React.FC<Props> = ({
  count,
  title,
  subTitle,
  body,
  isSecondPage,
  isBreakTitle,
}) => {
  
  useLayoutEffect(() => {
    window.requestAnimationFrame(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "._projectLandingTrigger",
          start: "top 85%",
        },
        defaults: { duration: 1.4 },
      });
      tl.to("._projectNumber", { opacity: 1, x: 0, delay: 0.2 }, "start").to(
        "._projectDec",
        { opacity: 1, x: 0, delay: 0.2 },
        "start"
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col px-[2.5rem] lg:px-0 lg:mb-0 mb-[3.57143rem] md:flex-row md:items-center _projectLandingTrigger">
      <div className="relative lg:flex-[0_0_auto]">
        <div className="px-0 relative">
          <div className="desktop:text-[32.14286rem] md:text-[21.42857rem] text-[15.71429rem]  leading-[.7] text-[#F5F5F5] opacity-0 -translate-x-8 _projectNumber font-[800] z-[-1]">
            {count}
          </div>
          <div className="absolute left-[1.92857rem] bottom-0 md:left-[3.85714rem] md:top-[50%] md:translate-y-[-50%] md:bottom-auto tracking-[1.42857em]">
            <h2
              className={`text-[1.57143rem] leading-[1.22727em] font-bold text-left tracking-normal text-[#131313] my-[0.83em]`}
            >
              {title}
              {isBreakTitle ? (
                <>
                  <br />
                  {isBreakTitle}
                </>
              ) : null}
              {subTitle !== "" && (
                <strong className="font-normal">
                  <br />
                  {subTitle}
                </strong>
              )}
            </h2>
          </div>
        </div>
      </div>
      <div className="relative px-[1.92857rem] md:px-0 md:pl-[0.35714rem] desktop:pr-[14.28571rem]">
        <p className="text-[#4a4a4a] text-[1.28571rem] lg:text-[1.57143rem] leading-[1.22222em] lg:leading-[27px] mt-[1em] lg:my-[1em]  opacity-0 translate-x-8 _projectDec">
          {parse(body ? body : '')}
        </p>
      </div>
    </div>
  );
};

export default SectionHeaderCount;
