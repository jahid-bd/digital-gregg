import gsap from 'gsap';
import React, { useEffect } from 'react';
import BsThreeDotsIcon from 'src/icons/BsThreeDotsIcon';

interface Props {
  leftImgUrl: string;
  rightImgUrl: string;
  middleImgUrl: string;
  id: number;
}
const TripleImgContainer: React.FC<Props> = ({
  leftImgUrl,
  rightImgUrl,
  middleImgUrl,
  id,
}) => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '._projectLandingTrigger',
        start: 'top 85%',
      },
      defaults: { duration: 1.4 },
    });
    tl.to('._projectNumber', { opacity: 1, x: 0, delay: 0.2 }, 'start').to(
      '._projectDec',
      { opacity: 1, x: 0, delay: 0.2 },
      'start'
    );

    const ProjectVideoTl = gsap.timeline({
      scrollTrigger: {
        trigger: `._projectImageTrigger${id}`,
        start: '`top 100%',
        scrub: 0.9,
      },
    });
    ProjectVideoTl.to(
      `._projectImage${id}`,
      {
        y: -300,
        duration: 0.8,
      },
      'start'
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className={`lg:block hidden`}>
        <div className={`bg-[#F5F5F5] lg:p-[9.14286rem_4.53782%]`}>
          <div
            className={`lg:flex lg:gap-14   flex items-start justify-between `}
          >
            <div className="overflow-hidden relative w-full shadow-[0_0_26px_0_rgb(0_0_0_/_10%)] rounded-[0.42857rem]">
              <div className="h-[2.5rem] text-white bg-primary rounded-tl-[0.35714rem] rounded-tr-[0.35714rem] -mb-[2px]">
                <span className="absolute left-[1rem] text-[35px]">
                  <BsThreeDotsIcon />
                </span>
              </div>
              <img
                src={leftImgUrl}
                alt={leftImgUrl}
                height={"100%"}
                width={"100%"}
              />
            </div>
            {middleImgUrl && (
              <div className="overflow-hidden relative w-full shadow-[0_0_26px_0_rgb(0_0_0_/_10%)] rounded-[0.42857rem]">
                <div className="h-[2.5rem] text-white bg-primary rounded-tl-[0.35714rem] rounded-tr-[0.35714rem] -mb-[2px]">
                  <span className="absolute left-[1rem] text-[35px]">
                    <BsThreeDotsIcon />
                  </span>
                </div>
                <img
                  src={middleImgUrl}
                  alt={middleImgUrl}
                  height={"100%"}
                  width={"100%"}
                />
              </div>
            )}
            {rightImgUrl && (
              <div className="overflow-hidden  relative w-full shadow-[0_0_26px_0_rgb(0_0_0_/_10%)] rounded-[0.42857rem]">
                <div className="h-[2.5rem] text-white bg-primary rounded-tl-[0.35714rem] rounded-tr-[0.35714rem] -mb-[2px]">
                  <span className="absolute left-[1rem] text-[35px]">
                    <BsThreeDotsIcon />
                  </span>
                </div>
                <img
                  src={rightImgUrl}
                  alt={rightImgUrl}
                  height={"100%"}
                  width={"100%"}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Images on Small devices */}
      <div className="lg:hidden block">
        <div className="bg-[#F5F5F5] pt-[3.92857rem] md:px-20 px-10 mb-[3.92857rem] rounded-md ">
          <figure className="shadow-[0_0_26px_0_rgb(0_0_0_/_10%)] rounded-[0.42857rem] overflow-hidden max-w-[27.14286rem] relative m-auto">
            <div className="h-[2.5rem] text-white bg-primary rounded-tl-[0.35714rem] rounded-tr-[0.35714rem] -mb-[2px]">
              <span className="absolute left-[1rem] text-[35px]">
                <BsThreeDotsIcon />
              </span>
            </div>
            <img
              src={leftImgUrl}
              alt={leftImgUrl}
              height={"100%"}
              width={"100%"}
            />
          </figure>
        </div>
        {middleImgUrl && (
          <div className="bg-[#F5F5F5] py-10 mb-[3.92857rem] md:px-20 px-10 rounded-md">
            <figure className="shadow-[0_0_26px_0_rgb(0_0_0_/_10%)] rounded-[0.42857rem] overflow-hidden max-w-[27.14286rem] relative m-auto">
              <div className="h-[2.5rem] text-white bg-primary rounded-tl-[0.35714rem] rounded-tr-[0.35714rem] -mb-[2px]">
                <span className="absolute left-[1rem] text-[35px]">
                  <BsThreeDotsIcon />
                </span>
              </div>
              <img
                src={middleImgUrl}
                alt={middleImgUrl}
                height={"100%"}
                width={"100%"}
              />
            </figure>
          </div>
        )}
        {rightImgUrl && (
          <div className="bg-[#F5F5F5] py-10 mb-[3.92857rem] md:px-20 px-10 rounded-md">
            <figure className="shadow-[0_0_26px_0_rgb(0_0_0_/_10%)] rounded-[0.42857rem] overflow-hidden max-w-[27.14286rem] relative m-auto">
              <div className="h-[2.5rem] text-white bg-primary rounded-tl-[0.35714rem] rounded-tr-[0.35714rem] -mb-[2px]">
                <span className="absolute left-[1rem] text-[35px]">
                  <BsThreeDotsIcon />
                </span>
              </div>
              <img
                src={rightImgUrl}
                alt={rightImgUrl}
                height={"100%"}
                width={"100%"}
              />
            </figure>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripleImgContainer;
