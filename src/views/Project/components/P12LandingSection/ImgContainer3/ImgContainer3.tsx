import gsap from 'gsap';
import React, { useLayoutEffect } from 'react';

interface Props {
  imgUrl: string;
  id: number;
  imgCss?: any;
  mobImgUrl: string;
}
const ImgContainer3: React.FC<Props> = ({ imgUrl, id, imgCss, mobImgUrl }) => {
  useLayoutEffect(() => {
    window.requestAnimationFrame(() => {
      const Project12ImgTl = gsap.timeline({
        scrollTrigger: {
          trigger: `._project12ImageTrigger${id}`,
          start: '`top 100%',
          scrub: 0.9,
        },
      });
      Project12ImgTl.to(
        `._project12Image${id}`,
        {
          y: -150,
          duration: 0.8,
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
          className={`h-[100%] w-full absolute top-0 left-0 bg-[#F5F5F5]`}
        ></div>
        <div
          className={`mb-0 min-h-full flex justify-around _project12ImageTrigger${id}`}
        >
          <div
            className={`${imgCss} min-h-full flex-grow shrink relative max-w-[50vw]`}
          >
            <div className={`min-h-full _project12Image${id}`}>
              <div className="relative">
                <figure className="m-0 relative pt-[2.5rem]">
                  <img
                    src={imgUrl}
                    alt="image"
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
        <div className="bg-[#F5F5F5] py-[3.92857rem] md:px-20 px-10 rounded-md">
          <figure className="max-w-[27.14286rem] relative m-auto">
            <img src={mobImgUrl} alt="image" height={'100%'} width={'100%'} />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ImgContainer3;
