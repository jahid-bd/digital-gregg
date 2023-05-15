import Image from "next/image";
import Link from "next/link";
import React from "react";
import { insightsHeroSliderData } from "src/constant";
import BsChevronRightIcon from "src/icons/BsChevronRightIcon";
import { SmallerImageSliderProps } from "src/types";
import { Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const SmallerImageSlider = React.forwardRef(
  ({ setControlledSwiper2 }: SmallerImageSliderProps, ref: any) => {
    return (
      <div
        id="smallImageSlider"
        ref={ref}
        className="overflow-hidden hidden lg:block absolute -right-[22px] 2xl:h-[9.0972vw] 2xl:w-[13.88889vw] w-[210px] h-[132px]  -bottom-[-40px] z-[2] group-hero-small-image-slider opacity-0 translate-x-8 _smallerImageSlider"
      >
        <Swiper
          modules={[Controller]}
          loop
          onSwiper={(e) => setControlledSwiper2(e)}
          slidesPerView={1}
          className="h-full w-full pointer-events-none relative"
        >
          {insightsHeroSliderData.map(({}, i) => {
            const nextContent =
              i >= insightsHeroSliderData.length - 1
                ? insightsHeroSliderData[0]
                : insightsHeroSliderData[i + 1];
            return (
              <SwiperSlide key={"fsaehsdfv_" + i}>
                <Link href={nextContent.linkUrl}>
                  <a
                    href="#"
                    className="inline-block h-full w-full relative "
                    aria-label="insights sliders page"
                  >
                    <Image
                      src={nextContent.smallImgUrl}
                      className="object-cover small-image-hover duration-300 w-full h-full"
                      layout="fill"
                      alt="image"
                      priority
                    />
                  </a>
                </Link>
                <div className="absolute bg-gradient-to-r from-redblack/50 h-full w-full top-0 z-[5] left-0 px-4 py-3.5">
                  <p className="font-primary text-white">Next</p>
                  <h6 className="absolute top-1/2 font-semibold text-base -translate-y-1/2 left-0 px-5 text-white font-primary">
                    {nextContent.imageTitle}
                  </h6>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <button
          className="bg-primary absolute w-[2.7rem] flex justify-center items-center top-0 right-0 text-white z-[3] h-full text-2xl duration-300 transition-[width] small-button-hover"
          aria-label="right cheveeron"
        >
          <BsChevronRightIcon />
        </button>
      </div>
    );
  }
);

SmallerImageSlider.displayName = "SmallerImageSlider";

export default SmallerImageSlider;
