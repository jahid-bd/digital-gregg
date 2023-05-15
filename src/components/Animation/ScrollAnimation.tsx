import React, { useLayoutEffect, useRef } from 'react';
import gsap from "gsap/dist/gsap";

const ScrollAnimation = ({ children, vars }: any) => {
    const el = useRef(null);

    useLayoutEffect(() => {
      window.requestAnimationFrame(() => {

      });
      // const ctx = gsap.context(() => {
         gsap.from(el.current, {
          opacity: 0,
          ...vars,
        });
      // });
      // return () => ctx.revert();
    }, []);
  return <div ref={el}>{ children }</div>;
};

export default ScrollAnimation;