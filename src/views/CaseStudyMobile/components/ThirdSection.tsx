import Link from 'next/link';
//after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[70%] case-study-overlay

const ThirdSection = () => {
  return (
    <div className="mb-[3rem] pt-[3.57143rem]">
      <div className="pr-[5rem] mb-[3.57143rem]">
        <div className={`group overflow-hidden`}>
          <Link href="/case-study/7" passHref>
            <div className="">
              <div className="relative">
                <video
                  className="w-full h-[82.66667vw] object-cover group-hover:scale-125 duration-[400ms] ease-in-out"
                  autoPlay
                  muted
                  loop={true}
                  playsInline
                >
                  <source src="/videos/widen-hero-mobile.mp4" />
                </video>

                <div className="absolute bottom-0 left-0 h-full w-full group-hover:bg-[rgba(0,0,0,0.6)] duration-[400ms] flex flex-col justify-end z-10">
                  <div className="p-[2.14286rem] w-max">
                    <h2 className="text-white font-semibold text-[1.14286rem] md:text-[1.57143rem] lg:text-[1.14286rem] mb-[0.3rem]">
                      Winden
                    </h2>
                    <p className="text-white font-normal text-[1rem] md:text-[1.42857rem] lg:text-[1rem]">
                      UI/UX Design & Dev
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="">
        <div className={`group overflow-hidden`}>
          <Link href="/case-study/8" passHref>
            <div className="">
              <div className="relative">
                <video
                  className="w-full h-[100vw] object-cover group-hover:scale-125 duration-[400ms] ease-in-out"
                  autoPlay
                  muted
                  loop={true}
                  playsInline
                >
                  <source src="/videos/onekey-hero-mobile.mp4" />
                </video>
                <div className="absolute bottom-0 left-0 h-full w-full group-hover:bg-[rgba(0,0,0,0.6)] duration-[400ms] flex flex-col justify-end z-10">
                  <div className="p-[2.14286rem] w-max">
                    <h2 className="text-white font-semibold text-[1.14286rem] md:text-[1.57143rem] lg:text-[1.14286rem] mb-[0.3rem]">
                      OneKey
                    </h2>
                    <p className="text-white font-normal text-[1rem] md:text-[1.42857rem] lg:text-[1rem]">
                      UI/UX Design
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/* <ImgContainer
          href={"/case-study/8"}
          imgSrc={"/images/home/slider/8-wol.webp"}
          title={"OneKey"}
          imgCss={"h-[100vw]"}
          desc={"UI/UX Design"}
        /> */}
      </div>
      <div>
        <div className="h-[120vw] md:h-[68vw] w-full bg-[#131313] py-[1rem] pl-[0.9rem] pr-[1.2rem]">
          <div className="backgroundWhiteDotsCaseStudyMobile2 lg:backgroundWhiteDotsBlackBgGetInTouchDekstop h-full w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
