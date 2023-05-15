import dynamic from 'next/dynamic';

// dynamic import
const Hero = dynamic(() => import('./components/Hero/Hero'));
const Together = dynamic(() => import('./components/Together/Together'));
const WorkWithUs = dynamic(() => import('./components/WorkWithUs/WorkWithUs'));
const GetInTouchWhite = dynamic(() => import('./components/GetInTouchWhite.tsx/GetInTouchWhite'));

function WhoWeAre() {
  return (
    <div className="max-w-full overflow-x-hidden">
      <Hero />
      <Together />
      <WorkWithUs />
      <GetInTouchWhite />
    </div>
  );
}

export default WhoWeAre;
