/* eslint-disable @next/next/no-img-element */
import GoMoreLink from '@components/GoMore/GoMoreLink';
import useClickOutside from '@hooks/useClickOutside';
import classNames from 'classnames';
import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import LazyLoad from 'react-lazy-load';
import BiPlayIcon from 'src/icons/BiPlayIcon';
import BlackMainLogo from 'src/icons/Logos/BlackMainLogo';
import WhiteBgLogo from 'src/icons/Logos/WhiteBgLogo';
import VideoCloseButton from './VideoCloseButton';
import VideoPlayer from './VideoPlayer';

function WhoWeAreSection() {
  // States
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  // Refs
  const ditectOutside = useRef(null);
  const videoRef = useRef<any>(null);

  useEffect(() => {
    isVideoModalOpen
      ? document.querySelector('body')?.classList.add('overflow-hidden')
      : document.querySelector('body')?.classList.remove('overflow-hidden');
  }, [isVideoModalOpen]);

  // Normal Functions
  function handleOpenVideo() {
    setIsVideoModalOpen(true);
    // videoRef?.current?.load();
    videoRef?.current?.play();
  }
  function handleCloseVideo() {
    setIsVideoModalOpen(false);
    videoRef?.current?.pause();
  }
  function handleVideoMuteUnMute() {
    setIsVideoMuted((prev) => !prev);
    if (videoRef && videoRef.current) {
      videoRef.current.muted
        ? (videoRef.current.muted = false)
        : (videoRef.current.muted = true);
    }
  }

  //Hooks
  useClickOutside(ditectOutside, () => {
    handleCloseVideo();
  });

  // Gsap Animations
  useEffect(() => {
    const WhoWeAreSectionTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '._whoWeAreTrigger',
        start: 'top 70%',
      },
      defaults: { duration: 1.1 },
    });

    WhoWeAreSectionTimeline.to(
      '._whoWeAreBlackBg',
      { top: -54, left: -54 },
      'start'
    )
      .to('._whoWeAreRedBg', { right: -54, bottom: -54 }, 'start')
      .to('._whoWeAreVideoText', { opacity: 1, x: 0 }, 'start')
      .to('._whoWeAreLeftText', { y: 0, opacity: 1 }, 'start');
  }, []);

  return (
    <>
      <section className="mb-[4rem] lg:mb-[14rem] flex justify-center font-primary _whoWeAreTrigger">
        <div className="inline-grid lg:w-auto w-full grid-cols-1 lg:grid-cols-[350px,450px] xl:grid-cols-[420px,570px] 2xl:grid-cols-[420px,670px] relative">
          <div className="bg-white lg:shadow-[0_8px_18px_rgba(7,2,21,0.11)] lg:px-[60px] px-[35px] pb-[40px] pt-[80px]">
            <div className="space-y-8 -translate-y-4 opacity-0 _whoWeAreLeftText">
              <div className="flex gap-5 items-center">
                <span className="inline-block w-5 h-0.5 bg-redblack"></span>
                <p className="uppercase font-primary font-semibold text-[13px] leading-[20px] tracking-[.13286rem] text-redblack">
                  ABOUT
                </p>
              </div>
              <h3 className="section-sub-title !text-[26px] !leading-9">
                Thinking Made Visual.
              </h3>
              <p className="xl:text-[1.57143rem] text-[1.42857rem] leading-[25px] text-[#5A5A5A] tracking-[0.01em] font-[400] pt-2">
                Every project is a new opportunity to make a positive impact on
                how we interact with the world.
              </p>
            </div>
            <div className="hidden lg:inline-block mt-10">
              <GoMoreLink text="Explore" url="/about" />
            </div>
          </div>

          <div className="aspect-square relative landscape:lg:h-full landscape:lg:w-auto landscape:h-screen landscape:w-full ">
            <LazyLoad>
              <Image
                src="/images/home/showreel.jpeg"
                layout="fill"
                objectFit="cover"
                className="lg:blur-[6px]"
                alt="showreel"
                priority
              />
            </LazyLoad>

            <button
              onClick={handleOpenVideo}
              className="absolute lg:scale-[1.2] top-1/2 left-[50%] pr-3 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              ref={ditectOutside}
            >
              <div className="flex group items-center gap-6 lg:gap-5 opacity-0 -translate-x-1 _whoWeAreVideoText">
                {/* <Image
                  width={60}
                  height={60}
                  src="/imgs/logos/new/white-bg-logo.svg"
                  alt="video logo image"
                  className="w-[60px]"
                /> */}
                <WhiteBgLogo/>
                <div>
                  <p className="tracking-[0.02em] leading-5 font-semibold text-white text-start group-hover:text-white/70 duration-300 ease-in-out">
                    Take a look
                  </p>
                  <p className="text-sm tracking-[0.02em] font-[400] text-[#EEEEEE] whitespace-pre duration-300 group-hover:text-white/70 ease-in-out">
                    UX/UI Showreel 2022
                  </p>
                </div>
                <span className="text-3xl text-white group-hover:text-white/70 duration-300 ease-in-out">
                  <BiPlayIcon />
                </span>
              </div>
            </button>
          </div>

          <div className="hidden lg:block absolute -top-0 -left-0 bg-redblack h-[357px] w-[290px] z-[-1] _whoWeAreBlackBg"></div>
          <div className="hidden lg:block absolute -bottom-0 -right-0 bg-primary h-[357px] w-[290px] z-[-1] _whoWeAreRedBg"></div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen ? (
        <div
          className={classNames(
            "fixed h-full w-full top-0 left-0 bg-white/30 backdrop-blur-lg z-[9999]",
            !isVideoModalOpen &&
              "pointer-events-none duration-150 delay-150 opacity-0"
          )}
        >
          <div className="absolute top-0 left-0 right-0 w-full flex justify-between z-[9999]">
            <div className="h-[70px] relative z-[9999] aspect-square flex items-center justify-center">
              {/* <img
                src="/imgs/logos/new/logo-red-dot.svg"
                alt="logo svg image"
                width={32}
                height={32}
                className="relative z-[999] w-[32px] md:w-[2.3rem]"
              /> */}
              <span className='z-[999]'><BlackMainLogo/></span>
              <div className="absolute inset-0 bg-redblack w-full h-full __logoBg"></div>
            </div>

            <VideoCloseButton
              onClick={handleCloseVideo}
              isVideoModalClose={isVideoModalOpen}
            />
          </div>
          <div ref={ditectOutside}>
            <div>
              <div className="lg:w-[70%] w-[90%] absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] ">
                <LazyLoad>
                  <VideoPlayer
                    isVideoModalOpen={isVideoModalOpen}
                    src={
                      "https://res.cloudinary.com/dxzmo42xj/video/upload/v1677349188/digitalgregg_showreel_1440p_fu7m2m.mp4"
                    }
                    videoRef={videoRef}
                  />
                </LazyLoad>
              </div>
            </div>

            <div
              onClick={handleVideoMuteUnMute}
              className="absolute lg:top-1/2 lg:-translate-y-1/2 right-0 bottom-0 videoMuteUnmute cursor-pointer w-[70px] h-[70px]"
            >
              <Image
                src={`/imgs/${
                  isVideoMuted ? "video_mute.gif" : "video_unmute.gif"
                }`}
                draggable={false}
                alt="video mute"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default WhoWeAreSection;
