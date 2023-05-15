import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { caseStudyProjectsData } from 'src/constant';
import CaseCounterSection from './components/CaseCounterSection';
import HeroSection from './components/HeroSection';

import dynamic from 'next/dynamic';

const P1LandingPageSection = dynamic(() => import('./components/P1LandingSection/P1LandingPageSection'));
const P2LandingPageSection = dynamic(() => import('./components/P2LandingSection/P2LandingSection'));
const P3LandingPageSection = dynamic(() => import('./components/P3LandingSection/P3LandingSection'));
const P4LandingPageSection = dynamic(() => import('./components/P4LandingSection/P4LandingSection'));
const P5LandingSection = dynamic(() => import('./components/P5LandingSection/P5LandingSection'));
const P6LandingPageSection = dynamic(() => import('./components/P6LandingSection/P6LanidingSection'));
const P7LandingPageSection = dynamic(() => import('./components/P7LandingPageSection/P7LandingPageSection'));
const P8LandingSection = dynamic(() => import('./components/P8LandingSection/P8LandingSection'));
const P9LandingSection = dynamic(() => import('./components/P9LandingSection/P9LandingSection'));
const P10LandingSection = dynamic(() => import('./components/P10LandingSection/P10LandingSection'));
const P11LandingSection = dynamic(() => import('./components/P11LandingSection/P11LandingSection'));
const P12LandingSection = dynamic(() => import('./components/P12LandingSection/P12LandingSection'));
const P13LandingSection = dynamic(() => import('./components/P13LandingSection/P13LandingSection'));


function Project() {
  const router = useRouter();
  const { id }: any = router.query;

  // hooks
  const {
    ref: targetRef,
    inView: isVisible,
    entry,
  } = useInView({
    delay: 900,
    rootMargin: '-50% 0% -50% 0%',
  });

  // states
  const [pageData, setPageData] = useState<any>([]);
  const [nextdata, setNextData] = useState<any>([]);
  const [countdown, setCountdown] = useState(3);

  const allSliderData: any = [];

  caseStudyProjectsData.map((item) => {
    allSliderData.push(item.heroSectionData);
  });

  useEffect(() => {
    setNextData(
      allSliderData.find(
        (item: any) => item.id === (Number(id) === 13 ? 1 : Number(id) + 1)
      )
    );
    setPageData(
      caseStudyProjectsData.find((item: any) => item.id.toString() === id)
    );
  }, [id, allSliderData]);

  useEffect(() => {
    let interval: any;

    if (isVisible && countdown == 0) {
      // @ts-ignore
      router.push(`/case-study/${parseInt(id) === 13 ? 1 : parseInt(id) + 1}`);
      // setCountdown(3);
    }

    if (isVisible) {
      interval = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1200);
    } else {
      setCountdown(3);
    }
    // else {
    //   setTimeout(() => {
    //     setCountdown(3);
    //   }, 3000);
    // }

    return () => {
      clearInterval(interval);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, countdown]);

  return (
    <div className="overflow-x-hidden">
      <HeroSection data={pageData} />
      {id === "1" && (
        <P1LandingPageSection data={pageData?.landingPageSectionData} id={id} />
      )}
      {id === "2" && (
        <P2LandingPageSection data={pageData?.landingPageSectionData} id={id} />
      )}
      {id === "3" && <P3LandingPageSection />}
      {id === "4" && <P4LandingPageSection />}
      {id === "5" && <P5LandingSection />}
      {id === "6" && <P6LandingPageSection />}
      {id === "7" && <P7LandingPageSection />}
      {id === "8" && <P8LandingSection />}
      {id === "9" && <P9LandingSection />}
      {id === "10" && <P10LandingSection />}
      {id === "11" && <P11LandingSection />}
      {id === "12" && <P12LandingSection />}
      {id === "13" && <P13LandingSection />}

      <CaseCounterSection
        data={nextdata}
        countdown={countdown}
        targetRef={targetRef}
        isVisible={isVisible}
        nextUrl={`/case-study/${parseInt(id) === 13 ? 1 : parseInt(id) + 1}`}
      />
    </div>
  );
}

export default Project;
