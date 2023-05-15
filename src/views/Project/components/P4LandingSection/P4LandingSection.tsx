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
const SliderVideo = dynamic(() => import('../Slider/SliderVideo'));

interface Props {}

const P4LandingSection = () => {
  const { width }: any = useWindowDimensions();
  const mobileScreen = 1024;

  const videoData = {
    videoSrc: 'https://vimeo.com/789147232',
    videoThumbnail: '/images/project/project-4/video-thumb-1.png',
  };

  useLayoutEffect(() => {
    window.requestAnimationFrame(() => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: '._openPhone_slider1',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '._openPhone_slider2',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: '._openPhone_slider3',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: '._openPhone_slider4',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });

      tl1.to(
        '._openPhone_slider1',
        { opacity: 1, y: 0, duration: 1.5 },
        'start'
      );
      tl2.to(
        '._openPhone_slider2',
        { opacity: 1, y: 0, duration: 1.5 },
        'start'
      );
      tl3.to(
        '._openPhone_slider3',
        { opacity: 1, y: 0, duration: 1.5 },
        'start'
      );
      tl4.to(
        '._openPhone_slider4',
        { opacity: 1, y: 0, duration: 1.5 },
        'start'
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* Section One */}
      <section className="pb-5 mt-5 lg:mt-0 lg:px-20">
        <SectionHeaderCount
          count="01"
          title="Landing page"
          subTitle=""
          body="The homepage serves as an initial introduction to the brand, immersing users in a design style that conveys a sense of fun, simplicity, and user-friendliness.

          "
        />

        <VideoContainer isVimeoSrc={true} data={videoData} />

        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <div className="3xl:px-[20%] xl:px-[22%] lg:px-[22%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _openPhone_slider1 opacity-0 translate-y-4">
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
              imgSrc={
                width >= mobileScreen
                  ? '/images/project/project-4/slider-1__1.png'
                  : '/images/project/project-4/mobile/slider1-img1.png'
              }
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? '/images/project/project-4/slider-1__2.png'
                  : '/images/project/project-4/mobile/slider1-img2.png'
              }
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? '/images/project/project-4/slider-1__3.png'
                  : '/images/project/project-4/mobile/slider1-img3.png'
              }
            />
          </SlickSlider>
        </div>
      </section>
      {/* Secton Two */}
      <section className="lg:px-20">
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <SectionHeaderCount
          count="02"
          title="Style guide"
          subTitle=""
          body="By implementing a style guide, a consistent messaging approach can be maintained, improving brand recognition and streamlining communication among team members.
          "
        />
        <div className="xl:px-[18%] lg:px-[20%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _openPhone_slider2 opacity-0 translate-y-4">
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
              imgSrc={
                width >= mobileScreen
                  ? '/images/project/project-4/slider-2__1.png'
                  : '/images/project/project-4/mobile/slider2-img1.png'
              }
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? '/images/project/project-4/slider-2__2.png'
                  : '/images/project/project-4/mobile/slider2-img2.png'
              }
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? '/images/project/project-4/slider-2__3.png'
                  : '/images/project/project-4/mobile/slider2-img3.png'
              }
            />
          </SlickSlider>
        </div>
      </section>
      {/* Section Three */}
      <section className="lg:px-20">
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <SectionHeaderCount
          count="03"
          title="Responsive Design"
          subTitle=""
          body="By optimizing the website to adapt to the device on which it is being viewed, the site successfully provides an exceptional user experience across a range of devices, significantly increasing its reach to a wider audience. This feature was critical in ensuring that users could access and engage with the site in a seamless and consistent way, regardless of their device or screen size. By prioritizing this functionality, the site was able to effectively reach and engage with a diverse audience, enhancing its overall impact and effectiveness."
        />

        <div className="xl:px-[10%] 3xl:px-[15%] lg:px-[15%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _openPhone_slider3 opacity-0 translate-y-4">
          <SlickSlider
            show={3}
            xxxlShow={3}
            xlShow={2}
            draggable={true}
            move={true}
            swipe={true}
          >
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? '/images/project/project-4/slider-3__1.png'
                  : '/images/project/project-4/mobile/slider3-img1.png'
              }
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? '/images/project/project-4/slider-3__2.png'
                  : '/images/project/project-4/mobile/slider3-img2.png'
              }
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? '/images/project/project-4/slider-3__3.png'
                  : '/images/project/project-4/mobile/slider3-img3.png'
              }
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? '/images/project/project-4/slider-3__4.png'
                  : '/images/project/project-4/mobile/slider3-img4.png'
              }
            />
          </SlickSlider>
        </div>
      </section>

      {/* section four */}
      <section className="lg:px-20">
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <SectionHeaderCount
          count="04"
          title="Web Application"
          subTitle=""
          body="Designing the Openphone application posed a challenge as it combines multiple communication features into a single platform. Our team delivered a cohesive and user-friendly design that effectively communicated the full range of features and benefits."
        />

        <div className="xl:px-[20%] lg:px-[20%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _openPhone_slider4 opacity-0 translate-y-4">
          <SlickSlider
            show={1}
            xxxlShow={1}
            xlShow={1}
            draggable={true}
            move={true}
            swipe={true}
          >
            <SliderVideo videoSrc="/videos/openphone_s4-1.mp4" />
            <SliderVideo videoSrc="/videos/openphone_s4-2.mp4" />
            <SliderVideo videoSrc="/videos/openphone_s4-3.mp4" />

            {/* <SliderVideoContainer videoId="789439320" size="pb-[29.7vw]" />
            <SliderVideoContainer videoId="789439330" size="pb-[29.7vw]" />
            <SliderVideoContainer videoId="789439313" size="pb-[29.9vw]" /> */}
          </SlickSlider>
        </div>
      </section>
      <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
    </div>
  );
};

export default P4LandingSection;
