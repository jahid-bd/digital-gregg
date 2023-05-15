// Import Slick React components
import Slider from 'react-slick';
import NextArrow from 'src/icons/NextArrow';

const CustomNextArrow = ({ onClick }: any) => {
  return (
    <span
      onClick={onClick}
      className="__customArrow absolute right-[5rem] h-[72px] w-[72px] rounded-full top-[50%] translate-y-[-50%] z-[10] cursor-pointer hidden select-none lg:flex items-center justify-center hover:!bg-[rgba(134,0,15,1)] duration-300"
    >
      <NextArrow />
    </span>
  );
};

const CustomPrevArrow = ({ onClick }: any) => {
  return (
    <span
      onClick={onClick}
      className="__customArrow absolute left-[5rem] h-[72px] w-[72px] rounded-full top-[50%] translate-y-[-50%] z-[10] cursor-pointer hidden select-none lg:flex items-center justify-center hover:!bg-[rgba(134,0,15,1)] duration-300 rotate-180"
    >
      <NextArrow />
    </span>
  );
};

const SlickSlider = ({
  children,
  show,
  xlShow,
  xxxlShow,
  draggable,
  move,
  swipe,
}: any) => {
  const sliderSettings = {
    customPaging: function (i: number) {
      return <span className="block w-full h-full rounded-full"></span>;
    },
    dots: true,
    dotsClass: 'slick-dots',
    speed: 500,
    infinite: true,
    slidesToShow: show,
    Draggable: draggable,
    swipeToSlide: move,
    touchMove: swipe,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: xlShow,
        },
      },
      {
        breakpoint: 1919,
        settings: {
          slidesToShow: xxxlShow,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...sliderSettings}>{children}</Slider>
    </>
  );
};

export default SlickSlider;
