/* eslint-disable @next/next/no-img-element */
import BiPlayIcon from 'src/icons/BiPlayIcon';

const RightHq = ({ handleOpenVideo, ref }: any) => {
  return (
    <div
      className="h-full relative z-10 w-full lg:block hidden"
      role="button"
      onClick={() => handleOpenVideo()}
      ref={ref}
    >
      <div className="absolute top-[25%] left-[50%] lg:top-[33%] lg:left-[40%] xl:top-[25%] xl:left-[45%]">
        <div className="flex group item-center justify-center">
          <div className="bg-white md:w-[70px] w-[4.28571rem] md:h-[70px] h-[4.28571rem] flex items-center justify-center">
            <img
              src="/imgs/logos/new/white-bg-logo.svg"
              alt="logo"
              className="w-full h-full "
            />
          </div>
          <div className="flex items-center justify-center ml-5">
            <div>
              <p className="leading-7 font-semibold text-white group-hover:text-white/70 duration-300 ease-in-out text-start text-[1.14286rem]">
                Take a look
              </p>
              <p className="leading-5 text-white text-start group-hover:text-white/70 duration-300 ease-in-out">
                UX/UI Showreel 2022
              </p>
            </div>
            <span className="text-3xl ml-5 text-white group-hover:text-white/70 duration-300 ease-in-out">
              <BiPlayIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightHq;
