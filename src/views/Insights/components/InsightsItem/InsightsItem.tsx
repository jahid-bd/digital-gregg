/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { urlFor } from 'src/lib/sanity';

const InsightsItem = ({ data }: any) => {
  return (
    <Link href={`insights/${data?.slug?.current}`}>
      <div className="relative group overflow-hidden lg:w-[39.58333vw] lg:h-[39.58333vw] cursor-pointer">
        <img
          src={data?.thumbnail ? `${urlFor(data?.thumbnail)}` : ''}
          alt="blog"
          width={'100%'}
          height={'100%'}
          className="group-hover:scale-125 duration-300"
        />

        <div className="__blackGradientBg w-full absolute top-0 right-0 left-0 bottom-0 z-[1] block">
          <div className="relative flex flex-col w-full h-full group-hover:bg-primary/75 transition-all duration-500">
            <div className="w-full h-full justify-between grid grid-cols-[repeat(8,_minmax(0,_1fr))_0] grid-rows-[repeat(7,_minmax(0,_1fr))_0] gap-[auto] text-center lg:px-[52px] px-[25px] pt-[30px] z-[2] transition-all duration-500 opacity-0 group-hover:opacity-100">
              {[...Array(72)].map((i) => (
                <div
                  key={'hsfhvseyh_' + i}
                  className="bg-white flex rounded-[50%] w-[2px] h-[2px] "
                ></div>
              ))}
            </div>
            <div className="group-hover:translate-x-[20px] transition-all duration-500 p-5 pt-[30px]">
              <h4 className="xl:text-[14px] text-[12px] tracking-[0.09em] font-semibold leading-[17px] text-white uppercase mb-4">
                {data?.categorry?.length && data?.category[0]}
              </h4>
              <h2 className="xl:text-[24px] sm:text-[20px] text-[18px] font-semibold">
                {data?.title}
              </h2>
              <Link href={`insights/${data?.slug?.current}`} passHref>
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

export default InsightsItem;
