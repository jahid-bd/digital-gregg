import Link from 'next/link';
import { useState } from 'react';

interface PropsTypes {
  imgSrc: string;
  label: string;
  title: string;
  link: string;
}

const InsightsBlogItem = ({ imgSrc, label, title, link }: PropsTypes) => {
  const [hover, setHover] = useState(false);

  return (
    <Link href={link}>
      <div
        className="relative w-full h-full group overflow-hidden cursor-pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={imgSrc}
          alt="blog item"
          width={'100%'}
          height={'100%'}
          className="group-hover:scale-[1.25] overflow-hidden transition-all duration-300"
        />

        <div className="__blackGradientBg w-full absolute top-0 right-0 left-0 bottom-0 z-[1] block">
          <div className="relative flex flex-col w-full h-full group-hover:bg-primary/75 transition-all duration-500">
            <div className="w-full h-full justify-between grid grid-cols-[repeat(5,_minmax(0,_1fr))_0] grid-rows-[repeat(4,_minmax(0,_1fr))_0] gap-[auto] text-center px-[26px] pt-[25px] z-[2] transition-all duration-500 opacity-0 group-hover:opacity-100">
              {[...Array(30)].map((i) => (
                <div
                  key={'ndfhswfsdv_' + i}
                  className="bg-white flex rounded-[50%] w-[2px] h-[2px] "
                ></div>
              ))}
            </div>
            <div className="group-hover:translate-x-[20px] transition-all duration-500 p-5 pt-[25px]">
              <h4 className="md:text-[14px] text-[12px] tracking-[0.09em] leading-[17px] text-white uppercase mb-2">
                {label}
              </h4>
              <h2 className="md:text-[24px] text-[18px] font-semibold leading-[130%] text-white">
                {title.length > 35 ? `${title.slice(0, 35)}...` : title}
              </h2>
              <Link href={link} passHref>
                <a
                  href="#"
                  aria-label="single insight page"
                  className="xl:text-[13px] md:text-[12px] text-[11px] before:h-[3rem] font-[600] bg-transparent inline-block text-white explore-hover relative before:absolute before:content-[''] before:left-[-20px] before:right-[-5.71429rem] before:top-[-12px] before:bottom-[-20px] after:absolute after:content-[''] after:left-[100%] after:top-[calc(50%+4px)] after:h-[2px] after:bg-white after:w-[2.85714rem]  mt-[15px] "
                >
                  Read More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default InsightsBlogItem;
