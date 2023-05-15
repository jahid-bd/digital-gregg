/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MouseMove = ({ speed, style }: any) => {
  const ref = useRef(null);
  useEffect(() => {
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    const xSet = gsap.quickSetter(ref.current, "x", "px");
    const ySet = gsap.quickSetter(ref.current, "y", "px");

    gsap.set(ref.current, { xPercent: -50, yPercent: -50 });

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
    });
  }, []);

  return (
    <div
      ref={ref}
      className={`fixed top-0 left-0 rounded-full pointer-events-none z-[999] ${style}`}
    ></div>
  );
};

export default MouseMove;