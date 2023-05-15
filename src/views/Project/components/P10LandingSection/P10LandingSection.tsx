import gsap from 'gsap';
import dynamic from 'next/dynamic';
import { useLayoutEffect } from 'react';
import ImgContainer4 from '../P12LandingSection/ImgContainer4/ImgContainer4';

const VideoContainer = dynamic(
  () => import('../P1LandingSection/VideoContainer/VideoContainer')
);
const SectionHeaderCount = dynamic(() => import('../SectionHeaderCount'));
const SlickSlider = dynamic(() => import('../Slider/Slider'));
const SliderContainer = dynamic(() => import('../Slider/SliderContainer'));
const SliderVideo = dynamic(() => import('../Slider/SliderVideo'));
const PageBuilderImages = dynamic(
  () => import('./components/PageBuilderImages')
);
const SingleImage = dynamic(() => import('./components/SingleImage'));
const NAACPVideo = dynamic(() => import('./components/NAACPVideo'));

const P10LandingSection = () => {
  const videoData = {
    videoSrc: 'https://vimeo.com/790229014',
    videoThumbnail: '/images/project/project-10/video-thumb.png',
  };

  useLayoutEffect(() => {
    window.requestAnimationFrame(() => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: '._NAACP_slider1',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '._NAACP_slider2',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });

      tl1.to('._NAACP_slider1', { opacity: 1, y: 0, duration: 2 }, 'start');
      tl2.to('._NAACP_slider2', { opacity: 1, y: 0, duration: 2 }, 'start');

      const NAACPPowerTl = gsap.timeline({
        scrollTrigger: {
          trigger: `._NAACPIsPowerTrigger`,
          start: '`top 100%',
          scrub: 0.9,
        },
      });
      NAACPPowerTl.to(
        `._NAACPIsPowerVideoImg`,
        {
          y: -200,
          duration: 0.8,
          ease: 'none',
        },
        'start'
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className="lg:px-20">
        <SectionHeaderCount
          count="01"
          title="Design Restyle"
          subTitle=""
          body="The redesign of the front page took an incredibly robust approach to match the ambitions they expressed. The result: a design they’ll be growing into — and not out of — for years to come."
        />
        <VideoContainer data={videoData} isVimeoSrc={true} />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>

        <div className="xl:px-[20%] lg:px-[20%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _NAACP_slider1 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-10/slider-1__1.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-10/slider-1__2.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-10/slider-1__3.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-10/slider-1__4.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-10/slider-1__5.png"
            />
            <SliderVideo videoSrc="/videos/Naacp-video-slider-1.mp4" />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* section two */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="02"
          title=" Navigation"
          subTitle=""
          body="The initial abbreviated menu showcases the most important items in the header: issues, action, resources and donate. While a drop down helps users explore the scope of the organization for deeper engagement."
        />

        <div className="lg:px-[10rem] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5]">
          <SliderVideo videoSrc="/videos/NAACP-navigation.mp4" />
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Page builder section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="03"
          title=" Page Builder"
          subTitle=""
          body="Enabling users to browse all news, action items, and resources is crucial, but finding relevant ones for each committee is equally important. To address this, we developed a page builder that empowers each committee to personalize their pages by extracting relevant content from other areas of the site. This innovative approach enables users to easily access committee-specific content, promoting a more intuitive and user-friendly experience."
        />
        <PageBuilderImages />
        <div className="mt-[16vw] lg:mt-0"></div>
      </section>

      {/* Mobile Responsive section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="04"
          title="Mobile Responsive"
          subTitle=""
          body="We made sure that the redesigned NAACP website was fully optimized for mobile devices. To achieve this, we employed a mobile-first design approach. We also used responsive design techniques, such as flexible grids and media queries, to ensure that the site's layout and content adapted seamlessly to different screen sizes and resolutions."
        />
        <div className="slick_case_slider xl:px-[10%] lg:px-[15%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] _NAACP_slider2 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-10/slider-2__1.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-10/slider-2__2.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-10/slider-2__3.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-10/slider-2__4.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-10/slider-2__5.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-10/slider-2__6.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-10/slider-2__7.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-10/slider-2__8.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-10/slider-2__9.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* NAACP is power section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="05"
          title="NAACP is Power"
          subTitle=""
          body="In order to make the NAACP website more engaging and appealing to younger generations, we employed various design techniques including micro-animations and videos. We also incorporated videos in strategic locations on the website to provide a more immersive and interactive experience for visitors."
        />
        <div className="lg:px-[10rem] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] _NAACPIsPowerTrigger">
          <div className="_NAACPIsPowerVideoImg min-h-[390vh] translate-y-[0.5%]">
            <SliderVideo videoSrc="/videos/NAACP-is-power.mp4" />
            <SingleImage imgSrc="/images/project/project-10/naacp-power-1.png" />
            <NAACPVideo videoSrc="/videos/NAACP-is-power-2.mp4" />
            <SingleImage imgSrc="/images/project/project-10/naacp-power-2.png" />
            <NAACPVideo videoSrc="/videos/NAACP-thrive.mp4" />
            <SingleImage imgSrc="/images/project/project-10/naacp-power-3.png" />
            <SingleImage imgSrc="/images/project/project-10/naacp-power-4.png" />
          </div>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Section Six */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="06"
          title="Ideation:"
          subTitle="Card Sorting & Navigation"
          body="The card sorting and site navigation exercises were crucial in helping us to develop a site structure and navigation system that was intuitive and easy to use for the target audience."
        />
        <ImgContainer4
          id={20421}
          imgUrl="/images/project/project-10/s6-img1.png"
          imgCss="min-h-[58vh]"
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Section Seven */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="07"
          title="Project Outcome"
          subTitle=""
          body="A project focused on developing a new product, such as a software application or physical device, might have an outcome of a finished product that can be launched to the market."
        />
        <ImgContainer4
          id={20542}
          imgUrl="/images/project/project-10/s6-img2.png"
          imgCss="min-h-[20vh]"
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>
    </>
  );
};

export default P10LandingSection;
