import { HeroDownSliderProps } from "src/types";
import { Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function DownS({ setControlledSwiper4, array }: HeroDownSliderProps) {
  return (
    <div className="aspect-square w-[20px] translate-x-1.5 overflow-hidden rotate-90 text-white flex items-center justify-center pointer-events-none">
      <Swiper
        modules={[Controller]}
        loop
        onSwiper={setControlledSwiper4}
        slidesPerView={1}
      >
        {array.map(({}, i: any) => {
          return (
            <SwiperSlide key={"sadhsd_" + i}>
              <div className=" overflow-hidden flex items-center justify-center text-[14px]">
                <span className="-rotate-90 py-[10px]">
                  {i < 9 ? `0${i + 1}` : i + 1}
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default DownS;
