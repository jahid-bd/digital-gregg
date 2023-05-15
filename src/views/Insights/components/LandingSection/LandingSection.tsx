import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import dynamic from 'next/dynamic';
import { useLayoutEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

  // dynamic import 
  const InsightsItem = dynamic(() => import('../InsightsItem/InsightsItem'));

const LandingSection = ({ posts }: { posts: any }) => {
  useLayoutEffect(() => {
    ScrollTrigger.config({
      autoRefreshEvents: 'visibilitychange, DOMContentLoaded, load, resize',
    });

    if (posts) {
      window.requestAnimationFrame(() => {
        const ProjectScrubTl = gsap.timeline({
          scrollTrigger: {
            trigger: '._insightsTrigger',
            start: '`top 100%',
            end: 'bottom',
            scrub: 0.8,
          },
        });
        ProjectScrubTl.to(
          '._insight',
          {
            y: -400,
            duration: 0.2,
            ease: 'none',
          },
          'start'
        );
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);

  return (
    <div className="pt-[125px] md:px-20 desktop:px-24 px-10" id="TopToDown">
      <div className="grid justify-between lg:grid-cols-2 grid-cols-1 lg:gap-x-14 xl:gap-y-[85px] lg:gap-y-10 gap-y-[85px] _insightsTrigger relative top-36">
        {posts?.map((post: any, key: number) => (
          <div
            key={post.ID}
            className={`${
              key % 2 !== 0 && 'xl:mt-[93px] lg:mt-16 ml-auto'
            } _insight`}
          >
            <InsightsItem data={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingSection;
