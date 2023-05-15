import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import dynamic from 'next/dynamic';

const SectionHeaderCount = dynamic(() => import('../SectionHeaderCount'));
const SlickSlider = dynamic(() => import('../Slider/Slider'));
const SliderContainer = dynamic(() => import('../Slider/SliderContainer'));
const SingleImgContainer = dynamic(() => import('./SingleImgContainer/SingleImgContainer'));

const P9LandingSection = () => {

  useLayoutEffect(() => {
    window.requestAnimationFrame(() => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: "._bonsai_slider1",
          start: "top 85%",
        },
        defaults: { duration: 1.4 },
      });
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "._bonsai_slider2",
          start: "top 85%",
        },
        defaults: { duration: 1.4 },
      });
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: "._bonsai_slider3",
          start: "top 85%",
        },
        defaults: { duration: 1.4 },
      });
      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: "._bonsai_slider4",
          start: "top 85%",
        },
        defaults: { duration: 1.4 },
      });

      tl1.to("._bonsai_slider1", { opacity: 1, y: 0, duration: 1.5 }, "start");
      tl2.to("._bonsai_slider2", { opacity: 1, y: 0, duration: 1.5 }, "start");
      tl3.to("._bonsai_slider3", { opacity: 1, y: 0, duration: 1.5 }, "start");
      tl4.to("._bonsai_slider4", { opacity: 1, y: 0, duration: 1.5 }, "start");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* Section One */}
      <section className="mt-5 lg:mt-0 lg:px-20">
        <SectionHeaderCount
          count="01"
          title="Scope"
          subTitle="Tailored Approach"
          body={`Our tailored approach to designing the Bonsai app involved extensive user research and testing to achieve a visually appealing and highly functional design. We prioritized a responsive design approach, incorporating custom illustrations and features such as goal setting and progress tracking for a personalized user experience. By collaborating closely with Bonsai, we ensured that the design effectively captured the brand's values and mission.
          `}
        />
        <SingleImgContainer
          id={901}
          imgUrl="/images/project/project-9/image-1.webp"
          bgCss="min-h-[25vw]"
        />
      </section>

      {/* Secton Two */}
      <section className="lg:px-20">
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <SectionHeaderCount
          count="02"
          title="Project Goals"
          subTitle="KPIs and Challenges faced"
          body=" we established key performance indicators (KPIs) to measure the success of the project. These KPIs included metrics such as user retention rates, app usage frequency, and overall user satisfaction.
          "
        />
        <div className="slick_case_slider xl:px-[10%] 2xl:px-[12%] lg:px-[13%] 3xl:px-[10%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] _bonsai_slider1 opacity-0 translate-y-4">
          <SlickSlider
            show={4}
            xxxlShow={3}
            xlShow={2}
            draggable={true}
            move={true}
            swipe={true}
          >
            <SliderContainer
              css="lg:w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-9/slider-1__1.png"
            />
            <SliderContainer
              css="lg:w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-9/slider-1__2.png"
            />
            <SliderContainer
              css="lg:w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-9/slider-1__3.png"
            />
            <SliderContainer
              css="lg:w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-9/slider-1__4.png"
            />
            <SliderContainer
              css="lg:w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-9/slider-1__5.png"
            />
            <SliderContainer
              css="lg:w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-9/slider-1__6.png"
            />
            <SliderContainer
              css="lg:w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-9/slider-1__7.png"
            />
          </SlickSlider>
        </div>
      </section>

      {/* Section Three */}
      <section className="lg:px-20">
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <SectionHeaderCount
          count="03"
          title="Findings"
          subTitle="Research Outcomes"
          body="Our research revealed that users valued a personalized experience that could adapt to their individual needs and behaviors. They also appreciated a visually appealing design that was intuitive and easy to use. Based on these insights, we incorporated features such as goal setting and progress tracking that could be tailored to individual users, and custom illustrations that effectively communicated the brand's core values and mission."
        />
        <div className="slick_case_slider xl:px-[20%] lg:px-[20%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] _bonsai_slider2 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-9/slider-2__1.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-9/slider-2__2.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-9/slider-2__3.png"
            />
          </SlickSlider>
        </div>
      </section>

      {/* Section four */}
      <section className="lg:px-20">
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <SectionHeaderCount
          count="04"
          title="Branding"
          subTitle="Identity Pillars"
          body="Through custom illustrations and a visually appealing design, we effectively communicated the brand's self-improvement message and raised user awareness. The app's personalized features and innovative approach also reflected the brand's focus on innovation. Finally, the inclusion of features such as goal setting and progress tracking provided guidance to users on their self-improvement journey, effectively capturing the brand's core values and mission."
        />
        <div className="slick_case_slider xl:px-[20%] lg:px-[20%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] _bonsai_slider3 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-9/slider-3__1.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-9/slider-3__2.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-9/slider-3__3.png"
            />
          </SlickSlider>
        </div>

        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <div>
          <SingleImgContainer
            id={906}
            imgUrl="/images/project/project-9/image-5.webp"
            bgCss="min-h-[30vw]"
          />
        </div>

        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <div>
          <SingleImgContainer
            id={907}
            imgUrl="/images/project/project-9/image-6.webp"
            bgCss="min-h-[20vw]"
          />
        </div>
      </section>

      {/* Secton five */}
      <section className="lg:px-20">
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <SectionHeaderCount
          count="05"
          title="Custom Illustrations"
          subTitle=""
          body="Through custom illustrations and a visually appealing design, we effectively communicated the brand's self-improvement message and raised user awareness. The app's personalized features and innovative approach also reflected the brand's focus on innovation. Finally, the inclusion of features such as goal setting and progress tracking provided guidance to users on their self-improvement journey, effectively capturing the brand's core values and mission."
        />
        <SingleImgContainer
          id={908}
          imgUrl="/images/project/project-9/image-7.webp"
          bgCss="min-h-[65vw]"
        />
      </section>

      {/* Secton six */}
      <section className="lg:px-20">
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <SectionHeaderCount
          count="06"
          title="Seamless User Flow"
          subTitle=""
          body="The user flow was designed to be highly functional, with a clear and consistent navigation system that provided easy access to the app's features and functionality. Through a seamless and accessible user flow, we were able to maximize user engagement and retention, effectively communicating the brand's self-improvement message and achieving our project goals."
        />
        <SingleImgContainer
          id={909}
          imgUrl="/images/project/project-9/image-8.webp"
          bgCss="min-h-[75vw]"
        />
      </section>

      {/* Secton seven */}
      <section className="lg:px-20">
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <SectionHeaderCount
          count="07"
          title="Solution"
          subTitle="Powerful MVP model"
          body="The MVP model allowed us to create a highly functional and engaging app in a relatively short timeframe, while also ensuring that the design effectively addressed user needs and pain points. Through a highly iterative approach, we were able to continuously refine the app's design and functionality, delivering a highly personalized and effective user experience."
        />
        <div className="slick_case_slider xl:px-[20%] lg:px-[20%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] _bonsai_slider4 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-9/slider-4_1.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-9/slider-4_2.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-9/slider-4_3.png"
            />
          </SlickSlider>
        </div>
      </section>
      <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
    </div>
  );
};

export default P9LandingSection;
