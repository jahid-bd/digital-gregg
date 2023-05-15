import parse from 'html-react-parser';
import Slider from 'react-slick';

// Import css files
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { whoWeAreSliderDatas } from 'src/constant';

type Props = {};

const TextSlider = (props: Props) => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 12000,
    arrows: false,
    draggable: false,
    easing: 'easeOutElastic',
    cssEase: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
  };

  return (
      <Slider {...settings}>
      {whoWeAreSliderDatas.map((item, index) => (
        <div key={index}>
          <div className={`bg-redblack ${item.position==='The North Face' ? 'mt-5' :'pt-10 lg:pt-0'} mx-5`}>
            <h3 className="text-[1.07143rem] font-bold text-white xl:text-[1.57143rem] leading-[1.22727em]">
              {item.question}
            </h3>
            <p className="text-[1rem] font-light text-white xl:text-[1.21429rem] leading-[1.25em] my-5">
              {/* To be sure, we asked them */}
            </p>
            <p className="text-[1rem] text-white xl:text-[1.21429rem] leading-[1.25em]">
              {parse(item.answer)}
            </p>
            <p className={`text-[1rem] text-white xl:text-[1.21429rem] leading-[1.25em] mt-5`}>
              {item.author} <br />
              {item.position}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TextSlider;
