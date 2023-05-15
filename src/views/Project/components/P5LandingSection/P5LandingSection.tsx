import gsap from 'gsap/dist/gsap';
import dynamic from 'next/dynamic';
import { useLayoutEffect } from 'react';

const VideoContainer = dynamic(() => import('../P1LandingSection/VideoContainer/VideoContainer'));
const SectionHeaderCount = dynamic(() => import('../SectionHeaderCount'));
const SlickSlider = dynamic(() => import('../Slider/Slider'));
const SliderVideo = dynamic(() => import('../Slider/SliderVideo'));
const SingleImageContainer = dynamic(() => import('./ImageContainer/SingleImageContainer'));
const S1ImgContainer = dynamic(() => import('./S1ImgContainer/S1ImgContainer'));

interface Props {}

const P5LandingSection = () => {
  const videoData = {
    videoSrc: 'https://vimeo.com/790224972',
    videoThumbnail: '/images/project/project-5/video-thumb-1.png',
  };

  useLayoutEffect(() => {
    window.requestAnimationFrame(() => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: '._blakademik_slider1',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });

      tl1.to(
        '._blakademik_slider1',
        { opacity: 1, y: 0, duration: 2 },
        'start'
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* Section One */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="01"
          title="Design"
          subTitle=""
          body={`We wanted to create a dynamic and engaging layout that would capture the user's attention while also being easy to navigate and use. <br />
          To achieve this, we used a combination of bold imagery, vivid colors, and clear typography to create a visual hierarchy that guides the user through the site..`}
        
        />
        <div className="mt-[16vw] lg:mt-0"></div>
        <VideoContainer data={videoData} isVimeoSrc={true} />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <div>
          <S1ImgContainer
            leftImgUrl="/images/project/project-5/image-2.png"
            rightImgUrl="/images/project/project-5/image-3.png"
            id={501}
          />
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <SingleImageContainer
          imgUrl="/images/project/project-5/image-8.png"
          mobileImgUrl="/images/project/project-5/image-8.png"
          id={502}
          bgCss="min-h-[240vw]"
        />
      </section>
      {/* Secton Two */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="02"
          title="Wireframes"
          subTitle=""
          body="We utilized wireframes as a blueprint for the site's layout and structure, allowing us to experiment with different design concepts and elements before committing to a final design. This approach allowed us to identify and address any potential design issues or navigation problems early in the process, ultimately leading to a more streamlined and user-friendly final product."
        />
        <SingleImageContainer
          imgUrl="/images/project/project-5/image-4.png"
          mobileImgUrl="/images/project/project-5/image-4.png"
          id={503}
          bgCss="min-h-[114vw]"
        />
      </section>
      {/* Section Three */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="03"
          title="Blog Post"
          subTitle=""
          body="During the design process, we identified that the blog section of the website would be a key area of focus, as it was the primary source of traffic for Blakademik. As a result, we made it a priority to create a blog post design that would be engaging and easy to navigate"
        />
        <div className="mt-[16vw] lg:mt-0 "></div>
        <div className="lg:px-[20%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _blakademik_slider1 opacity-0 translate-y-4">
          <SlickSlider
            xxxlShow={1}
            xlShow={1}
            show={1}
            draggable={true}
            move={true}
            swipe={true}
          >
            <SliderVideo videoSrc="/videos/blakademik-slider-1.mp4" />
            <SliderVideo videoSrc="/videos/blakademik-slider-2.mp4" />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>
    </div>
  );
};

export default P5LandingSection;
