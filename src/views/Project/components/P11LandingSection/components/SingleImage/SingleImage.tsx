import { useLayoutEffect } from 'react';
import gsap from 'gsap';

const SingleImage = ({ imgSrc, id, bgCss }: any) => {

  useLayoutEffect(() => {
    window.requestAnimationFrame(() => {
      const ProjectImgTl = gsap.timeline({
        scrollTrigger: {
          trigger: `._project11ImageTrigger${id}`,
          start: "`top 100%",
          scrub: 0.9,
        },
      });
      ProjectImgTl.to(
        `._project11Image${id}`,
        {
          y: -200,
          duration: 0.8,
          ease: "none",
        },
        "start"
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="lg:block hidden lg:relative lg:p-[9.14286rem_4.53782%]">
        <div
          className={`h-full w-full absolute top-0 left-0 bg-[#F5F5F5]`}
        ></div>

        <div className={`${bgCss} _project11ImageTrigger${id}`}>
          <div
            className={`lg:max-w-[50vw] max-w-[27.14286rem] _project11Image${id} mx-auto`}
          >
            <div className="relative top-20">
              <figure>
                <img src={imgSrc} alt="single image" className="block w-full" />
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden block bg-[#F5F5F5] py-[3.92857rem] md:px-20 px-10 mb-[3.92857rem] rounded-md ">
        <div className="w-[27.14286rem] mx-auto">
          <div className="relative">
            <figure>
              <img src={imgSrc} alt="single image" className="block w-full" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleImage;