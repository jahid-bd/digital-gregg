const ImageContainer = ({ src, isBorder }: any) => {
  return (
    <div className="shadow-[0_0_26px_0_rgb(0_0_0_/_10%)] rounded-[0.42857rem] relative">
      {isBorder ? (
        <div className="__imageRedBorder absolute top-[-2.4rem] left-0 right-0 bg-primary h-[2.5rem] z-[1] rounded-t-[0.42857rem]">
          <div className="left-[1rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
          <div className="left-[1.8rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
          <div className="left-[2.6rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
        </div>
      ) : null}

      <figure className="m-0 relative">
        <img src={src} alt="image" className="w-full block max-w-full h-auto" />
      </figure>
    </div>
  );
};

export default ImageContainer;
