import useMobileAccordion from "@hooks/useMobileAccordion";
import classNames from "classnames";
import gsap from "gsap";
import { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import FaPlusIcon from "src/icons/FaPlusIcon";

interface Props {
  data: {
    client: string;
    year: number;
    activities: string[];
    overview: string;
    challenge: string;
    solution: string;
  };
}

const OverviewSection: React.FC<Props> = ({ data }) => {
  const [activeCollapse, setActiveCollapse] = useState<number | null>(null);
  const { caseMobileAccordion } = useMobileAccordion();
  const tl = gsap.timeline({
    defaults: { duration: 1.4 },
  });

  useEffect(() => {
    tl.to(
      "._caseStudiesLeftOverView, ._caseStudiesRightOverView",
      { opacity: 1, x: 0, delay: 0.2 },
      "start"
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCollapse = (i: number) => {
    setActiveCollapse((prev) => (prev === i ? null : i));
    if (i !== activeCollapse) {
      caseMobileAccordion(i);
    }
  };

  const collapsebleData = [
    {
      title: "THE CHALLENGE",
      desc: data?.challenge,
    },
    {
      title: "THE SOLUTION",
      desc: data?.solution,
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 text-white lg:grid-cols-2 lg:-mt-[5rem]">
        <div className="grid w-full grid-cols-1 px-[8.33333%] lg:pr-0 pb-[1.07143rem] lg:pb-0 bg-primary lg:grid-cols-2 lg:pl-[5rem] lg:pt-[5rem] opacity-0 -translate-x-8 _caseStudiesLeftOverView">
          <div className="w-full lg:pt-[1.78571rem] lg:pb-[2.85714rem] lg:pl-[4.53782vw]">
            <div className="grid grid-cols-[66.6666%_33.3333%] items-start w-full lg:space-y-5 lg:inline-block">
              <ul className="space-y-3 lg:space-y-5">
                <li className="leading-[1.23077em] text-[.92857rem] font-semibold uppercase mb-[0.71429rem] mt-[2.14286rem] lg:my-[1.78571rem]">
                  <h4 className="tracking-[0.13286rem]">CLIENT</h4>
                </li>
                <li className="text-[1rem] m-0">{data?.client}</li>
              </ul>
              <ul className="space-y-3 lg:space-y-5">
                <li className="leading-[1.23077em] text-[.92857rem] font-semibold uppercase mb-[0.71429rem] mt-[2.14286rem] lg:my-[1.78571rem]">
                  <h4 className="tracking-[0.13286rem]">YEAR</h4>
                </li>
                <li className="text-[1rem] m-0">{data?.year}</li>
              </ul>
            </div>
          </div>
          <ul className="space-y-3 list-disc list-inside lg:pt-[1.78571rem] lg:pb-[2.85714rem] lg:space-y-5">
            <h4 className="leading-[1.23077em] text-[.92857rem] font-semibold uppercase mb-[0.71429rem] mt-[2.14286rem] lg:my-[1.78571rem] tracking-[0.13286rem]">
              ACTIVITIES
            </h4>
            <p className="!mt-[1.42857rem] text-[1rem] m-0">
              {data?.activities.map((item) => (
                <span
                  key={item}
                  className="block mb-[0.71429rem] lg:mb-[1.64286rem] pl-[1.78571rem] relative text-[1rem] before:content-[''] before:w-[3px] before:h-[3px] before:top-[0.42857rem] before:left-0 before:bg-white before:rounded-full before:absolute last:mb-[0.71429rem]"
                >
                  {item}
                </span>
              ))}
            </p>
          </ul>
        </div>
        <div className="px-[8.33333%] lg:pl-[10%] lg:pr-[5rem] lg:pb-[2.5rem] lg:pt-[5rem] pb-[1.07143rem] bg-redblack space-y-7 opacity-0 translate-x-8 _caseStudiesRightOverView">
          <h5 className="text-[0.92857rem] font-semibold tracking-[0.13071rem] uppercase mt-[1.78571rem] lg:mt-[3.57143rem] mb-[1.67em]">
            THE OVERVIEW
          </h5>

          <h3 className="text-[1.28571rem] leading-[1.22222em] lg:leading-[1.22727em] font-[300] lg:text-[1.57143rem] lg:pr-[3.85714rem] lg:!mt-[3rem] !my-[1em]">
            {data?.overview}
          </h3>
        </div>
      </div>

      <div className="lg:mt-[2.64286rem] lg:pb-[3.57143rem]">
        <div className="flex lg:relative lg:pt-[1.71429rem] lg:pb-[4.28571rem] lg:mb-[3.57143rem] lg:after:content-[''] lg:after:h-[1px] lg:after:bg-[#e4e4e4] lg:after:absolute lg:after:bottom-0 lg:after:left-[8.33333%] lg:after:right-[8.33333%]">
          <div className="hidden lg:max-w-[50%] lg:pl-[5rem] lg:pb-0 lg:pr-[4.53782vw] text-black lg:block space-y-7">
            <h5 className="lg:pl-[4.53782vw] lg:leading-[1.28571em] lg:mb-[2.14286rem] lg:mt-[1.67em] lg:text-[0.92857rem] font-semibold tracking-[0.13286rem]">
              THE CHALLENGE
            </h5>
            <p className="h-auto lg:pl-[4.53782vw] lg:leading-[1.28571em] !my-[1em] text-[#131313]">
              {data?.challenge}
            </p>
          </div>
          <div className="hidden lg:max-w-[50%] lg:pl-[5%] lg:pr-[5rem] lg:pb-0 text-black lg:block space-y-7">
            <h5 className="lg:leading-[1.28571em] lg:mb-[2.14286rem] lg:mt-[1.67em] lg:text-[0.92857rem] font-semibold tracking-[0.13286rem]">
              THE SOLUTION
            </h5>
            <p className="h-auto lg:leading-[1.28571em] !my-[1em] text-[#131313]">
              {data?.solution}
            </p>
          </div>
          <div id="case" className="mt-[2.64286rem] mb-[3.57143rem] lg:hidden">
            {collapsebleData.map(({ title, desc }, i) => (
              <div
                id={`case${i}`}
                key={"fjdgfrhd_" + i}
                className="px-[8.33333%] first-of-type:mb-8"
              >
                <h5
                  className="cursor-pointer relative my-[1rem] font-semibold text-[.92857rem] tracking-[.13286rem] flex justify-between"
                  onClick={() => handleCollapse(i)}
                >
                  {title}

                  <span
                    className={classNames(
                      "duration-200 mr-[-8px] text-xl text-black/20",
                      activeCollapse === i && "rotate-45"
                    )}
                  >
                    <FaPlusIcon />
                  </span>
                </h5>
                <Collapsible
                  trigger=""
                  open={i === activeCollapse}
                  transitionTime={200}
                >
                  <p className="m-[0_0_1rem] lg:m-0 text-[#131313] leading-[1.42857em] text-[14px] pb-[3px] p-0">
                    {desc}
                  </p>
                </Collapsible>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
