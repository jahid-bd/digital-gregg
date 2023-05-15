import Link from "next/link";
import { TextSliderProps } from "src/types";
import { Controller, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function TextSlider({ setControlledSwiper3, array }: TextSliderProps) {
  return (
    <div className="max-w-[50%] group-hover:translate-x-8 duration-500 ml-12 md:ml-[45px]  absolute left-0 bottom-[14%] md:bottom-[18%] lg:bottom-[11%] z-[3] text-white inline-flex items-center justify-center pointer-events-none">
      <Swiper
        modules={[Controller, EffectFade]}
        loop
        onSwiper={setControlledSwiper3}
        className="mySwiper"
        fadeEffect={{
          crossFade: true,
        }}
        effect={"fade"}
        enabled={false}
      >
        {array.map(({ imageTitle, imageDesc, linkUrl }: any, i: any) => {
          return (
            <SwiperSlide key={"njdtsjhragf_" + i}>
              <div>
                <p className="uppercase whitespace-pre font-primary text-[.92857rem] font-[400] flex items-center gap-[1.35714rem] leading-5 tracking-[.13286rem] ">
                  <span className="inline-block w-[1.5rem] bg-white h-[2px]"></span>
                  latest project
                </p>
                <h3 className="text-[1.57143rem] md:text-[1.85714rem] font-bold md:leading-[1.23077em] leading-[1.22727em] font-primary mt-[1.42857rem] mb-[0.35714rem] line-clamp-1">
                  {imageTitle}
                </h3>
                <p className="text-[1.57143rem] leading-[1.22727em]  font-light line-clamp-1 mb-[1.42857rem]">
                  {imageDesc}
                </p>

                <Link href={linkUrl} passHref>
                  <a
                    href="#"
                    aria-label="case study page"
                    className="text-[.92857rem] before:h-[3rem] font-bold bg-transparent inline-block text-white explore-hover relative before:absolute before:content-[''] before:left-[-20px] before:right-[-5.71429rem] before:top-[-12px] before:bottom-[-20px] after:absolute after:content-[''] after:left-[100%] after:top-[calc(50%+4px)] after:h-[2px] after:bg-white after:w-[2.85714rem]"
                  >
                    Explore
                  </a>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default TextSlider;
