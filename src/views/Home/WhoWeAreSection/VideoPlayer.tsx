import { useEffect } from 'react';

const VideoPlayer = ({
  src,
  videoRef,
  isVideoModalOpen,
}: {
  src: string;
  videoRef: any;
  isVideoModalOpen: boolean;
}) => {
  useEffect(() => {
    isVideoModalOpen && videoRef.current.play();
  }, [isVideoModalOpen]);
  return (
    <video ref={videoRef} key={'abcd'}>
      <source src={src} />
    </video>
  );
};

export default VideoPlayer;
