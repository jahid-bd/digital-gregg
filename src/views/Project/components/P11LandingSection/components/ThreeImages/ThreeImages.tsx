/* eslint-disable @next/next/no-img-element */
import { useLayoutEffect } from "react";
import gsap from "gsap";

const ThreeImages = () => {

  useLayoutEffect(() => {
    window.requestAnimationFrame(() => {
      const ProjectImgTl = gsap.timeline({
        scrollTrigger: {
          trigger: `._project11ImageTriggerThree`,
          start: "`top 100%",
          scrub: 0.9,
        },
      });
      ProjectImgTl.to(
        `._project11ImageThree`,
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

        <div className="min-h-[80vw] _project11ImageTriggerThree">
          <div className="lg:max-w-[50vw] max-w-[27.14286rem] _project11ImageThree mx-auto">
            <div className="relative top-20">
              <figure className="">
                <img
                  src="/images/project/project-11/typography.png"
                  alt="project image"
                  className="block w-full"
                />
                <img
                  src="/images/project/project-11/colors.png"
                  alt="project image"
                  className="block w-full mt-[100px]"
                />
                <img
                  src="/images/project/project-11/status-colors.png"
                  alt="project image"
                  className="block w-full mt-[100px]"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden block bg-[#F5F5F5] py-[3.92857rem] md:px-20 px-10 mb-[3.92857rem] rounded-md ">
        <div className="w-[27.14286rem] mx-auto">
          <div className="relative">
            <figure className="">
              <img
                src="/images/project/project-11/typography.png"
                alt="project image"
                className="block w-full"
              />
              <img
                src="/images/project/project-11/colors.png"
                alt="project image"
                className="block w-full mt-[100px]"
              />
              <img
                src="/images/project/project-11/status-colors.png"
                alt="project image"
                className="block w-full mt-[100px]"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeImages;