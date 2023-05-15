/* eslint-disable @next/next/no-img-element */
import GetStarted from '@components/GetStarted/GetStarted';
import WhiteAnnimeLogo from '@components/WhiteAnnimeLogo/WhiteAnnimeLogo';
import useScrollListener from '@hooks/useScroll';
import useWindowDimensions from '@hooks/useWindowDimensions';
import { videoModalOpen } from '@state/index';
import classNames from 'classnames';
import gsap from 'gsap';
import { useAtom } from 'jotai';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LazyLoad from 'react-lazy-load';
import { overlayData } from 'src/constant';
import BlackMainLogo from 'src/icons/Logos/BlackMainLogo';
import WhiteLogo from 'src/icons/Logos/WhiteLogo';
import WhiteLongWhiteDot from 'src/icons/Logos/WhiteLongWhiteDot';
import getInTouchLoettieIcon from '../../../public/imgs/lotties/heart-lootie.json';
import mailLottieIcon from '../../../public/imgs/lotties/message-lottie.json';
import telephoneLottieIcon from '../../../public/imgs/lotties/telephone-lootie.json';
const Lottie = dynamic(() => import('react-lottie-player'));

const MobileRequestEstimate = dynamic(
  () => import('./partials/MobileRequestEstimate')
);
const OverlaySocials = dynamic(() => import('./partials/OverlaySocials'));
const MobileSocials = dynamic(() => import('./partials/MobileSocials'));

function PlaygroundNav() {
  const OnLoadTimeline = gsap.timeline({
    defaults: { duration: 1.4 },
  });

  // States
  const [activeNav, setActiveNav] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayActive, setOverlayActive] = useState<any>(undefined);
  const [telPlay, setTelPlay] = useState(false);
  const [getInplay, setGetInPlay] = useState(false);
  const [mailPlay, setMailPlay] = useState(false);
  const [changeLogo, setChangeLogo] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const scroll = useScrollListener();
  const router = useRouter();
  const encEmail = 'Z3JlZ2dAZGlnaXRhbGdyZWdnLmNvbQ==';
  const encMobile = 'Kzg4MDE4NTEtNTkwNjk0';
  const { width }: any = useWindowDimensions();
  const isBlogPage = router.pathname === '/insights';
  const [videoModalIsOpen, setVideoModalIsOpen] = useAtom(videoModalOpen);

  // Normal Functions
  function handleClick() {
    setShowOverlay((prev) => !prev);
    setActiveNav((prev) => !prev);
  }

  function closeNavOnMenuClick() {
    setActiveNav(false);
    setShowOverlay(false);
  }
  // useLockBodyScroll(showOverlay);

  useEffect(() => {
    OnLoadTimeline.to(
      '._headerNavigationMenu',
      { x: 0, delay: 0.2 },
      'start'
    ).to(
      '._headerLogo',
      {
        x: 0,
      },
      'start'
    );
  }, []);

  // Use Effects
  useEffect(() => {
    showOverlay
      ? document.querySelector('body')?.classList.add('overflow-hidden')
      : document.querySelector('body')?.classList.remove('overflow-hidden');

    if (showOverlay) {
      setTimeout(() => {
        setChangeLogo(true);
      }, 1000);
    } else {
      setChangeLogo(false);

      setTimeout(() => {
        setChangeLogo(false);
      }, 1000);
    }
  }, [showOverlay]);

  // update classList of nav on scroll
  useEffect(() => {
    setShowNav(false);

    if (window.scrollY > 250 && scroll.y - scroll.lastY > 0) setShowNav(true);
    // setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  const sendMail = () => {
    router.push('mailto:'.concat(atob(encEmail)));
  };

  const sendPhone = () => {
    router.push('tel:'.concat(atob(encMobile)));
  };

  return (
    <>
      <div id="TopLogo">
        <Link href="/">
          <a
            href="#"
            aria-label="home page"
            onClick={() => {
              closeNavOnMenuClick();
              setOverlayActive(undefined);
            }}
            className="h-[70px] fixed top-0 left-0 -translate-x-[70px] z-[998] aspect-square flex items-center justify-center _headerLogo"
          >
            {changeLogo ? (
              width >= 1024 ? (
                <WhiteAnnimeLogo />
              ) : (
                <span className={`${
                    showNav
                      ? 'opacity-0 lg:opacity-100 duration-[1.35s] lg:block top-0'
                      : 'opacity-1 duration-[1.35s] lg:block top-0'
                    } relative z-[999] w-[32px] md:w-[2.3rem]`}>
                  <WhiteLogo/>
                </span>
              )
            ) : (
              <>
              <span className={`${
                    showNav
                      ? 'opacity-0 lg:opacity-100 duration-[1.35s]  lg:block top-0'
                      : 'opacity-1 duration-[1.35s] lg:block top-0'
                  } relative z-[999]`}>
              <BlackMainLogo/>
              </span>

                {showOverlay ? (
                  <div
                    className={classNames(
                      'absolute inset-0 bg-redblack w-full h-full',
                      showOverlay
                        ? '-translate-x-full duration-[700ms] delay-[600ms] md:delay-[830ms]'
                        : 'translate-x-0 duration-[200ms]'
                    )}
                  ></div>
                ) : (
                  <div
                    className={classNames(
                      'absolute',
                      showNav
                        ? '-translate-x-20 lg:translate-x-0 duration-700  lg:block top-0 z-[1] absolute inset-0 bg-redblack w-full h-full'
                        : 'translate-x-0 opacity-1 duration-700 lg:block top-0 z-[1] absolute inset-0 bg-redblack w-full h-full'
                    )}
                  ></div>
                )}
              </>
            )}
          </a>
        </Link>
      </div>

      <div
        className={`group ${
          showNav ? '' : 'z-[998]'
        } lg:z-[998] fixed top-0 right-0 _headerNavigationMenu translate-x-[70px] ${
          videoModalIsOpen ? 'invisible' : 'visible'
        }`}
      >
        <button
          className={classNames(
            'group cursor-pointer h-[70px] z-[998] w-[70px] flex items-center justify-center',
            showOverlay ? 'bg-transparent' : 'bg-primary',
            showNav
              ? 'translate-x-20 lg:translate-x-0 duration-700 sticky top-0 z-10'
              : 'translate-x-0 opacity-1 duration-700 sticky top-0 z-10'
          )}
          onClick={handleClick}
          id="header"
          aria-label="Menu Button"
        >
          <div className="relative w-5 h-3.5">
            <span
              className={classNames(
                'absolute top-0 left-0 h-0.5 w-full inline-block bg-white -translate-x-1 duration-[400ms] ease-out group-hover:translate-x-0 group-focus:!translate-x-0',
                activeNav && 'translate-x-0 !top-1/2 -translate-y-1/2 rotate-45'
              )}
            ></span>
            <span
              className={classNames(
                'absolute top-1/2 -translate-y-1/2 left-0 h-0.5 w-full inline-block bg-white translate-x-1 duration-[400ms] ease-out group-hover:translate-x-0 group-focus:translate-x-0',
                activeNav && 'translate-x-0 opacity-0'
              )}
            ></span>
            <span
              className={classNames(
                'absolute bottom-0 left-0 h-0.5 w-full inline-block bg-white -translate-x-1 duration-[400ms] ease-out group-hover:translate-x-0 group-focus:translate-x-0',
                activeNav &&
                  'translate-x-0 !top-1/2 -translate-y-1/2 -rotate-45'
              )}
            ></span>
          </div>
        </button>
      </div>

      {/*Overlay Background*/}
      <div
        className={classNames(
          '__navOverlayBg fixed h-screen w-[100%] z-[997]',
          showOverlay
            ? `${
                isBlogPage
                  ? 'bg-gradient-to-r from-black/90 to-[#373839d6] '
                  : 'bg-gradient-to-r from-primary/90 to-primary/70'
              }  translate-x-0 duration-[1200ms] pointer-events-auto`
            : `${
                isBlogPage
                  ? 'bg-gradient-to-r from-black/90 to-[#373839d6] '
                  : 'bg-gradient-to-r from-primary/90 to-primary/70'
              } translate-x-full duration-[900ms] pointer-events-none`
        )}
      >
        <MobileRequestEstimate />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+52px)] sm:-translate-y-[calc(50%-10px)] md:-translate-y-[calc(50%-20px)] lg:grid lg:grid-cols-[200px,auto] lg:gap-[280px] 2xl:gap-[400px] 3xl:gap-[500px] __overlayGrid">
          <div className="h-full">
            <ul className="flex flex-col h-full items-center lg:items-start">
              {overlayData.map(({ text, url }, i) => {
                return (
                  <Link href={url} passHref key={'yrfgsd_' + i}>
                    <li
                      onClick={() => {
                        setOverlayActive(i);
                        closeNavOnMenuClick();
                      }}
                      className={classNames(
                        'menuItem group text-[1.57143rem] first:mt-0 sm:first:mt-[60px] md:first:mt-[90px] lg:first:mt-0 mb-[2rem] md:mb-[3rem] leading-[35px] md:text-[1.85714rem] md:leading-[1.57692em] text-white landscape:lg:mb-[3rem] landscape:mb-6 landscape:lg:first:mt-0 landscape:first:mt-6',
                        showOverlay
                          ? `translate-x-0 opacity-100 duration-700 __transitionDelay${i} `
                          : '-translate-x-40 opacity-0 duration-[400ms] delay-[0ms]'
                      )}
                    >
                      <a
                        href="#"
                        aria-label={`${text} page`}
                        className={classNames(
                          'relative before:absolute before:bottom-0 before:left-[calc(100%+30px)] inline before:h-0.5 before:duration-300 transition-all before:bg-white lg:group-hover:before:w-20 cursor-pointer',
                          overlayActive === i
                            ? 'lg:before:w-0'
                            : 'lg:before:w-0',
                          router.pathname === url && 'font-bold'
                        )}
                      >
                        {text}
                      </a>
                    </li>
                  </Link>
                );
              })}

              <li className="lg:hidden portrait:block landscape:hidden">
                <MobileSocials showOverlay={showOverlay} />
              </li>
            </ul>
          </div>

          <div
            className={classNames(
              'space-y-5 text-white hidden lg:block',
              showOverlay
                ? 'opacity-100 translate-x-0 delay-[1500ms] duration-700'
                : 'opacity-0 translate-x-40 duration-[400ms]'
            )}
          >
            <div className="relative mb-[24px] flex items-start">
              <WhiteLongWhiteDot/>
            </div>

            {/* <p className="text-sm font-light">
              Strada Padana Superiore 2B 20063 Cernusco sul Naviglio Milan,
              Italy
            </p>
            <p>
              <strong>CF / P.IVA</strong> 05469810963
            </p> */}

            {/* social links */}
            <OverlaySocials />

            <ul className="space-y-2 -ml-1">
              <li
                className="flex items-center cursor-pointer -ml-1"
                onMouseEnter={() => setTelPlay(true)}
                onMouseLeave={() => setTelPlay(false)}
              >
                <a
                  href="#"
                  onClick={sendPhone}
                  className="flex items-center gap-2"
                  aria-label="telephone page"
                >
                  <LazyLoad>
                    <Lottie
                      animationData={telephoneLottieIcon}
                      play={telPlay}
                      speed={0.5}
                      className="w-[40px] h-[40px]"
                      color="blue"
                      loop={telPlay}
                    />
                  </LazyLoad>
                  <span className="font-light">Call by Phone</span>
                </a>
              </li>
              <li
                className="flex items-center cursor-pointer"
                onMouseEnter={() => setGetInPlay(true)}
                onMouseLeave={() => setGetInPlay(false)}
              >
                <Link href={'/request-estimate'} passHref>
                  <a
                    href="#"
                    className="flex items-center gap-2"
                    aria-label="request estimate page"
                  >
                    <LazyLoad>
                      <Lottie
                        animationData={getInTouchLoettieIcon}
                        play={getInplay}
                        speed={0.5}
                        className="w-[40px] h-[40px] text-white"
                        loop={getInplay}
                      />
                    </LazyLoad>
                    <span className="font-light">Get Started</span>
                  </a>
                </Link>
              </li>
              <li
                className="flex items-center cursor-pointer"
                onMouseEnter={() => setMailPlay(true)}
                onMouseLeave={() => setMailPlay(false)}
              >
                <Link href={'/contact-us'}>
                  <a
                    href="#"
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => closeNavOnMenuClick()}
                    aria-label="contact page"
                  >
                    <LazyLoad>
                      <Lottie
                        animationData={mailLottieIcon}
                        play={mailPlay}
                        speed={0.5}
                        className="w-[40px] h-[40px] text-white"
                        loop={mailPlay}
                      />
                    </LazyLoad>
                    <span className="!text-white font-light">Message Us</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`${showOverlay ? 'sticky top-0' : ''} !z-[999]`}>
        <GetStarted
          isWhite={
            router.pathname === '/about' ||
            router.pathname === '/services' ||
            router.pathname === '/_error' ||
            router.pathname === '/insights' ||
            showOverlay
          }
          isActiveOverlay={showOverlay}
        />
      </div>
    </>
  );
}

export default PlaygroundNav;
