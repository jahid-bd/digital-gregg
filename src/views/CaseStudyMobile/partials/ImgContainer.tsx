/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

type Props = {
  imgSrc: string;
  href?: string;
  css?: string;
  imgCss?: string;
  title?: string;
  desc?: string;
  redSquireCss?: string;
  isFirstBox?: boolean;
};

const ImgContainer = ({
  imgSrc,
  imgCss,
  href,
  css,
  title,
  desc,
  redSquireCss,
  isFirstBox,
}: Props) => {
  return (
    <div className="relative">
      <div className={`${css} group overflow-hidden`}>
        <Link href={href ? href : '#'} passHref>
          <div className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[70%] case-study-overlay">
            <div className="relative">
              <img
                src={imgSrc}
                className={`w-full object-cover group-hover:scale-125 duration-[400ms] ease-in-out  ${
                  imgCss ? imgCss : 'h-full'
                }`}
                alt={title}
              />

              <div className="absolute bottom-0 left-0 h-full w-full group-hover:bg-[rgba(0,0,0,0.6)] duration-[400ms] flex flex-col justify-end z-10">
                <div className="p-[2.14286rem] w-max">
                  <h2 className="text-white font-semibold text-[1.14286rem] md:text-[1.57143rem] lg:text-[1.14286rem] mb-[0.3rem]">
                    {title}
                  </h2>
                  <p className="text-white font-normal text-[1rem] md:text-[1.42857rem] lg:text-[1rem]">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      {redSquireCss && (
        <div
          className={`bg-primary ${
            isFirstBox ? ' w-[48.5vw]' : 'w-[50vw]'
          } h-[50vw] absolute -z-1 ${redSquireCss}`}
        ></div>
      )}
    </div>
  );
};

export default ImgContainer;
