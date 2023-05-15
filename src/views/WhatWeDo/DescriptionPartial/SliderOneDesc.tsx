import Link from "next/link";
import React from "react";

type Props = {
  number: string;
  title: string;
  isForDesk?: boolean;
  isRight?: boolean;
  isThirdSlider?: boolean;
  description1?: string;
  description2?: string;
  optionList?: string[];
};

const SliderOneDesc = ({
  number,
  title,
  isForDesk,
  isRight,
  description1,
  description2,
  optionList,
  isThirdSlider,
}: Props) => {
  return (
    <div
      className={`md:items-center flex lg:pl-[7.71429rem] p-[0_3.85714rem] lg:pt-0 mb-[2rem] lg:mb-0 ${
        isForDesk && "lg:flex hidden"
      }`}
    >
      <div className="md:relative md:z-[2]">
        <div
          className={`absolute z-[-1] lg:right-[20%] xl:right-[20%] 2xl:right-[10%] 3xl:-right-[8%] lg:-top-[30%] xl:-top-[60%] 2xl:-top-[70%] 3xl:-top-[65%]  w-full text-[#f8f8f8] font-bold hidden lg:block xl:leading-[450px] lg:leading-[1] xl:text-[32.14286rem] lg:text-[22rem]`}
        >
          {number}
        </div>
        <h3 className="font-bold text-[1.85714rem] leading-[1.23077em] text-[#131313] hidden lg:block 3xl:relative 3xl:-top-10">
          {title}
        </h3>

        <div className="">
          <div className="">
            <p className="text-[#131313] leading-[1.42857em] mt-14 mb-6 lg:max-w-[90%] desktop:max-w-[75%] max-w-full text-[14px]">
              {description1}
            </p>
            <p className="text-[#131313] leading-[1.42857em] mb-6 lg:max-w-[75%] max-w-full text-[14px]">
              {description2}
            </p>

            <ul className="pl-14">
              {optionList?.map((item, i) => (
                <li
                  key={"dsahswfa_" + i}
                  className="text-[#131313] leading-[1.42857em] list-disc text-[14px]"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="hidden group lg:flex gap-6 items-center my-6 group cursor-pointer w-max">
              <Link href="/request-estimate">
                <div
                  className={`flex gap-4 relative contact-border items-center duration-300 ${
                    number === "03" && "contact-b"
                  }`}
                >
                  <span className="text-[.92857rem] group-hover:pl-2 duration-300 leading-5 font-bold text-black">
                    Contact Us
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderOneDesc;
