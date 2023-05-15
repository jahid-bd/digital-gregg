import gsap from 'gsap';
import dynamic from 'next/dynamic';
import { useLayoutEffect } from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';
import SliderVideo from '../Slider/SliderVideo';

const VideoContainer = dynamic(
  () => import('../P1LandingSection/VideoContainer/VideoContainer')
);
const SectionHeaderCount = dynamic(() => import('../SectionHeaderCount'));
const SlickSlider = dynamic(() => import('../Slider/Slider'));
const SliderContainer = dynamic(() => import('../Slider/SliderContainer'));
const ImgContainer2 = dynamic(() => import('./ImgContainer2/ImgContainer2'));
const ImgContainer3 = dynamic(() => import('./ImgContainer3/ImgContainer3'));
const ImgContainer4 = dynamic(() => import('./ImgContainer4/ImgContainer4'));
const ImgContainer5 = dynamic(() => import('./ImgContainer5/ImgContainer5'));
const ImgContainer6 = dynamic(() => import('./ImgContainer6/ImgContainer6'));
const S6SvgContainer2 = dynamic(
  () => import('./S6ImgContainer2/S6ImgContainer2')
);

const P12LandingSection = () => {
  const videoData = {
    videoSrc: 'https://vimeo.com/791165481',
    videoThumbnail: '/images/project/project-12/video-thumb-1.png',
  };

  useLayoutEffect(() => {
    window.requestAnimationFrame(() => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: '._blackGirl_slider1',
          start: 'top 85%',
        },
        defaults: { duration: 1.4 },
      });

      tl1.to(
        '._blackGirl_slider1',
        { opacity: 1, y: 0, duration: 1.5 },
        'start'
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Section One */}
      <section className="mt-5 lg:mt-0 lg:px-20">
        <SectionHeaderCount
          count="01"
          title="User Interface:"
          subTitle="Website Redesign"
          body="Our primary focus was to create an experience that is intuitive, engaging, and catered to the specific needs of young girls of color in STEM. To achieve this, we followed a user-centered design approach that involved understanding the target audience, conducting research, and incorporating feedback from users.

          "
        />
        <VideoContainer isVimeoSrc={true} data={videoData} />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <div className="3xl:px-[20%] xl:px-[20%] lg:px-[20%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _blackGirl_slider1 opacity-0 translate-y-4">
          <SlickSlider
            show={1}
            draggable={false}
            move={false}
            swipe={false}
            xlShow={1}
            xxxlShow={1}
          >
            <div className="mx-auto !block md:!w-[50vw]">
              <div className="relative">
                <div className="__imageRedBorder absolute top-[-2.4rem] left-0 right-0 bg-primary h-[2.5rem] z-[1] rounded-t-[0.42857rem]">
                  <div className="left-[1rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                  <div className="left-[1.8rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                  <div className="left-[2.6rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                </div>
              </div>
              <ReactCompareSlider
                onlyHandleDraggable
                itemOne={
                  <ReactCompareSliderImage
                    alt="Image one"
                    src="/images/project/project-12/slider-1__2.png"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    alt="Image two"
                    src="/images/project/project-12/slider-1__1.png"
                  />
                }
              />
            </div>
            <div className="mx-auto !block md:!w-[50vw]">
              <div className="relative">
                <div className="__imageRedBorder absolute top-[-2.4rem] left-0 right-0 bg-primary h-[2.5rem] z-[1] rounded-t-[0.42857rem]">
                  <div className="left-[1rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                  <div className="left-[1.8rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                  <div className="left-[2.6rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                </div>
              </div>
              <ReactCompareSlider
                onlyHandleDraggable
                itemOne={
                  <ReactCompareSliderImage
                    alt="Image one"
                    src="/images/project/project-12/slider-1__4.png"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    alt="Image two"
                    src="/images/project/project-12/slider-1__3.png"
                  />
                }
              />
            </div>
            <div className="mx-auto !block md:!w-[50vw]">
              <div className="relative">
                <div className="__imageRedBorder absolute top-[-2.4rem] left-0 right-0 bg-primary h-[2.5rem] z-[1] rounded-t-[0.42857rem]">
                  <div className="left-[1rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                  <div className="left-[1.8rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                  <div className="left-[2.6rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                </div>
              </div>
              <ReactCompareSlider
                onlyHandleDraggable
                itemOne={
                  <ReactCompareSliderImage
                    alt="Image one"
                    src="/images/project/project-12/slider-1__6.png"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    alt="Image two"
                    src="/images/project/project-12/slider-1__5.png"
                  />
                }
              />
            </div>
            <div className="mx-auto !block md:!w-[50vw]">
              <div className="relative">
                <div className="__imageRedBorder absolute top-[-2.4rem] left-0 right-0 bg-primary h-[2.5rem] z-[1] rounded-t-[0.42857rem]">
                  <div className="left-[1rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                  <div className="left-[1.8rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                  <div className="left-[2.6rem] absolute w-[0.42857rem] h-[0.42857rem] rounded-full bg-white top-[50%] translate-y-[-50%]"></div>
                </div>
              </div>
              <ReactCompareSlider
                onlyHandleDraggable
                itemOne={
                  <ReactCompareSliderImage
                    alt="Image one"
                    src="/images/project/project-12/slider-1__8.png"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    alt="Image two"
                    src="/images/project/project-12/slider-1__7.png"
                  />
                }
              />
            </div>
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Section Two */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="02"
          title="UX:"
          subTitle="The Process"
          body="We implemented a comprehensive UX process for Black Girls Code, which involved research, analysis, ideation, design, feedback, and testing, as well as iterations and handoff. By following this process, we ensured that the redesign aligned with the needs and preferences of the target audience, provided an inclusive and empowering user experience, and supported the nonprofit's mission and goals."
        />
        <div className="2xl:px-[12%] xl:px-[10%] lg:px-[15%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _blackGirl_slider1 opacity-0 translate-y-4">
          <SlickSlider
            show={4}
            draggable={true}
            move={true}
            swipe={true}
            xlShow={2}
            xxxlShow={3}
          >
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-12/slider-2__1.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-12/slider-2__2.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-12/slider-2__3.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-12/slider-2__4.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-12/slider-2__5.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-12/slider-2__6.png"
            />
            <SliderContainer
              css="lg:max-w-[312px] max-w-[27.14286rem]"
              imgSrc="/images/project/project-12/slider-2__7.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Section Three */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="03"
          title="Research:"
          subTitle="Insights"
          body="We conducted thorough research by interviewing young girls of color, donors, and volunteers. We also analyzed recent market status to identify trends and opportunities that would motivate visitors to sign up and donate to the nonprofit's cause."
        />
        <div className="lg:px-[10rem] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5]">
          <SliderVideo videoSrc="/videos/Insights.mp4" />
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Section Four */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="04"
          title="Research:"
          subTitle="Interview Insights"
          body="We gained valuable insights into the motivations and concerns of the target audience. Specifically, we found that people are more likely to donate if they see others doing it on social media. Additionally, there was a strong desire to support the Black Lives Matter movement and contribute to organizations that are working to address systemic inequalities. The COVID-19 pandemic and safety concerns around joining protests also led many to prefer donating online and supporting causes while physically separated."
        />
        {/* <SvgContainer1
          id={1200}
          svgComp={<Svg1 />}
          svgCompMob={<MobileSvg1 />}
          imgCss="min-h-[50vh]"
        /> */}
        <ImgContainer4
          id={1200}
          imgUrl="/images/project/project-12/s4-img1.png"
          imgCss="min-h-[50vh]"
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>
      {/* Section Five */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="05"
          title="Research:"
          subTitle="User Personas"
          body={`Although we created 2 user personas, most research and mapping focused on Maya, a doctor who desperately wanted to get involved with the BGC organization, but can’t due the demands of her job and busy schedule. ​Two <span className="text-primary font-bold">I-Statements</span> from our <span className="text-primary font-bold">affinity map</span> would define Diana's needs when it comes to donating to a nonprofit.`}
        />

        <ImgContainer2
          id={1201}
          imgUrl="/images/project/project-12/image-2.png"
          mobImgUrl="/images/project/project-12/mobImg-2.png"
          imgCss="min-h-[50vh]"
        />

        {/* <SvgContainer2
          id={1201}
          svgComp={<Svg2 />}
          svgCompMob={<MobileSvg2 />}
          imgCss={''}
          key={'doiadf'}
        /> */}
        <ImgContainer3
          id={1202}
          imgUrl="/images/project/project-12/image-3.png"
          mobImgUrl="/images/project/project-12/mobImg-3.png"
        />

        {/* <SvgCon3
          key={'dadfa'}
          id={1202}
          svgComp={''}
          svgCompMob={<MobileSvg3 />}
          imgCss={''}
        /> */}
        {/* <SvgContainer2 id={1201} svgComp={<Svg3 />} imgCss={''} /> */}

        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Section Six */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="06"
          title="Research:"
          subTitle="Affinity Map &  “I” Statements"
          body={`Using the affinity map, we identified the pain points and needs of our target audience and categorized them into different groups. We then used "I" statements to describe the experiences of user personas which helped us understand the motivations, challenges, and goals of different types of users.
          `}
        />

        {/* <SvgContainer7 svgComp={<S6Svg1 />} id={12003} imgCss={'px-20'} /> */}
        <ImgContainer4
          id={12003}
          imgUrl="/images/project/project-12/s6-img1.png"
          imgCss="px-20"
        />

        <S6SvgContainer2
          leftImgUrl="/images/project/project-12/s6-img2.png"
          rightImgUrl="/images/project/project-12/s6-img3.png"
          id={120006}
          leftImgCss="pr-9"
          rightImgCss="pl-9"
          bgCss="!h-[85%]"
        />

        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Section Seven */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="07"
          title="Research:"
          subTitle="Competitive Audit"
          body="While non-profits may not have “competitors” within their environment, we were able to gain valuable insights from performing a competitor audit on the websites of similar non-profit organizations"
        />
        <ImgContainer4
          id={1203}
          imgUrl="/images/project/project-12/image-4.png"
          imgCss="min-h-[50vh]"
        />
        {/* <SvgContainer2 id={1203} svgComp={<Svg4 />} /> */}
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>

        <ImgContainer5
          id={1204}
          imgUrl="/images/project/project-12/image-5.png"
          imgCss="min-h-[40vh]"
        />
        {/* <SvgContainer7 id={1204} svgComp={<Svg5 />} /> */}
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <ImgContainer6
          id={1205}
          imgUrl="/images/project/project-12/image-6.png"
          imgCss="min-h-[60vh]"
        />
        {/* <SvgContainer7 id={1205} svgComp={<MobileSvg2 />} /> */}

        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Section Eight */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="08"
          title="Research:"
          subTitle="Context Study"
          body="While conducting our context study we gain a deeper understanding of the user's needs, challenges, and motivations in a real-world setting. We visited Black Girls Code online workshops, events, and other activities to observe the environment and how the target audience interacted with the organization's programs."
        />
        {/* <SvgContainer7
          id={1206}
          svgComp={<Svg7 />}
          imgCss="min-h-[110vh] px-20"
        /> */}
        <ImgContainer5
          id={12006}
          imgUrl="/images/project/project-12/image-7.png"
          imgCss={"min-h-[110vh] px-20"}
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Section Nine */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="09"
          title="Analysis:"
          subTitle="Case Statements"
          body="Our case statements were developed based on the research we conducted, outlining the key challenges faced by Black girls in STEM and the barriers they face in accessing technology education and resources. This informed the executive summary, which provided an overview of the project goals, including the redesign of the Black Girls Code website to create an inclusive and empowering user experience that encourages signups and donations."
        />
        {/* <SvgContainer7
          id={1207}
          svgComp={<Svg8 />}
          imgCss={'px-20 min-h-[45vh]'}
        /> */}
        <ImgContainer5
          id={1207}
          imgUrl="/images/project/project-12/s9-img1.png"
          imgCss="px-20 min-h-[45vh]"
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        {/* <SvgContainer7
          id={1208}
          svgComp={<Svg9 />}
          imgCss={'px-20 min-h-[45vh]'}
        /> */}
        <ImgContainer5
          id={1208}
          imgUrl="/images/project/project-12/s9-img2.png"
          imgCss="px-20 min-h-[45vh]"
        />

        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        {/* <SvgContainer7
          id={1209}
          svgComp={<Svg10 />}
          imgCss={'px-20 min-h-[45vh]'}
        /> */}
        <ImgContainer5
          id={1209}
          imgUrl="/images/project/project-12/s9-img3.png"
          imgCss="px-20 min-h-[45vh]"
        />

        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>
      {/* Section Ten */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="10"
          title="Quantitative Analysis"
          subTitle="Heat mapping"
          body="By using heat maps, we generated visual data that showed us how users were interacting with the website. This information allowed us to identify areas of the interface that were working well and areas that needed improvement. We could see which links and buttons were being clicked on the most and which parts of the page were getting the most attention from users. This gave us insights into different aspects of the user experience and helped us to optimize the design for maximum usability."
        />
        <ImgContainer2
          id={12010}
          imgUrl="/images/project/project-12/s10-img-1.png"
          mobImgUrl="/images/project/project-12/s10-img-1.png"
          imgCss="min-h-[120vh]"
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <ImgContainer3
          id={12012}
          imgUrl="/images/project/project-12/s10-img-2.png"
          mobImgUrl="/images/project/project-12/s10-img-2.png"
          imgCss="min-h-[55vh]"
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <div className="2xl:px-[12%] xl:px-[10%] lg:px-[15%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _blackGirl_slider1 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-12/slider-3__1.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-12/slider-3__2.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-12/slider-3__3.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-12/slider-3__4.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-12/slider-3__5.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Section Eliven */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="11"
          title="Ideation"
          subTitle="Design Principles"
          body={`We developed the design principles of "Second-nature," "Confident," and "Stress-free," to guide our design process. These principles informed every aspect of the design, from the choice of colors and typography to the layout and functionality of the website.`}
        />
        {/* <SvgContainer7
          id={12011}
          svgComp={<S11Svg1 />}
          imgCss={'px-20 min-h-[65vh]'}
        /> */}
        <ImgContainer5
          id={12011}
          imgUrl="/images/project/project-12/s11-img1.png"
          imgCss={"px-20 min-h-[65vh]"}
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Section Twelve */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="12"
          title="Ideation"
          subTitle="UX Feature Narrative"
          body="Our UX feature narrative included detailed descriptions of each feature, the mission, and the benefits to the user. We also included visuals and mockups to help visualize the user experience and make it easier to communicate the design ideas."
        />
        <div className="2xl:px-[12%] xl:px-[10%] lg:px-[15%] lg:py-[10rem] py-[3.92857rem] md:px-[28%] px-[30%] mr-[-5rem] ml-[-5rem] relative m-[0_auto] overflow-hidden list-none z-[1] before:w-[calc(100%-10rem)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[5rem] before:bg-[#F5F5F5] slick_case_slider _blackGirl_slider1 opacity-0 translate-y-4">
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
              imgSrc="/images/project/project-12/slider-4__1.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-12/slider-4__2.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-12/slider-4__3.png"
            />
            <SliderContainer
              css="lg:max-w-[50vw] max-w-[27.14286rem]"
              imgSrc="/images/project/project-12/slider-4__4.png"
            />
          </SlickSlider>
        </div>
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Section tirteen - 13 */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="13"
          title="Ideation"
          subTitle="UX Flow Journey Map"
          body="The UX flow journey map included a visual representation of the user flow, including the different touchpoints, interactions, and decision points that users encounter along the way. It also included information about the user's motivations and goals at each stage of the journey."
        />
        <ImgContainer5
          id={12013}
          imgUrl="/images/project/project-12/s13-img-1.png"
          imgCss="min-h-[80vh]"
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>

      {/* Section fourteen - 14 */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="14"
          title="Ideation"
          subTitle="Card Sorting & Navigation"
          body="The card sorting and site navigation exercises were crucial in helping us to develop a site structure and navigation system that was intuitive and easy to use for the target audience."
        />
        <ImgContainer5
          id={12014}
          imgUrl="/images/project/project-12/s14-img-1.png"
          imgCss="min-h-[58vh]"
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <ImgContainer5
          id={12015}
          imgUrl="/images/project/project-12/s14-img-2.png"
          imgCss="min-h-[35vh]"
        />
        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>
      {/* Section fourteen - 15 */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="15"
          title="Ideation:"
          subTitle="Empathy Mapping"
          body="We used empathy maps to help us visualize and understand the thoughts, feelings, and behaviors of the users. It also helped us develop a deeper understanding of the user's needs and motivations, and to design a user experience that is tailored to those needs."
        />

        <ImgContainer2
          id={12016}
          imgUrl="/images/project/project-12/s15-img-1.png"
          imgCss="min-h-[58vh]"
          mobImgUrl="/images/project/project-12/s15-img-1.png"
        />

        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
      </section>
    </>
  );
};

export default P12LandingSection;
