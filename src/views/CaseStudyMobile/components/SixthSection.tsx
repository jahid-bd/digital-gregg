import ImgContainer from '../partials/ImgContainer';

const SixthSection = () => {
  return (
    <div className="">
      <div className="mt-[4.5rem] mb-[2rem] md:mb-[3.57143rem] pr-[5rem]">
        <ImgContainer
          href={"/case-study/11"}
          imgSrc={"/images/home/slider/11-webp.png"}
          title={"iDreamers App"}
          desc={"Mobile App Design"}
          imgCss={"h-[82.66667vw]"}
          redSquireCss="right-[-40px] bottom-[-40px]"
        />
      </div>
      <div className="ml-[4.4rem] mt-[130px]">
        <ImgContainer
          href={"/case-study/12"}
          imgSrc={"/images/home/slider/12-webp.png"}
          title={"Black Girls Code"}
          desc={"Website Redesign"}
          imgCss={"h-[82.66667vw]"}
          redSquireCss="left-[-40px] top-[-40px]"
        />
      </div>
    </div>
  );
};

export default SixthSection;
