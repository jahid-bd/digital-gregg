import useWindowDimensions from '@hooks/useWindowDimensions';
import gsap from 'gsap';
import dynamic from 'next/dynamic';
import { useLayoutEffect } from 'react';

const VideoContainer = dynamic(
  () => import('../P1LandingSection/VideoContainer/VideoContainer')
);
const SectionHeaderCount = dynamic(() => import('../SectionHeaderCount'));
const SlickSlider = dynamic(() => import('../Slider/Slider'));
const SliderContainer = dynamic(() => import('../Slider/SliderContainer'));
const WindenVideo = dynamic(() => import('./WindenVideo'));

const P7LandingPageSection = () => {
  const { width }: any = useWindowDimensions();

  const videoData = {
    videoSrc: 'https://vimeo.com/790529402',
    videoThumbnail: '/images/project/project-7/video-thumb-1.png',
  };

  const secondVideoData = {
    videoSrc: 'https://vimeo.com/790521090',
    videoThumbnail: '/images/project/project-7/video-thumb-2.png',
  };

  useLayoutEffect(() => {
    window.requestAnimationFrame(() => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: '._winden_slider1',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '._winden_slider2',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: '._winden_slider3',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: '._winden_slider4',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl5 = gsap.timeline({
        scrollTrigger: {
          trigger: '._winden_slider5',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });

      tl1.to('._winden_slider1', { opacity: 1, y: 0, duration: 1.5 }, 'start');
      tl2.to('._winden_slider2', { opacity: 1, y: 0, duration: 1.5 }, 'start');
      tl3.to('._winden_slider3', { opacity: 1, y: 0, duration: 1.5 }, 'start');
      tl4.to('._winden_slider4', { opacity: 1, y: 0, duration: 1.5 }, 'start');
      tl5.to('._winden_slider5', { opacity: 1, y: 0, duration: 1.5 }, 'start');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Section One */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="01"
          title="Landing Pages"
          subTitle=""
          body="The landing page for Winden was designed to communicate the company's value proposition and provide a clear call-to-action for potential customers. The design focused on creating a clean and professional look that reflected Winden's brand identity, while also providing easy-to-understand information about there current offerings."
        />

        <VideoContainer isVimeoSrc={true} data={videoData} />

        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <div className="3xl:px-[20%] xl:px-[20%] lg:px-[22%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _winden_slider1 opacity-0 translate-y-4">
          <SlickSlider
            xxxlShow={1}
            xlShow={1}
            show={1}
            draggable={true}
            move={true}
            swipe={true}
          >
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-7/slider-1__1.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-7/slider-1__2.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-7/slider-1__3.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-7/slider-1__4.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-7/slider-1__5.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Section two */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="02"
          title="User Dashboard"
          subTitle=""
          body="Here we prioritized the use of data visualization techniques, such as charts and graphs, to help users understand their financial data more easily.  We optimized the layout to prioritize the most important information, while still allowing for customization and personalization. This included providing quick access to key financial metrics, as well as offering customization options that allowed users to choose the data and features that were most relevant to them."
        />

        <WindenVideo isVimeoSrc={true} data={secondVideoData} />

        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <div className="3xl:px-[20%] xl:px-[20%] lg:px-[22%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _winden_slider2 opacity-0 translate-y-4">
          <SlickSlider
            show={1}
            xxxlShow={1}
            xlShow={1}
            draggable={true}
            move={true}
            swipe={true}
          >
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-7/slider-2__1.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-7/slider-2__2.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-7/slider-2__3.png"
            />
            <div className="mx-auto !block lg:max-w-[50vw] max-w-[27.14286rem]">
              <div className="relative shadow-[0_0_26px_0_rgb(0_0_0_/_10%)]">
                <div className="__imageRedBorder absolute top-0 left-0 right-0 bg-primary h-[2.5rem] z-[1] rounded-t-[0.42857rem]">
                  <div className="left-[1rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                  <div className="left-[1.8rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                  <div className="left-[2.6rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                </div>
                <video
                  className="h-auto pt-[2.4rem] lg:w-[50vw] w-[27.14286rem] mx-auto object-cover rounded-b-[0.42857rem]"
                  autoPlay
                  muted
                  loop={true}
                  playsInline
                >
                  <source src="/videos/W_Compent_Dash_-_Digital_Gregg.mp4" />
                </video>
              </div>
            </div>
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Section three */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="03"
          title="Design System"
          subTitle=""
          body="We created a comprehensive design system that included detailed guidelines for color, typography, icons, layout, and other key design elements. The design system also included guidelines for interaction design, such as button styles, form elements, and animations."
        />
        <div className="3xl:px-[20%] xl:px-[20%] lg:px-[19%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _winden_slider3 opacity-0 translate-y-4">
          <SlickSlider
            xxxlShow={1}
            xlShow={1}
            show={1}
            draggable={true}
            move={true}
            swipe={true}
          >
            <div className="mx-auto !block lg:max-w-[50vw] max-w-[27.14286rem]">
              <div className="relative shadow-[0_0_26px_0_rgb(0_0_0_/_10%)]">
                <div className="__imageRedBorder absolute top-0 left-0 right-0 bg-primary h-[2.5rem] z-[1] rounded-t-[0.42857rem]">
                  <div className="left-[1rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                  <div className="left-[1.8rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                  <div className="left-[2.6rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                </div>
                <video
                  className="h-auto pt-[2.4rem] lg:w-[50vw] w-[27.14286rem] mx-auto object-cover rounded-b-[0.42857rem]"
                  autoPlay
                  muted
                  loop={true}
                  playsInline
                >
                  <source src="/videos/W_Design_System_Dash_-_Digital_Gregg.mp4" />
                </video>
              </div>
            </div>

            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-7/slider-3__1.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-7/slider-3__2.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-7/slider-3__3.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <div className="3xl:px-[20%] xl:px-[20%] lg:px-[19%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _winden_slider4 opacity-0 translate-y-4">
          <SlickSlider
            show={1}
            xxxlShow={1}
            xlShow={1}
            draggable={true}
            move={true}
            swipe={true}
          >
            <div className="mx-auto !block lg:max-w-[50vw] max-w-[27.14286rem]">
              <div className="relative shadow-[0_0_26px_0_rgb(0_0_0_/_10%)]">
                <div className="__imageRedBorder absolute top-0 left-0 right-0 bg-primary h-[2.5rem] z-[1] rounded-t-[0.42857rem]">
                  <div className="left-[1rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                  <div className="left-[1.8rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                  <div className="left-[2.6rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                </div>
                <video
                  className="h-auto pt-[2.4rem] lg:w-[50vw] w-[27.14286rem] mx-auto object-cover rounded-b-[0.42857rem]"
                  autoPlay
                  muted
                  loop={true}
                  playsInline
                >
                  <source src="/videos/Special_Icons_-_Digital_Gregg.mp4" />
                </video>
              </div>
            </div>

            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-7/slider-4__1.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-7/slider-4__2.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-7/slider-4__3.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Section four */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="04"
          title="Responsive Designs"
          subTitle=""
          body="The platform needed to be accessible and usable across a wide range of devices and screen sizes. Our strategy included designing the platform with a mobile-first approach, prioritizing the design for smaller screen sizes and then scaling up to larger devices. This approach ensured that the most critical information was visible and easily accessible on smaller screens, while still providing a comprehensive experience on larger devices."
        />
        <div className="3xl:px-[20%] xl:px-[20%] lg:px-[17%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _winden_slider5 opacity-0 translate-y-4">
          <SlickSlider
            xxxlShow={1}
            xlShow={1}
            show={1}
            draggable={true}
            move={true}
            swipe={true}
          >
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-7/slider-5__1.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-7/slider-5__2.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-7/slider-5__3.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-7/slider-5__4.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>
    </>
  );
};

export default P7LandingPageSection;
