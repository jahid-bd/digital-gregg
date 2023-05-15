import GoHome from '@components/GoMore/GoHome';
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import errorDesktop from '../../../../public/imgs/error/Desktop.png';
import errorMobile from '../../../../public/imgs/error/Mobile.png';
import gsap from 'gsap';
import MouseMove from '@components/Animation/MouseMove';

const ErrorMain = () => {
  const circleRef = useRef(null);
  const circleRef2 = useRef(null);

  useEffect(() => {
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.8;

    const xSet = gsap.quickSetter(circleRef.current, "x", "px");
    const ySet = gsap.quickSetter(circleRef.current, "y", "px");
    const xSet2 = gsap.quickSetter(circleRef2.current, "x", "px");
    const ySet2 = gsap.quickSetter(circleRef2.current, "y", "px");

   gsap.set(circleRef.current, { xPercent: -50, yPercent: -50 });
   gsap.set(circleRef2.current, { xPercent: -50, yPercent: -50 });

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    gsap.ticker.add(() => {
      // adjust speed for higher refresh monitors
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
      xSet2(pos.x);
      ySet2(pos.y);
    });
  }, [])
  
    return (
      <div className="page-404-content">
        <div className="grid-row hidden md:block relative md:px-[4rem] lg:px-[5rem] xl:px-[7.4rem]">
          <MouseMove
            style={"h-10 w-10 bg-gray-300 opacity-50"}
            ref={circleRef}
            speed={0.7}
          />
          <MouseMove
            style={"h-1.5 w-1.5 bg-redblack"}
            ref={circleRef}
            speed={0.07}
          />
          <div></div>
          <div>
            <Image
              src={errorDesktop}
              priority
              alt="error page"
              className="h-auto max-w-full"
            />
          </div>
          <div className="content absolute md:top-[25%] xl:top-[20%] xl-top-[26%] left-[63%] xl:left-[63%]">
            <div className="md:text-[1.5rem] xl:text-[3rem] text-white font-bold leading-[1.22em]">
              Oops! <br />
              It seems <br />
              you broke <br />
              the <br />
              internet
            </div>
            <div className="mt-5 group">
              <GoHome />
            </div>
          </div>
        </div>

        <div className="grid-row block px-5 md:hidden relative">
          <div className="content absolute top-[2%] sm:top-[6%] left-[50%] -translate-x-[50%] z-[100]">
            <div className="text-[1.3rem] text-center text-white font-bold leading-[1.22em]">
              Oops! <br />
              It seems you broke <br />
              the internet
            </div>
          </div>
          <div className="z-[90]">
            <Image src={errorMobile} priority alt="error page" height={850} />
          </div>
          <div className="mt-6 absolute bottom-[15%] left-[50%] -translate-x-[50%] z-[100] cursor-pointer group">
            <GoHome />
          </div>
        </div>
      </div>
    );
};

export default ErrorMain;