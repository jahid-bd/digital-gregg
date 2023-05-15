import BottomQ from 'src/icons/Quote/BottomQ';
import TopQ from 'src/icons/Quote/TopQ';
import ImgContainer from '../partials/ImgContainer';

const FourthSection = () => {
  return (
    <div>
      <div className="mb-[3rem]">
        <ImgContainer
          href={"/case-study/13"}
          imgSrc={"/images/home/slider/13-wol.webp"}
          title={"Reveler.io"}
          imgCss={"h-[100vw]"}
          desc={"Sub Pages Redesign"}
        />
      </div>
      <div className="relative top-0">
        <div className="md:h-[80vw] h-[154.54545vw] w-full bg-[#131313] py-[1rem] pl-[0.9rem] pr-[1.2rem]">
          <div className="backgroundWhiteDotsBlackBgCaseStudyMobile h-full w-full">
            <div className="flex justify-center items-center h-full">
              <div className="bg-[#131313] md:px-10 pl-5 pr-0 pt-8 xs:pb-5 pb-0 text-white w-[73%] md:w-[62%] xs:mt-[6.7rem] mt-[1.5rem]">
                <div className=" mb-[27px] md:mb-[28px]">
                  <TopQ />
                </div>

                <h1 className="font-bold text-white text-[1.57143rem] leading-[1.22727em] mb-6">
                Thinking made visual.
                </h1>

                <p className="leading-[1.22727em] text-[1.28571rem]">
                  {`How you invest in how users interact with and perceive your product will ultimately make or break the success of your product.`}
                </p>

                <div className="mb-[27px] mt-[25px] mt:mb-[26px]">
                  <BottomQ />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[3rem]">
        <ImgContainer
          href={"/case-study/9"}
          imgSrc={"/images/home/slider/9-wol.webp"}
          title={"Bonsai"}
          imgCss={"h-[100vw]"}
          desc={"Mobile App UI/UX Design"}
        />
      </div>
    </div>
  );
};

export default FourthSection;
