import useWindowDimensions from '@hooks/useWindowDimensions';
import dynamic from 'next/dynamic';

const VideoContainer = dynamic(
  () => import('../P1LandingSection/VideoContainer/VideoContainer')
);
const SectionHeaderCount = dynamic(() => import('../SectionHeaderCount'));
const SlickSlider = dynamic(() => import('../Slider/Slider'));
const SliderContainer = dynamic(() => import('../Slider/SliderContainer'));
const SliderVideo = dynamic(() => import('../Slider/SliderVideo'));
const OnekeyVideo2 = dynamic(() => import('./OnekeyVideo2'));
const OnekeyVideo4 = dynamic(() => import('./OnekeyVideo4'));

const P8LandingSection = () => {
  const { width }: any = useWindowDimensions();
  const mobileScreen = 1024;

  const videoData = {
    videoSrc: 'https://vimeo.com/790229014',
    videoThumbnail: '/images/project/project-8/video-thumb-1.png',
  };
  const videoData2 = {
    videoSrc: 'https://vimeo.com/790228945',
    videoThumbnail: '/images/project/project-8/video-thumb-2.png',
  };
  const videoData3 = {
    videoSrc: 'https://vimeo.com/790230281',
    videoThumbnail: '/images/project/project-8/video-thumb-3.png',
  };
  const videoData4 = {
    videoSrc: 'https://vimeo.com/790230208',
    videoThumbnail: '/images/project/project-8/video-thumb-4.png',
  };
  return (
    <div>
      {/* Section One */}
      <section className="lg:px-20 lg:mb-32 mb-20">
        <SectionHeaderCount
          count="01"
          title="Landing Page"
          subTitle=""
          body="We sought to create a visually striking yet informative experience that immediately conveyed the product's functionality and benefits to the user."
        />
        <VideoContainer data={videoData} isVimeoSrc={true} />
        <div className="mb-24"></div>
        <div className="xl:px-[20%] lg:px-[20%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider">
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
                  ? '/images/project/project-8/image-2.webp'
                  : '/images/project/project-8/mobile/slider1-img0.png'
              }
            />
            <div className="mx-auto !block lg:max-w-[50vw] max-w-[27.14286rem]">
              <div className="relative shadow-[0_0_26px_0_rgb(0_0_0_/_10%)]">
                <div className="__imageRedBorder absolute top-0 left-0 right-0 bg-primary h-[2.5rem] z-[1] rounded-t-[0.42857rem]">
                  <div className="left-[1rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                  <div className="left-[1.8rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                  <div className="left-[2.6rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                </div>
                <video
                  className="pt-[2.4rem] lg:max-w-[50vw] max-w-[27.14286rem] mx-auto object-cover rounded-b-[0.42857rem]"
                  autoPlay
                  muted
                  loop={true}
                  playsInline
                >
                  <source src="/videos/Ecommerce_-_Digital_Gregg.mp4" />
                </video>
              </div>
            </div>
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? '/images/project/project-8/lgs-2.png'
                  : '/images/project/project-8/mobile/slider1-img1.png'
              }
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? '/images/project/project-8/lgs-3.png'
                  : '/images/project/project-8/mobile/slider1-img2.png'
              }
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? '/images/project/project-8/lgs-4.png'
                  : '/images/project/project-8/mobile/slider1-img3.png'
              }
            />
          </SlickSlider>
        </div>
      </section>

      {/* Secton Two */}
      <section className="lg:px-20 lg:mb-32 mb-20">
        <SectionHeaderCount
          count="02"
          title="Ecommerce"
          subTitle="Product Showcase"
          body="We created an eCommerce product showcase page for OneKey's hardware wallets that effectively communicated the product's features and benefits to customers through a visually appealing design. The page was optimized for easy navigation and intuitive user experience, making it simple for users to explore and purchase OneKey's hardware wallet products."
        />
        <OnekeyVideo2 data={videoData2} isVimeoSrc={true} />
      </section>

      {/* Section Three */}
      <section className="lg:px-20 lg:mb-36 mb-20">
        <SectionHeaderCount
          count="03"
          title="Responsive Design"
          subTitle=""
          body="We used a flexible grid system and fluid layouts to ensure that the website could adapt to different screen sizes. We also used responsive design techniques such as media queries to adjust the layout and content based on the user's device."
        />
        <div className="lg:px-[15%] xl:px-[10%] 3xl:px-[10%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider">
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
                  ? '/images/project/project-8/image-6.webp'
                  : '/images/project/project-8/mobile/slider2-img0.png'
              }
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? '/images/project/project-8/image-7.webp'
                  : '/images/project/project-8/mobile/slider2-img1.png'
              }
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? '/images/project/project-8/image-8.webp'
                  : '/images/project/project-8/mobile/slider2-img2.png'
              }
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? '/images/project/project-8/rds-4.png'
                  : '/images/project/project-8/mobile/slider2-img3.png'
              }
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? '/images/project/project-8/rds-5.png'
                  : '/images/project/project-8/mobile/slider2-img4.png'
              }
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc={
                width >= mobileScreen
                  ? '/images/project/project-8/rds-6.png'
                  : '/images/project/project-8/mobile/slider2-img5.png'
              }
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <div className="lg:px-[10rem] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5]">
          <SliderVideo videoSrc="/videos/Responsive_-_Digital_Gregg.mp4" />
        </div>
      </section>

      {/* Section four */}
      <section className="lg:px-20 lg:mb-6 mb-20">
        <SectionHeaderCount
          count="04"
          title="3D Renderings"
          subTitle=""
          body="Our design team worked closely with Dime to develop a 3D rendering concept that effectively communicated the OneKey brand and its services, while providing an interactive and engaging experience for users. We used cutting-edge 3D modeling software and animation techniques to create a visually stunning representation of OneKey's hardware wallet products."
        />
        <div className="mt-[16vw] lg:mt-0"></div>
        <OnekeyVideo4 data={videoData4} isVimeoSrc={true} />

        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <div className="xl:px-[20%] lg:px-[20%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider">
          <SlickSlider
            show={1}
            xxxlShow={1}
            xlShow={1}
            draggable={true}
            move={true}
            swipe={true}
          >
            <SliderVideo videoSrc="/videos/oks1.mp4" />
            <SliderVideo videoSrc="/videos/osk2.mp4" />
            <SliderVideo videoSrc="/videos/osk3.mp4" />
            {/* <SliderVideo videoSrc="/videos/osk4.mp4" /> */}
            <SliderVideo videoSrc="/videos/osk5.mp4" />
            <SliderVideo videoSrc="/videos/osk6.mp4" />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>
    </div>
  );
};

export default P8LandingSection;
