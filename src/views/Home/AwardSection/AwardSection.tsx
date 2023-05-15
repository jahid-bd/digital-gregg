import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";
import { awards } from "src/constant";

function AwardSection() {
  // Gsap Animations
  useEffect(() => {
    const AwardSectionTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "._awardTrigger",
        start: "top 70%",
      },
      defaults: { duration: 1.1 },
    });
    AwardSectionTimeline.to("._awardContainer", {
      opacity: 1,
      y: 0,
    });
  }, []);

  return (
    <section className="mb-[4rem] lg:pt-[3rem] awardSec lg:mb-[14rem] px-[2.5rem] lg:px-[3.85714rem] lg:mx-[5rem] _awardTrigger">
      <div className="flex lg:flex-row flex-col lg:items-start items-center  _awardContainer opacity-0 -translate-y-8 lg:gap-[75px] gap-[60px]">
        <div className="lg:flex-[0.5] flex flex-wrap flex-row order-2 items-center justify-center relative text-center lg:order-none w-full h-full xl:ml-8">
          {awards.map(({ name, svg, src, svg480 }: any, i) => {
            return (
              <div
                className="w-1/4 h-[23vw] lg:h-[9vw] relative group flex items-center justify-center text-center"
                key={"gdsahgsd_" + i}
              >
                <span className="inline-block absolute top-0 left-0 h-[3px] aspect-square bg-primary"></span>

                {(i === 3 || i === 7) && (
                  <span className="inline-block absolute top-0 right-0 h-[3px] aspect-square bg-primary"></span>
                )}
                {i === awards.length - 1 && (
                  <span className="inline-block absolute bottom-0 right-0 h-[3px] aspect-square bg-primary"></span>
                )}
                {i >= awards.length - 4 && (
                  <span className="inline-block absolute bottom-0 left-0 h-[3px] aspect-square bg-primary"></span>
                )}

                <div>
                  <div>
                    {/* <Image
                    layout="fill"
                    // width={100}
                    // height={100}
                    src={src}
                    alt={name}
                    draggable={false}
                  /> */}
                    {svg}
                  </div>
                  {/* <h5 className="sm:block hidden absolute mt-10 whitespace-pre opacity-0 group-hover:opacity-100 duration-300 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-semibold text-primary -ml-[3px]">
                  {name ? name : 'Blank text'}
                </h5> */}
                  <h5 className="lg:block hidden absolute left-0 right-0 text-center bottom-[10%] whitespace-pre opacity-0 group-hover:opacity-100 duration-300 text-[] text-[.8vw] leading-[20px] font-bold text-primary">
                    {name ? name : "Blank text"}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>

        <div className="space-y-6 relative w-full  h-full order-1 flex lg:order-none lg:mb-0 lg:flex-[0.5]  lg:mt-0 mt-[65px]">
          <div className="lg:ml-[42%]">
            <div className="mb-6">
              <Image
                src="/imgs/excellence.svg"
                width={55}
                height={61}
                alt="excellence image"
                priority
              />
            </div>

            <div className="flex gap-5 items-center mb-6">
              <span className="inline-block w-[1.5rem] h-[2.1px] bg-primary"></span>
              <h5 className="uppercase font-primary font-bold text-[13px] tracking-[.13286rem] leading-[20px] text-redblack">
                EXCELLENCE
              </h5>
            </div>
            <h3 className="section-sub-title lg:max-w-[400px] !text-[26px] !leading-[32px]">
              Better Recognition.
            </h3>
          </div>

          <div className="absolute translate-y-[-50%] right-[10%] z-[-1]  hidden lg:block">
            {/* <Image
              src="/imgs/exc-placeholder.png"
              width={400}
              height={300}
              priority
              alt="exc-placeholder image"
            /> */}
            <span className="2xl:text-[444px] text-[24vw] text-[#f5f5f5] font-[700]">
              08
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AwardSection;
