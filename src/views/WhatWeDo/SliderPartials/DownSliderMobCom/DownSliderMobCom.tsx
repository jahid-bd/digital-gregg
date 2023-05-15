import AllCaseStudiesMobile from '../AllCaseStudies/AllCaseStudiesMobile';
import DownS from '../DownS/DownS';

type Props = {
  array: any;
  setControlledSwiper4: any;
  uniqueId: any;
  progressRef?: any;
};

const DownSliderMobCom = ({
  array,
  setControlledSwiper4,
  uniqueId,
  progressRef,
}: Props) => {
  return (
    <div className="lg:hidden lg:w-[50%] w-full lg:h-[50%] bg-redblack absolute bottom-0 right-0 lg:pr-[70px] pl-4 flex items-end lg:pb-[15px]">
      <div className="flex justify-between items-center w-full relative">
        <div className="flex h-[3.92857rem] overflow-hidden items-center justify-center gap-5  text-white font-medium">
          <DownS array={array} setControlledSwiper4={setControlledSwiper4} />
          <span className="inline-block w-[75px] h-0.5 bg-black rounded-full relative overflow-hidden text-[14px]">
            <span
              id={uniqueId ? uniqueId : null}
              className="absolute inline-block top-0 left-0 h-full bg-white duration-[6s] _heroDownSliderProgressBarAnimation"
              ref={progressRef}
            ></span>
          </span>
          {array.length < 9 ? `0${array.length}` : array.length}
        </div>

        <AllCaseStudiesMobile />
      </div>
    </div>
  );
};

export default DownSliderMobCom;
