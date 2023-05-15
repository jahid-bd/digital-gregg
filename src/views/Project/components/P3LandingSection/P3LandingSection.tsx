import useWindowDimensions from '@hooks/useWindowDimensions';
import gsap from 'gsap';
import { useLayoutEffect } from 'react';
import dynamic from 'next/dynamic';

const VideoContainer = dynamic(() => import('../P1LandingSection/VideoContainer/VideoContainer'));
const SectionHeaderCount = dynamic(() => import('../SectionHeaderCount'));
const SlickSlider = dynamic(() => import('../Slider/Slider'));
const SliderContainer = dynamic(() => import('../Slider/SliderContainer'));

const P3LandingSection = () => {
  const { width }: any = useWindowDimensions();
  const mobileScreen = 1024;

  const videoData = {
    videoSrc: 'https://vimeo.com/789445458',
    videoThumbnail: '/images/project/project-3/video-thumb-1.png',
  };

  const videoMobileData = {
    videoSrc: '/videos/harlem-capital-mobile.mp4',
    videoThumbnail: '/images/project/project-3/video-thumb-1.png',
  };

  useLayoutEffect(() => {
    window.requestAnimationFrame(() => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: '._harlem_slider1',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '._harlem_slider2',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });

      tl1.to('._harlem_slider1', { opacity: 1, y: 0, duration: 2 }, 'start');
      tl2.to('._harlem_slider2', { opacity: 1, y: 0, duration: 2 }, 'start');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Section One */}
      <section className="pb-5 mt-5 lg:mt-0 lg:px-20">
        <SectionHeaderCount
          count="01"
          title="Design Restyle"
          subTitle=""
          body="We conducted a thorough review of the site's existing features, identifying areas for improvement and prioritizing key user needs. We then developed a comprehensive redesign plan that incorporated a modern and visually compelling design, streamlined user flow, and clear calls-to-action. This redesign plan aimed to create a cohesive and user-friendly experience that effectively communicated the company's mission and values while also driving engagement and conversions."
        />

        <div className="lg:block hidden">
          <VideoContainer isVimeoSrc={true} data={videoData} />
        </div>
        <div className="lg:hidden block">
          <VideoContainer data={videoMobileData} />
        </div>

        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <div className="xl:px-[20%] lg:px-[20%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _harlem_slider1 translate-y-4 opacity-0">
          <SlickSlider
            show={1}
            xlShow={1}
            xxxlShow={1}
            draggable={true}
            move={true}
            swipe={true}
          >
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? "/images/project/project-3/slider-1__1.png"
                  : "/images/project/project-3/mobile/slider1-img1.png"
              }
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? "/images/project/project-3/slider-1__2.png"
                  : "/images/project/project-3/mobile/slider1-img2.png"
              }
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? "/images/project/project-3/slider-1__3.png"
                  : "/images/project/project-3/mobile/slider1-img3.png"
              }
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? "/images/project/project-3/slider-1__4.png"
                  : "/images/project/project-3/mobile/slider1-img4.png"
              }
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? "/images/project/project-3/slider-1__5.png"
                  : "/images/project/project-3/mobile/slider1-img5.png"
              }
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? "/images/project/project-3/slider-1__6.png"
                  : "/images/project/project-3/mobile/slider1-img6.png"
              }
            />
          </SlickSlider>
        </div>
      </section>    

      {/* Section two */}
      <section className="pb-5 lg:px-20">
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <SectionHeaderCount
          count="02"
          title="Responsive"
          subTitle="Across devices"
          body="By prioritizing responsiveness in our design approach, we were able to ensure that the site effectively reached and engaged with a diverse audience, maximizing its overall impact and effectiveness.
          "
        />
        <div className="xl:px-[12%] 3xl:px-[10%] lg:px-[16%] lg:py-[10rem] py-[3.92857rem] md:px-[30%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _harlem_slider2 translate-y-4 opacity-0">
          <SlickSlider
            show={4}
            xlShow={2}
            xxxlShow={3}
            draggable={true}
            move={true}
            swipe={true}
          >
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? "/images/project/project-3/slider-2__1.png"
                  : "/images/project/project-3/mobile/slider2-img1.png"
              }
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? "/images/project/project-3/slider-2__2.png"
                  : "/images/project/project-3/mobile/slider2-img2.png"
              }
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? "/images/project/project-3/slider-2__3.png"
                  : "/images/project/project-3/mobile/slider2-img3.png"
              }
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? "/images/project/project-3/slider-2__4.png"
                  : "/images/project/project-3/mobile/slider2-img4.png"
              }
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? "/images/project/project-3/slider-2__5.png"
                  : "/images/project/project-3/mobile/slider2-img5.png"
              }
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>
    </>
  );
};

export default P3LandingSection;
