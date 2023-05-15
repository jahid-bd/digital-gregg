import useMobileAccordion from '@hooks/useMobileAccordion';
import { useWhatWeDoToggleId } from '@state/index';
import GetInTouchWhite from '@views/WhoWeAre/components/GetInTouchWhite.tsx/GetInTouchWhite';
import dynamic from 'next/dynamic';
import BixIcon from 'src/icons/BixIcon';
import ChevronRightICon from 'src/icons/ChevronRightICon';

// dynamic import
const Apps = dynamic(() => import('./components/Apps/Apps'));
const ECom = dynamic(() => import('./components/E-com/Ecom'));
const Hero = dynamic(() => import('./components/Hero/Hero'));
const Strategy = dynamic(() => import('./components/Strategy/Strategy'));
const Website = dynamic(() => import('./components/Website/Websites'));
const DescriptionPar = dynamic(
  () => import('./DescriptionPartial/DescriptionPar')
);

function WhaWeDo() {
  const [toggle, setToggleId] = useWhatWeDoToggleId();
  const { mobileAccordion } = useMobileAccordion();

  const handleAccordionToggle = (id: number, i: number) => {
    if (toggle === id) {
      return setToggleId(null);
    }
    setToggleId(id);
    mobileAccordion(id);
  };

  return (
    <div className="lg:overflow-x-hidden lg:max-w-full">
      <Hero />
      <div
        id="what_website"
        className="mt-[8.5rem] md:mt-[8.5rem] lg:mt-0"
      ></div>

      {/* accordion 1 */}
      <div id="website_accordion" className="lg:hidden">
        <div
          onClick={() => handleAccordionToggle(1, 1)}
          className={`${
            toggle === 1 ? 'bg-white' : 'bg-redblack'
          } border-b border-white flex relative overflow-hidden h-[7.64286rem] cursor-pointer`}
        >
          <div
            className={`flex-[0_0_auto] text-[3.57143rem] leading-[.81967em] py-[2.5rem] px-[1rem] text-center w-full max-w-[7.14286rem] font-bold ${
              toggle === 1 ? 'text-primary' : 'text-white'
            }`}
          >
            01
          </div>
          <div
            className={`flex-[1] text-[1.14286rem] leading-[1.1875em] pt-[3rem] pb-[2.5rem] font-semibold ${
              toggle === 1 ? 'text-primary' : 'text-white'
            }`}
          >
            Websites
          </div>

          <div className="flex-[0_0_auto] w-[5.35714rem] relative z-[995]">
            <button
              className={`${
                toggle === 1 ? 'bg-primary' : 'bg-transparent'
              } absolute top-0 left-0 right-0 border-0 h-[7.64286rem] p-0 w-full`}
            >
              {toggle === 1 ? (
                <span className="block text-4xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white">
                  <BixIcon />
                </span>
              ) : (
                <span className="rotate-90 block text-4xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white">
                  <ChevronRightICon />
                </span>
              )}
            </button>
          </div>
        </div>

        {toggle === 1 && (
          <div className="h-auto">
            <div className="relative h-auto lg:py-40 lg:pl-16 w-full grid lg:grid-cols-[53%,47%] grid-cols-1 lg:mt-12">
              <Website
                uniqueIdMob={'websiteMob1'}
                uniqueIdDesk={'websiteDesk1'}
              />
              <DescriptionPar
                title={'Websites'}
                number={'01'}
                description1={`It's getting harder and harder to imagine a world without digital technology. Brands can no longer choose not to be online—they have to be. The focus should be on creating engaging and dynamic digital experiences that are based on data and take into account the brand's values and identity.`}
                description2={`Improve UX and UI, by combining a custom front-end with a back-end that lets you manage content on your own and integrates with the most important sales tools. This is done by using the latest tech that can be changed to meet high standards and is guaranteed to perform for your brand.`}
                optionList={[
                  'Benchmark analysis and audit',
                  'Content strategy',
                  'UX & UI',
                  'Design',
                  'Development',
                ]}
              />
            </div>

            {/* <Help /> */}
          </div>
        )}
      </div>

      {/* desktop  */}
      <div className="lg:block hidden my-[0rem] xl:my-[15rem]"></div>
      <div className="hidden lg:block xl:pt-7 lg:pt-[1px] desktop:mt-24">
        <div
          id="website_desktop"
          className="relative h-[80h] lg:pl-[70px] w-full grid lg:grid-cols-[53%,47%] grid-cols-1 lg:mt-48 xl:mt-12 mb-10"
        >
          <Website
            uniqueIdMob={'websiteMob1'}
            uniqueIdDesk={'websiteDesk1'}
            isDesktop={true}
          />
          <DescriptionPar
            title={'Websites'}
            number={'01'}
            description1={`It's getting harder and harder to imagine a world without digital technology. Brands can no longer choose not to be online—they have to be. The focus should be on creating engaging and dynamic digital experiences that are based on data and take into account the brand's values and identity.`}
            description2={`Improve UX and UI, by combining a custom front-end with a back-end that lets you manage content on your own and integrates with the most important sales tools. This is done by using the latest tech that can be changed to meet high standards and is guaranteed to perform for your brand.`}
            optionList={[
              'Benchmark analysis and audit',
              'Content strategy',
              'UX & UI',
              'Design',
              'Development',
            ]}
            isRight={true}
          />
        </div>
        {/* <Help /> */}
      </div>

      {/* accordion 2 */}
      <div id="apps_accordion" className="lg:hidden">
        <div
          onClick={() => handleAccordionToggle(2, 2)}
          className={`${
            toggle === 2 ? 'bg-white' : 'bg-redblack'
          } border-b border-white flex relative overflow-hidden h-[7.64286rem] cursor-pointer z-[995]`}
        >
          <div
            className={`flex-[0_0_auto] text-[3.57143rem] leading-[.81967em] py-[2.5rem] px-[1rem] text-center w-full max-w-[7.14286rem] font-bold ${
              toggle === 2 ? 'text-primary' : 'text-white'
            }`}
          >
            02
          </div>
          <div
            className={`flex-[1] text-[1.14286rem] leading-[1.1875em] pt-[3rem] pb-[2.5rem] font-semibold ${
              toggle === 2 ? 'text-primary' : 'text-white'
            }`}
          >
            Mobile/Desktop Apps
          </div>
          <div className="flex-[0_0_auto] w-[5.35714rem] relative">
            <button
              className={`${
                toggle === 2 ? 'bg-primary' : 'bg-transparent'
              } absolute top-0 left-0 right-0 border-0 h-[7.64286rem] p-0 w-full`}
            >
              {toggle === 2 ? (
                <span className="block text-4xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white">
                  <BixIcon />
                </span>
              ) : (
                <span className="rotate-90 block text-4xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white">
                  <ChevronRightICon />
                </span>
              )}
            </button>
          </div>
        </div>

        {toggle === 2 && (
          <div className="h-auto">
            <div className="relative h-[80h] lg:py-40 w-full grid lg:grid-cols-[47%,53%] grid-cols-1 lg:pr-14 lg:mt-12">
              {/* <DescriptionPar
                title={'Mobile/Desktop Apps'}
                number={'02'}
                isForDesk={true}
              /> */}
              <Apps uniqueIdMob={'appsMob1'} uniqueIdDesk={'appsDesk1'} />
              <div className="lg:hidden">
                <DescriptionPar
                  title={'Mobile/Desktop Apps'}
                  description1={`To make good apps for mobile devices and desktop computers, you need to design an easy-to-use interface and make sure the apps run smoothly and quickly. Conducting user research to understand the needs and preferences of the target audience, and stay up-to-date with the latest design and development trends is the best practice.`}
                  description2={`Also, take into account the different platform guidelines and constraints (e.g. iOS, Android, Windows) when developing application for both mobile and desktop.`}
                  optionList={[
                    'Application Audit',
                    'iOS, Android, & Windows',
                    'Ux & UI',
                    'Design',
                  ]}
                  number={'02'}
                />
              </div>
            </div>

            {/* <Help /> */}
          </div>
        )}
      </div>

      {/* desktop  */}
      <div className="lg:block hidden my-[17rem] xl:my-[25rem]"></div>
      <div id="desktop_apps" className="hidden lg:block">
        <div className="relative h-[80h] w-full grid lg:grid-cols-[47%,53%] grid-cols-1 lg:pr-14 lg:mt-48 2xl:mt-40 3xl:mt-12 mb-10">
          <DescriptionPar
            title={'Mobile/Desktop Apps'}
            description1={`To make good apps for mobile devices and desktop computers, you need to design an easy-to-use interface and make sure the apps run smoothly and quickly. Conducting user research to understand the needs and preferences of the target audience, and stay up-to-date with the latest design and development trends is the best practice.`}
            description2={`Also, take into account the different platform guidelines and constraints (e.g. iOS, Android, Windows) when developing application for both mobile and desktop.`}
            optionList={[
              'Application Audit',
              'iOS, Android, & Windows',
              'Ux & UI',
              'Design',
            ]}
            number={'02'}
            isForDesk={true}
          />
          <Apps
            uniqueIdMob={'appsMob1'}
            uniqueIdDesk={'appsDesk1'}
            isDesktop={true}
          />
          <div className="lg:hidden">
            <DescriptionPar
              title={'Mobile/Desktop Apps'}
              description1={`To make good apps for mobile devices and desktop computers, you need to design an easy-to-use interface and make sure the apps run smoothly and quickly. Conducting user research to understand the needs and preferences of the target audience, and stay up-to-date with the latest design and development trends is the best practice.`}
              description2={`Also, take into account the different platform guidelines and constraints (e.g. iOS, Android, Windows) when developing application for both mobile and desktop.`}
              optionList={[
                'Application Audit',
                'iOS, Android, & Windows',
                'Ux & UI',
                'Design',
              ]}
              number={'02'}
            />
          </div>
        </div>

        {/* <Help /> */}
      </div>

      {/* accordion 3 */}
      <div id="ecom_accordion" className="lg:hidden">
        <div
          onClick={() => handleAccordionToggle(3, 3)}
          className={`${
            toggle === 3 ? 'bg-white' : 'bg-redblack'
          } border-b border-white flex relative overflow-hidden h-[7.64286rem] cursor-pointer z-[995]`}
        >
          <div
            className={`flex-[0_0_auto] text-[3.57143rem] leading-[.81967em] py-[2.5rem] px-[1rem] text-center w-full max-w-[7.14286rem] font-bold ${
              toggle === 3 ? 'text-primary' : 'text-white'
            }`}
          >
            03
          </div>
          <div
            className={`flex-[1] text-[1.14286rem] leading-[1.1875em] pt-[3rem] pb-[2.5rem] font-semibold ${
              toggle === 3 ? 'text-primary' : 'text-white'
            }`}
          >
            e-Commerce
          </div>
          <div className="flex-[0_0_auto] w-[5.35714rem] relative">
            <button
              className={`${
                toggle === 3 ? 'bg-primary' : 'bg-transparent'
              } absolute top-0 left-0 right-0 border-0 h-[7.64286rem] p-0 w-full`}
            >
              {toggle === 3 ? (
                <span className="block text-4xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white">
                  <BixIcon />
                </span>
              ) : (
                <span className="rotate-90 block text-4xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white">
                  <ChevronRightICon />
                </span>
              )}
            </button>
          </div>
        </div>

        {toggle === 3 && (
          <div className="h-auto">
            <div className="relative h-auto lg:py-40 lg:pl-16 w-full grid lg:grid-cols-[53%,47%] grid-cols-1 lg:mt-12">
              <ECom uniqueIdMob={'ecomMob1'} uniqueIdDesk={'ecoomDesk1'} />
              <DescriptionPar
                title={'e-Commerce'}
                description1={`You'll never get a second chance to make a good first impression. Ask your customers. More than 40% of consumers are willing to spend time on an online store if the shopping experience is personalized for them.`}
                description2={`Because of this, you need to implement interesting and innovative ways to turn users and site visitors into end consumers.`}
                optionList={[
                  'Ecommerce Store Audit',
                  'Content strategy',
                  'Ux & UI',
                  'Design',
                ]}
                number={'03'}
              />
            </div>

            {/* <Help isThirdItem={true} /> */}
          </div>
        )}
      </div>

      {/* desktop */}
      <div className="lg:block hidden my-[17rem] xl:my-[25rem]"></div>
      <div id="desktop_ecom" className="hidden lg:block">
        <div className="relative h-auto lg:pl-[70px] w-full grid lg:grid-cols-[53%,47%] grid-cols-1 lg:mt-48 2xl:mt-40 3xl:mt-12 mb-10">
          <ECom
            uniqueIdMob={'ecomMob1'}
            uniqueIdDesk={'ecoomDesk1'}
            isDesktop={true}
          />
          <DescriptionPar
            title={'e-Commerce'}
            description1={`You'll never get a second chance to make a good first impression. Ask your customers. More than 40% of consumers are willing to spend time on an online store if the shopping experience is personalized for them.`}
            description2={`Because of this, you need to implement interesting and innovative ways to turn users and site visitors into end consumers.`}
            optionList={[
              'Ecommerce Store Audit',
              'Content strategy',
              'Ux & UI',
              'Design',
            ]}
            number={'03'}
            isRight={true}
            isThirdSlider={true}
          />
        </div>

        {/* <Help isThirdItem={true} /> */}
      </div>

      {/* accordion 4 */}
      <div id="strategy_accordion" className="lg:hidden">
        <div
          onClick={() => handleAccordionToggle(4, 4)}
          className={`${
            toggle === 4 ? 'bg-white' : 'bg-redblack'
          }  border-b border-white flex relative overflow-hidden h-[7.64286rem] cursor-pointer z-[995]`}
        >
          <div
            className={`flex-[0_0_auto] text-[3.57143rem] leading-[.81967em] py-[2.5rem] px-[1rem] text-center w-full max-w-[7.14286rem] font-bold ${
              toggle === 4 ? 'text-primary' : 'text-white'
            }`}
          >
            04
          </div>
          <div
            className={`flex-[1] text-[1.14286rem] leading-[1.1875em] pt-[3rem] pb-[2.5rem] font-semibold ${
              toggle === 4 ? 'text-primary' : 'text-white'
            }`}
          >
            Strategy
          </div>
          <div className="flex-[0_0_auto] w-[5.35714rem] relative">
            <button
              className={`${
                toggle === 4 ? 'bg-primary' : 'bg-transparent'
              } absolute top-0 left-0 right-0 border-0 h-[7.64286rem] p-0 w-full`}
            >
              {toggle === 4 ? (
                <span className="block text-4xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white">
                  <BixIcon />
                </span>
              ) : (
                <span className="rotate-90 block text-4xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white">
                  <ChevronRightICon />
                </span>
              )}
            </button>
          </div>
        </div>

        {toggle === 4 && (
          <div className="h-auto">
            <div className="relative h-[80h] lg:py-40 w-full grid lg:grid-cols-[47%,53%] grid-cols-1 lg:pr-14 lg:mt-12">
              <Strategy
                uniqueIdMob={'strategyMob1'}
                uniqueIdDesk={'strategyDesk1'}
              />
              <div className="lg:hidden">
                <DescriptionPar
                  title={'Strategy'}
                  description1={`Creating a UX/UI strategy for your website involves considering the user's needs and goals, and designing the website to meet those needs in the most intuitive and user-friendly way possible. This includes researching your target audience, identifying their pain points and preferences, and creating wireframes and prototypes to test the design. It also involves selecting the appropriate color scheme, typography, and visual elements to enhance the user experience. In such an overcrowded communication landscape, the biggest challenge is finding a unique and distinctive space.`}
                  description2={`Combine strategic thinking with data, ideas, and creative genius helps develop strong relationships between brands and consumers.`}
                  optionList={[
                    'Analysis',
                    'Identifying key concepts',
                    'Breaking down the main messages',
                    'UX Consulting',
                  ]}
                  number={'04'}
                />
              </div>
            </div>

            {/* <Help /> */}
          </div>
        )}
      </div>

      {/* desktop  */}
      <div className="lg:block hidden my-[22rem] xl:my-[30rem]"></div>
      <div id="desktop_strategy" className="hidden lg:block">
        <div className="relative h-[80h] w-full grid lg:grid-cols-[47%,53%] grid-cols-1 lg:pr-14 lg:mt-48 2xl:mt-40 3xl:mt-12 mb-10">
          <DescriptionPar
            title={'Strategy'}
            description1={`Creating a UX/UI strategy for your website involves considering the user's needs and goals, and designing the website to meet those needs in the most intuitive and user-friendly way possible. This includes researching your target audience, identifying their pain points and preferences, and creating wireframes and prototypes to test the design. It also involves selecting the appropriate color scheme, typography, and visual elements to enhance the user experience. In such an overcrowded communication landscape, the biggest challenge is finding a unique and distinctive space.`}
            description2={`Combine strategic thinking with data, ideas, and creative genius helps develop strong relationships between brands and consumers.`}
            optionList={[
              'Analysis',
              'Identifying key concepts',
              'Breaking down the main messages',
              'UX Consulting',
            ]}
            number={'04'}
            isForDesk={true}
          />
          <Strategy
            uniqueIdMob={'strategyMob1'}
            uniqueIdDesk={'strategyDesk1'}
            isDesktop={true}
          />
          <div className="lg:hidden">
            {/* <DescriptionPar title={'Strategy'} number={'04'} /> */}
          </div>
        </div>

        {/* <Help /> */}
      </div>

      <div className="mt-[5rem] md:mt-[10rem] 3xl:mt-[14rem]"></div>
      <GetInTouchWhite />
    </div>
  );
}

export default WhaWeDo;
