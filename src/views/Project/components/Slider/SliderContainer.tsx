/* eslint-disable @next/next/no-img-element */

const SliderContainer = ({ imgSrc, css }: any) => {
  return (
    <div className={`${css} mx-auto`}>
      <div className="shadow-[0_0_26px_0_rgb(0_0_0_/_10%)] rounded-[0.42857rem] relative">
        <div className="__imageRedBorder absolute top-0 left-0 right-0 bg-primary h-[2.5rem] z-[1] rounded-t-[0.42857rem]">
          <div className="left-[1rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
          <div className="left-[1.8rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
          <div className="left-[2.6rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
        </div>

        <figure className="pt-[2.4rem]">
          <img
            src={imgSrc}
            alt="slider image"
            className="block w-full rounded-b-[0.42857rem]"
          />
        </figure>
      </div>
    </div>
  );
};

export default SliderContainer;
