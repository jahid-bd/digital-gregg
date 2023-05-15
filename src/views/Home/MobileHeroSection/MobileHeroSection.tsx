import classNames from 'classnames';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import { useEffect, useState } from 'react';
import BlackLongLogo from 'src/icons/Logos/BlackLongLogo';
import Typewriter from 'typewriter-effect';
gsap.registerPlugin(ScrollToPlugin);

function MobileHeroSection() {
  const [scrollHeight, setScrollHeight] = useState<any>();

  useEffect(() => {
    setScrollHeight(document.getElementById('HeroSection')?.scrollHeight);
  }, [scrollHeight]);

  return (
    <div className="lg:hidden md:ml-5 h-[100svh]">
      <div className="h-full w-full">
        <section className="px-10 flex items-center h-full relative w-full">
          <div className="-mt-32 landscape:-mt-10 md:space-y-4">
            <div className="flex items-center gap-5 -translate-x-8 opacity-0 _heroWhoWEAreName md:pb-0 pb-3 landscape:hidden">
              <span className="w-[1.5rem] inline-block h-[2px] bg-primary"></span>
              <p className="similiar-text-style text-[#333333] tracking-[0.09em] uppercase">
                WELCOME
              </p>
            </div>

            <div className="_heroLogo -translate-y-8 opacity-0">
              <BlackLongLogo classes='w-[240px] h-[100px]'/>
            </div>
            <p className=" md:leading-[44px]  md:text-[36px] text-[22px] leading-[1.22727em] md:tracking-normal tracking-[-.06714rem] text-[#4A4A4A]  w-full _heroDescText opacity-0 translate-y-8 font-light md:pt-0 pt-[24px] slider:w-[70%]">
              Creating digital experiences where thinking is made visual.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 px-8 pb-6 flex justify-between w-full">
            <div className="w-[80%]">
              <hr className="border-[#BEBEBE] _heroDownHr" />
              <div className="pt-3 space-x-4 whitespace-pre flex flex-col items-start">
                <span className="lg:text-[#808080] text-redblack leading-[20px] text-[14px] text-sm inline-block -translate-x-8 opacity-0 _heroGrid1Text1">
                  Now proudly working with
                </span>
                <div className="font-semibold text-redblack text-[13px] tracking-[.14em] leading-4 inline-block translate-x-8 opacity-0 _heroGrid1Text2">
                  <div className="-translate-x-4">
                    <Typewriter
                      options={{
                        strings: [
                          'Urban One',
                          'Verizon',
                          'Ondemand Advisors',
                          'The North Face ',
                          'iDreamers',
                          'Harlem Capital',
                          'Blakademik',
                          'NAACP',
                          'OpenPhone',
                        ],
                        autoStart: true,
                        deleteSpeed: 30,
                        delay: 70,
                        loop: true,
                        cursor: '',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              onClick={() =>
                gsap.to(window, {
                  duration: 0,
                  scrollTo: { y: '#HeroSlider', offsetY: 0 },
                })
              }
              className={classNames(
                'absolute cursor-pointer bottom-0 right-0 text-red bg-primary h-[13.65rem] flex items-center justify-center w-[70px]',
                '_topMoreButton opacity-0 translate-x-[70px]'
              )}
            >
              <div className="-rotate-90 -translate-y-10 relative">
                <span
                  className={classNames(
                    'inline-block w-[70px] h-[0.15rem] bg-white -translate-x-full absolute top-1/2 -left-[70%]',
                    '_topMoreButtonLine'
                  )}
                ></span>
                <span className="text-white text-[14px] inline-block rotate-180 relative top-[1px]">
                  More
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MobileHeroSection;
