import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";

const SlideAnimation = ({ children, element, vars }: any) => {
  const tl = gsap.timeline({
    defaults: { duration: 1.4 },
  });

  useLayoutEffect(() => {
    tl.to(`.${element}`, {
      opacity: 1,
      ...vars,
    });
  }, []);
  return <div>{children}</div>;
};

export default SlideAnimation;
