import dynamic from "next/dynamic";
import { Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  array: any;
  uniqueId: string;
  setControlledSwiper4: any;
  isRightSide?: boolean;
  progressRef?: any;
};

const AllCaseStudies = dynamic(
  () => import("../AllCaseStudies/AllCaseStudies")
);

const DownSliderCom = ({
  array,
  setControlledSwiper4,
  uniqueId,
  isRightSide,
  progressRef,
}: Props) => {
  return (
    <div
      className={`hidden md:w-[50%] w-full desktop:h-[calc(15rem+9.09722vw)] lg:h-[24.28571rem] bg-redblack absolute ${
        isRightSide ? "right-0" : "left-0"
      } 
   
      lg:-bottom-[13%] xl:-bottom-[11%] 2xl:-bottom-[10%]
      md:pr-[70px] pl-6 lg:flex items-end md:pb-[15px]`}
    >
      <div className="flex justify-between items-center w-full relative">
        <div
          className={`flex h-[40px] overflow-hidden items-center justify-center gap-5  text-white font-medium ${
            !isRightSide && "md:ml-[40px]"
          }`}
        >
          <div className="aspect-square w-[20px] translate-x-1.5 overflow-hidden rotate-90 text-white flex items-center justify-center pointer-events-none">
            <Swiper
              modules={[Controller]}
              loop
              onSwiper={setControlledSwiper4}
              slidesPerView={1}
            >
              {array.map(({}, i: any) => {
                return (
                  <SwiperSlide key={"sdsafd_" + i}>
                    <div className=" overflow-hidden flex items-center justify-center text-[14px]">
                      <span className="-rotate-90 py-[10px] text-[14px]">
                        {i < 9 ? `0${i + 1}` : i + 1}
                      </span>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <span
            className={`inline-block w-24 h-[2px] bg-black rounded-full relative overflow-hidden`}
          >
            <span
              id={uniqueId ? uniqueId : ""}
              className="absolute inline-block top-0 left-0 h-full bg-white duration-[6s] _heroDownSliderProgressBarAnimation"
              ref={progressRef}
            ></span>
          </span>

          <span className="text-[14px]">
            {array.length < 9 ? `0${array.length}` : array.length}
          </span>
        </div>

        <AllCaseStudies />
      </div>
    </div>
  );
};

export default DownSliderCom;
