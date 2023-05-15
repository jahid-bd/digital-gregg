import dynamic from "next/dynamic";

// import Vimeo from '@u-wave/react-vimeo';
const Vimeo = dynamic(() => import("@u-wave/react-vimeo"), {
  ssr: false,
});

const VimeoPlayer = ({
  isVideoMuted,
  isPlay,
  videoId,
}: {
  isVideoMuted: boolean;
  isPlay: boolean;
  videoId: string;
}) => {
  return (
    <Vimeo
      id="wwr"
      className=""
      video={videoId}
      controls={false}
      volume={isVideoMuted ? 0 : 1}
      responsive={true}
      width={'100%'}
      height={'100%'}
      loop={true}
      paused={!isPlay}
    />
  );
};

export default VimeoPlayer;
