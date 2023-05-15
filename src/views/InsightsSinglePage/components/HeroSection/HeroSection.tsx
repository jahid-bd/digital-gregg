import { useBlogScrollHeight } from '@state/index';
import SubscribeButton from '@views/Insights/components/SubscribeButton';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { urlFor } from 'src/lib/sanity';

const HeroSection = ({ data }: any) => {
  const [isTitleSticky, setisTitleSticky] = useState<boolean>(false);
  const titleRef = useRef<any>(null);
  const progressRef = useRef<any>(null);
  const [scroll, setScroll] = useBlogScrollHeight();
  const [readTime, setReadTime] = useState(0);

  useEffect(() => {
    const contentDiv: any = document.getElementById('blogContents');

    window.onscroll = () => {
      setScroll(
        window.pageYOffset /
          (document.body.offsetHeight - contentDiv?.offsetHeight)
      );

      if (window.pageYOffset >= titleRef?.current?.offsetTop) {
        setisTitleSticky(true);
      }
      if (window.pageYOffset <= titleRef?.current?.offsetTop) {
        setisTitleSticky(false);
      }
      return () => (window.onscroll = null);
    };
  }, []);
  const postDate = new Date(data?._createdAt).toDateString();

  useEffect(() => {
    progressRef.current.style.width = `${scroll * 100}%`;
  }, [scroll]);

  useEffect(() => {
    if (data) {
      const avgWordsPerMin = 200;
      const blogContent = document.getElementById("main_content");

      const wordCount = blogContent?.innerText?.match(/\w+/g)?.length;
      console.log(data);
      //@ts-ignore
      let time = Math.ceil(wordCount / avgWordsPerMin);
      setReadTime(time);
    }
  }, [data]);

  return (
    <div className="bg-[#f5f5f5] lg:px-[70px] md:px-[40px] px-[30px] pt-[90px] pb-[40px]">
      <div className="text-center pb-[30px] w-full">
        <div
          className="flex items-center justify-center text-primary lg:text-[16px] md:text-[14px] text-[12px] leading-5 tracking-[0.09em] font-semibold uppercase gap-[20px]
          "
        >
          {data?.category?.map((item: any, index: number) => (
            <Link href={'/insights'} key={item}>
              <span
                className={`cursor-pointer hover:border-b-[1px] border-b-[1px] border-transparent transition-all duration-300 hover:border-primary ${
                  data?.category?.length - 1 !== index
                    ? "relative after:content-[''] after:bg-redblack after:absolute after:right-[-10px]  after:bottom-0 after:w-[2px] after:h-[13px] after:top-1/2 after:-translate-y-1/2"
                    : ''
                }`}
              >
                {item}
              </span>
            </Link>
          ))}
        </div>
        <div ref={titleRef}>
          <div
            className={`${
              isTitleSticky &&
              'md:fixed top-0 left-0 right-0 z-[98] bg-[#f5f5f5] py-[25px] relative'
            }`}
          >
            <h1
              className={` ${
                isTitleSticky
                  ? 'text-[20px] leading-6 '
                  : 'lg:text-[36px] md:text-[28px] text-[20px] lg:leading-[44px] font-[400] pt-[14px]'
              } `}
            >
              {data?.title}
            </h1>

            <div className="h-[2px] w-full absolute bottom-0 left-0">
              <style>
                {`.__progress {
               width: ${scroll * 100}%
            }`}
              </style>
              <div
                ref={progressRef}
                className={`__progress h-full ${
                  isTitleSticky ? 'md:bg-primary' : ''
                } `}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-[30px] h-[calc(100svh_-_280px)]">
        <img
          src={data?.banner ? `${urlFor(data?.banner)}` : ''}
          alt="banner"
          width={'100%'}
          height={'100%'}
          className="h-full object-cover"
        />
      </div>
      <div>
        <ul className="md:flex  items-center md:justify-between md:grid-cols-none grid grid-cols-2 md:gap-0 gap-[20px] text-center md:px-[50px] md:text-[14px] text-[12px] leading-[17px] tracking-[0.01em] font-[500]">
          <li>
            <div className="flex items-center md:justify-start justify-center md:gap-[12px] gap-[5px]">
              <img
                src={data?.authorImage ? `${urlFor(data?.authorImage)}` : ''}
                alt="Author Avatar"
                className="flex items-center justify-center w-[40px] h-[40px] rounded-[50%]"
              />

              <span>{data?.author}</span>
            </div>
          </li>
          <li>
            <span>{`${postDate.split(' ')[1]} ${postDate.split(' ')[2]}, ${
              postDate.split(' ')[3]
            } `}</span>
          </li>
          <li>
            <span>{readTime} min read</span>
          </li>
          <li>
            <div>
              <SubscribeButton buttonStyle="md:text-[14px] text-[12px] leading-[17px] tracking-[0.01em]" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;
