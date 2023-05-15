import ListItem from '@views/InsightsSinglePage/partials/ListItem';
import SectionHeader from '@views/InsightsSinglePage/partials/SectionHeader';

const Summary = ({ ref1, ref2 }: any) => {
  return (
    <div>
      <section id="#summary" ref={ref1}>
        <SectionHeader>Summary</SectionHeader>
        <p className="lg:text-[24px] text-[18px] font-[600] leading-[34px] pb-[60px]">
          The market is like a living organism that is growing, evolving, and
          constantly changing. Big marketplaces that were dominant before the
          COVID pandemic gradually gave up their market share to smaller niche
          ones. Let’s see what these are and why the future of such targeted
          marketplaces looks brighter than ever.
        </p>
      </section>

      <section>
        <p className="pb-10 lg:text-[20px] md:text-[18px] text-[16px] leading-6">
          The eCommerce market develops in two main formats:
        </p>
        <div className="mb-[80px]">
          <ListItem
            latter="a"
            heading="Online shops"
            contents="These are websites used to find a product or service and place an order. The range can be extensive. These are some of the most popular places for online commerce."
          />
        </div>
        <div className="mb-[60px]">
          <ListItem
            latter="b"
            heading="Marketplaces"
            contents="These aggregator websites serve as specialized intermediaries receiving and processing information from various vendors in online and offline formats. Since there are multiple vendors, several instances of the same product can be present in a large marketplace at different prices."
          />
        </div>
        <div className="mb-[112px]">
          <img
            src="/images/insight/item-page/image-1.png"
            alt="US eCommerce retailers by sales volume (million $)"
          />
          <p className="mt-[30px]">
            US eCommerce retailers by sales volume (million $)
          </p>
        </div>
        <div id="#typeMarketplaces" ref={ref2}>
          {/* <div className="h-[57px] w-full bg-[#D9D9D9]"></div> */}
          <SectionHeader>Types of marketplaces</SectionHeader>
          <p className="pt-5 lg:text-[20px] md:text-[18px] text-[16px]">
            It is now common to divide marketplaces into horizontal and vertical
            ones.
          </p>
        </div>
        <div className="my-[60px]">
          <h3 className="lg:text-[24px] md:text-[20px] text-[18px] font-semibold text-black leading-[30px] pb-6">
            Vertical
          </h3>
          <p className="pb-[60px] lg:text-[20px] md:text-[18px] text-[16px]">{`Vertical marketplaces are focused on a specific category of products or services. This way they can cater to more specific customer requests and work with each customer on a point-by-point basis.`}</p>
          <img src="/images/insight/item-page/image-2.png" alt="insight" />
        </div>
        <div className="my-[60px]">
          <h3 className="lg:text-[24px] md:text-[20px] text-[18px] font-semibold text-black leading-[30px] pb-6">
            Horizontal
          </h3>
          <p className="pb-[60px] lg:text-[20px] md:text-[18px] text-[16px]">{`Horizontal marketplaces are represented by such big players as Amazon, Alibaba, and eBay. These marketplaces offer an "all-in-one" experience by bringing together a variety of buyers and sellers, and a huge variety of stock that can meet the basic needs of any buyer.`}</p>
          <img src="/images/insight/item-page/image-2.png" alt="insight image" />
        </div>
      </section>
    </div>
  );
};

export default Summary;
