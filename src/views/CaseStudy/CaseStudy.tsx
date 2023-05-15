import GetInTouchWhite from '@views/WhoWeAre/components/GetInTouchWhite.tsx/GetInTouchWhite';

import dynamic from 'next/dynamic';

const ImgFifthSection = dynamic(() => import('./components/ImgFifthSection'));
const ImgFirstSection = dynamic(() => import('./components/ImgFirstSection'));
const ImgFourthSection = dynamic(() => import('./components/ImgFourthSection'));
const ImgSecondSection = dynamic(() => import('./components/ImgSecondSection'));
const ImgSixthSection = dynamic(() => import('./components/ImgSixthSection'));
const ImgThirdSection = dynamic(() => import('./components/ImgThirdSection'));

type Props = {};

const CaseStudy = (props: Props) => {
  return (
    <>
      <div className="pt-[100px] lg:p-[70px]">
        <h1 className="text-center text-[2.57143rem] mb-20 py-8">
          Case <b>studies</b>.
        </h1>

        <div className="2xl:mx-[22px] mx-[0.7%]">
          {' '}
          <ImgFirstSection />{' '}
        </div>
        <div className="lg:block hidden">
          {' '}
          <ImgSecondSection />{' '}
        </div>
      
        <div className="lg:block hidden">
          {' '}
          <ImgThirdSection />{' '}
        </div>
        <div className="my-[150px]"></div>
        <div className="">
          {' '}
          <ImgFourthSection />{' '}
        </div>
        {/* <div className="my-[150px]">abcd</div> */}
        <div className="">
          {' '}
          <ImgFifthSection />{' '}
        </div>
        <div className="lg:mt-[150px] 3xl:my-0"></div>
        <div className="">
          {' '}
          <ImgSixthSection />{' '}
        </div>
      </div>

      <div className="w-full">
        <GetInTouchWhite />
      </div>
    </>
  );
};

export default CaseStudy;
