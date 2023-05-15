// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { whatWeDoCategory } from 'src/constant';
import { Pagination } from 'swiper';

export default function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return `<span class='${className} squish'></span>`;
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper h-full w-full mt-10"
        // loop={true}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
        }}
      >
        {whatWeDoCategory.map(({ description, image, title }, i) => {
          return (
            <SwiperSlide key={'hfshsfs_' + i}>
              <div className="w-full flex items-center justify-center text-center pb-[70px]">
                <div>
                  <div className="mb-[27px] pl-2 flex justify-center _whatWeDoMobileSliderFadeUpAnimation slider:delay-[0] slider:duration-[0] slider:translate-y-0 slider:opacity-100 delay-150 duration-500 translate-y-6 opacity-0">
                    {image}
                  </div>
                  <h2 className="section-sub-title mb-[35px] _whatWeDoMobileSliderFadeUpAnimation slider:delay-[0] slider:duration-[0] slider:translate-y-0 slider:opacity-100 delay-200 duration-500 translate-y-6 opacity-0">
                    {title}
                  </h2>
                  <p className="text-sm leading-5 text-[#4A4A4A] max-w-[290px] _whatWeDoMobileSliderFadeUpAnimation slider:delay-[0] slider:duration-[0] slider:translate-y-0 slider:opacity-100 delay-[250msher] duration-500 translate-y-6 opacity-0">
                    {description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
