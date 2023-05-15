/* eslint-disable @next/next/no-img-element */
import FadeIn from '@components/Animation/FadeIn';
import Image from 'next/image';
import Link from 'next/link';
import bCrop from '../../../assets/B-Corp.svg';
import Button from '../partials/Button';
import SuccessPage from '../partials/SuccessPage';

type Props = {
  setGetStarted: (getStarted: boolean) => void;
  success: boolean;
};

const Main = ({ setGetStarted, success }: Props) => {
  return (
    <>
    {!success ? <FadeIn element="_getStartedMain">
      <div className="grid lg:grid-cols-3 md:items-center gap-20 px-5 md:px-20 h-[95%] mt-24 max-w-[1300px] mx-auto opacity-0 _getStartedMain flex-wrap">
        <div className="max-w-full col-span-1 lg:col-span-2">
          <div className="flex gap-10">
            <div className="grow mt-auto">
                <div className="lg:mt-3">
                  <h2 className="mb-5 font-bold text-[30px] lg:text-[40px] leading-[48px]">
                  Need a partner?
                    <br /> Look no further.
                  </h2>
                  <div className="text-[16px] lg:text-[18px] leading-[32px]">
                  Before starting, understanding your needs and goals is the key <br /> to a successful project. After filling out the short estimate <br /> form, select a time for your free estimation call.
                  </div>
                </div>
            </div>
            <div className="justify-center h-full w-[200px]  md:block lg:hidden hidden">
              <img
                src={"/images/get-started.webp"}
                alt="img"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* get started button */}
            <Button
              text="Get Started"
              css="lg:my-20 my-16"
              onClick={() => setGetStarted(true)}
            />
          <div className="flex justify-center h-[300px] w-full md:hidden">
            <Image
              src={"/images/get-started.webp"}
              alt="img"
              // layout="responsive"
              height={500}
              width={500}
              priority
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="my-14 h-[1px] bg-[#e3e3e3]"></div>
          <div className="flex gap-10 items-center">
            <Image src={bCrop} alt="img" height="82" width="50" priority />
            <span className="max-w-[250px] text-[14px]">
              Committed to using business as a force for good.
            </span>
          </div>
        </div>

        <div className="hidden lg:block h-[600px] w-[370px]">
          <img
            src={"/images/get-started.webp"}
            alt="img"
            className="rounded-lg object-fit"
          />
        </div>
      </div>
    </FadeIn> :
    <SuccessPage/>}
    </>
  );
};

export default Main;