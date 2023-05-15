import ImgContainer from '../partials/ImgContainer';

const SecondSection = () => {
  return (
    <div className="">
      <div className="mt-[4.5rem] mb-[3.57143rem] mr-[4.4rem]">
        <ImgContainer
          href="/case-study/5"
          imgSrc="/images/home/slider/5-wol.webp"
          title={"Blakademik"}
          imgCss={"h-[82.66667vw]"}
          desc={"UI/UX Design & Dev"}
          redSquireCss="right-[-40px] bottom-[-40px]"
        />
      </div>
      <div className="mt-[120px] mb-[3.57143rem] ml-[4.4rem]">
        <ImgContainer
          href={"/case-study/6"}
          imgSrc={"/images/home/slider/6-wol.webp"}
          title={"RapChat"}
          imgCss={"h-[82.66667vw]"}
          desc={"Mobile UI/UX Design"}
          redSquireCss="left-[-40px] top-[-40px]"
        />
      </div>
    </div>
  );
};

export default SecondSection;
