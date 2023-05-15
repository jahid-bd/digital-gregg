import { useEffect, useState } from 'react';
import { heroSectionData } from 'src/constant';
import Typewriter from 'typewriter-effect';

function HeroGrid1() {
  const { animatedText, desc, logo } = heroSectionData.grid1;

  const [isTypeWritterPlay, setIsTypeWritterPlay] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsTypeWritterPlay(true);
    }, 1100);
  }, []);

  return (
    <div className="hidden lg:block relative">
      <div className="lg:top-[11.4%] 3xl:top-[12%] lg:transform-none lg:right-0 absolute m-0 p-0 md:left-[3.85714rem]">
        <h4 className="relative pl-[2.85714rem] uppercase text-[.92857rem] tracking-[.13286rem] font-semibold leading-[1.1875em] text-[#131313] my-[1.33em] after:bg-primary after:left-0 after:absolute after:top-[50%] after:translate-y-[-50%] after:h-[2px] after:w-[1.5rem] after:content-[''] -translate-x-8 opacity-0 _heroWhoWEAreName">
          {animatedText}
        </h4>
        <div className="relative top-4 h-auto w-full -translate-y-6 _heroLogo opacity-0">
          {logo}
        </div>
        <h1 className="home_hero_dec md:max-w-[24.5rem] font-[300] mt-[4rem] mb-[5.71429rem] relative tracking-normal leading-[1.22222em] _heroDescText opacity-0 translate-y-8">
          {desc}
        </h1>
      </div>

      <div className="md:left-[3.85714rem] absolute bottom-[5rem] right-0 min-h-[5rem] text-[#4a4a4a] mr-[2rem] before:content-[''] before:left-0 before:right-[4.8rem] desktop:before:right-[3rem] before:h-[1px] before:bg-[#cacaca] before:absolute">
        <div className="absolute left-0 right-0 desktop:top-[50%] desktop:translate-y-[-50%] mt-4 desktop:mt-0">
          <span className="desktop:inline-block relative text-[#4a4a4a] leading-[1.42857em] text-[14px] -translate-x-8 opacity-0 _heroGrid1Text1">
            Now proudly working with
          </span>
          <div className="desktop:inline-block font-semibold text-redblack text-[.92857rem] tracking-[.13286rem] relative uppercase leading-[1.42857em] translate-x-8 opacity-0 _heroGrid1Text2 home_typewriter">
            <Typewriter
              options={{
                strings: [
                  'Urban One',
                  'Verizon',
                  'Ondemand Advisors',
                  'The North Face ',
                  'iDreamers',
                  'Harlem Capital',
                  'Blakademik',
                  'NAACP',
                  'OpenPhone',
                ],
                autoStart: isTypeWritterPlay,
                deleteSpeed: 30,
                delay: 70,
                loop: true,
                cursor: '',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroGrid1;

export async function getStaticProps() {
  return {
    props: {
      items: heroSectionData.grid1,
    },
  };
}
