import Link from 'next/link';
import { insightsHeroSliderData } from 'src/constant';
import { HeroDownSliderProps } from 'src/types';
import DownSlider from '../DownSlider';

function DownSliderWrapper({
  setControlledSwiper4,
  progressRef,
}: HeroDownSliderProps) {
  return (
    <div className="lg:hidden lg:w-[50%] w-full lg:h-[50%] bg-redblack absolute bottom-0 right-0 lg:pr-[70px] pl-[1.31429rem] flex items-end lg:pb-[15px] downSliderWrapper">
      <div className="flex justify-between items-center w-full relative">
        <div className="flex h-[3.92857rem] overflow-hidden items-center justify-center gap-5 text-[14px] text-white font-medium">
          <DownSlider setControlledSwiper4={setControlledSwiper4} />
          <span className="inline-block slider_line w-[5rem] h-[2px] bg-black rounded-full relative overflow-hidden">
            <span
              id="_heroDownSliderProgressBar2"
              className="absolute inline-block top-0 left-0 h-full bg-white duration-[6s] _heroDownSliderProgressBarAnimation"
              ref={progressRef}
            ></span>
          </span>
          {insightsHeroSliderData.length < 10
            ? `0${insightsHeroSliderData.length}`
            : insightsHeroSliderData.length}
        </div>

        <Link href={"/case-study"} passHref>
          <div className="bg-primary flex-[0_auto] h-[3.92857rem] text-white">
            <a className="cursor-grab block text-white bg-transparent" href="#" aria-label='all insights page'>
              <div className="mx-[1.42857rem] w-[1.07143rem] h-[1.07143rem] relative inline-block leading-[3.92857rem] align-middle pointer-events-none">
                <span className="bg-white top-0 left-0 absolute w-[6px] h-[6px] lg:leading-[5rem] pointer-events-none"></span>
                <span className="bg-white top-0 right-0 absolute w-[6px] h-[6px] lg:leading-[5rem] pointer-events-none"></span>
                <span className="bg-white bottom-0 left-0 absolute w-[6px] h-[6px] lg:leading-[5rem] pointer-events-none"></span>
                <span className="bg-white bottom-0 right-0 absolute w-[6px] h-[6px] lg:leading-[5rem] pointer-events-none"></span>
              </div>
              <span className="m-[0_1.42857rem_0_0] inline-block leading-[3.92857rem] align-middle pointer-events-none text-white text-[14px] ">
                See all insights
              </span>
            </a>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default DownSliderWrapper;
