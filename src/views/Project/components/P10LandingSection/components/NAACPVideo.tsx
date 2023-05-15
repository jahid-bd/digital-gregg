import React from 'react';

const NAACPVideo = ({ videoSrc, isActive }: any) => {
  return (
    <div className="lg:max-w-[50vw] max-w-[27.14286rem] mx-auto">
      <div className=" relative shadow-[0_0_26px_0_rgb(0_0_0_/_10%)]">
        <video
          className="mx-auto lg:w-[50vw] w-[27.14286rem]"
          autoPlay
          playsInline
          muted
          loop={true}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default NAACPVideo;