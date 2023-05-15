import gsap from 'gsap';
import Link from 'next/link';
import { useEffect } from 'react';

type Props = {
  isWhite?: boolean;
  isActiveOverlay?: boolean;
};

const GetStarted = ({ isWhite, isActiveOverlay }: Props) => {
  const OnLoadTimeline = gsap.timeline({
    defaults: { duration: 1.4 },
  });

  useEffect(() => {
    OnLoadTimeline.to('._headerGetStarted', { y: 0, opacity: 1 }, 'start');
  }, []);

  return (
    <>
      <Link href={'/request-estimate'} passHref>
        <a
          href="#"
          aria-label='request estimate page'
          className={`
                ${
                  isWhite
                    ? 'text-white hover:text-white hover:opacity-80 duration-300'
                    : 'text-[#131313] hover:text-primary'
                }  lg:flex items-center hidden h-[70px]
                 text-[.85714rem] font-bold uppercase absolute right-32 z-[9997]  cursor-pointer transition ease-in-out duration-300 z-1 w-max`}
        >
          <span className="opacity-0 -translate-y-6 _headerGetStarted">
            REQUEST ESTIMATE
          </span>
        </a>
      </Link>
    </>
  );
};

export default GetStarted;
