import React from 'react'
import Slider from "react-slick";
import parse from 'html-react-parser';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { otherWordSliderDatas } from 'src/constant';

type Props = {}

const SlickTextSlider = (props: Props) => {

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 12000,
    arrows: false,
    draggable: false,
    easing: "easeOutElastic",
    cssEase: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
  };

  return (
    <>
      <Slider {...settings}>

        {otherWordSliderDatas.map((item, index) => <div key={index}>
          <h3 className="getintouch-brands__quote font-normal leading-[20px] text-[14px] space-y-5">
            {parse(item.text)}
          </h3>

          <div className='mt-[60px]'>
            <p className='font-bold text-[14px] leading-[20px]'>{item.author}</p>
            <p className='font-bold text-[14px] leading-[20px]'>{item.position}</p>
          </div>
        </div>)}
      </Slider>
    </>
  );
}

export default SlickTextSlider