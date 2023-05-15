/* eslint-disable @next/next/no-img-element */
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import FacebookIcon from 'src/icons/FacebookIcon';
import InstagramIcon from 'src/icons/InstagramIcon';
import LinkedInIcon from 'src/icons/LinkedInIcon';
import MailUnderlineIcon from 'src/icons/MailUnderlineIcon';
import getInTouchLoettieIcon from '../../../public/imgs/lotties/get_in_touch_lottie.json';
import getInTouchLoettieIconWhite from '../../../public/imgs/lotties/heart-lootie.json';
import mailLottieIcon from '../../../public/imgs/lotties/mail_lottie.json';
import mailLottieIconWhite from '../../../public/imgs/lotties/message-lottie.json';
import telephoneLottieIconWhite from '../../../public/imgs/lotties/telephone-lootie.json';
import telephoneLottieIcon from '../../../public/imgs/lotties/telephone_lottie.json';
const Lottie = dynamic(() => import('react-lottie-player'));

import LazyLoad from 'react-lazy-load';
import {
  encPhone,
  facebookUrl,
  footerMiddleItems,
  footerNavigationsItems,
  instagramUrl,
  linkedinUrl,
} from '../../constant';
import WhiteLongLogo from 'src/icons/Logos/WhiteLongLogo';
import BlackLongLogo from 'src/icons/Logos/BlackLongLogo';

function Footer() {
  const [play, setPlay] = useState({
    teliphone: false,
    mail: false,
    getIn: false,
  });

  const router = useRouter();
  const isBlogPage = router.pathname === '/insights';
  const isBlogPages = router.pathname.includes('/insights');

  const phoneCall = () => {
    router.push('tel:'.concat(atob(encPhone)));
  };

  return (
    <footer className={`w-full ${isBlogPage && 'bg-secondary text-white'}`}>
      <div
        onClick={() => window.scrollTo(0, 0)}
        className="hidden cursor-pointer ml-auto text-red bg-primary h-[200px] lg:flex items-center justify-center w-[70px]"
      >
        <div className="-rotate-90 -translate-y-10 relative">
          <span className="text-white font-primary text-[14px] -translate-x-[350%] inline-block relative top-[1px]">
            Top
          </span>
          <span className="inline-block w-[70px] h-0.5 bg-white -translate-x-full absolute top-1/2 left-[150%] rotate-180 _bottomToTop"></span>
        </div>
      </div>

      <div className="lg:hidden h-[70px] w-2.5 bg-primary"></div>
      <div className="flex w-full">
        <div
          className={`order-2 lg:order-none w-[70px] shrink-0 ${
            isBlogPages ? 'lg:bg-redblack bg-primary' : 'bg-primary'
          }`}
        >
          <div className="bg-redblack lg:hidden w-full flex items-center justify-center aspect-square">
            <Link href="/contact-us">
              <span className="text-[27px] cursor-pointer text-white transition ease-in-out duration-300">
                <MailUnderlineIcon />
              </span>
            </Link>
          </div>

          <ul className="text-white py-2 lg:py-5">
            <li className="text-2xl lg:text-[27px] flex items-center justify-center py-3 lg:py-6">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="facebook link"
              >
                <span
                  className={`transition ease-in-out duration-300 ${
                    isBlogPages
                      ? 'lg:hover:text-primary'
                      : 'lg:hover:text-redblack'
                  }`}
                >
                  <FacebookIcon />
                </span>
              </a>
            </li>
            <li className="text-2xl lg:text-[27px] flex items-center justify-center py-3 lg:py-6">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="instragram link"
              >
                <span
                  className={`transition ease-in-out duration-300  ${
                    isBlogPages
                      ? 'lg:hover:text-primary'
                      : 'lg:hover:text-redblack'
                  }`}
                >
                  <InstagramIcon />
                </span>
              </a>
            </li>

            <li className="text-2xl lg:text-[27px] flex items-center justify-center py-3 lg:py-6">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin link"
              >
                <span
                  className={`transition ease-in-out duration-300  ${
                    isBlogPages
                      ? 'lg:hover:text-primary'
                      : 'lg:hover:text-redblack'
                  }`}
                >
                  <LinkedInIcon />
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`order-1 lg:order-none grow grid grid-cols-1 lg:grid-cols-[2fr,3fr,3fr] lg:gap-[20px] xl:gap-[100px] justify-center pl-[30px] lg:pl-[70px] xl:pl-[140px] lg:pt-[45px] pt-[20px] pb-5 lg:pb-[70px] w-full ${
            isBlogPage ? 'bg-secondary' : 'bg-white'
          }`}
        >
          <div className="w-[208px] mb-6 lg:mb-0 flex items-start">
            <Link href={'/'} passHref>
              <a href="#" aria-label="home page">
                {
                  isBlogPage ? <WhiteLongLogo/> : <BlackLongLogo/>
                }
                {/* <Image
                  src={
                    isBlogPage
                      ? '/imgs/logos/DG-Logo-White-Long2.svg'
                      : '/imgs/logos/DG-Logo-Black-Long.svg'
                  }
                  alt="footer logo image"
                  width={1736}
                  height={295}
                /> */}
              </a>
            </Link>
          </div>

          <div className={`mb-6 lg:mb-0 lg:ml-8 xl:ml-0`}>
            <div className="">
              {footerMiddleItems.map(({ lists, title }, i) => {
                return (
                  <div key={'dgfas_' + i}>
                    <h4
                      className={`font-bold text-[13px] leading-[20px]  mb-5 lg:mb-4 ${
                        isBlogPage ? 'text-white' : 'text-black'
                      }`}
                    >
                      {title}
                    </h4>
                    <ul className="space-y-3 footer-middle-list">
                      {lists.map(({ text, url }, i) => {
                        return (
                          <li
                            key={'gdafd_' + i}
                            className="max-w-[250px] lg:w-auto"
                          >
                            {i === 0 ? (
                              <a
                                href={url}
                                aria-label={text}
                                className={`text-[14px] leading-[20px] ${
                                  isBlogPage ? 'text-white' : 'text-[#5A5A5A]'
                                }`}
                                target={'_blank'}
                                rel="noreferrer"
                              >
                                {text}
                              </a>
                            ) : (
                              <span
                                className={`text-[14px] leading-[20px] ${
                                  isBlogPage ? 'text-white' : 'text-[#5A5A5A]'
                                }`}
                              >
                                <Link href={url}>{text}</Link>
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <ul className="lg:space-y-3 space-y-1.5 hidden lg:block">
            <li>
              <a
                href="#"
                // href={`tel:${tel}`}
                aria-label="phone call"
                className="flex items-center gap-6 group cursor-pointer w-max"
                onClick={phoneCall}
                onMouseEnter={() => {
                  setPlay((prev) => ({ ...prev, teliphone: true }));
                }}
                onMouseLeave={() => {
                  setPlay((prev) => ({ ...prev, teliphone: false }));
                }}
              >
                <div className="scale-[1.15]">
                  <LazyLoad>
                    <Lottie
                      animationData={
                        isBlogPage
                          ? telephoneLottieIconWhite
                          : telephoneLottieIcon
                      }
                      play={play.teliphone}
                      speed={0.5}
                      className="w-[40px] h-[40px]"
                      loop={play.teliphone}
                    />
                  </LazyLoad>
                </div>
                <span className="inline-block font-semibold text-[1.14286rem] leading-[20px] group-hover:text-primary transition ease-in-out duration-300">
                  Call by Phone
                </span>
              </a>
            </li>
            <li>
              <Link href={'/contact-us'} passHref>
                <a
                  href="#"
                  aria-label="contact page"
                  className="flex items-center gap-6 group cursor-pointer w-max"
                  onMouseEnter={() => {
                    setPlay((prev) => ({ ...prev, mail: true }));
                  }}
                  onMouseLeave={() => {
                    setPlay((prev) => ({ ...prev, mail: false }));
                  }}
                >
                  <div className="scale-[1.15]">
                    <LazyLoad>
                      <Lottie
                        animationData={
                          isBlogPage ? mailLottieIconWhite : mailLottieIcon
                        }
                        play={play.mail}
                        speed={0.5}
                        className="w-[40px] h-[40px]"
                        loop={play.mail}
                      />
                    </LazyLoad>
                  </div>

                  <span className="inline-block font-semibold text-[1.14286rem] leading-[20px] group-hover:text-primary transition ease-in-out duration-300">
                    Message Us
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href={'/request-estimate'} passHref>
                <a
                  href="#"
                  aria-label="request estimate page"
                  className="flex items-center gap-6 group w-max"
                  onMouseEnter={() => {
                    setPlay((prev) => ({ ...prev, getIn: true }));
                  }}
                  onMouseLeave={() => {
                    setPlay((prev) => ({ ...prev, getIn: false }));
                  }}
                >
                  <div className="scale-[1.15]">
                    <LazyLoad>
                      <Lottie
                        animationData={
                          isBlogPage
                            ? getInTouchLoettieIconWhite
                            : getInTouchLoettieIcon
                        }
                        play={play.getIn}
                        speed={0.5}
                        className="w-[40px] h-[40px]"
                        loop={play.getIn}
                      />
                    </LazyLoad>
                  </div>
                  <span className="inline-block font-semibold text-[1.14286rem] leading-[20px] group-hover:text-primary transition ease-in-out duration-300">
                    Get Started
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`justify-between items-center hidden lg:flex px-[70px] py-12 ${
          isBlogPages ? 'bg-redblack' : 'bg-primary'
        }`}
      >
        <p className="text-[14px] leading-[20px] shrink-0 text-white tracking-[0.07em] w-[30%] xl:30%">
          ©2023. Digital Gregg LLC. All rights reserved.
        </p>

        <nav className="pr-5 xl:pr-[60px] grow flex justify-end">
          <ul className="flex items-center justify-end gap-[26px] xl:gap-8 xl:justify-between xl:w-[90%]">
            {footerNavigationsItems.map(({ path, text }, i) => {
              return (
                <li key={'dgasdg_' + i}>
                  <Link href={path}>
                    <a
                      href="#"
                      aria-label={`${text} page'`}
                      className={`'leading-[20px] text-[1.14286rem] text-white tracking-[0.03em]  transition ease-in-out duration-300 hover:opacity-70`}
                    >
                      {text}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
