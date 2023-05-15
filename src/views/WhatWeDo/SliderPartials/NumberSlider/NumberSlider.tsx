import gsap from "gsap";
import { useEffect } from "react";
import { NumberSliderProps } from "src/types";
import { Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function NumberSlider({
  setControlledSwiper,
  array,
  isRightSide,
}: NumberSliderProps) {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "._sliderNumber",
        start: "top 96%",
      },
      // defaults: { duration: 0.8 },
    });
    tl.to("._sliderNumber", { opacity: 1, x: 0, delay: 0.1 }, "start");
  }, []);

  return (
    <div
      className={`w-[60px] hidden aspect-square overflow-hidden rotate-90 absolute ${
        isRightSide ? "-right-3" : "-right-8"
      } top-[80px] z-[3] text-white bg-primary lg:flex items-center justify-center pointer-events-none translate-x-8 opacity-0 _sliderNumber`}
    >
      <Swiper
        modules={[Controller]}
        loop
        onSwiper={setControlledSwiper}
        slidesPerView={1}
      >
        {array.map(({}, i: any) => {
          return (
            <SwiperSlide key={"sdbhsg_" + i}>
              <div className="flex justify-center items-center -rotate-90">
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
