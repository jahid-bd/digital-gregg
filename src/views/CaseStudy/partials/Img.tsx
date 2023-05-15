/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

type Props = {
    imgSrc: string;
    href?: string;
    css?: string;
    imgCss?: string;
    title?: string;
    desc?: string;
}

const Img = ({ imgSrc, imgCss, href, css, title, desc}: Props) => {
    return (
      <div className={`absolute overflow-hidden group ${css}`}>
        <Link href={href ? href : "#"} passHref>
          <div className="relative z-[1] block bg-transparent after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[70%] case-study-overlay group cursor-pointer">
            <div className="relative bg-black">
              <img
                src={imgSrc}
                className={`w-full object-cover group-hover:scale-125 duration-[400ms] ease-in-out ${
                  imgCss ? imgCss : "h-full"
                }`}
                alt={title}
              />
              {/* <Image src={imgSrc} layout='fill' alt={title} className={`w-full object-cover group-hover:scale-125 duration-[400ms] ease-in-out ${
                  imgCss ? imgCss : "!h-full"
                }`} /> */}

              <div className="absolute bottom-0 left-0 h-full w-full group-hover:bg-[rgba(0,0,0,0.6)] duration-[400ms] flex flex-col justify-end z-10">
                <div className="p-[2.14286rem] w-max">
                  <h2 className="text-white font-semibold text-[1.14286rem] mb-[0.5rem]">
                    {title}
                  </h2>
                  <p className="text-white font-normal text-[1rem]">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
}

export default Img