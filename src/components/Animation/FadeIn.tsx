import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";

const FadeIn = ({ children, element, vars }: any) => {
  const el = useRef(null);
  const tl = gsap.timeline({
    defaults: { duration: 1 },
  });

  useLayoutEffect(() => {
      tl.to(`.${element}`, {
        opacity: 1,
        ...vars,
      });
  }, []);

  return <span ref={el}>{children}</span>;
};

export default FadeIn;