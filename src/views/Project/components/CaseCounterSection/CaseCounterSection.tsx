import Link from 'next/link';
import SiArrowDownIcon from 'src/icons/SiArrowDownIcon';

const CaseCounterSection = ({
  data,
  countdown,
  targetRef,
  isVisible,
  nextUrl,
}: any) => {
  return (
    <>
      <style>
        {`.__bgImg {
               background-image: url(${
                 data?.imageUrlLong
                   ? data?.imageUrlLong
                   : '/imgs/sliders/1-long.png'
               })
            }`}
      </style>
      <Link href={nextUrl}>
        <div
          className={`h-[555px] text-center relative  text-white overflow-hidden bg-cover bg-center bg-no-repeat w-full __bgImg bg-[#4c4c4c]`}
          id="countDown"
          ref={targetRef}
        >
          <div
            className={`font-[800] text-[240px] md:text-[336px] lg:text-[512px] text-white/40 absolute left-[50%] top-[50%] -translate-x-2/4 -translate-y-2/4 z-99 ${
              isVisible
                ? 'opacity-100 transition-opacity duration-500'
                : 'opacity-0 transition-opacity duration-500'
            }`}
          >
            {isVisible ? `0${countdown}` : null}
          </div>
          <div className="bg-black/75 w-full h-full">
            <div className="absolute left-[50%] top-[50%] -translate-x-2/4 -translate-y-2/4 z-999 w-full">
              <span className="uppercase text-[14px] leading-5 tracking-[2px]">
                Next case
              </span>
              <h2 className="my-[24px] text-[28px] leading-[18px] font-[600]">
                {data?.imageTitle}
              </h2>
              <h3 className="font-[400] text-[23px]">{data?.imageDesc}</h3>
              <span className="flex items-center justify-center mt-[10px] text-[20px] font-[800]">
                <SiArrowDownIcon />
              </span>
            </div>
          </div>

          {/* <div className="block absolute left-0 top-0 bottom-0 z-0 bg-black/60 w-full h-full"></div> */}
        </div>
      </Link>
    </>
  );
};

export default CaseCounterSection;
