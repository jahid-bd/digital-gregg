import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { SmallerImageSliderProps } from "src/types";
import { Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap";
import BsChevronRightIcon from "src/icons/BsChevronRightIcon";

const SmallerImageSlider = React.forwardRef(
  (
    { setControlledSwiper2, array, isRightSide }: SmallerImageSliderProps,
    ref: any
  ) => {
    useEffect(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "._sliderBtn",
          start: "top 96%",
        },
        defaults: { duration: 0.2 },
      });
      tl.to("._sliderBtn", { opacity: 1, x: 0, delay: 0.1 }, "start");
    }, []);

    return (
      <div
        id="smallImageSlider"
        ref={ref}
        className={`overflow-hidden hidden lg:block absolute ${
          isRightSide ? "-right-[1.28rem]" : "-right-11"
        }  w-[30%] h-[17%] xl:w-[25%] xl:h-[25%] -bottom-[-40px] z-[2] group-hero-small-image-slider`}
      >
        <Swiper
          modules={[Controller]}
          loop
          onSwiper={(e) => setControlledSwiper2(e)}
          slidesPerView={1}
          className="h-full w-full pointer-events-none relative opacity-0"
        >
          {array.map(({}, i: any) => {
            const nextContent = i >= array.length - 1 ? array[0] : array[i + 1];
            return (
              <SwiperSlide key={"jdsdgfd_" + i}>
                <Link href={nextContent.linkUrl}>
                  <a
                    href="#"
                    className="inline-block h-full w-full relative"
                    aria-label="slider datas link"
                  >
                    <Image
                      src={nextContent.imageUrl}
                      className="object-cover small-image-hover duration-300 w-full h-full"
                      layout="fill"
                      alt="image"
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

        <button className="bg-primary absolute w-11 small-button-hover flex justify-center items-center top-0 right-0 text-white z-[3] h-full text-2xl duration-300 translate-x-8 opacity-0 _sliderBtn">
          <BsChevronRightIcon />
        </button>
      </div>
    );
  }
);

SmallerImageSlider.displayName = "SmallerImageSlider";

export default SmallerImageSlider;
