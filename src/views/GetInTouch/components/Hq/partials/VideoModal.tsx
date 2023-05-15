/* eslint-disable @next/next/no-img-element */
import Vimeo from '@u-wave/react-vimeo';
import VideoCloseButton from '@views/Home/WhoWeAreSection/VideoCloseButton';
import classNames from 'classnames';
import Image from 'next/image';

type Props = {
  videoModal: any;
  handleCloseVideo: any;
  handleVideoMuteUnMute: any;
  isVideoMuted: any;
  isPlay?: any;
  isVideoModalOpen: boolean;
  ref: any;
};

const VideoModal = ({
  isVideoModalOpen,
  handleCloseVideo,
  handleVideoMuteUnMute,
  isVideoMuted,
  isPlay,
  ref,
}: Props) => {
  return (
    <div
      className={classNames(
        "fixed h-full w-full top-0 left-0 bg-white/30 backdrop-blur-lg z-[998]",
        !isVideoModalOpen &&
          "opacity-0 pointer-events-none duration-150 delay-150"
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
          ref={ref}
        />
      </div>

      <div ref={ref}>
        <div>
          {/* <video
            ref={videoModal}
            className={classNames(
              'h-full w-[70%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            )}
          >
            <source src="/videos/blank_space.mp4" />
          </video> */}

          <div className="lg:w-[70%] w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Vimeo
              id="contact"
              className=""
              video="789338521"
              controls={false}
              volume={isVideoMuted ? 0 : 1}
              responsive={true}
              width={"100%"}
              height={"100%"}
              loop={true}
              paused={!isPlay}
            />
          </div>
        </div>

        <div
          onClick={handleVideoMuteUnMute}
          className="absolute lg:top-1/2 lg:-translate-y-1/2 right-0 bottom-0 videoMuteUnmute cursor-pointer w-[70px] h-[70px]"
        >
          <Image
            src={"/imgs/video_mute.gif"}
            layout="fill"
            priority
            draggable={false}
            className={classNames(isVideoMuted ? 'opacity-100' : 'opacity-0')}
            alt="video mute"
          />
          <Image
            src={"/imgs/video_unmute.gif"}
            layout="fill"
            priority
            draggable={false}
            className={classNames(isVideoMuted ? 'opacity-0' : 'opacity-100')}
            alt="video unmute"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
