/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import gsap, { Power2 } from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import Image from 'next/image';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Typewriter from 'typewriter-effect';
gsap.registerPlugin(ScrollToPlugin);

export const OnLoadTimeline = gsap
  .timeline({
    defaults: { duration: 1.4 },
  })
  .pause();

function Hero() {
  const tl = gsap.timeline({
    defaults: { duration: 1.4 },
  });
  const tl1 = gsap.timeline({
    defaults: { duration: 1.4 },
  });
  const tl2 = gsap.timeline({
    defaults: { duration: 1.4 },
  });
  const tl3 = gsap.timeline({
    defaults: { duration: 1.4 },
  });

  const [isTypeWritterPlay, setIsTypeWritterPlay] = useState(false);
  const whoWeAreStatus = useRef(null);
  const whoWeAreTopImg = useRef(null);
  const heroWhoWEAre = useRef(null);
  const whoWeAreDec = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsTypeWritterPlay(true);
    }, 1100);
  }, []);

  useLayoutEffect(() => {
    OnLoadTimeline.to(
      '._topMoreButton',
      { opacity: 1, x: 0, delay: 0.2 },
      'start'
    );
    tl2.to(heroWhoWEAre.current, { x: 0, opacity: 1, delay: 0.2 }, 'start');
    tl3.to(whoWeAreDec.current, { y: 0, opacity: 1, delay: 0.2 }, 'start');
    tl.to(whoWeAreStatus.current, {
      ease: Power2.easeOut,
      delay: 0.4,
      width: '100%',
      duration: 1.5,
    });
    tl1.to(whoWeAreTopImg.current, {
      ease: Power2.easeOut,
      delay: 0.4,
      'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      duration: 1.5,
    });
  }, []);

  return (
    <section className="relative">
      <div className="absolute right-0 top-0 w-[50.5%] desktop:w-1/2 h-full hidden lg:block">
        <div
          className="absolute top-0 left-0 h-full bg-primary"
          ref={whoWeAreStatus}
        ></div>
      </div>

      <div
        onClick={() =>
          gsap.to(window, {
            duration: 0,
            scrollTo: { y: '#TopToDown', offsetY: 0 },
          })
        }
        className={classNames(
          'hidden lg:flex absolute cursor-pointer bottom-0 right-0 md:left-0 text-red bg-primary h-[15rem] items-center justify-center w-[5rem]',
          '_topMoreButton'
        )}
      >
        <div className="relative -rotate-90 -translate-y-10">
          <span
            className={classNames(
              'inline-block w-[70px] h-[2px] bg-white -translate-x-full absolute top-1/2 -left-[70%]',
              '_topMoreButtonLine'
            )}
          ></span>
          <span className="text-white font-primary inline-block -ml-[10px]">
            More
          </span>
        </div>
      </div>

      <div className="mt-0 lg:h-screen pt-[100px] lg:p-[70px] grid grid-cols-1 lg:grid-cols-[38.5%,61.5%]">
        <div className="flex items-center px-10 lg:pr-0 lg:pl-[55px]">
          <div className="space-y-12">
            <div
              ref={heroWhoWEAre}
              className="flex items-center mt-3 lg:mt-[10px] gap-5 -translate-x-6 opacity-0"
            >
              <span className="w-[1.5rem] inline-block h-[2px] bg-primary"></span>
              <h4 className="text-[#131313] font-semibold text-[.92857rem] leading-[1.1875em] tracking-[.13286rem]">
                ABOUT
              </h4>
            </div>

            <div ref={whoWeAreDec} className="translate-y-6 opacity-0">
              <div className="leading-[1.22222em] text-[2.57143rem] lg:text-[1.71429rem] xl:text-[2.57143rem] text-[#131313] font-light lg:max-w-[25rem] mt-[3.57143rem] mb-[3.71429rem]">
                <strong className="font-bold">
                  <Typewriter
                    options={{
                      strings: ['Experienced', 'Independent', 'Agile'],
                      autoStart: isTypeWritterPlay,
                      deleteSpeed: 30,
                      delay: 70,
                      loop: true,
                      cursor: '',
                    }}
                  />
                </strong>{' '}
                digital innovators.
              </div>
              <div className="text-[#4a4a4a] pt-[26px] text-[14px] lg:mr-[4.3rem] xl:mr-[2.5rem] desktop:mr-[11rem] space-y-5 hidden lg:block">
                <p>
                  <strong>Creative solutions </strong> designed to improve
                  user&apos;s digital experiences — and making meaningful impact
                  for clients.
                </p>
                <p>
                  A fundamental <strong> love of challenge </strong> defines
                  Digital Gregg.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative pl-0">
          <div
            ref={whoWeAreTopImg}
            className="relative hidden w-full rotate-180 lg:block whoWeAreTopImg "
          >
            <img
              src="/images/who_we_are/who-are-we.webp"
              alt="BG image"
              className="h-[calc(100vh-10rem)] w-full object-cover -rotate-180 object-[50%_50%]"
            />
          </div>

          <div className="bg-primary h-[88.56383vw] landscape:h-[50vw] flex justify-end mt-[62px] lg:hidden ">
            <div className="absolute left-10 bottom-10 w-full h-[88.56383vw] landscape:h-[50vw]">
              <Image
                src="/images/who_we_are/who-are-we.webp"
                alt="BG image"
                layout="fill"
                className="scale-x-125 landscape:scale-x-100 "
              />
            </div>
          </div>

          {/* <div className="bg-primary h-[110vh] relative overflow-hidden">
            <div className="absolute top-0 left-0 flex w-full h-10 bg-white"></div>
            <div className="absolute left-10 bottom-10 w-full h-[100vh]">
              <Image
                src="/images/who_we_are/who-are-we.webp"
                alt=""
                layout="fill"
                className=""
              />
            </div>
          </div> */}
        </div>
      </div>

      <div className="text-[#4a4a4a] lg:hidden leading-5 text-[1rem] lg:text-[14px] lg:max-w-[67%] space-y-5 mt-[65px] lg:mt-16 px-10">
        <p>
          <strong>Creative solutions </strong> designed to improve user&apos;s
          digital experiences — and making meaningful impact for clients.
        </p>
        <p>
          A fundamental <strong> love of challenge </strong> defines Digital
          Gregg.
        </p>
      </div>
    </section>
  );
}

export default Hero;
