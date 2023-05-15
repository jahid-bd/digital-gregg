import useClickOutside from '@hooks/useClickOutside';
import VideoCloseButton from '@views/Home/WhoWeAreSection/VideoCloseButton';
import classNames from 'classnames';
import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import BiVideoPlayIcon from 'src/icons/BiVideoPlayIcon';
import BsThreeDotsIcon from 'src/icons/BsThreeDotsIcon';

interface Props {
  data: any;
  isVimeoSrc?: boolean;
}

const VideoContainer = ({ data, isVimeoSrc }: Props) => {
  // States
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [isPlay, setIsPlay] = useState<boolean>(false);

  // Refs
  const videoModal = useRef<HTMLVideoElement>(null!);
  const ditectOutside = useRef(null);

  // Use Effects
  useEffect(() => {
    isVideoModalOpen
      ? document.querySelector('body')?.classList.add('overflow-hidden')
      : document.querySelector('body')?.classList.remove('overflow-hidden');
  }, [isVideoModalOpen]);

  // Normal Functions
  const handleOpenVideo = () => {
    setIsVideoModalOpen(true);

    if (isVimeoSrc) {
      setIsPlay(true);
    } else {
      videoModal.current.play();
    }
  };
  const handleCloseVideo = () => {
    setIsVideoModalOpen(false);

    if (isVimeoSrc) {
      setIsPlay(false);
    } else {
      videoModal.current.pause();
    }
  };
  const handleVideoMuteUnMute = () => {
    setIsVideoMuted((prev) => !prev);
    if (!isVimeoSrc) {
      videoModal.current.muted
        ? (videoModal.current.muted = false)
        : (videoModal.current.muted = true);
    }
  };

  //Hooks
  useClickOutside(ditectOutside, () => {
    handleCloseVideo();
  });

  useEffect(() => {
    window.requestAnimationFrame(() => {
      const ProjectVideoTl = gsap.timeline({
        scrollTrigger: {
          trigger: '._projectVideoTrigger',
          start: '`top 100%',
          scrub: 0.9,
        },
      });
      ProjectVideoTl.to(
        '._projectVideo',
        {
          y: -150,
          duration: 0.8,
          ease: 'none',
        },
        'start'
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="bg-[#F5F5F5] lg:p-[5rem_7rem] _projectVideoTrigger">
        <div className="overflow-hidden hidden lg:block rounded-[0.35714rem] !relative top-32 mt-5 h-full _projectVideo shadow-[0_0_26px_0_rgb(0_0_0_/_20%)] w-[50vw] mx-auto">
          <div className="__imageRedBorder h-[2.5rem] text-white bg-primary rounded-tl-[0.35714rem] rounded-tr-[0.35714rem]">
            <span className="absolute left-[1rem] text-[35px]">
              <BsThreeDotsIcon />
            </span>
          </div>
          <div className="relative">
            <img
              src={data?.videoThumbnail}
              alt="image background"
              width={'100%'}
              height={'100%'}
            />

            <div
              onClick={handleOpenVideo}
              className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black/50 cursor-pointer"
              ref={ditectOutside}
            >
              <div className="p-2 text-6xl text-white border border-white cursor-pointer">
                <BiVideoPlayIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden h-full lg:hidden block shadow-[0_0_26px_0_rgb(0_0_0_/_20%)]">
          <div className="hidden w-full h-[35px] pl-3 text-3xl text-white bg-primary lg:block">
            <BsThreeDotsIcon />
          </div>

          <div className="relative">
            <img
              src={data?.videoThumbnail}
              alt="image background"
              width={'100%'}
              height={'100%'}
            />

            <div
              onClick={handleOpenVideo}
              className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black/50 cursor-pointer"
            >
              <div className="p-2 text-6xl text-white border border-white cursor-pointer">
                <BiVideoPlayIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal */}
      <div
        className={classNames(
          'fixed h-full w-full top-0 left-0 bg-white/30 backdrop-blur-lg  z-[999]',
          !isVideoModalOpen &&
            'pointer-events-none duration-150 delay-150 opacity-0'
        )}
      >
        <div className="absolute top-0 left-0 right-0 w-full flex justify-between">
          <div className="h-[70px] relative z-[999] aspect-square flex items-center justify-center">
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
            ref={ditectOutside}
          />
        </div>
        <div ref={ditectOutside}>
          <div>
            {isVimeoSrc ? (
              <div className="h-full lg:w-[70%] w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <ReactPlayer
                  className="h-full lg:w-[70%] w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  url={data?.videoSrc}
                  controls={false}
                  // config={{ vimeo: { playerOptions: { background: true } } }}
                  width={'100%'}
                  height={'90%'}
                  volume={isVideoMuted ? 0 : 1}
                  playing={isPlay}
                  loop={true}
                />
              </div>
            ) : (
              <video
                ref={videoModal}
                className={classNames(
                  'h-[90%] lg:w-[70%] w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                )}
              >
                <source src={data?.videoSrc} />
              </video>
            )}
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
              className={classNames(isVideoMuted ? 'opacity-100' : 'opacity-0')}
            />
            <Image
              src={'/imgs/video_unmute.gif'}
              layout="fill"
              priority
              draggable={false}
              alt="video unmute"
              className={classNames(isVideoMuted ? 'opacity-0' : 'opacity-100')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
