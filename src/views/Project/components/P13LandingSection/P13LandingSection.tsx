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
const TwoImage = dynamic(() => import('./components/TwoImage/TwoImage'));

const P13LandingSection = () => {
  useLayoutEffect(() => {
    window.requestAnimationFrame(() => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: '._reveler_slider1',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '._reveler_slider2',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: '._reveler_slider3',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: '._reveler_slider4',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl5 = gsap.timeline({
        scrollTrigger: {
          trigger: '._reveler_slider5',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl6 = gsap.timeline({
        scrollTrigger: {
          trigger: '._reveler_slider6',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl7 = gsap.timeline({
        scrollTrigger: {
          trigger: '._reveler_slider7',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });
      const tl8 = gsap.timeline({
        scrollTrigger: {
          trigger: '._reveler_slider8',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });

      tl1.to('._reveler_slider1', { opacity: 1, y: 0, duration: 2 }, 'start');
      tl2.to('._reveler_slider2', { opacity: 1, y: 0, duration: 2 }, 'start');
      tl3.to('._reveler_slider3', { opacity: 1, y: 0, duration: 2 }, 'start');
      tl4.to('._reveler_slider4', { opacity: 1, y: 0, duration: 2 }, 'start');
      tl5.to('._reveler_slider5', { opacity: 1, y: 0, duration: 2 }, 'start');
      tl6.to('._reveler_slider6', { opacity: 1, y: 0, duration: 2 }, 'start');
      tl7.to('._reveler_slider7', { opacity: 1, y: 0, duration: 2 }, 'start');
      tl8.to('._reveler_slider8', { opacity: 1, y: 0, duration: 2 }, 'start');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* User interface: Mobile App Redesign section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="01"
          title="Design:"
          subTitle="Interactive Prototype"
          body="The interactive prototype is a valuable tool for our team as it allows us to test and refine the design, based on user feedback. It also provides a clear and tangible representation of our design to stakeholders, developers, and other team members. Below, you can try out the app prototype for yourself and experience how Reveler will look and feel once it's fully developed."
        />
        <div className="w-full bg-[#F5F5F5]">
          <div className="w-[390px]  mx-auto">
            <iframe
              className="bg-transparent"
              width="100%"
              height="800"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FEjkhTDYOTu0sfRo6Pz9Yaf%2FREV-REAL-Case-Study%3Fpage-id%3D29%253A26444%26node-id%3D29%253A26889%26viewport%3D3340%252C3047%252C0.51%26scaling%3Dcontain%26starting-point-node-id%3D29%253A26956&hide-ui=1"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* UX: The Process section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="02"
          title="UX:"
          subTitle="The Process"
          body="Our UX design process for Reveler followed a structured approach, consisting of research, ideation, prototyping, design, and delivery."
        />

        <div className="slick_case_slider xl:px-[10%] lg:px-[15%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] _reveler_slider1 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-13/slider-1__111.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-1__222.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-1__333.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-1__4.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-1__5.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Research: User Interview section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="03"
          title="Research:"
          subTitle="User Interview"
          body="We conducted one-on-one interviews with potential users to gather feedback on their event discovery and ticket purchasing experiences. We asked open-ended questions to encourage participants to share their experiences and challenges related to discovering and attending events. This information was used to develop user personas, which provided a deeper understanding of the users' needs, goals, and motivations."
        />
        <SingleImage
          id={1301}
          imgUrl="/images/project/project-13/section-3__1.png"
          bgCss="min-h-[26vw] !translate-y-[1.5%]"
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Research: User Persona section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="04"
          title="Research:"
          subTitle="User Persona"
          body="We created a user persona to provide a better understanding of the app's target audience. Our user persona was based on the insights we gained from our user interviews, surveys, and other research."
        />

        <div className="slick_case_slider xl:px-[20%] lg:px-[20%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] _reveler_slider2 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-13/slider-2__1.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-2__2.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-2__3.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Design: Competitor section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="05"
          title="Design:"
          subTitle="Competitor analysis"
          body="We conducted a competitor analysis to gain a deeper understanding of the market and its players. This analysis involved researching and analyzing other event discovery and ticket purchasing apps to identify their strengths and weaknesses. We examined the features and functionality of competing apps, such as their search capabilities, payment processing systems, and event discovery options. This analysis helped us to identify ways to differentiate Reveler from its competitors and to create a unique value proposition for the app. We also used this analysis to identify gaps in the market that Reveler could fill, such as providing a secure payment processing system for event tickets by accepting Cryptocurrency payments."
        />
        <TwoImage
          id={1300343}
          bgCss="min-h-[53vw]"
          imgTop="/images/project/project-13/section-5__1.png"
          imgBottom="/images/project/project-13/section-5__2.png"
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Research: Information Architecture section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="06"
          title="Research:"
          subTitle="Information Architecture"
          body="To create the information architecture for Reveler, we began by conducting research and user testing to identify the most important features and functions that users needed. We then used this information to develop a sitemap, which provided a visual representation of the app's content hierarchy and organization."
        />
        <SingleImage
          id={13343}
          bgCss="min-h-[60vw]"
          imgUrl="/images/project/project-13/research.png"
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Research: User flow section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="07"
          title="Research:"
          subTitle="User flow"
          body="We created multiple user flows for the app, including an onboarding user flow, a ticket buying flow, and a selling marketplace flow. These user flows were critical to ensuring that Reveler provided a positive user experience for its users. They guided users through the most important features and functions of the app, while also emphasizing its unique features such as its secure payment processing system and ticket selling marketplace."
        />

        <div className="slick_case_slider xl:px-[20%] lg:px-[20%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] _reveler_slider3 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-13/slider-3__1.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-3__2.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-3__3.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Research: User Journey Map section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="08"
          title="Research:"
          subTitle="User Journey Map"
          body="The user journey map included all the touchpoints that a user could have with the app, including the initial download and registration process, the event search and ticket purchasing process, and the ticket selling process. By mapping out these touchpoints, we were able to identify potential pain points and opportunities for improvement."
        />

        <div className="xl:px-[10%] lg:px-[10%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5]">
          <SingleImageSlider src="/images/project/project-13/section-8.png" />
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Design: Typography section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="09"
          title="Design:"
          subTitle="Typography"
          body=" Arimo is a typeface designed by Steve Matteson. It is a humanist sans-serif typeface and it is a part of the larger 'ClearType Font Collection' created by Microsoft. Arimo was designed specifically to be highly readable on mobile screens. The typeface is characterized by its open forms and clean lines, which give it a modern, elegant appearance."
        />

        <SingleImage
          id={1346}
          bgCss="min-h-[20vw]"
          imgUrl="/images/project/project-13/typography.png"
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Design: Color Palette section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="10"
          title="Design:"
          subTitle="Color Palette"
          body="As we know that the end-user of the product is young audience, so we used bright and vibrant colours and gradients. Vibrant colours like Purple Heart, Deep Cerise give users modern and refreshment feeling and encourage them to plan and book an event."
        />
        <SingleImage
          id={13546}
          bgCss="min-h-[20vw]"
          imgUrl="/images/project/project-13/color-palette.png"
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Design: Icon & Button section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="11"
          title="Design:"
          subTitle="Icon & Button"
          body="We used linear geometric icons for Reveler because it's uniform and consistent. The icon set is very legible and has good contrast."
        />
        <SingleImage
          id={13788}
          bgCss="min-h-[60vw]"
          imgUrl="/images/project/project-13/Icon&Button.png"
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Wireframe: Low Fidelity section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="12"
          title="Wireframe:"
          subTitle="Low Fidelity"
          body="We used the wireframes to create a basic layout for each screen in the app, including the home screen, search screen, event details screen, and payment processing screen. We also used the wireframes to plan the app's functionality, such as how users would search for events and purchase tickets."
        />

        <div className="slick_case_slider xl:px-[10%] lg:px-[15%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] _reveler_slider4 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-13/slider-12__1.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-12__2.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-12__3.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-12__4.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-12__5.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-12__6.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-12__7.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-12__8.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-12__9.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-12__10.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-12__11.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-12__12.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Design: Onboarding Screens section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="13"
          title="Design:"
          subTitle="Onboarding Screens"
          body="The onboarding screens are a critical part of the user experience for any app. Our design team developed a simple and visually appealing onboarding process that provided a clear and concise introduction to the app's features and functionality. We used a combination of visual cues, animation, and interactive elements to guide the user through the onboarding process."
        />

        <div className="slick_case_slider xl:px-[10%] lg:px-[15%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] _reveler_slider4 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-13/slider-4__1.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-4__2.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-4__3.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-4__4.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-4__5.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-4__6.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-4__7.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-4__8.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Design: Account Setup section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="14"
          title="Design:"
          subTitle="Account Setup"
          body="Our design team placed great importance on creating an account creation process that was both user-friendly and secure. By designing a simple and intuitive process, we were able to reduce user frustration and increase the likelihood of successful account creation. By implementing secure measures, we ensured that users' personal information and payment details were kept safe and protected."
        />

        <div className="slick_case_slider xl:px-[10%] lg:px-[15%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] _reveler_slider5 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-13/slider-5__1.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-5__2.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-5__3.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-5__4.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-5__5.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-5__6.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-5__7.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-5__8.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-5__9.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Design: Home Screens section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="15"
          title="Design:"
          subTitle="Home Screens"
          body="We designed the home screen to display upcoming events that were relevant to the user's interests. Users could follow their favorite teams, music artists, and event venues, and the app would suggest relevant events based on these preferences. This provided a personalized and relevant event discovery experience for the user, and encouraged them to explore new events and experiences."
        />

        <div className="slick_case_slider xl:px-[10%] lg:px-[15%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] _reveler_slider6 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-13/slider-6__1.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-6__2.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-6__3.webp"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-6__4.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-6__5.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-6__6.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-6__7.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-6__8.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-6__9.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-6__11.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-6__12.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-6__13.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-6__14.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-6__15.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-6__16.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-6__17.webp"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-6__18.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-6__19.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-6__20.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Design: Marketplace section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="16"
          title="Design:"
          subTitle="Marketplace"
          body="We designed the marketplace to be simple and straightforward, with clear instructions and intuitive navigation. We provided users with the ability to list their tickets for sale, set their own prices, and manage their listings. We also provided a bidding system that allowed users to bid on tickets and purchase them at the best available price."
        />

        <div className="slick_case_slider xl:px-[10%] lg:px-[15%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] _reveler_slider7 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-13/slider-7__1.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-7__2.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-7__3.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-7__4.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-7__5.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-7__6.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-7__7.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-7__8.webp"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Design: User Profile section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="17"
          title="Design:"
          subTitle="User Profile"
          body="We also included a social media feature that allowed users to follow and connect with friends to attend events. This feature allowed users to invite their friends to events, share their event experiences, and build their own event community within the app."
        />

        <div className="slick_case_slider xl:px-[10%] lg:px-[15%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] _reveler_slider8 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-13/slider-8__1.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-8__2.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-8__3.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-8__4.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-8__5.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-8__6.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-8__7.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-8__8.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-8__9.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-8__10.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-8__11.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-8__12.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-8__13.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-8__14.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-8__15.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Design: Ticket buy section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="18"
          title="Design:"
          subTitle="Ticket buy"
          body="Our design team placed great importance on creating a user-friendly and secure ticket buying process that would provide a positive user experience for all Reveler users. By providing a seamless and intuitive ticket buying experience, we enabled users to quickly and easily purchase tickets to the events that they were interested in."
        />

        <div className="slick_case_slider xl:px-[10%] lg:px-[15%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] _reveler_slider8 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-13/slider-9__1.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-9__2.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-9__3.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-9__4.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-9__5.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-9__6.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-9__7.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-9__8.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-9__9.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-9__10.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-9__11.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-9__12.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-9__13.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-9__14.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-9__15.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-9__16.png"
            />
            {/* <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-9__17.png"
            /> */}
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-9__18.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-9__19.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-13/slider-9__20.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Project Outcome section */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="19"
          title="Project Outcome"
          subTitle=""
          body="Overall, our design team was successful in creating a user-centered and secure app that met the needs and expectations of our target audience. Reveler provided a seamless and enjoyable user experience, making it easy for users to discover, purchase, and sell event tickets."
        />
        <SingleImage
          id={130975}
          bgCss="min-h-[40vw]"
          imgUrl="/images/project/project-13/project-outcome.png"
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>
    </>
  );
};

export default P13LandingSection;
