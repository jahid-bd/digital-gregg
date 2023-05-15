import gsap from 'gsap';
import dynamic from 'next/dynamic';
import { useLayoutEffect } from 'react';

const SectionHeaderCount = dynamic(() => import('../SectionHeaderCount'));
const SlickSlider = dynamic(() => import('../Slider/Slider'));
const SliderContainer = dynamic(() => import('../Slider/SliderContainer'));
const SingleImageSlider = dynamic(() => import('../Slider/SingleImageSlider'));
const SingleImage = dynamic(
  () => import('./components/SingleImage/SingleImage')
);
const ThreeImages = dynamic(
  () => import('./components/ThreeImages/ThreeImages')
);

const P11LandingSection = () => {
  useLayoutEffect(() => {
    window.requestAnimationFrame(() => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: '._iDreamers_slider1',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '._iDreamers_slider2',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: '._iDreamers_slider3',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: '._iDreamers_slider4',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl5 = gsap.timeline({
        scrollTrigger: {
          trigger: '._iDreamers_slider5',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl6 = gsap.timeline({
        scrollTrigger: {
          trigger: '._iDreamers_slider6',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl7 = gsap.timeline({
        scrollTrigger: {
          trigger: '._iDreamers_slider7',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl8 = gsap.timeline({
        scrollTrigger: {
          trigger: '._iDreamers_slider8',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl9 = gsap.timeline({
        scrollTrigger: {
          trigger: '._iDreamers_slider9',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl10 = gsap.timeline({
        scrollTrigger: {
          trigger: '._iDreamers_slider10',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl11 = gsap.timeline({
        scrollTrigger: {
          trigger: '._iDreamers_slider11',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl12 = gsap.timeline({
        scrollTrigger: {
          trigger: '._iDreamers_slider12',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });

      tl1.to('._iDreamers_slider1', { opacity: 1, y: 0, duration: 2 }, 'start');
      tl2.to('._iDreamers_slider2', { opacity: 1, y: 0, duration: 2 }, 'start');
      tl3.to('._iDreamers_slider3', { opacity: 1, y: 0, duration: 2 }, 'start');
      tl4.to('._iDreamers_slider4', { opacity: 1, y: 0, duration: 2 }, 'start');
      tl5.to('._iDreamers_slider5', { opacity: 1, y: 0, duration: 2 }, 'start');
      tl6.to('._iDreamers_slider6', { opacity: 1, y: 0, duration: 2 }, 'start');
      tl7.to('._iDreamers_slider7', { opacity: 1, y: 0, duration: 2 }, 'start');
      tl8.to('._iDreamers_slider8', { opacity: 1, y: 0, duration: 2 }, 'start');
      tl9.to('._iDreamers_slider9', { opacity: 1, y: 0, duration: 2 }, 'start');
      tl10.to(
        '._iDreamers_slider10',
        { opacity: 1, y: 0, duration: 2 },
        'start'
      );
      tl11.to(
        '._iDreamers_slider11',
        { opacity: 1, y: 0, duration: 2 },
        'start'
      );
      tl12.to(
        '._iDreamers_slider12',
        { opacity: 1, y: 0, duration: 2 },
        'start'
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* User interface: Interactive Prototype section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="01"
          title="User Interface:"
          subTitle="Interactive Prototype"
          body={`The interactive prototype was created using Figma, enabling us to bring the app's design to life and test its usability in a controlled environment. The prototype allows us to validate our design decisions and gather feedback from potential users before the development of the actual app begins. Try it out yourself below or <span className="text-primary font-bold cursor-pointer">download the app here</span>`}
        />
        <div className="w-full bg-[#F5F5F5]">
          <div className="w-[390px]  mx-auto">
            <iframe
              className="bg-transparent"
              width="100%"
              height="800"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FfVWqhKUyGRq8DpiuV41H9X%2FiDreamer-Redesign%3Fpage-id%3D272%253A2050%26node-id%3D11829%253A496586%26viewport%3D210%252C1596%252C0.02%26scaling%3Dscale-down%26starting-point-node-id%3D11829%253A496656&hide-ui=1"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <div className="slick_case_slider xl:px-[10%] lg:px-[15%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] _iDreamers_slider1 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-11/slider-1__1.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-1__2.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-1__3.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-1__4.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-1__5.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-1__6.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-1__7.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-1__8.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-1__9.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* User interface: Interactive Prototype section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="02"
          title="UX Research:"
          subTitle="Design Process"
          body="The process began with research and analysis, where we conducted user interviews, surveys, and market research to gain insights into the target audience's motivations, behaviors, and preferences. We used this information to identify design opportunities and develop design requirements for the app."
        />

        <div className="slick_case_slider xl:px-[10%] lg:px-[15%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] _iDreamers_slider2 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-11/slider-2__1.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-2__2.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-2__3.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-2__4.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-2__5.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* UX Research: Insights section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="03"
          title="UX Research:"
          subTitle="Insights"
          body="The research insights we gained from our user studies for the iDreamer app allowed us to gain a deep understanding of the needs and desires of our target audience. By evaluating our users' pain points, behaviors, and motivations, we were able to design a solution that specifically addresses their needs and provides a personalized and enjoyable experience."
        />

        <div className="slick_case_slider xl:px-[20%] lg:px-[20%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] _iDreamers_slider3 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-11/slider-3__1.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-3__3.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-3__4.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* UX Research: Insights section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="04"
          title="UX Research:"
          subTitle="Interview Insights"
          body={`Our research interviews with users of the iDreamer app provided valuable insights into their experiences and needs. Through one-on-one conversations and surveys, we gained a deeper understanding of what motivates and inspires our users. <br/> <span className="text-primary font-bold">Note: most interviewees were generation z and millennials</span>`}
        />
        <SingleImage
          id={113345}
          bgCss="min-h-[40vw]"
          imgSrc="/images/project/project-11/interview.png"
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* UX Research: User Personas section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="05"
          title="UX Research:"
          subTitle="User Personas"
          body="We developed user personas to create a better understanding of the target audience's needs, goals, and behaviors. The user personas provided a framework for the design team to empathize with the user and design a solution that meets their needs."
        />
        <SingleImage
          id={11443}
          bgCss="min-h-[52vw]"
          imgSrc="/images/project/project-11/user-personas.png"
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* UX Research: Competitive Audit section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="06"
          title="UX Research:"
          subTitle="Competitive Audit"
          body="The competitive audit for the iDreamers app research involved analyzing the features and user experience of similar apps in the market. The goal was to identify the strengths and weaknesses of these competitors, and to determine how the iDreamers app could differentiate itself and provide a unique and compelling user experience."
        />
        <SingleImage
          id={117865}
          bgCss="min-h-[52vw]"
          imgSrc="/images/project/project-11/competitive-audit.png"
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* UX Research: Empathy Map section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="07"
          title="UX Research:"
          subTitle="Empathy Map"
          body="We created an empathy map as a visual tool used in our research phase to help us understand the experiences, thoughts, feelings, and motivations of the target users by mapping out their perspectives."
        />
        <SingleImage
          id={11005}
          bgCss="min-h-[34vw]"
          imgSrc="/images/project/project-11/EmpathyMap.svg"
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Analysis: Case Statements section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="08"
          title="Analysis:"
          subTitle="Problem Statement"
          body="To design an effective solution for iDreamers, we needed to develop a clear problem statement that articulated the pain points of the target audience and the goals of the app. The problem statement provided a framework for the design team to develop a design solution that addresses the target audience's needs."
        />
        <SingleImage
          id={1100356}
          bgCss="min-h-[38vw]"
          imgSrc="/images/project/project-11/statement.png"
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Quantitative Analysis: Heat mapping section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="09"
          title="Quantitative Analysis:"
          subTitle="Heat mapping"
          body="The Quantitative Analysis Heat mapping process for the idreamer app involves using data and user behavior to visually represent which areas of the app are most frequently used and where users tend to interact the most."
        />
        <SingleImage
          id={1108758}
          bgCss="min-h-[26vw]"
          imgSrc="/images/project/project-11/heat-mapping.png"
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>

        <div className="xl:px-[20%] lg:px-[20%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _iDreamers_slider4 opacity-0 translate-y-4">
          <h3 className="text-[45px] font-medium leading-[50px] text-[#866EE1] mb-[40px] relative z-10 w-[50vw] mx-auto">
            Heatmap Insights
          </h3>

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
              imgSrc="/images/project/project-11/slider-4__1.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-4__2.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-4__3.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-4__4.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Ideation: Design Principles */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="10"
          title="Ideation:"
          subTitle="Design Principles"
          body="These Design Principles for the iDreamer app are a set of guidelines that helped guide us through the ideation and conceptualization process of the app design. These principles also helped us ensure that the app is user-centered and solved real problems for the target audience."
        />

        <div className="xl:px-[10%] lg:px-[15%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _iDreamers_slider5 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-11/slider-5__1.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-5__2.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-5__3.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-5__4.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-5__5.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* UX Research: Project Timeline section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="11"
          title="UX Research:"
          subTitle="Project Timeline"
          body="We started the project by establishing a clear project scope, identifying the key milestones, and creating a project plan. Throughout the project, we communicated effectively, holding regular team meetings to review progress, address issues, and ensure that we were on track to meet our deadlines. We also collaborated closely with the client, seeking their input and feedback at each stage of the design process."
        />
        <SingleImage
          id={111097}
          bgCss="min-h-[38vw]"
          imgSrc="/images/project/project-11/project-timeline.png"
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* UX Research: User Flow section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="12"
          title="UX Research:"
          subTitle="User Flow"
          body="We created a user flow diagram that visualized the user's journey through the app, from initial login to completing their goals. The user flow diagram showed the different screens, features, and interactions required for the user to achieve their goals, such as setting up a profile, sharing their dreams, setting milestones, tracking progress, and connecting with other users."
        />

        <div className="lg:px-[10rem] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5]">
          <SingleImageSlider src="/images/project/project-11/user-flow.svg" />
        </div>

        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* UI Design: Design System section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="13"
          title="UI Design:"
          subTitle="Design System"
          body="We started by selecting a primary color palette that would be used throughout the app. After considering the app's vision, mission, and target audience, we selected purple as the main color. We chose purple as it is a color associated with ambition, creativity, and imagination, aligning with the app's goal of empowering users to pursue their dreams. We then developed a set of secondary colors, typography, icons, and other design elements that would be used to create a consistent and cohesive visual identity."
        />
        <SingleImage
          id={110971}
          bgCss="min-h-[38vw]"
          imgSrc="/images/project/project-11/design-system.png"
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* UI Design: Style Guide section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="14"
          title="UI Design:"
          subTitle="Style Guide"
          body="We started by documenting the design system we had created for the app, which included the color palette, typography, icons, and other design elements. We then defined the design principles and standards that would guide the app's visual design, such as the use of negative space, consistent typography, and clear visual hierarchy."
        />
        <ThreeImages />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* UI Design: High Fidelity Wireframe section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="15"
          title="UI Design:"
          subTitle="High Fidelity Wireframe"
          body="We started by using the low-fidelity wireframes as a starting point. We then iterated on the low-fidelity wireframes to create more detailed and refined designs, incorporating the feedback we had gathered from user testing and the client."
        />

        <div className="xl:px-[10%] lg:px-[15%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _iDreamers_slider6 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-11/slider-6__1.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-6__3.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-6__4.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-6__5.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-6__6.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-6__7.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-6__8.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-6__9.png"
            />
          </SlickSlider>
        </div>
        <div className="xl:px-[10%] lg:px-[15%] lg:pb-[10rem] pb-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _iDreamers_slider7 opacity-0">
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
              imgSrc="/images/project/project-11/slider-7__1.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-7__2.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-7__3.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-7__4.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-7__5.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-7__6.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-7__7.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-7__8.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-7__9.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Visual Design: Onboarding & Sign Up section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="16"
          title="Visual Design:"
          subTitle="Onboarding & Sign Up"
          body="Designing the onboarding and signup process was essential to creating a positive first impression and retaining users for iDreamers. By using a step-by-step approach, gamification techniques, and best practices for security and usability, we were able to create an intuitive and engaging onboarding and signup process that aligns with the app's mission and goals.
          "
        />

        <div className="xl:px-[10%] lg:px-[15%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _iDreamers_slider8 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-11/slider-8__1.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-8__3.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-8__4.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-8__5.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-8__6.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-8__7.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Visual Design: iDreamer Screen section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="17"
          title="Visual Design:"
          subTitle="iDreamer Screen"
          body="We paid close attention to the layout, visual hierarchy, and color scheme, ensuring that the design was easy to navigate and visually appealing. We also ensured that the main screens reflected the user's needs and behaviors, incorporating the user flow and user personas we had developed earlier in the design process."
        />

        <div className="xl:px-[10%] lg:px-[15%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _iDreamers_slider9 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-11/slider-9__1.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-9__3.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-9__4.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-9__5.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-9__6.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-9__7.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-9__8.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-9__9.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-9__10.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-9__11.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-9__12.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Visual Design: Marketplace Screen section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="18"
          title="Visual Design:"
          subTitle="Marketplace Screen"
          body="To ensure that the marketplace screens were user-friendly, we minimized the number of steps required to complete the shopping process, reducing the amount of time and effort required from the user. We also included features such as a search bar and filters to help the user find their desired product quickly.
          To enable brands to sell their products, we included features such as a product management dashboard, order management, and payment processing. These features provided brands with the necessary tools to manage their products and orders effectively."
        />

        <div className="xl:px-[10%] lg:px-[15%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _iDreamers_slider10 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-11/slider-10__1.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-10__3.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-10__4.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-10__5.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-10__6.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-10__7.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-10__8.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-10__9.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-10__10.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-10__11.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-10__12.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-10__13.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Visual Design: Dashboard section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="19"
          title="Visual Design:"
          subTitle="Dashboard"
          body="We also included features to enable brands to manage orders and track their performance, such as order history and analytics. These features provided brands with the necessary tools to manage their sales effectively, enabling them to track their progress and make data-driven decisions."
        />

        <div className="xl:px-[10%] lg:px-[15%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _iDreamers_slider11 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-11/slider-11__1.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__2.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__3.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__4.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__5.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__6.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__7.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__8.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__9.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__10.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__11.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__12.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__13.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__14.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__15.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__16.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__17.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__18.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__19.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__20.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__21.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__22.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__23.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__24.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__25.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__26.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__27.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Visual Design: Dream Wallet & Payment Process section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="20"
          title="Visual Design:"
          subTitle="Dream Wallet & Payment Process"
          body="The Dream Wallet & Payment Process feature of the iDreamer app provides users with a secure and convenient way to manage their finances within the app. This feature allows users to easily view their available funds, make purchases in the marketplace, and fund other “idreamers” dreams."
        />

        <div className="xl:px-[10%] lg:px-[15%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _iDreamers_slider12 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-11/slider-12__1.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-12__2.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-12__3.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-12__4.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-12__5.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-12__6.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-12__7.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-11/slider-11__8.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>
    </>
  );
};

export default P11LandingSection;
