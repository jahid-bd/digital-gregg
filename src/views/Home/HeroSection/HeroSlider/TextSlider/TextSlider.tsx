import Link from 'next/link';
import { heroSectionSliderData } from 'src/constant';
import { TextSliderProps } from 'src/types';
import { Controller, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function TextSlider({ setControlledSwiper3 }: TextSliderProps) {
  return (
    <div className="max-w-[50%] translate-y-6 opacity-0 _heroTextSlider group-hover:translate-x-[5%] duration-500 ml-12 md:ml-[45px]  absolute left-0 bottom-[6.63rem] lg:bottom-[4.51429rem] z-[3] text-white inline-flex items-center justify-center pointer-events-none">
      <Swiper
        modules={[Controller, EffectFade]}
        loop
        onSwiper={setControlledSwiper3}
        className="mySwiper"
        fadeEffect={{
          crossFade: true,
        }}
        effect={'fade'}
        enabled={false}
      >
        {heroSectionSliderData.map(({ imageTitle, imageDesc, linkUrl }, i) => {
          return (
            <SwiperSlide key={'fbsafnhs_' + i}>
              <div className="lg:group-hover:translate-x-8 duration-500">
                <span className="pl-[2.85714rem] uppercase relative text-[.92857rem] tracking-[.13286rem] text-white pointer-events-none after:bg-white after:left-0 after:absolute after:top-[50%] after:translate-[-50%] after:h-[2px] after:w-[1.5rem] after:content-['']">
                  latest project
                </span>
                <h2 className="text-[1.57143rem] md:text-[1.85714rem] font-bold md:leading-[1.23077em] leading-[1.22727em] font-primary mt-[1.42857rem] mb-[0.35714rem] line-clamp-1 text-white">
                  {imageTitle}
                </h2>
                <p className="text-[1.57143rem] leading-[1.22727em]  font-light line-clamp-1 mb-[1.42857rem] text-white">
                  {imageDesc}
                </p>

                <Link href={linkUrl} passHref prefetch={false}>
                  <a
                    href=""
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
