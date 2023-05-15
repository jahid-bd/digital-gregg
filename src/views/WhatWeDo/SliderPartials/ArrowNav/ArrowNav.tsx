import ArrowRight from '@components/Icons/ArrowRight';

const ArrowNav = ({
  ref,
  handleNext,
  handlePrev,
  activeIndex,
  id,
  lastIndex,
}: any) => {
  return (
    <div
      className="absolute bottom-[6.07143rem] right-0 lg:hidden swiper-button"
      ref={ref}
      id={id}
    >
      <button
        type="button"
        onClick={handlePrev}
        disabled={activeIndex === 1}
        className={`${
          activeIndex === 1 ? 'bg-[#000]/[.5] opacity-50' : 'bg-primary'
        } w-[3.92857rem] flex items-center justify-center h-[3.92857rem] border-0 outline-none disabled:cursor-pointer`}
      >
        <div className="rotate-180">
          <ArrowRight />
        </div>
      </button>

      <button
        type="button"
        onClick={handleNext}
        disabled={activeIndex === lastIndex}
        className={`w-[3.92857rem] flex items-center justify-center h-[3.92857rem] border-0 outline-none disabled:cursor-pointer ${
          activeIndex === lastIndex ? 'bg-[#000]/[.5] opacity-50' : 'bg-primary'
        }`}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default ArrowNav;
