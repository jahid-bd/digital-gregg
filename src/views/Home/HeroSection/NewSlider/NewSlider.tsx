import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import LazyLoad from 'react-lazy-load';
import Slider from 'react-slick';
import { homeSliderData } from 'src/constant/slider';

const NewSlider = () => {
  const [nav1, setNav1] = useState<any>(null);
  const [nav2, setNav2] = useState<any>(null);

  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);

  useEffect(() => {
    setNav1(slider1Ref.current);
    setNav2(slider2Ref.current);
  }, []);

  return (
    <div className="lg:flex-[7] lg:min-w-[1px] relative">
      <div className="">
        <div className="relative overflow-hidden z-[1]">
          <div className="h-[calc(100vh_-_10rem)] overflow-hidden relative">
            <div>
              <Slider asNavFor={nav2} ref={slider1Ref}>
                {homeSliderData.map(
                  ({ imageUrl, linkUrl, imageTitle, videoSrc, id }, i) => {
                    return (
                      <Link
                        key={'dff' + id}
                        href={linkUrl}
                        passHref
                        prefetch={false}
                      >
                        <a
                          href="#"
                          className="inline-block h-full w-full relative slider-overlay"
                          aria-label="case study"
                        >
                          {videoSrc ? (
                            <>
                              <LazyLoad className="h-full w-full object-cover">
                                <video
                                  className="h-full w-full hidden lg:block object-cover"
                                  autoPlay
                                  muted
                                  loop={true}
                                  key={id}
                                  playsInline
                                  preload="none"
                                >
                                  <source src={videoSrc} />
                                </video>
                              </LazyLoad>
                              <div className="block lg:hidden">
                                <LazyLoad>
                                  <Image
                                    width={100}
                                    src={imageUrl}
                                    className="lg:group-hover:scale-125 duration-[400ms] ease-in-out w-full h-full opacity-[0.8]"
                                    alt={imageTitle}
                                    layout="fill"
                                    priority
                                  />
                                </LazyLoad>
                              </div>
                            </>
                          ) : (
                            <LazyLoad>
                              <Image
                                src={imageUrl}
                                className="object-cover block lg:group-hover:scale-125 duration-[400ms] ease-in-out w-full h-full opacity-[0.8]"
                                alt={imageTitle}
                                layout="fill"
                                priority
                              />
                            </LazyLoad>
                          )}
                        </a>
                      </Link>
                    );
                  }
                )}
              </Slider>
            </div>
            <div className="absolute bottom-0 right-0 h-[100px] w-[100px] overflow-hidden">
              <Slider asNavFor={nav1} ref={slider2Ref}>
                {' '}
                <div>
                  <img src="/imgs/Whatwedo-background.png" alt="" />
                </div>
                <div>
                  <img src="/imgs/Whatwedo-background.png" alt="" />
                </div>
                <div>
                  <img src="/imgs/Whatwedo-background.png" alt="" />
                </div>
                <div>
                  <img src="/imgs/Whatwedo-background.png" alt="" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSlider;
