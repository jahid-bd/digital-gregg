import { useEffect, useState } from 'react';

const useSliderAutoplay = (sliderRef: any) => {
  
  const [delayTimer, setDelayTimer] = useState(0);
  const [runInterval, setRunInterval] = useState(true);

  useEffect(() => {
    let interval: any;

    if (runInterval) {
      interval = setInterval(() => {
        setDelayTimer((prev) => (prev += 1));
      }, 1000);
    }

    if (delayTimer === 6) {
      setDelayTimer(0);
      sliderRef.current.swiper.slideNext();
    }

    return () => {
      clearInterval(interval);
    };
  }, [runInterval, delayTimer, sliderRef]);

  const pauseAutoplay = () => {
    setRunInterval(false);
  };

  const resumeAutoplay = () => {
    setRunInterval(true);
  };

  const resetDelayTimer = () => {
    setDelayTimer(0);
  };

  return { pauseAutoplay, resumeAutoplay, resetDelayTimer };
};

export default useSliderAutoplay;
