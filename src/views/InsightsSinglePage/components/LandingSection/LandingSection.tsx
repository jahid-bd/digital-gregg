import useWindowDimensions from '@hooks/useWindowDimensions';
import gsap, { Expo } from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import dynamic from 'next/dynamic';
import { createRef, useEffect, useLayoutEffect, useRef, useState } from 'react';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// dynamic import 
const Contents = dynamic(() => import('../Contents/Contents'));
const DynamicContents = dynamic(() => import('../DynamicContents/DynamicContents'));
const InsightsBlogs = dynamic(() => import('../InsightsBlog/InsightsBlogs'));
const SideNavBar = dynamic(() => import('../SideNavBar/SideNavBar'));

const LandingSection = ({ data }: any) => {
  const [isSideNavSticky, setIsSideNavSticky] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>('');
  const { width }: any = useWindowDimensions();

  const navRef = useRef<any>(null);
  const contentRef = useRef<any>(null);

  const refDefine = useRef<any>(null);

  useLayoutEffect(() => {
    ScrollTrigger.config({
      autoRefreshEvents: 'visibilitychange, DOMContentLoaded, load, resize',
    });

    let contentSection = gsap.utils.toArray('._BlogContent section');
    let sideNav: any = gsap.utils.toArray('._SideNav ul li');

    if (data) {
      window.requestAnimationFrame(() => {
        contentSection.forEach((section: any, i) => {
          ScrollTrigger.create({
            trigger: section,
            start: 'top 100%',
            end: 'bottom 100%',
            onToggle: (self) => {
              if (self.isActive) {
                if (sideNav[i].classList.contains('blog-sideNav-active')) {
                  sideNav[i].classList.remove('blog-sideNav-active');
                }
                sideNav[i].classList.add('blog-sideNav-active');
              } else {
                sideNav[i].classList.remove('blog-sideNav-active');
              }
            },
          });
        });

        sideNav.forEach((el: any, i: any) => {
          // nav link click handling (scroll)
          el.addEventListener('click', (e: any) => {
            e.preventDefault();
            gsap.to(window, {
              duration: 0,
              scrollTo: {
                //@ts-ignore
                y: contentSection[i],
                offsetY: 120,
                ease: Expo,
              },
            });

            for (let i = 0; i < sideNav.length; i++) {
              let prev: any = sideNav;
              if (prev[i].classList.contains('blog-sideNav-active')) {
                prev[i].classList.remove('blog-sideNav-active');
              }
            }
            el.classList.add('blog-sideNav-active');
          });
        });
      });
    }
  }, [data]);

  let sectionRefs: any = {};

  let sectionids: any = {};

  const sectionsData = data?.contents?.map((item: any) => ({
    id: item._key,
    title: item.sectionTitle,
  }));

  sectionsData?.map((item: any, key: number) => {
    sectionids[`section${key}`] = item.id;
  });
  sectionsData?.map((item: any, key: number) => {
    sectionRefs[`section${key}`] = refDefine;
  });

  const allSectionRefs = sectionsData?.map(() => {
    return createRef();
  });

  let sectionView: any = {};

  sectionsData?.map((item: any, key: number) => {
    sectionView[`section${key}`] = false;
  });

  useEffect(() => {
    sectionsData?.length && setActiveLink(sectionsData[0]?.id);
  }, [data?.id]);

  const [mobileNavTitles, setMobileNavTitles] = useState({
    active: '',
    next: '',
    nextId: '',
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0 && width >= 1024) {
        setIsSideNavSticky(true);
      }
      if (
        window.pageYOffset < navRef?.current?.offsetTop ||
        window.pageYOffset > contentRef.current.offsetHeight
      ) {
        setIsSideNavSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="xl:px-[124px] lg:px-[40px] px-[30px]">
      <div id="main_content" className="lg:flex relative">
        <div
          ref={navRef}
          className="pt-0 flex-[0_1_25%] w-[25%] max-w-full z-[1] px-[15px]"
        >
          <div className={`pt-[60px] h-full lg:block hidden`}>
            <div className="lg:sticky xl:left-[124px] lg:left-[60px] top-[120px]">
              <SideNavBar
                sidebarData={sectionsData}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
              />
            </div>
          </div>
        </div>
        <div
          className={`pt-[60px] px-[15px] lg:flex-[0_1_66.66667%] lg:w-[66.66667%] xl:ml-[8%] lg:ml-[5%]`}
          ref={contentRef}
        >
          <div className="hidden">
            <Contents setActiveLink={setActiveLink} sectionRefs={sectionRefs} />
          </div>
          <DynamicContents
            contents={data?.contents}
            setActiveLink={setActiveLink}
            allSectionRefs={allSectionRefs}
          />
        </div>

        <div
          className={`lg:hidden block ${
            activeLink === '#tipsMarketplaces' ? 'hidden' : 'block'
          }`}
        >
          {/* <MobileNav navTitles={mobileNavTitles} /> */}
        </div>
      </div>
      <div className="h-[60px]"></div>
      <div className="my-[100px] feature_blog">
        <InsightsBlogs id={data?._id} />
      </div>
    </div>
  );
};

export default LandingSection;
