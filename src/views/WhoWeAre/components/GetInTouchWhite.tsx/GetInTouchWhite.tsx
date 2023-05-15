import GoGetInTouch from '@components/GoMore/GoGetInTouch';
import dynamic from 'next/dynamic';
import LazyLoad from 'react-lazy-load';
import rocketIcon from '../../../../../public/imgs/lotties/rocket.json';
const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

const GetInTouchWhite = () => {
  return (
    <section>
      <div className="h-[520px] w-full bg-white lg:mt-20 mt-0 p-2 lg:p-8 lg:pb-0">
        <div className="backgroundDotsGetInTouchMobile lg:backgroundDotsCaseStudiesBottomDekstop h-full w-full flex items-center justify-center">
          <div className="w-[280px] sm:w-[300px] md:w-[500px] bg-white h-[80%] py-10">
            <div className="flex flex-col gap-x-10 gap-y-10 items-center">
              <LazyLoad>
                <Lottie
                  animationData={rocketIcon}
                  play
                  speed={0.5}
                  className="w-[100px] h-[100px]"
                />
              </LazyLoad>

              <p className="font-semibold text-[1.57143rem] leading-[1.22727em] text-black text-center md:max-w-[28.57143rem] md:m-[1.5rem_auto] lg:max-w-[90%] mx-auto">
                Let’s take your company’s digital presence to a different
                planet.
              </p>

              <div>
                <GoGetInTouch
                  text="Request an Estimate"
                  url="/request-estimate"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchWhite;
