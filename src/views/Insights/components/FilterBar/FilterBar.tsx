import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { insightsFilterBarData } from 'src/constant';
import BiSearchIcon from 'src/icons/BiSearchIcon';
import VscCloseIcon from 'src/icons/VscCloseIcon';

// dynamic import
const SubscribeButton = dynamic(() => import('../SubscribeButton'));

const FilterBar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('all');
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement | any>(null);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset >= navRef?.current?.offsetTop) {
        setIsSticky(true);
      }
      if (window.pageYOffset <= navRef?.current?.offsetTop - 70) {
        setIsSticky(false);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  return (
    <div
      className={`mt-[120px] px-[70px] lg:block hidden ${isSticky ? '' : ''}`}
      ref={navRef}
    >
      <div
        className={`border-y-[1px] border-darkGray  ${
          showSearchBar ? 'py-[16px]' : 'py-[24px]'
        } ${
          isSticky
            ? 'fixed top-0 overflow-hidden z-50 !m-0 flex items-center justify-center w-full left-0 bg-secondary'
            : ''
        }`}
      >
        {showSearchBar ? (
          <div className="flex items-end gap-6 justify-center w-full">
            <div className="w-[70%] relative">
              <input
                type="text"
                placeholder="Type here to search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex w-full bg-secondary border-b-[1px] border-white placeholder:text-secondaryGray placeholder:text-[14px] placeholder:leading-[17px] py-[7px] "
              />
              <div className="absolute right-4 bottom-2 flex items-center gap-[6px] cursor-pointer hover:text-primary transition-all duration-300">
                <span className="text-[15px] mt-[1px]">
                  <BiSearchIcon />
                </span>
                <span className="uppercase text-[13px] font-semibold leading-4 tracking-[0.14em]">
                  Serach
                </span>
              </div>
            </div>
            <div
              onClick={() => setShowSearchBar(false)}
              className="text-[28px] text-white cursor-pointer uppercase hover:text-primary transition-all duration-300 -mb-[3px]"
            >
              <VscCloseIcon />
            </div>
          </div>
        ) : (
          <ul className="flex items-center justify-center xl:gap-[80px] gap-7">
            {insightsFilterBarData.map(({ id, value, content }) => (
              <li
                key={id}
                className={`text-[13px] leading-4 tracking-[0.14em] text-white cursor-pointer uppercase hover:text-primary border-primary transition-all duration-300 ${
                  value === activeItem && 'border-primary border-b-[2px]'
                }`}
                onClick={() => {
                  if (value === 'search') {
                    setShowSearchBar(true);
                  } else {
                    setActiveItem(value);
                  }
                }}
              >
                {content}
              </li>
            ))}
          </ul>
        )}
      </div>
      {isSticky && (
        <div className="__redblackGradientBg  fixed top-[50px] z-40 flex w-full items-center justify-center h-[100px]">
          <div className="desktop:inline-block  text-lightGray leading-[1.42857em] text-[14px]">
            Stay updated with the latest insights
            <SubscribeButton buttonStyle="ml-2 leading-4 tracking-[0.14em]" />
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
