import gsap from 'gsap';
import React, { useLayoutEffect } from 'react';
import BsThreeDotsIcon from 'src/icons/BsThreeDotsIcon';

interface Props {
  leftImgUrl: string;
  rightImgUrl: string;
  id: any;
  leftImgCss: any;
  rightImgCss: any;
  mobileImgUrl?: string;
  bgCss?: string;
}
const ImagesContainer: React.FC<Props> = ({
  leftImgUrl,
  rightImgUrl,
  id,
  leftImgCss,
  rightImgCss,
  mobileImgUrl,
  bgCss,
}) => {
  useLayoutEffect(() => {
    window.requestAnimationFrame(() => {
      const ProjectVideoTl = gsap.timeline({
        scrollTrigger: {
          trigger: `._project5ImageTrigger${id}`,
          start: 'top 100%',
          scrub: 0.9,
        },
      });
      ProjectVideoTl.to(
        `._project5Image${id}`,
        {
          y: -200,
          duration: 0.8,
          ease: 'none',
        },
        'start'
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className={`lg:block hidden lg:relative lg:p-[9.14286rem_4.53782%]`}>
        <div
          className={`h-[90%] w-full absolute top-0 left-0 bg-[#F5F5F5] ${bgCss}`}
        ></div>
        <div className={`mb-0 min-h-full flex justify-around w-[50vw] mx-auto`}>
          <div
            className={`${leftImgCss} min-h-[60vw] flex-grow shrink relative`}
          >
            <div
              className={`min-h-full _projectImage5Trigger${id} _project5Image${id}`}
            >
              <div className="shadow-[0_0_26px_0_rgb(0_0_0_/_10%)] rounded-[0.42857rem] relative">
                <div className="__imageRedBorder absolute top-0 left-0 right-0  h-[2.5rem] z-[1] rounded-t-[0.42857rem]">
                  <div className="left-[1rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                  <div className="left-[1.8rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                  <div className="left-[2.6rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                </div>

                <figure className="m-0 relative pt-[2.5rem]">
                  <img
                    src={leftImgUrl}
                    alt={leftImgUrl}
                    className="w-full block max-w-full h-auto rounded-b-[0.42857rem]"
                  />
                </figure>
              </div>
            </div>
          </div>

          <div
            className={`${rightImgCss} min-h-[60vw] flex-grow shrink relative`}
          >
            <div className={`_project5ImageTrigger${id} _project5Image${id}`}>
              <div className="shadow-[0_0_26px_0_rgb(0_0_0_/_10%)] rounded-[0.42857rem] relative">
                <div className="__imageRedBorder absolute top-0 left-0 right-0 bg-primary h-[2.5rem] z-[1] rounded-t-[0.42857rem]">
                  <div className="left-[1rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                  <div className="left-[1.8rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                  <div className="left-[2.6rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                </div>

                <figure className="m-0 relative pt-[2.5rem]">
                  <img
                    src={rightImgUrl}
                    alt={rightImgUrl}
                    className="w-full block max-w-full h-auto rounded-b-[0.42857rem]"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Images on Small devices */}
      <div className="lg:hidden block">
        {mobileImgUrl ? (
          <div className="bg-[#F5F5F5] py-[3.92857rem] md:px-20 px-10 rounded-md mb-20">
            <figure className="shadow-[0_0_26px_0_rgb(0_0_0_/_10%)] rounded-b-[0.35714rem] overflow-hidden max-w-[27.14286rem] relative m-auto">
              <div className="__imageRedBorder h-[2.5rem] text-white bg-primary rounded-tl-[0.35714rem] rounded-tr-[0.35714rem]">
                <span className="absolute left-[1rem] text-[35px]">
                  <BsThreeDotsIcon />
                </span>
              </div>
              <img
                src={mobileImgUrl}
                alt="project_section2_bg"
                height={'100%'}
                width={'100%'}
              />
            </figure>
          </div>
        ) : (
          <>
            <div className="bg-[#F5F5F5] py-[3.92857rem] md:px-20 px-10 rounded-md">
              <figure className="shadow-[0_0_26px_0_rgb(0_0_0_/_10%)] rounded-b-[0.35714rem] overflow-hidden max-w-[27.14286rem] relative m-auto">
                <div className="__imageRedBorder h-[2.5rem] text-white bg-primary rounded-tl-[0.35714rem] rounded-tr-[0.35714rem]">
                  <span className="absolute left-[1rem] text-[35px]">
                    <BsThreeDotsIcon />
                  </span>
                </div>
                <img
                  src={leftImgUrl}
                  alt="project_section2_bg"
                  height={'100%'}
                  width={'100%'}
                />
              </figure>
            </div>

            <div className="bg-[#F5F5F5] pb-[3.92857rem] mb-[3.92857rem] md:px-20 px-10 rounded-md">
              <figure className="shadow-[0_0_26px_0_rgb(0_0_0_/_10%)] rounded-b-[0.35714rem] overflow-hidden max-w-[27.14286rem] relative m-auto">
                <div className="__imageRedBorder h-[2.5rem] text-white bg-primary rounded-tl-[0.35714rem] rounded-tr-[0.35714rem]">
                  <span className="absolute left-[1rem] text-[35px]">
                    <BsThreeDotsIcon />
                  </span>
                </div>
                <img
                  src={rightImgUrl}
                  alt="project_section2_bg"
                  height={'100%'}
                  width={'100%'}
                />
              </figure>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImagesContainer;
