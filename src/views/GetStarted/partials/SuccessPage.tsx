import FadeIn from '@components/Animation/FadeIn';
import Image from 'next/image';
import Link from 'next/link';
import bCrop from '../../../assets/B-Corp.svg';
import MeetingSchedule from './MeetingSchedule';

const SuccessPage = () => {
  return (
    <FadeIn element="_getStartedMain">
      <div className="grid lg:grid-cols-2 items-start gap-20 px-5 md:px-20 h-[95%] mt-12 max-w-[1300px] mx-auto opacity-0 _getStartedMain flex-wrap">
        <div className="max-w-full">
          <div className="flex gap-10">
            <div className="grow mt-auto">
              <div className="lg:mt-3">
                <h2 className="mb-10 font-bold text-[28px] lg:text-[30px] xl:text-[32px] leading-[48px]">
                  <span className="text-primary">Thank you</span> for
                  considering <br />
                  Digital Gregg for your project!
                </h2>
                <div className="text-[16px] lg:text-[18px] leading-[32px]">
                  <p>
                    Please check your email within 24 hours for our response. We
                    look forward to learning about your project.
                  </p>
                </div>
                <div className="-mb-10 mt-12">
                  <Link href="/insights" passHref>
                    <a
                      href="#"
                      aria-label='insights page'
                      className="md:text-[13px] text-[12px] before:h-[3rem] font-[600] bg-transparent inline-block explore-hover relative before:absolute before:content-[''] before:left-[-10px] before:right-[-5.71429rem]  before:bottom-[0] after:absolute after:content-[''] after:left-[100%] after:top-[calc(50%+4px)] after:h-[2px] after:bg-primary after:w-[40px]  mt-5 "
                    >
                      Read Our Insights
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-48 sm:mt-32 md:mt-40 w-full lg:hidden">
            <MeetingSchedule />
          </div>
          <div>
            <div className="sm:mt-24 md:mt-32 my-14 h-[1px] bg-[#e3e3e3]"></div>
            <div className="flex gap-10 items-center">
              <Image src={bCrop} alt="img" height="82" width="50" priority />
              <span className="max-w-[250px] text-[14px]">
                Committed to using business as a force for good.
              </span>
            </div>
          </div>
        </div>

        <div className="hidden lg:block 3xl:mt-8 mt-28  w-full">
          <MeetingSchedule />
        </div>
      </div>
    </FadeIn>
  );
};

export default SuccessPage;
