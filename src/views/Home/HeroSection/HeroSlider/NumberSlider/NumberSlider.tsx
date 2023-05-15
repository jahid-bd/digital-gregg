import React from "react";
import { heroSectionSliderData } from "src/constant";
import { NumberSliderProps } from "src/types";
import { Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function NumberSlider({ setControlledSwiper }: NumberSliderProps) {
  return (
    <div className="_numberSlider hidden translate-x-8 opacity-0 w-[60px] aspect-square overflow-hidden rotate-90 absolute -right-8 top-[30px] z-[3] text-white bg-primary lg:flex items-center justify-center pointer-events-none">
      <Swiper
        modules={[Controller]}
        loop
        onSwiper={setControlledSwiper}
        slidesPerView={1}
      >
        {heroSectionSliderData.map(({}, i) => {
          return (
            <SwiperSlide key={"hsdsah_" + i}>
              <div className="flex justify-center items-center -rotate-90 text-[16px]">
                {i < 9 ? `0${i + 1}` : i + 1}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default NumberSlider;
