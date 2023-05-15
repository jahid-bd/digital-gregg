import Image from "next/image";
import Link from "next/link";
import { MutableRefObject, useCallback, useRef, useState } from "react";
import { ecomSliderData } from "src/constant";
import { Autoplay, Controller, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import useSliderAutoplay from "@hooks/useSliderAutoplay";
import useWindowDimensions from "@hooks/useWindowDimensions";
import { useHeroSliderInit } from "@state/index";
import ArrowNav from "@views/WhatWeDo/SliderPartials/ArrowNav";
import DownSliderCom from "@views/WhatWeDo/SliderPartials/DownSliderCom/DownSliderCom";
import DownSliderMobCom from "@views/WhatWeDo/SliderPartials/DownSliderMobCom/DownSliderMobCom";
import NumberSlider from "@views/WhatWeDo/SliderPartials/NumberSlider";
import SmallerImageSlider from "@views/WhatWeDo/SliderPartials/SmallerImageSlider";
import TextSlider from "@views/WhatWeDo/SliderPartials/TextSlider/TextSlider";
import { HeroSliderProps } from "src/types";
import { Swiper, SwiperSlide } from "swiper/react";
import LazyLoad from "react-lazy-load";

const MultipleSwiperSliderSync = ({
  uniqueIdDesk,
  uniqueIdMob,
  isDesktop,
}: HeroSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [controlledSwiper, setControlledSwiper] =
    useState<React.SetStateAction<null | any>>(null);
  const [controlledSwiper2, setControlledSwiper2] =
    useState<React.SetStateAction<null | any>>(null);
  const [controlledSwiper3, setControlledSwiper3] =
    useState<React.SetStateAction<null | any>>(null);
  const [controlledSwiper4, setControlledSwiper4] =
    useState<React.SetStateAction<null | any>>(null);
  const [controlledSwiper5, setControlledSwiper5] =
    useState<React.SetStateAction<null | any>>(null);

  const sliderRef = useRef<any>(null);
  const progressRef = useRef<any>(null);
  const { width }: any = useWindowDimensions();

  const mobileProgressRef04 = useRef<any>(null);
  const mobileProgressRef05 = useRef<any>(null);

  const { pauseAutoplay, resumeAutoplay, resetDelayTimer } =
    useSliderAutoplay(sliderRef);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    // @ts-ignore
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    // @ts-ignore
    sliderRef.current.swiper.slideNext();
  }, []);

  const navigationNextElement = useRef<MutableRefObject<any>>(null);

  // Jotai State
  const [heroSliderInit, setHeroSliderInit] = useHeroSliderInit();

  const hasC =
    controlledSwiper &&
    controlledSwiper2 &&
    controlledSwiper3 &&
    controlledSwiper4 &&
    controlledSwiper5;

  return (
    <div id="ecommerce" className="h-screen lg:h-[600px] 2xl:h-[700px]">
      <div
        className="space-y-5 relative z-[3] group h-full"
        onMouseEnter={() => {
          if (width >= 1024) {
            pauseAutoplay();
            // sliderRef.current.swiper.autoplay.pause();
            progressRef.current.style.animationPlayState = "paused";

            isDesktop
              ? (mobileProgressRef04.current.style.animationPlayState =
                  "paused")
              : (mobileProgressRef05.current.style.animationPlayState =
                  "paused");
          }
        }}
        onMouseLeave={() => {
          if (width >= 1024) {
            // sliderRef.current.swiper.autoplay.run();
            resumeAutoplay();
            progressRef.current.style.animationPlayState = "running";

            isDesktop
              ? (mobileProgressRef04.current.style.animationPlayState =
                  "running")
              : (mobileProgressRef05.current.style.animationPlayState =
                  "running");
          }
        }}
      >
        <div className="h-full w-full rotate-180">
          <div className="w-full h-full -rotate-180">
            <Swiper
              // @ts-ignore
              ref={sliderRef}
              modules={[Controller, Navigation, Autoplay]}
              controller={
                hasC
                  ? {
                      control: [
                        controlledSwiper,
                        controlledSwiper2,
                        controlledSwiper3,
                        controlledSwiper4,
                        controlledSwiper5,
                      ],
                      by: "container",
                    }
                  : undefined
              }
              slidesPerView={1}
              loop
              slideToClickedSlide={true}
              // autoplay={{
              //   delay: 6000,
              //   disableOnInteraction: false,
              // }}
              autoplay={false}
              className="w-full h-full"
              onInit={(swiper: any) => {
                swiper.params.navigation.nextEl = "#smallImageSlider";
                swiper.navigation.init();
                swiper.navigation.update();
                setHeroSliderInit(true);
              }}
              onSlideChange={() => {
                resetDelayTimer();
                // @ts-ignore
                setActiveIndex(sliderRef?.current?.swiper?.activeIndex);
                document
                  .getElementById(uniqueIdDesk)
                  ?.classList.remove("_heroDownSliderProgressBarAnimation");
                document
                  .getElementById(uniqueIdMob)
                  ?.classList.remove("_heroDownSliderProgressBarAnimation");
                setTimeout(() => {
                  document
                    .getElementById(uniqueIdDesk)
                    ?.classList.add("_heroDownSliderProgressBarAnimation");
                }, 1);
                setTimeout(() => {
                  document
                    .getElementById(uniqueIdMob)
                    ?.classList.add("_heroDownSliderProgressBarAnimation");
                }, 1);

                window.addEventListener("blur", () => {
                  document
                    .getElementById(uniqueIdDesk)
                    ?.classList.remove("_heroDownSliderProgressBarAnimation");
                });
                window.addEventListener("focus", () => {
                  setTimeout(() => {
                    document
                      .getElementById(uniqueIdDesk)
                      ?.classList.add("_heroDownSliderProgressBarAnimation");
                  }, 1);
                });
              }}
            >
              {ecomSliderData.map(
                ({ imageUrl, linkUrl, imageTitle, videoSrc, id }, i) => {
                  return (
                    <SwiperSlide key={"dgdfgsdv_" + i}>
                      <Link href={linkUrl}>
                        <a
                          href="#"
                          className="inline-block h-full w-full relative slider-overlay"
                          aria-label="case study page"
                        >
                          {videoSrc ? (
                            <>
                              <LazyLoad className="h-full w-full object-cover">
                                <video
                                  className="h-full w-full hidden lg:block object-cover"
                                  autoPlay
                                  muted
                                  loop={true}
                                  key={id}
                                  playsInline
                                  poster={imageUrl}
                                >
                                  <source src={videoSrc} />
                                </video>
                              </LazyLoad>
                              <div className="block lg:hidden">
                                <Image
                                  src={imageUrl}
                                  className="object-cover object-top  group-hover:scale-125 duration-[400ms] ease-in-out w-full h-full"
                                  layout="fill"
                                  alt={imageTitle}
                                  priority
                                />
                              </div>
                            </>
                          ) : (
                            <Image
                              src={imageUrl}
                              className="object-cover object-top  group-hover:scale-125 duration-[400ms] ease-in-out w-full h-full"
                              layout="fill"
                              alt={imageTitle}
                              priority
                            />
                          )}
                        </a>
                      </Link>
                    </SwiperSlide>
                  );
                }
              )}
            </Swiper>
            <TextSlider
              setControlledSwiper3={setControlledSwiper3}
              array={ecomSliderData}
            />
          </div>
        </div>
        <NumberSlider
          setControlledSwiper={setControlledSwiper}
          array={ecomSliderData}
        />

        <SmallerImageSlider
          ref={navigationNextElement}
          setControlledSwiper2={setControlledSwiper2}
          array={ecomSliderData}
        />

        <DownSliderMobCom
          setControlledSwiper4={setControlledSwiper5}
          uniqueId={uniqueIdMob}
          array={ecomSliderData}
          progressRef={isDesktop ? mobileProgressRef04 : mobileProgressRef05}
        />

        <ArrowNav
          id={"ecomArrowNav"}
          lastIndex={2}
          activeIndex={activeIndex}
          handlePrev={handlePrev}
          handleNext={handleNext}
          setControlledSwiper2={setControlledSwiper2}
        />
      </div>
      <DownSliderCom
        setControlledSwiper4={setControlledSwiper4}
        array={ecomSliderData}
        uniqueId={uniqueIdDesk}
        progressRef={progressRef}
      />
    </div>
  );
};

export default MultipleSwiperSliderSync;
