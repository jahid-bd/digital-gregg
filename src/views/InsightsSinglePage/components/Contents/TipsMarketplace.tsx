import ListItem from '@views/InsightsSinglePage/partials/ListItem';
import SectionHeader from '@views/InsightsSinglePage/partials/SectionHeader';

const TipsMarketplace = ({ ref5 }: any) => {
  return (
    <section className="mt-[60px]" id="#tipsMarketplaces" ref={ref5}>
      <SectionHeader>Tips on building an online market place</SectionHeader>
      <div className="mt-[60px]">
        <ListItem
          latter="a"
          heading="Focus"
          contents={`Create a unique user experience for your marketplace. You don't want to clutter up your products one on top of another. The "I'm the author - that's how I see it" philosophy doesn't work in eCommerce. Take advantage of the best practices in marketing and advertising, and create a unique offer for the customer. Consumers wants their needs heard. Pay attention to the service, values, habits, and interests of a certain consumer. Have an exclusive assortment that addresses the specific needs of the customer.`}
        />
        <div className="my-[80px]">
          <ListItem
            latter="b"
            heading="Don’t forget about sellers"
            contents={`For horizontal marketplaces, sellers are often only an afterthought because of their scale and volume. Luckily for niche marketplaces, this is an opportunity. Working with the seller is just as important as working with the customer. If you don't have a salesperson, you have nothing to sell. Create a comfortable experience for your salespeople: confidence and value for their brand. Don't forget about word of mouth: one seller will appreciate your unique relationship and share with the business community that your marketplace is easy to use; this is how you build popularity and expand your pool of partners.`}
          />
        </div>
        <div>
          <ListItem
            latter="c"
            heading="Be determined"
            contents={`As said by famous mathematician David B. Hertz, "uncertainty and risk are a major challenge and a major business opportunity". Go to the market now and use a basic version of your marketplace. Use MVPs, reduce risks and do the first product integrations that will eventually develop into a viable marketplace. Remember that Amazon started by selling books and Airbnb was just an air mattress for rent.`}
          />
        </div>
      </div>
      <div className="mt-[60px] bg-[#f5f5f5] py-[70px] md:px-[90px] px-8">
        <div className="text-center text-black relative w-full h-full">
          <h2 className="md:text-[32px] text-[22px] md:leading-[39px] mb-6">
            Subscribe to get <b>notified</b>
          </h2>
          <p className="text-[14px] leading-[17px]">
            Sign up for our newsletter to receive notifications when we
            published something new
          </p>
          <div className="mt-[80px] flex items-center justify-center  md:gap-10 gap-5 pb-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="border-b-[2px] border-[#B5B5B5] py-[5px] placeholder:text-[#B5B5B5] placeholder:md:text-[16px] placeholder:text-[14px] md:w-[50%] w-full bg-transparent"
            />
            <span className="text-primary md:text-[16px] text-[14px] leading-[20px] font-semibold cursor-pointer transition-all duration-300 hover:border-b-[1px] hover:border-primary border-b-[1px] border-b-transparent">
              Subscribe
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipsMarketplace;
