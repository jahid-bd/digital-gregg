import useWindowDimensions from '@hooks/useWindowDimensions';
import gsap from 'gsap';
import dynamic from 'next/dynamic';
import { useLayoutEffect } from 'react';

const SectionFiveImg = dynamic(() => import('./ImageContainer/SectionFiveImg'));
const SectionNineImg = dynamic(() => import('./ImageContainer/SectionNineImg'));
const SectionThreeImg = dynamic(
  () => import('./ImageContainer/SectionThreeImg')
);
const RapVideoContainer = dynamic(
  () => import('./VideoContainer/VideoContainer')
);
const VideoContainer = dynamic(
  () => import('../P1LandingSection/VideoContainer/VideoContainer')
);
const SectionHeaderCount = dynamic(() => import('../SectionHeaderCount'));
const SlickSlider = dynamic(() => import('../Slider/Slider'));
const SliderContainer = dynamic(() => import('../Slider/SliderContainer'));
const SliderVideo = dynamic(() => import('../Slider/SliderVideo'));

interface Props {}

const P6LandingPageSection = () => {
  const { width }: any = useWindowDimensions();

  const videoData = {
    videoSrc: 'https://vimeo.com/790476232',
    videoThumbnail: '/images/project/project-6/video-thumb-1.png',
  };

  const sectionEightVideo = {
    videoSrc: 'https://vimeo.com/790481088',
    videoThumbnail: '/images/project/project-6/video-8.png',
  };

  useLayoutEffect(() => {
    window.requestAnimationFrame(() => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: '._rapChat_slider1',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '._rapChat_slider2',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: '._rapChat_slider3',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: '._rapChat_slider4',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });

      tl1.to('._rapChat_slider1', { opacity: 1, y: 0, duration: 2 }, 'start');
      tl2.to('._rapChat_slider2', { opacity: 1, y: 0, duration: 2 }, 'start');
      tl3.to('._rapChat_slider3', { opacity: 1, y: 0, duration: 2 }, 'start');
      tl4.to('._rapChat_slider4', { opacity: 1, y: 0, duration: 2 }, 'start');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* Section One */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="01"
          title="Website"
          subTitle=""
          body="Through our user-centered design approach, we created a website that effectively communicates the unique value proposition of Rapchat and encourages users to join the community and start creating music."
        />
        <div className="mt-[16vw] lg:mt-0"></div>
        <VideoContainer data={videoData} isVimeoSrc={true} />

        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Section Two */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="02"
          title="User Personas"
          subTitle=""
          body="Our team created user personas to represent the different types of music artists who might use the Rapchat app. The goal of creating these personas was to gain a better understanding of our target audience and their needs, preferences, and pain points."
        />
        <div className="mt-[16vw] lg:mt-0"></div>
        <div className="lg:px-[10rem] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5]">
          <SliderVideo videoSrc="/videos/RC_User_Personas_-_Digital_Gregg.mp4" />
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Section Three */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="03"
          title="User Flow"
          subTitle=""
          body="We began by defining the main tasks that users would want to accomplish in the app, such as creating a new song, collaborating with other users, or sharing their music on social media. We then mapped out the steps that a user would need to take to complete each task, from selecting the type of music they want to create to adding lyrics, beats, and effects. We also took into consideration the different user personas we had created, and made sure that the user flow accommodated the unique needs and goals of each persona."
        />
        <SectionThreeImg />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Section four */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="04"
          title="Wireframes"
          subTitle=""
          body="We used a combination of pen and paper sketches and digital tools, such as Adobe XD and Sketch. We started with rough sketches to get our initial ideas down on paper, then refined them using digital tools to create more detailed wireframes."
        />

        <div className="slick_case_slider xl:px-[10%] lg:px-[15%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] _rapChat_slider1 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-6/slider-1__1.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-6/slider-1__2.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-6/slider-1__3.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-6/slider-1__4.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-6/slider-1__5.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-6/slider-1__6.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Section five */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="05"
          title="Design system"
          subTitle=""
          body="The design system for Rapchat included a set of standardized colors, typography, icons, and UI components, such as buttons, forms, and modals. We also created guidelines for spacing, sizing, and placement of these components to ensure consistency across the app."
        />
        <SectionFiveImg />
      </section>

      {/* Section six */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="06"
          title="Player View"
          subTitle=""
          body="One of the key features of the Rapchat app is the music player interface, which allows users to listen to their own music as well as discover new music and playlists from other users. To design the music player interface, we drew inspiration from popular music streaming services such as Spotify and Tidal, which are known for their intuitive and engaging interfaces."
        />
        <div className="slick_case_slider xl:px-[10%] 2xl:px-[13%] lg:px-[15%] lg:py-[10rem] py-[3.92857rem] md:px-[30%] px-[27%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] _rapChat_slider2 opacity-0 translate-y-4">
          <SlickSlider
            show={4}
            xxxlShow={3}
            xlShow={2}
            draggable={true}
            move={true}
            swipe={true}
          >
            <div className="relative">
              <div className="__imageRedBorder absolute top-0 left-0 right-0 bg-primary h-[2.5rem] z-[1] rounded-t-[0.42857rem] mx-auto w-[312px]">
                <div className="left-[1rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                <div className="left-[1.8rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                <div className="left-[2.6rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
              </div>
              <video
                className="h-[650px] relative top-[2.4rem] w-[312px] mx-auto object-cover rounded-b-[0.42857rem]"
                autoPlay
                muted
                loop={true}
                playsInline
              >
                <source src="/videos/RC_Player_View_-_Digital_Gregg.mp4" />
              </video>
            </div>
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-6/slider-2__1.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-6/slider-2__2.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-6/slider-2__3.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-6/slider-2__4.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Section seven */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="07"
          title="Recording Studio"
          subTitle=""
          body="To make the recording process as intuitive and user-friendly as possible, we focused on creating a streamlined interface that would allow users to create their songs quickly and easily, with minimal training or expertise. One of the key challenges we faced was how to limit the number of features in the recording studio, while still providing enough functionality for users to create high-quality music tracks."
        />
        <div className="slick_case_slider xl:px-[10%] 2xl:px-[12%] lg:px-[15%] lg:py-[10rem] py-[3.92857rem] md:px-[30%] px-[27%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] _rapChat_slider3 opacity-0 translate-y-4">
          <SlickSlider
            show={4}
            xxxlShow={3}
            xlShow={2}
            draggable={true}
            move={true}
            swipe={true}
          >
            <div className="relative">
              <div className="__imageRedBorder absolute top-0 left-0 right-0 bg-primary h-[2.5rem] z-[1] rounded-t-[0.42857rem] mx-auto w-[312px]">
                <div className="left-[1rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                <div className="left-[1.8rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                <div className="left-[2.6rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
              </div>
              <video
                className="h-[640px] relative top-[2.4rem] w-[312px] mx-auto object-cover rounded-b-[0.42857rem]"
                autoPlay
                muted
                loop={true}
                playsInline
              >
                <source src="/videos/rc_recording_studio (360p).mp4" />
              </video>
            </div>
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-6/slider-3__1.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-6/slider-3__2.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-6/slider-3__3.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-6/slider-3__4.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-6/slider-3__5.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-6/slider-3__6.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-6/slider-3__7.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-6/slider-3__8.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <div className="lg:px-[10rem] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5]">
          <SliderVideo videoSrc="/videos/RC_Post_Track_-_Digital_Gregg.mp4" />
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Section eight */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="08"
          title="User Profile"
          subTitle=""
          body="Rather than being solely focused on utility, the app encourages users to connect and collaborate with one another, fostering a sense of community and support within the platform. To implement the social network feature, we created a series of tools and functionalities that would allow users to interact with each other, share their music, and collaborate on projects."
        />
        <div className="slick_case_slider xl:px-[10%] 2xl:px-[13%] lg:px-[15%] lg:py-[10rem] py-[3.92857rem] md:px-[30%] px-[27%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] _rapChat_slider4 opacity-0 translate-y-4">
          <SlickSlider
            show={4}
            xxxlShow={3}
            xlShow={2}
            draggable={true}
            move={true}
            swipe={true}
          >
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-6/slider-4__1.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-6/slider-4__2.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-6/slider-4__3.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-6/slider-4__4.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-6/slider-4__5.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-6/slider-4__6.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <RapVideoContainer data={sectionEightVideo} isVimeoSrc={true} />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Section Nine */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="09"
          title="Web Application"
          subTitle=""
          body="In addition to designing the mobile app interface, we also took on the task of designing and building a web browser application for the Rapchat platform. The web application allowed users to access the same features and functionality as the mobile app but on their desktop or laptop computers."
        />
        <SectionNineImg />
      </section>
    </div>
  );
};

export default P6LandingPageSection;
