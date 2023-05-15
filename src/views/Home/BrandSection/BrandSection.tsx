import gsap from 'gsap';
import Image from 'next/image';
import { useEffect } from 'react';
import LazyLoad from 'react-lazy-load';
import { brandImages } from 'src/constant';

function BrandSection() {
  // Gsap Animations

  useEffect(() => {
    const BrandSectionTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '._brandTrigger',
        start: 'top 75%',
      },
      defaults: { duration: 1.4 },
    });
    if (window.matchMedia('(max-width: 700px)').matches) {
    } else {
      const BrandSectionScrubTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '._brandTrigger',
          start: '`top 75%',
          scrub: 0.5,
        },
      });
      BrandSectionScrubTimeline.to('._brandRightSide', {
        y: 50,
        duration: 0.3,
      }).to('._brandLeftSide', { y: -100 }, 'start');
    }

    BrandSectionTimeline.to(
      '._brandRightSide',
      {
        opacity: 1,
      },
      'start'
    ).to(
      '._brandTexts, ._brandImages',
      {
        y: 0,
        opacity: 1,
      },
      'start'
    );
  }, []);

  return (
    <div>
      <section className="mb-0 lg:mb-[8.57143rem] before:content-[''] before:table after:content-[''] after:table after:clear-both _brandTrigger flex lg:block flex-col">
        <div className="__otherWordBg p-[3.07143rem] lg:p-[4.28571rem_4.28571rem_7.28571rem_6.92857rem] desktop:p-[5rem_4.28571rem_13.2rem_6.92857rem] lg:mb-[11.42857rem] lg:w-[58.33333%] float-left relative z-[1] _brandLeftSide hidden lg:block">
          <div className="_brandTexts -translate-y-8 opacity-0">
            <p className="pl-[2.85714rem] uppercase font-primary font-semibold text-[0.92857rem] leading-[1.42857em] tracking-[0.13286rem] my-[1.67em] text-white after:bg-white after:left-0 after:absolute after:top-[50%] after:translate-y-[-50%] after:h-[2px] after:w-[1.5rem] after:content-[''] relative">
              Brands
            </p>
            <h2 className="relative text-[1.57143rem] md:text-[1.85714rem] leading-[1.22727em] md:leading-[1.23077em] tracking-normal font-bold my-[0.83em] text-white">
              Happy Clients.
            </h2>
            <h3 className="relative text-white font-light text-[1.57143rem] leading-[1.22727em] tracking-normal my-[1em] lg:pr-[1.42857rem] lg:mb-[3rem]">
              Creating digital experiences for small black-owned businesses to
              leading Fortune 500 companies & brands. 5 years and counting.
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-4 px-4 lg:px-0 gap-x-[40px] lg:gap-x-[30px] xl:gap-x-[70px] gap-y-[90px] mt-[50px] lg:mt-[90px] _brandImages translate-y-8 opacity-0">
              {brandImages.map((imageUrl, i) => {
                return (
                  <li
                    key={'some_' + i}
                    className="flex items-center justify-center"
                  >
                    {imageUrl.src}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="__otherWordBg p-[3.07143rem] lg:p-[4.28571rem_4.28571rem_7.28571rem_6.92857rem] desktop:p-[5rem_4.28571rem_13.2rem_6.92857rem] lg:mb-[11.42857rem] lg:w-[58.33333%] float-left relative z-[1] lg:hidden block">
          <div className="_brandTexts -translate-y-8 opacity-0">
            <p className="pl-[2.85714rem] uppercase font-primary font-semibold text-[0.92857rem] leading-[1.42857em] tracking-[0.13286rem] my-[1.67em] text-white after:bg-white after:left-0 after:absolute after:top-[50%] after:translate-y-[-50%] after:h-[2px] after:w-[1.5rem] after:content-[''] relative">
              Brands
            </p>
            <h2 className="relative text-[1.57143rem] md:text-[1.85714rem] leading-[1.22727em] md:leading-[1.23077em] tracking-normal font-bold my-[0.83em] text-white">
              Happy Clients.
            </h2>
            <h3 className="relative text-white font-light text-[1.57143rem] leading-[1.22727em] tracking-normal my-[1em] lg:pr-[1.42857rem] lg:mb-[3rem]">
              Creating digital experiences for small black-owned businesses to
              leading Fortune 500 companies & brands. 5 years and counting.
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-4 px-4 lg:px-0 gap-x-[40px] lg:gap-x-[30px] xl:gap-x-[70px] gap-y-[90px] mt-[50px] lg:mt-[90px] _brandImages translate-y-8 opacity-0">
              {brandImages.map((imageUrl, i) => {
                return (
                  <li
                    key={'jopjgsd_' + i}
                    className="flex items-center justify-center"
                  >
                    {imageUrl.src}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="lg:relative _brandRightSide hidden lg:block">
          <div className="lg:absolute lg:right-0 lg:overflow-hidden lg:top-[0] z-0 lg:w-[58.33333%]">
            <figure className="lg:h-[53.57143rem] opacity-0 _brandImages m-0">
              <LazyLoad>
                <Image
                  layout="fill"
                  src={'/images/home/brand_section_right.webp'}
                  objectFit="cover"
                  alt="brand image"
                  priority
                  placeholder="blur"
                  blurDataURL="/images/home/brand_section_right.webp"
                />
              </LazyLoad>
            </figure>
          </div>
        </div>
        <div className="lg:hidden block">
          <div className="lg:absolute lg:right-0 lg:overflow-hidden lg:top-[0] z-0 lg:w-[58.33333%]">
            <figure className="h-[50vh] relative lg:hidden block">
              <LazyLoad>
                <Image
                  layout="fill"
                  src={'/images/home/brand_section_right.webp'}
                  objectFit="cover"
                  alt="brand image"
                  priority
                />
              </LazyLoad>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BrandSection;
