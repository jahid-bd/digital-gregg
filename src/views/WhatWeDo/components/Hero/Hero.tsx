import More from '@components/More/More';
import gsap, { Power2 } from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import { useEffect, useRef, useState } from 'react';
import { whatWeDoHeroDatas } from 'src/constant';
import Typewriter from 'typewriter-effect';
gsap.registerPlugin(ScrollToPlugin);

function Hero() {
  const tl = gsap.timeline({
    defaults: { duration: 1 },
  });
  const tl1 = gsap.timeline({
    defaults: { duration: 1 },
  });
  const tl2 = gsap.timeline({
    defaults: { duration: 1 },
  });
  const tl3 = gsap.timeline({
    defaults: { duration: 1 },
  });

  const [isTypeWritterPlay, setIsTypeWritterPlay] = useState(false);
  const whatWeDoStatus = useRef(null);
  const whatWeDoVideo = useRef(null);
  const heroWhatWeDo = useRef(null);
  const whatWeDoDec = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsTypeWritterPlay(true);
    }, 1100);
  }, []);

  useEffect(() => {
    tl.to(whatWeDoStatus.current, {
      ease: Power2.easeOut,
      delay: 0.2,
      width: '100%',
      duration: 1.5,
    });
    tl1.to(whatWeDoVideo.current, {
      ease: Power2.easeOut,
      delay: 0.2,
      'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      duration: 1.5,
    });
    tl2.to(heroWhatWeDo.current, { x: 0, opacity: 1, delay: 0.2 }, 'start');
    tl3.to(whatWeDoDec.current, { y: 0, opacity: 1, delay: 0.2 }, 'start');
  }, []);

  const handleScroll = (id: number) => {
    if (id === 1) {
      gsap.to(window, {
        duration: 0,
        scrollTo: { y: '#website_desktop', offsetY: 30 },
      });
    }
    if (id === 2) {
      gsap.to(window, {
        duration: 0,
        scrollTo: { y: '#desktop_apps', offsetY: 30 },
      });
    }
    if (id === 3) {
      gsap.to(window, {
        duration: 0,
        scrollTo: { y: '#desktop_ecom', offsetY: 30 },
      });
    }
    if (id === 4) {
      gsap.to(window, {
        duration: 0,
        scrollTo: { y: '#desktop_strategy', offsetY: 30 },
      });
    }
  };

  return (
    <section className="relative lg:h-[1140px]">
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <div
          className="absolute left-0 top-0 h-full bg-primary"
          ref={whatWeDoStatus}
        ></div>
      </div>

      {/* more */}
      <More />

      <div className="mt-0 lg:h-full pt-[110px] lg:p-[70px] grid grid-cols-1 lg:grid-cols-[40%,60%]">
        <div className="flex items-center px-10 lg:pr-0 lg:pl-[50px]">
          <div className="space-y-14">
            <div
              ref={heroWhatWeDo}
              className="flex items-center gap-[20px] -translate-x-6 opacity-0"
            >
              <div className="w-6 h-0.5 bg-primary"></div>
              <h4 className="text-[#131313] font-semibold text-[.92857rem] tracking-[.13286rem]">
                SERVICES
              </h4>
            </div>

            <div ref={whatWeDoDec} className="opacity-0 translate-y-6">
              <div className="leading-[1.22222em] md:text-[2.57143rem] text-[30px] lg:text-[1.71429rem] xl:text-[2.57143rem] text-[#131313] font-light  lg:mt-[3.57143rem] lg:mb-[5.5rem]">
                <div className="flex gap-3">
                  <strong className="font-bold">
                    <Typewriter
                      options={{
                        strings: [
                          "Designing",
                          "Developing",
                          "Improving",
                          "Executing",
                          "Pioneering",
                        ],
                        autoStart: isTypeWritterPlay,
                        deleteSpeed: 30,
                        delay: 70,
                        loop: true,
                        cursor: "",
                      }}
                    />
                  </strong>
                </div>{" "}
                digital experiences.
              </div>

              <div className="text-[#4a4a4a] leading-[1.42857em] text-[14px] lg:max-w-[17rem] xl:max-w-[25rem] desktop:max-w-[19.5rem] 2xl:max-w-[23.5rem] 3xl:max-w-[33rem] space-y-6 md:space-y-[20px] lg:mt-10 mt-[5.7rem] mb-[3.57143rem]">
                <p>
                  Crating <strong> conversion-focused campaigns </strong> that
                  engage your ideal audience and sky-rocket brand awareness.
                </p>
                <p className="">
                  Using a <strong> data-driven approach </strong> puts the
                  decision-making process of the user at the center of every
                  solution.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={whatWeDoVideo}
          className="h-full w-full pl-0 relative hidden lg:block whatWeDoVideo -rotate-180"
        >
          <div className="lg:block hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/images/what_we_do/Whatwedo-background.webp"
              className="w-full absolute top-0 left-0 h-full object-cover rotate-180"
            >
              <source
                src="/videos/what_we_do_heroBanner.webm"
                type="video/webm"
              />
            </video>
          </div>

          <div className="absolute top-0 left-0 h-full group-hover:w-14 w-full pl-40 flex items-center rotate-180">
            <ul className="space-y-32">
              {whatWeDoHeroDatas.map((item: any) => (
                <li
                  key={item.number}
                  className="group transition-all duration-[350ms] ease-in-out cursor-pointer"
                >
                  <div onClick={() => handleScroll(item.id)}>
                    <div className="flex items-center gap-0 w-full">
                      <p className="text-[4.28571rem] leading-[1] text-white font-bold group-hover:scale-[1.8] transition-all duration-[350ms] origin-right ease-in-out mr-[2.85714rem]">
                        {item.number}
                      </p>

                      <div className="flex flex-col group-hover:scale-[1.6] transition-all duration-[350ms] ease-in-out origin-left">
                        <p className="leading-[1.22727em] text-[1.28571rem] font-light text-white m-[0_0_5px]">
                          {item.title}
                        </p>
                        <div className="flex items-center gap-5">
                          <strong className="font-bold text-white text-[.92857rem] leading-5">
                            Discover more
                          </strong>
                          <p className="h-[2px] bg-white w-12 group-hover:w-14 translate-y-1"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
