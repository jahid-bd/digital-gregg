import BottomQ from 'src/icons/Quote/BottomQ';
import TopQ from 'src/icons/Quote/TopQ';
import ImgContainer from '../partials/ImgContainer';

const FifthSection = () => {
  return (
    <div className="">
      <div className="relative top-0">
        <div className="md:h-[80vw] h-[138.4vw] w-full bg-[#131313] py-[1rem] pb-[1.5rem] pl-[0.9rem] pr-[1.2rem]">
          <div className="backgroundWhiteDotsBlackBgCaseStudyMobile h-full w-full">
            <div className="flex justify-center items-center h-full">
              {/* <div className="bg-[#131313] md:px-10 pl-8 xs:pb-[18px] pb-[0px] md:pb-[105px] xs:pt-0 pt-2 text-white xs:w-[70%] w-[77%] md:w-[67%] absolute top-5"> */}
              <div className="bg-[#131313] md:px-10 text-white xs:w-[62%] w-[64%] absolute top-[18%] md:top-[22%] md:left-[9.5rem] xs:left-24 left-28">
                <div className="mb-[27px] md:mb-[28px]">
                  <TopQ />
                </div>

                <h1 className="font-bold text-white text-[1.57143rem] leading-[1.22727em] mb-6">
                  These&apos;s a reason for everything
                </h1>
                <p className="leading-[1.22727em] text-[1.28571rem]">
                  Nothing less, nothing more. The focus with every design should
                  be getting rid of the unnecessary. Every element should serve
                  a purpose.
                </p>

                <div className="mb-[27px] mt-[25px] md:mt-[26px]">
                  <BottomQ />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[4.5rem]">
        <ImgContainer
          href={'/case-study/10'}
          imgSrc={'/images/home/slider/10-wol.webp'}
          title={'NAACP'}
          desc={'UI/UX Design'}
        />
      </div>
    </div>
  );
};

export default FifthSection;
