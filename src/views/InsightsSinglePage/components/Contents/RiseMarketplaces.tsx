import SectionHeader from '@views/InsightsSinglePage/partials/SectionHeader';
import Link from 'next/link';

const RiseMarketplaces = ({ ref3 }: any) => {
  return (
    <section className="text-black" id="#riseMarketplaces" ref={ref3}>
      <div>
        <SectionHeader>The Rise of Vertical Marketplaces</SectionHeader>

        <div className="lg:text-[20px] md:text-[18px] text-[16px] leading-[30px]">
          <p className="pb-[30px]">
            For a long time, the main paradigm was to buy quickly and without
            problems. The ability to walk into a supermarket like Walmart and
            get everything in one place appealed to almost everyone. This
            provided a great push for the horizontal marketplaces to emerge.
            However, over time, sellers and customers began facing various
            problems: price dumping, poor selection of specific products,
            service issues, and bloated catalogs. The new ecological and
            cultural paradigm pushed customers to look for marketplaces that can
            help with specific products.
          </p>

          <p className="pb-[30px]">
            A prime example of a shift to vertical marketplaces is Craigslist.
            In the 2000s, it was a popular website with ads, many directories,
            and individual boards. The platform ended up with many separate
            sub-boards that evolved into different markets. Craigslist itself
            created space for vertical niches that split it and grew into such
            platforms as Airbnb and Indeed.
          </p>

          <p className="pb-[30px]">
            {`Ebay took the same path. The original idea to resell used items grew into a huge marketplace where you could find many products. However, it didn't cover the needs of individual niches, so out of eBay grew StubHub with the ability to pick up ticket categories, and Poshmark focused on second-hand clothes. The emergence of these vertical marketplaces was fueled by a tendency toward a better shopping experience, which is intrinsically linked to bigger profits and growth. `}
          </p>
          <p className="pb-[30px]">{`Horizontal marketplaces are unable to cover some particular individual
        needs of customers. For example, a customer needs dancing shoes and a horizontal marketplace offers different options from different sellers but it does not help the customer with the next step. There may be extensive but generic feedback from non-professionals on items. Also, there is no product-specific community and support. The situation pushes users to niche marketplaces where specific products with more insightful details are collected. These platforms pay attention to details: how to use a product and what results to expect. A targeted marketplace would tell our customers that these shoes are unsuitable for tango because the heel is the wrong shape and requires a high degree of wear. Vertical marketplaces can also be called profile marketplaces because they address specific issues.`}</p>
        </div>
      </div>
      <div className="bg-[#f5f5f5] mt-[60px] md:p-[40px] p-5 md:flex grid md:grid-cols-none grid-cols-2 items-center justify-between">
        <div>
          <span className="md:pl-[40px] md:text-[13px] text-[12px] leading-4 tracking-[0.14em] text-black relative before:content-[''] before:absolute before:bg-black before:md:w-[21px] before:h-[2px] before:left-0 before:top-1/2 before:-translate-y-1/2 uppercase md:mb-[23px] mb-[10px]">
            Case Study
          </span>
          <h4 className="md:text-[26px] text-[20px] font-[700] leading-8 mb-[5px] md:mt-[23px] mt-2">
            Moto Gr
          </h4>
          <h5 className="md:text-[22px] text-[14px] leading-[27px] ">
            Corporate Website
          </h5>
          <Link href="#" passHref>
            <a
              href="#"
              aria-label='insight single page'
              className="md:text-[13px] text-[12px] before:h-[3rem] font-[600] bg-transparent inline-block text-primary explore-hover relative before:absolute before:content-[''] before:left-[-10px] before:right-[-5.71429rem]  before:bottom-[0] after:absolute after:content-[''] after:left-[100%] after:top-[calc(50%+4px)] after:h-[2px] after:bg-primary after:w-[40px]  mt-5 "
            >
              Explore
            </a>
          </Link>
        </div>
        <div>
          <img src="/images/insight/item-page/image-6.png" alt="laptop" />
        </div>
      </div>
    </section>
  );
};

export default RiseMarketplaces;
