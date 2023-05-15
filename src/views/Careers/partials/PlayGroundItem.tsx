

type ItemType = {
    item: {
      id: string;
      title1: string;
      title2: string;
      body: string;
    };
    last: boolean;
    hasSlider?: boolean;
    index?: number;
  };

const PlayGroundItem = ({ item, last, hasSlider, index }: ItemType) => {
    return (
      <div
        className={`pb-[65px] md:pt-[25px] opacity-0 -translate-x-6 _careerTexts  ${
          !last && !hasSlider && 'border-b-[1px] border-white/30'} 
          ${index !== 0 ? 'xl:pt-[40px]' : 'xl:pt-[20px]'}
        `}
      >
        <div className="flex xl:gap-[30px] desktop:gap-[41px] 2xl:!gap-[35px] gap-[20px] items-center lg:items-start text-white">
          <div>
            <h2 className="font-bold text-[4.28571rem] leading-[.82192em]">.{item.id}</h2>
          </div>
          <div className={`${index === 0 && 'xl:ml-3 2xl:ml-2 desktop:ml-3'}`}>
            <div className={`flex md:items-center md:flex-row flex-col relative top-2 md:-top-[3px] lg:top-[1px] md:gap-1 md:text-[26px] text-[1.57143rem] leading-[1.22727em] pb-3 2xl:text-[1.85714rem] 2xl:leading-[1.23077em] `}>
              <h2 className="font-bold xl:mb-1 mb-0 2xl:mb-0 xl:relative xl:top-[2px] dekstop:top-0">{item.title1}</h2> <span className='hidden md:block'>{" "}</span>
              <h3>{item.title2}</h3>
            </div>
  
            <p className={`text-[14px] xl:block hidden leading-[1.42857em] 2xl:mt-[4px]`}>{item.body}</p>
          </div>
        </div>
        <p className="text-[14px] block xl:hidden text-white mt-4 md:mt-7 mb-[3rem]">{item.body}</p>
      </div>
    );
  };

  export default PlayGroundItem;