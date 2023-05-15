/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import PlayGroundItem from '@views/Careers/partials/PlayGroundItem';
import gsap, { Power2 } from 'gsap';
import { useEffect } from 'react';
import { playgroundData } from 'src/constant';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const pagination = {
  clickable: true,
  renderBullet: function (index: any, className: any) {
    return `<span class='${className} squish squish_white'></span>`;
  },
};

type Props = {};

const Hero = (props: Props) => {
  const tl = gsap.timeline({
    defaults: { duration: 1.4 },
  });

  useEffect(() => {
    const CareerSectionTl = gsap.timeline({
      scrollTrigger: {
        trigger: '._careerTrigger',
        start: 'top 85%',
      },
      defaults: { duration: 1 },
    });

    const CareerSectionScrubTl = gsap.timeline({
      scrollTrigger: {
        trigger: '._careerTrigger',
        start: '`top 99%',
        scrub: 1,
      },
    });
    CareerSectionScrubTl.to(
      '._careerLeftSide',
      {
        y: 0,
        duration: 0.3,
      },
      'start'
    ).to('._careerRightSide', { y: -150 }, 'start');

    CareerSectionTl.to(
      '._careerTexts',
      {
        x: 0,
        opacity: 1,
      },
      'start'
    );

    tl.to(
      '._careerTopImg',
      {
        ease: Power2.easeOut,
        duration: 1.5,
        delay: 0.3,
        'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      },
      'start'
    );
  }, []);

  return (
    <section className="block xl:mt-[5rem] mt-[2.14286rem] xl:flex xl:items-center">
      <div className="relative xl:order-1 bg-white _careerTopImg xl:flex-1 xl:max-w-[41.66667%] desktop:max-w-[48.15972%] _careerTrigger lg:top-24 xl:top-14 _careerRightSide lg:block hidden">
        <figure className="m-0">
          <img
            src="/images/career/career.jpeg"
            alt="career"
            className="xl:!h-[47.28571rem] w-full max-w-full h-[76vw] object-center object-cover"
          />
        </figure>
      </div>

      <div className="relative xl:order-1 bg-white _careerTopImg xl:flex-1 xl:max-w-[41.66667%] desktop:max-w-[48.15972%] lg:hidden">
        <figure className="m-0">
          <img
            src="/images/career/career.jpeg"
            alt="career image"
            className="xl:h-[47.28571rem] w-full max-w-full h-[76vw] object-center object-cover "
          />
        </figure>
      </div>

      <div className="bg-gradient-to-r from-red-900 to-red-600 overflow-hidden xl:flex-1 relative p-[2.5rem_2.5rem_5rem] z-[2] xl:p-[5rem_10rem_5rem_8.85714rem] xl:max-w-[58.33333%] desktop:max-w-[51.84028%] _careerLeftSide">
        <h4 className="mb-0 inline-block pl-[2.85714rem] uppercase relative text-[0.92857rem] text-white tracking-[0.13286rem] leading-[1.1875em] mt-[1.33em] after:bg-white after:left-0 after:absolute after:top-[50%] after:translate-y-[-50%] after:h-[2px] after:w-[1.5rem] after:content-[''] xl:mb-[16px]">
          About Digital Gregg
        </h4>
        <h2 className="text-white text-[1.57143rem] md:text-[1.85714rem] leading-[1.22727em] md:leading-[1.23077em] my-[0.83em] xl:mb-[2.4rem] desktop:mb-[2.1rem] 2xl:mb-[2.5rem]">
          The ABCs of{' '}
          <strong className="font-bold">
            life at <br className="xs:block hidden sm:hidden" /> Digital Gregg.
          </strong>
        </h2>

        <div className="mt-[4rem] overflow-hidden m-[0_auto] relative li p-0 z-[99] xl:hidden block">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            loop={true}
            pagination={pagination}
          >
            {playgroundData.map((item, index) => (
              <SwiperSlide key={item.id}>
                <PlayGroundItem
                  item={item}
                  key={item.id}
                  last={index === playgroundData.length - 1}
                  hasSlider={true}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden xl:block">
          {playgroundData.map((item, index) => (
            <PlayGroundItem
              item={item}
              key={item.id}
              index={index}
              last={index === playgroundData.length - 1}
            />
          ))}
        </div>

        <div className="mt-[3.5rem] inline-block">
          <Link href="https://team.digitalgregg.com/jobs" passHref>
            <a
              href=""
              target="_blank"
              className="flex gap-4 items-center group relative white-border contact-border duration-300 ease-in-out"
              aria-label="available page link"
            >
              <span className="text-[14px] group-hover:pl-1 duration-300 font-bold font-primary text-white leading-4">
                See available jobs
              </span>
            </a>
          </Link>
        </div>
      </div>

      <div className="xl:h-36"></div>
    </section>
  );
};

export default Hero;
