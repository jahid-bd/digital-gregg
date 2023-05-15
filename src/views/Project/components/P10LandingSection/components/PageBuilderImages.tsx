import gsap from 'gsap';
import { useLayoutEffect } from 'react';
import BsThreeDotsIcon from 'src/icons/BsThreeDotsIcon';
import ImageContainer from './ImageContainer';

const PageBuilderImages = () => {
  useLayoutEffect(() => {
    window.requestAnimationFrame(() => {
      const Project9ImgTl = gsap.timeline({
        scrollTrigger: {
          trigger: '._project10PageBuilderImageTrigger',
          start: '`top 100%',
          scrub: 0.9,
        },
      });
      Project9ImgTl.to(
        '._project10PageBuilderImages',
        {
          y: -400,
          duration: 0.8,
          ease: 'none',
        },
        'start'
      );
    });
  }, []);

  return (
    <div>
      <div
        className={`lg:block hidden lg:relative lg:p-[9.14286rem_4.53782%] lg:!pb-0`}
      >
        <div
          className={`h-[97%] w-full absolute top-0 left-0 bg-[#F5F5F5]`}
        ></div>
        <div
          className={`mb-0 min-h-[400vh] _project10PageBuilderImageTrigger w-[50vw] mx-auto`}
        >
          <div className={`min-h-full translate-y-[0.44267%]`}>
            <div className={`min-h-full _project10PageBuilderImages`}>
              <ImageContainer
                isBorder={true}
                src="/images/project/project-10/page-builder-1.png"
              />
              <ImageContainer
                isBorder={false}
                src="/images/project/project-10/page-builder-2.png"
              />
              <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
              <ImageContainer
                isBorder={true}
                src="/images/project/project-10/page-builder-3.png"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Images on Small devices */}
      <div className="lg:hidden block">
        <div className="bg-[#F5F5F5] py-[3.92857rem] md:px-20 px-10 rounded-md">
          <figure className="shadow-[0_0_26px_0_rgb(0_0_0_/_10%)] rounded-b-[0.35714rem] overflow-hidden max-w-[27.14286rem] relative m-auto">
            <div className="__imageRedBorder h-[2.5rem] text-white bg-primary rounded-tl-[0.35714rem] rounded-tr-[0.35714rem]">
              <span className="absolute left-[1rem] text-[35px]">
                <BsThreeDotsIcon />
              </span>
            </div>
            <img
              src="/images/project/project-10/page-builder-1.png"
              alt="image"
              height={'100%'}
              width={'100%'}
            />
          </figure>
          <figure className="shadow-[0_0_26px_0_rgb(0_0_0_/_10%)] rounded-b-[0.35714rem] overflow-hidden max-w-[27.14286rem] relative m-auto mb-[3.92857rem]">
            <img
              src="/images/project/project-10/page-builder-2.png"
              alt="image"
              height={'100%'}
              width={'100%'}
            />
          </figure>
          <figure className="shadow-[0_0_26px_0_rgb(0_0_0_/_10%)] rounded-b-[0.35714rem] overflow-hidden max-w-[27.14286rem] relative m-auto">
            <div className="__imageRedBorder h-[2.5rem] text-white bg-primary rounded-tl-[0.35714rem] rounded-tr-[0.35714rem]">
              <span className="absolute left-[1rem] text-[35px]">
                <BsThreeDotsIcon />
              </span>
            </div>
            <img
              src="/images/project/project-10/page-builder-3.png"
              alt="image"
              height={'100%'}
              width={'100%'}
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default PageBuilderImages;
