import gsap from 'gsap';
import dynamic from 'next/dynamic';
import { useLayoutEffect } from 'react';
import SlickSlider from '../Slider/Slider';
import SliderContainer from '../Slider/SliderContainer';
import SliderVideo from '../Slider/SliderVideo';

const VideoContainer = dynamic(() => import('./VideoContainer/VideoContainer'));
const SectionHeaderCount = dynamic(() => import('../SectionHeaderCount'));
const SingleImageContainer = dynamic(
  () => import('./SingleImageContainer/SingleImageContainer')
);

interface Props {
  data?: any;
  id?: any;
}

const P1LandingPageSection = ({ data, id }: Props) => {
  const videoData = {
    videoSrc: 'https://vimeo.com/797991382',
    videoThumbnail: '/images/project/project-1/video-thumb-1.png',
  };

  useLayoutEffect(() => {
    window.requestAnimationFrame(() => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: '._verizon_slider1',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '._verizon_slider2',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: '._verizon_slider3',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: '._verizon_slider4',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl5 = gsap.timeline({
        scrollTrigger: {
          trigger: '._verizon_slider5',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });

      tl1.to('._verizon_slider1', { opacity: 1, y: 0, duration: 1.5 }, 'start');
      tl2.to('._verizon_slider2', { opacity: 1, y: 0, duration: 1.5 }, 'start');
      tl3.to('._verizon_slider3', { opacity: 1, y: 0, duration: 1.5 }, 'start');
      tl4.to('._verizon_slider4', { opacity: 1, y: 0, duration: 1.5 }, 'start');
      tl5.to('._verizon_slider5', { opacity: 1, y: 0, duration: 1.5 }, 'start');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* <--Section One--> */}
      <section className="mt-5 lg:mt-0 lg:px-[70px]">
        <SectionHeaderCount
          count="01"
          title="Design"
          subTitle="Landing Page"
          body="Given the abundance of use cases and features related to 5G, we made a conscious decision not to overwhelm users with too much information when they landed on the page. Instead, we opted for a different approach, where the landing page was designed to serve as an effective and engaging main navigation to the rest of the site."
        />
        <VideoContainer data={videoData} isVimeoSrc={true} />
        <div className="mt-[16vw] lg:mt-[8.94444vw]"></div>
      </section>

      {/* Section Two */}
      <section className="pb-10 lg:pb-0 lg:px-20">
        <SectionHeaderCount
          count="02"
          title="Design"
          subTitle="Style Guide"
          body="We leveraged Verizon's existing style guide to ensure that the site embodied their brand identity while still being engaging and unique. We carefully studied Verizon's brand guidelines and incorporated their established color palette, typography, and design elements to create a cohesive look and feel throughout the site."
        />
        <SingleImageContainer
          id={1}
          imgUrl="/images/project/project-1/style-guide.png"
          bgCss="min-h-[45svh]"
        />
        <div className="mt-[16vw] lg:mt-[8.94444vw]"></div>
      </section>

      {/* Secton Three */}
      <section className="py-5 lg:py-0 lg:px-20">
        <SectionHeaderCount
          count="03"
          title="Design"
          subTitle="Wireframes"
          body="By using wireframes, we were able to concentrate on the fundamental structure and user experience of the site, enabling us to test and refine various design concepts through multiple iterations. Within this process, we identified specific usability issues related to the management of multiple navigation menus, which we successfully resolved."
        />
        <SingleImageContainer
          id={1211}
          imgUrl="/images/project/project-1/wireframe.png"
          bgCss="min-h-[90svh]"
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <SingleImageContainer
          id={1311}
          imgUrl="/images/project/project-1/wireframe-2.png"
          bgCss="min-h-[250svh]"
        />
      </section>
      <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      {/* Section Four */}
      <section className="py-5 lg:py-0 lg:px-20">
        <SectionHeaderCount
          count="04"
          title="Design"
          subTitle="Sub-navigation pages"
          body="By creating sub-nav pages, we were able to provide users with a clear and intuitive navigation structure, making it easy for them to explore the various use cases and understand the unique advantages of 5G technology. Additionally, the organized presentation of information allowed users to quickly find the information they were looking for, reducing the time and effort required to understand the technology."
        />
        <div className="slick_case_slider xl:px-[20%] lg:px-[20%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] _verizon_slider1 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-1/slider-1__1.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-1/slider-1__2.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-1/slider-1__3.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-1/slider-1__4.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-1/slider-1__5.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Section Five */}
      <section className="pb-[3.92857rem] lg:pb-0 lg:px-20">
        <SectionHeaderCount
          count="05"
          title="Design"
          subTitle="Use Case Pages"
          body="We made the deliberate decision to use only one layout for use case pages. With so much information, this allowed us to create a cohesive and easily navigable user experience that minimized confusion and reduced the cognitive load required to navigate the site."
        />
        <div className="slick_case_slider xl:px-[20%] lg:px-[20%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] _verizon_slider2 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-1/slider-2__1.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-1/slider-2__2.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-1/slider-2__3.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-1/slider-2__4.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-1/slider-2__5.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Design Animations */}
      <section className="pb-[3.92857rem] lg:pb-0 lg:px-20">
        <SectionHeaderCount
          count="06"
          title="Design"
          subTitle="Animations"
          body="SVGs and micro-animations was a key component in our strategy to create a more engaging and effective UX. We used both to communicate complex information about 5G in a more accessible and intuitive way. Additionally, created engaging and dynamic interactions to help draw users' attention to important information."
        />
        <div className="xl:px-[20%] lg:px-[20%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _verizon_slider3 opacity-0 translate-y-4">
          <h3 className="z-10 relative font-bold text-[24px] leading-[29px] text-[#333333] text-center mb-[50px]">
            Immersive Virtual Reality
          </h3>
          <SlickSlider
            show={1}
            xxxlShow={1}
            xlShow={1}
            draggable={true}
            move={true}
            swipe={true}
          >
            <SliderVideo videoSrc="/videos/vr-education-story1.mp4" />
            <SliderVideo videoSrc="/videos/vr-education-story2.mp4" />
            <SliderVideo videoSrc="/videos/vr-education-story3.mp4" />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <div className="xl:px-[20%] lg:px-[20%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _verizon_slider4 opacity-0 translate-y-4">
          <h3 className="z-10 relative font-bold text-[24px] leading-[29px] text-[#333333] text-center mb-[50px]">
            Semi-Autonomous Transportation
          </h3>
          <SlickSlider
            show={1}
            xxxlShow={1}
            xlShow={1}
            draggable={true}
            move={true}
            swipe={true}
          >
            <SliderVideo videoSrc="/videos/semi-auto-story1.mp4" />
            <SliderVideo videoSrc="/videos/semi-auto-story2.mp4" />
            <SliderVideo videoSrc="/videos/semi-auto-story3.mp4" />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <div className="xl:px-[20%] lg:px-[20%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _verizon_slider5 opacity-100 translate-y-4">
          <h3 className="z-10 relative font-bold text-[24px] leading-[29px] text-[#333333] text-center mb-[50px]">
            Massive IoT
          </h3>
          <SlickSlider
            show={1}
            xxxlShow={1}
            xlShow={1}
            draggable={true}
            move={true}
            swipe={true}
          >
            <SliderVideo videoSrc="/videos/massive-iot-animated-1.mp4" />
            <SliderVideo videoSrc="/videos/massive-iot-animated-2.mp4" />
            <SliderVideo videoSrc="/videos/massive-iot-animated-3.mp4" />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Design Navigation Design */}
      <section className="pb-[3.92857rem] lg:pb-0 lg:px-20">
        <SectionHeaderCount
          count="07"
          title="Design"
          subTitle="Navigation Design"
          body="With so many different menu navigation items to consider, including main, sub, and even sub-sub navigations, it was crucial to find a way to make the UX easy to navigate for all users. To address this challenge, we carefully analyzed the site structure and prioritized the most important navigation items. We then implemented a multi-level navigation system that allowed users to easily move through the various sections of the site, without feeling overwhelmed by the number of menu options."
        />
        <div className="lg:px-[10rem] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5]">
          <SliderVideo videoSrc="/videos/verizon5g-navigation.mp4" />
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>
    </div>
  );
};

export default P1LandingPageSection;
