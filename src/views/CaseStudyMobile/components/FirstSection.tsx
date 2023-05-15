import ImgContainer from '../partials/ImgContainer';

const FirstSection = () => {
  return (
    <div className="relative">
      <div className="bg-redblack h-[138.93333vw] absolute w-full md:top-[16.5%] top-[13.5%] right-0 left-0 -z-1 pl-2 sm:pr-[9px] pr-4 pt-4 pb-6 sm:py-2 md:pt-[70px] md:pb-[75px]">
        <div className="backgroundWhiteDotsCaseStudyMobile lg:backgroundWhiteDotsGetInTouchDekstop h-full w-full"></div>
      </div>
      <div className="mt-16 mb-[8.92857rem] md:mb-[12.85714rem] mx-[35px]">
        <ImgContainer
          href={'/case-study/1'}
          imgSrc={'/images/home/slider/1-wol.webp'}
          css={'!static'}
          imgCss={'h-[81.33333vw]'}
          title={'Verizon'}
          desc={'Sub Pages Redesign'}
          redSquireCss="left-[-4.5rem] md:top-[-2.6rem] top-[-2.4rem]"
          isFirstBox={true}
        />
      </div>
      <div className="my-20 pr-[4.5rem] !mb-[3rem] mt-[130px]">
        <ImgContainer
          href={'/case-study/2'}
          imgSrc={'/images/home/slider/2-wol.webp'}
          css={'!static'}
          imgCss={'h-[81.33333vw]'}
          title={'The North Face®'}
          desc={'CMYK UI/UX Design'}
          redSquireCss="right-[-2rem] top-[-40px]"
        />
      </div>
      <div className="mb-[3.57143rem]">
        <ImgContainer
          href={'/case-study/3'}
          imgSrc={'/images/home/slider/3-wol.webp'}
          css={'!static'}
          imgCss={'h-[100vw]'}
          title={'Harlem Capital'}
          desc={'Website Redesign'}
        />
      </div>
      <div className="pr-[2.85714rem]">
        <ImgContainer
          href={'/case-study/4'}
          imgSrc={'/images/home/slider/4-wol.webp'}
          css={'!static'}
          imgCss={'h-[81.33333vw]'}
          title={'OpenPhone'}
          desc={'Desktop APP UI/UX'}
        />
      </div>
    </div>
  );
};

export default FirstSection;
