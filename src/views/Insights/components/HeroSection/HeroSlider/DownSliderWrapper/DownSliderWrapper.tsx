import Link from 'next/link';
import { insightsHeroSliderData } from 'src/constant';
import { HeroDownSliderProps } from 'src/types';
import DownSlider from '../DownSlider';

function DownSliderWrapper({
  setControlledSwiper4,
  progressRef,
}: HeroDownSliderProps) {
  return (
    <div className="hidden md:w-[50%] w-full md:h-[calc(9.09722vw+12rem)] bg-redblack absolute bottom-0 right-0 lg:flex items-end justify-between downSliderWrapper">
      {/* <div className="flex justify-between items-center w-full relative"> */}
      <div className="flex items-center lg:h-[5rem] pl-[1.31429rem] text-left">
        <DownSlider setControlledSwiper4={setControlledSwiper4} />
        <span className="inline-block w-[5rem] lg:w-[6.71429rem] h-[2px] mx-[1.62857rem] bg-black rounded-full relative overflow-hidden">
          <span
            id="_heroDownSliderProgressBar"
            className="absolute inline-block top-0 left-0 h-full bg-white duration-[6s] _heroDownSliderProgressBarAnimation"
            ref={progressRef}
          ></span>
        </span>

        <span className="inline-block align-middle font-normal text-white text-[14px]">
          {insightsHeroSliderData.length < 9
            ? `0${insightsHeroSliderData.length}`
            : insightsHeroSliderData.length}
        </span>
      </div>

      <Link href={'/insights'}>
        <div className="lg:pr-[5rem] lg:h-[5rem] flex-[0_auto] text-white">
          <a className="bg-transparent block group" href="#" aria-label='all insights page'>
            <span className="inline-block align-middle lg:leading-[5rem] text-[.92857rem] mx-[0.85714rem] pointer-events-none group-hover:-translate-x-2 duration-[400ms]">
              See all insights
            </span>
            <div className="lg:leading-[5rem] w-[1.07143rem] h-[1.07143rem] relative inline-block align-middle pointer-events-none text-white duration-[400ms] group-hover:rotate-90">
              <span className="bg-white top-0 left-0 absolute w-[6px] h-[6px] lg:leading-[5rem] pointer-events-none"></span>
              <span className="bg-white top-0 right-0 absolute w-[6px] h-[6px] lg:leading-[5rem] pointer-events-none"></span>
              <span className="bg-white bottom-0 left-0 absolute w-[6px] h-[6px] lg:leading-[5rem] pointer-events-none"></span>
              <span className="bg-white bottom-0 right-0 absolute w-[6px] h-[6px] lg:leading-[5rem] pointer-events-none"></span>
            </div>
          </a>
        </div>
      </Link>
      {/* </div> */}
    </div>
  );
}

export default DownSliderWrapper;
