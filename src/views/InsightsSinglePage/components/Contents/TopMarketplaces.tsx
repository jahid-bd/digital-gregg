import SectionHeader from '@views/InsightsSinglePage/partials/SectionHeader';
import Link from 'next/link';

const TopMarketplaces = ({ ref4 }: any) => {
  return (
    <section className="mt-[60px]" id="#topMarketplaces" ref={ref4}>
      <SectionHeader>Top vertical market place</SectionHeader>
      <p className="lg:text-[20px] md:text-[18px] text-[16px]">{`Let's look at how the pandemic has changed eCommerce . In 2021, The Marketplace 100 list saw a major change in its rankings. Twenty-five companies entered the top tier for the first time, ten companies were sold or IPO'd, and the rest showed brisk growth in the squeeze of the lockdown. What the facts showed at the end of 2021:`}</p>

      <div className="py-[40px] ">
        <h3 className="lg:text-[24px] md:text-[20px] text-[18px] font-semibold text-black leading-[29px] pb-6">
          User costs are of the utmost importance:{' '}
        </h3>
        <p className="lg:text-[20px] md:text-[18px] text-[16px] leading-[30px]">{`The pandemic has taken a literal toll on food and food delivery companies. They have become coveted targets for purchasing now. Instacart's amazing results confirm this. The marketplace accounted for more than 70% of GMVs in Marketplace 100. The number of users has grown by fifteen thousand per cent since 2014. During the pandemic, Instacart grew the number of couriers from 180,000 to 500. They are second only to Amazon and Walmart in terms of popularity.`}</p>
      </div>
      <div className="pb-[40px] ">
        <h3 className="lg:text-[24px] md:text-[20px] text-[18px] font-semibold text-black leading-[29px] pb-6">
          COVID both helped and destroyed:
        </h3>
        <p className="lg:text-[20px] md:text-[18px] text-[16px] leading-[30px]">{`In front of our eyes, many companies were falling apart and people were losing their jobs. The service market was shaken very badly. Companies that helped care for children were affected, and cleaning companies tried to restructure the format of their work to meet the demands. The rental market and ticketing marketplaces were in danger. During these challenging times, niche marketplaces started offering point-to-point solutions for customers.`}</p>
      </div>

      <div className="bg-[#f5f5f5] flex md:flex-row flex-col items-center gap-[60px] md:pb-[73px] py-10 md:p-0 p-5">
        <div className="md:h-[230px] h-[260px] md:w-[396px] relative flex md:flex-col flex-row">
          <img
            src="/images/insight/item-page/image-5.png"
            alt="insight img"
            width={'161px'}
            height={'214px'}
            className="w-[161px] h-[214px]"
          />
          <img
            src="/images/insight/item-page/image-4.png"
            alt="insight img"
            width={'161px'}
            height={'214px'}
            className="md:translate-x-[70px] md:translate-y-[-125px] w-[161px] h-[214px] translate-x-[-80px] translate-y-[80px]"
          />
        </div>
        <div>
          <h3 className="font-[700] lg:text-[26px] md:text-[24px] text-[20px] leading-[32px] text-black md:pb-[31px] pb-4">
            Consultation
          </h3>
          <p className="lg:text-[22px] text-[16px] leading-[27px] text-black pb-[23px]">
            Get a free consultation on starting your online marketplace
            development{' '}
          </p>
          <Link href="#" passHref>
            <a
              href="#"
              aria-label='no page'
              className="text-[13px] before:h-[3rem] font-[600] bg-transparent inline-block text-primary explore-hover relative before:absolute before:content-[''] before:left-[-10px] before:right-[-5.71429rem]  before:bottom-[0] after:absolute after:content-[''] after:left-[100%] after:top-[calc(50%+4px)] after:h-[2px] after:bg-primary after:w-[40px]  "
            >
              Get Free Consultation
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopMarketplaces;
