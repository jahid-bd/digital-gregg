/* eslint-disable @next/next/no-img-element */
import useClickOutside from '@hooks/useClickOutside';
import VideoCloseButton from '@views/Home/WhoWeAreSection/VideoCloseButton';
import VideoPlayer from '@views/Home/WhoWeAreSection/VideoPlayer';
import classNames from 'classnames';
import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import RIghtHqMobile from '../Hero/partials/RIghtHqMobile';
import LeftHq from './partials/LeftHq';
import RightHq from './partials/RightHq';

type Props = {};

const Hq = (props: Props) => {
  // States
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [isPlay, setIsPlay] = useState<boolean>(false);

  // Refs
  const ditectOutside = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Use Effects
  useEffect(() => {
    isVideoModalOpen
      ? document.querySelector('body')?.classList.add('overflow-hidden')
      : document.querySelector('body')?.classList.remove('overflow-hidden');
  }, [isVideoModalOpen]);

  // Normal Functions
  function handleOpenVideo() {
    setIsVideoModalOpen(true);
    setIsPlay(true);
    videoRef?.current?.play();
  }
  function handleCloseVideo() {
    setIsVideoModalOpen(false);
    setIsPlay(false);
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

  useEffect(() => {
    const workWithUsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '._hqRightVideo',
        start: 'top 80%',
      },
      defaults: { duration: 1.1 },
    });
    workWithUsTimeline.to('._hqRightVideo', {
      opacity: 1,
      x: 0,
    });
  }, []);

  return (
    <section className="w-full relative">
      {/* <div className="py-[70px] bg-[#F5F5F5] lg:block hidden"></div> */}

      <div className="mt-0 lg:h-full pt-[100px] lg:p-[70px] lg:pt-[100px] relative">
        <div className="absolute right-0 w-[50%] -top-[20%] h-[120%] lg:h-full lg:top-0 xl:h-[120%] xl:-top-[20%] hidden lg:block z-10 overflow-hidden">
          <img
            src="/images/home/showreel.jpeg"
            alt="showreel"
            className="w-full h-full overflow-hidden _hqRightVideo opacity-0 translate-x-8 blur-[6px]"
          />
        </div>

        <div className="lg:grid lg:grid-cols-[41%,59%]">
          <LeftHq />
          <RightHq handleOpenVideo={handleOpenVideo} ref={ditectOutside} />

          {/* mobile */}
          <div className="lg:hidden block bg-[url('/images/home/showreel.jpeg')] bg-cover bg-no-repeat bg-center h-[500px]">
            <RIghtHqMobile
              handleOpenVideo={handleOpenVideo}
              ref={ditectOutside}
            />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <div
        className={classNames(
          'fixed h-full w-full top-0 left-0 bg-white/30 backdrop-blur-lg z-[998]',
          !isVideoModalOpen &&
            'pointer-events-none duration-150 delay-150 opacity-0'
        )}
      >
        <div className="absolute top-0 left-0 right-0 w-full flex justify-between z-[9999]">
          <div className="h-[70px] relative z-[9999] aspect-square flex items-center justify-center">
            <img
              src="/imgs/logos/new/logo-red-dot.svg"
              alt="logo svg image"
              width={32}
              height={32}
              className="relative z-[999] w-[32px] md:w-[2.3rem]"
            />
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
              <VideoPlayer
                src="https://res.cloudinary.com/dxzmo42xj/video/upload/v1677349188/digitalgregg_showreel_1440p_fu7m2m.mp4"
                videoRef={videoRef}
                isVideoModalOpen={isVideoModalOpen}
              />
            </div>
          </div>

          <div
            onClick={handleVideoMuteUnMute}
            className="absolute lg:top-1/2 lg:-translate-y-1/2 right-0 bottom-0 videoMuteUnmute cursor-pointer w-[70px] h-[70px]"
          >
            <Image
              src={'/imgs/video_mute.gif'}
              layout="fill"
              priority
              draggable={false}
              alt="video mute"
              className={classNames(isVideoMuted ? "opacity-100" : "opacity-0")}
            />
            <Image
              src={'/imgs/video_unmute.gif'}
              layout="fill"
              priority
              draggable={false}
              alt="video unmute"
              className={classNames(isVideoMuted ? "opacity-0" : "opacity-100")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hq;
