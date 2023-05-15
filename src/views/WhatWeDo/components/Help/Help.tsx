// import Swiper core and required modules
import dynamic from 'next/dynamic';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import DigitalStrategy from '../../../../../public/imgs/lotties/whatwedo/digitalStrategy.json';
import MediaStrategy from '../../../../../public/imgs/lotties/whatwedo/media-camp.json';
import SMS from '../../../../../public/imgs/lotties/whatwedo/sms.json';

const Lottie = dynamic(() => import('react-lottie-player'));
// Import Swiper styles
import LazyLoad from 'react-lazy-load';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type Props = {
  isThirdItem?: boolean;
};

const Help = ({ isThirdItem }: Props) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return `<span class='${className} squish'></span>`;
    },
  };
  return (
    <div className="lg:px-[120px] px-[40px]">
      <div className="lg:block hidden">
        <div className="flex md:items-center flex-col md:flex-row lg:pt-40 desktop:pt-44 lg:pb-10 desktop:pb-12 xl:pb-32 3xl:pb-44 3xl:pt-48">
          <div className="flex flex-col gap-5 w-[280px]">
            <div className="lg:flex items-center gap-5 hidden ">
              <div className="w-6 h-0.5 bg-primary"></div>
              <h4 className="text-[#131313] font-semibold text-sm tracking-widest">
                ADDITIONAL SERVICES
              </h4>
            </div>

            <h1 className="font-bold text-[28px]">
              Help your customers find you online
            </h1>
          </div>

          <div className="md:ml-[70px] flex gap-x-[30px] mt-[50px] md:mt-0 ml-0">
            <div className="md:w-8/12 w-full">
              <LazyLoad>
                <Lottie
                  animationData={SMS}
                  play={true}
                  speed={0.5}
                  className="w-[100px] h-[100px]"
                />
              </LazyLoad>

              <h5 className="font-bold text-[24px] mt-5">
                Social Media Strategy
              </h5>
            </div>
            <div className="md:w-8/12 w-full">
              <LazyLoad>
                <Lottie
                  animationData={MediaStrategy}
                  play={true}
                  speed={0.5}
                  className="w-[100px] h-[100px]"
                />
              </LazyLoad>
              <h5 className="font-bold text-[24px] mt-5">
                Media <br /> Campaign
              </h5>
            </div>

            {isThirdItem ? (
              <div className="md:w-8/12 w-full">
                <LazyLoad>
                  <Lottie
                    animationData={DigitalStrategy}
                    play={true}
                    speed={0.5}
                    className="w-[100px] h-[100px]"
                  />
                </LazyLoad>
                <h5 className="font-bold text-[24px] mt-5">
                  Digital <br /> Strategy
                </h5>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="lg:hidden block my-[3.57143rem]">
        {/* <div className="flex items-center gap-5">
          <div className="w-6 h-0.5 bg-primary"></div>
          <h4 className="text-[#131313] font-semibold text-sm tracking-widest">
            ADDITIONAL SERVICES
          </h4>
        </div> */}

        <h1 className="font-bold text-[1.57143rem] md:text-[1.85714rem] leading-[1.22727em] lg:leading-[1.23077em] mt-5 mb-[3.57143rem]">
          Help your customers find you online
        </h1>
        <div className="mt-10 text-center">
          <Swiper
            modules={[Pagination]}
            loop={true}
            slidesPerView={1}
            pagination={pagination}
          >
            <SwiperSlide>
              <div className="my-10 flex flex-col justify-center items-center">
                <Lottie
                  animationData={MediaStrategy}
                  play={true}
                  speed={0.5}
                  className="w-[100px] h-[100px]"
                />
                <h5 className="font-bold text-[1.14286rem] leading-[1.1875em] mt-5">
                  Social Media Strategy
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="my-10 flex flex-col justify-center items-center">
                <Lottie
                  animationData={MediaStrategy}
                  play={true}
                  speed={0.5}
                  className="w-[100px] h-[100px]"
                />
                <h5 className="font-bold text-[1.14286rem] leading-[1.1875em] mt-5">
                  Media Campaign
                </h5>
              </div>
            </SwiperSlide>
            {isThirdItem ? (
              <SwiperSlide>
                <div className="my-10 flex flex-col justify-center items-center">
                  <Lottie
                    animationData={MediaStrategy}
                    play={true}
                    speed={0.5}
                    className="w-[100px] h-[100px]"
                  />
                  <h5 className="font-bold text-[1.14286rem] lg:text-[1.57143rem] leading-[1.1875em] mt-5">
                    Media Campaign
                  </h5>
                </div>
              </SwiperSlide>
            ) : null}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Help;
