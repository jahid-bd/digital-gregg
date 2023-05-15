interface Props {
  videoId: string;
  size: string;
}

const SliderVideoContainer = ({ videoId, size }: Props) => {
  return (
    <div className="lg:relative">
      <div className="__imageRedBorder absolute top-[-1.9rem] lg:top-0 left-0 right-0 bg-primary md:h-[2.5rem] h-[2rem] z-[1] rounded-t-[0.42857rem] w-[50vw] mx-auto">
        <div className="left-[1rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
        <div className="left-[1.8rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
        <div className="left-[2.6rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
      </div>
      <div
        className={`relative ${size} h-0 overflow-hidden max-w-full xl:mx-[40px] lg:mx-[20px]`}
      >
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?h=4758a02ab0&amp;badge=0&amp;autopause=0&loop=1&autoplay=1&background=1&amp;player_id=0&amp;app_id=58479`}
          allow="autoplay; fullscreen; picture-in-picture"
          className="absolute lg:top-[2.4rem] left-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default SliderVideoContainer;
