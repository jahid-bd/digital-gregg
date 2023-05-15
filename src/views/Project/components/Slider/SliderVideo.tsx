const SliderVideo = ({ videoSrc, isActive }: any) => {
  return (
    <div className="lg:max-w-[50vw] max-w-[27.14286rem] mx-auto">
      <div className=" relative shadow-[0_0_26px_0_rgb(0_0_0_/_10%)]">
        <div className="__imageRedBorder absolute top-0 left-0 right-0 bg-primary h-[2.5rem] z-[1] mx-auto rounded-t-[0.42857rem]">
          <div className="left-[1rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
          <div className="left-[1.8rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
          <div className="left-[2.6rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
        </div>
        <video
          className="pt-[2.4rem] mx-auto lg:w-[50vw] w-[27.14286rem]"
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

export default SliderVideo;
