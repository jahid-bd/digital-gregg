/* eslint-disable @next/next/no-img-element */
import BiPlayIcon from 'src/icons/BiPlayIcon';

const RIghtHqMobile = ({ handleOpenVideo, ref }: any) => {
  return (
    <div
      className="h-full relative z-10 w-full"
      role="button"
      onClick={handleOpenVideo}
      ref={ref}
    >
      <div className="absolute top-[40%] xs:left-[6%] sm:left-[35%] left-[20%]">
        <div className="flex group item-center">
          <div className="bg-white w-[70px] h-[70px] flex items-center justify-center">
            <img
              src="/imgs/logos/new/white-bg-logo.svg"
              alt="logo"
              className="w-full h-full "
            />
          </div>
          <div className="flex items-center justify-center ml-5">
            <div>
              <p className="tracking-[0.02em] leading-7 font-semibold text-white group-hover:text-primary duration-300 ease-in-out text-start">
                Take a look
              </p>
              <p className="tracking-[0.02em] group-hover:text-primary duration-300 ease-in-out leading-5 text-white text-start ">
                UX/UI Showreel 2022
              </p>
            </div>
            <span className="text-3xl ml-5 text-white group-hover:text-primary duration-300 ease-in-out">
              <BiPlayIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RIghtHqMobile;
