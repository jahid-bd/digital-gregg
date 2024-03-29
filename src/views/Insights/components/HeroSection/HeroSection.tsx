import {
  useHeaderHeight,
  useSubscribeModalAtom1,
  useWhatWeDoScrollHeight,
} from '@state/index';
import classNames from 'classnames';
import gsap, { Power2 } from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import { useEffect, useState } from 'react';
import Div100vh from 'react-div-100vh';
gsap.registerPlugin(ScrollToPlugin);

export const OnLoadTimeline = gsap
  .timeline({
    defaults: { duration: 1.4 },
  })
  .pause();

import SubscribeButton from '../SubscribeButton/SubscribeButton';
import HeroGrid1 from './HeroGrid1/HeroGrid1';
import HeroSlider from './HeroSlider';

function HeroSection() {
  // States
  const [headerHeight, setHeaderHeight] = useHeaderHeight();
  const [slideAnimateWidth, setSlideAnimateWidth] = useState<number>(0);
  const [openSubscribeModal, setOpenSubscribeModal] = useSubscribeModalAtom1();

  const OnLoadTimeline1 = gsap.timeline({
    defaults: { duration: 1.4 },
  });
  // .pause();

  // Use Effects
  useEffect(() => {
    const header = document.getElementById('header');
    setHeaderHeight(header?.clientHeight);
  }, [headerHeight]);

  // Jotai
  const [scrollHeight] = useWhatWeDoScrollHeight();

  // Gsap Animations

  useEffect(() => {
    OnLoadTimeline1.to(
      '._topMoreButton',
      { opacity: 1, x: 0, delay: 0.2 },
      'start'
    )
      .to('._heroWhoWEAreName', { x: 0, opacity: 1, delay: 0.2 }, 'start')
      .to(
        '._heroLogo, ._heroDescText',
        { y: 0, opacity: 1, delay: 0.2 },
        'start'
      )
      .to('._heroDownHr', { width: '100%', delay: 0.2 }, 'start')
      .to(
        '.downSliderWrapper',
        {
          ease: Power2.easeOut,
          duration: 1.5,
          delay: 0.3,
          'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        },
        'start'
      )
      .to(
        '.heroControllerSlider',
        {
          ease: Power2.easeOut,
          duration: 1.5,
          delay: 0.3,
          'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        },
        'start'
      )
      .to(
        '._heroGrid1Text1, ._heroGrid1Text2',
        {
          opacity: 1,
          x: 1,
        },
        'start'
      )

      .to('._smallerImageSlider, ._numberSlider', { opacity: 1, x: 0 }, 'start')
      .to('._heroTextSlider', { y: 0, opacity: 1, duration: 0.6 }, 'start');
  }, []);

  return (
    <Div100vh>
      <section
        id="HeroSection"
        className="lg:pl-[70px] h-full lg:pr-[70px] relative _heroSection w-full pb-[70px] md:py-[70px]"
      >
        <div
          id="HeroSlider"
          className="lg:grid 2xl:grid-cols-[35.6%_calc(64.4%-40px)] lg:grid-cols-[35%_calc(65%-40px)] gap-[40px]"
        >
          <HeroGrid1 />
          <HeroSlider setSlideAnimateWidth={setSlideAnimateWidth} />
          <div className="lg:hidden block text-center mt-8 text-lightGray leading-[1.42857em] text-[14px]">
            Stay updated with the latest insights{' '}
            <SubscribeButton buttonStyle="ml-2 text-[13px] leading-4 tracking-[0.14em]" />
          </div>
        </div>

        <div
          onClick={() =>
            gsap.to(window, {
              duration: 0,
              scrollTo: { y: '#TopToDown', offsetY: 130 },
            })
          }
          className={classNames(
            'hidden lg:flex absolute cursor-pointer bottom-0 right-0 md:left-0 text-red bg-primary h-[210px] items-center justify-center w-[70px]',
            '_topMoreButton opacity-0 -translate-x-[70px]'
          )}
        >
          <div className="-rotate-90 -translate-y-10 relative">
            <span
              className={classNames(
                'inline-block w-[70px] h-[0.15rem] bg-white -translate-x-full absolute top-1/2 -left-[70%]',
                '_topMoreButtonLine'
              )}
            ></span>
            <span className="text-white text-[14px] inline-block relative top-[1px]">
              More
            </span>
          </div>
        </div>
      </section>
    </Div100vh>
  );
}

export default HeroSection;
