interface Props {
  sectionNum: number;
  img1: string;
  img2: string;
  img3?: string;
}

const P2ImgSection: React.FC<Props> = ({ sectionNum, img1, img2, img3 }) => {
  let img1Style, img2Style, img3Style, parentStyle;

  if (sectionNum === 0) {
    img1Style = 'relative lg:top-0 lg:mb-0 mb-5';
    img2Style = 'relative lg:top-[100px] lg:right-[100px]';
    parentStyle = '!pb-40';
  } else if (sectionNum === 1) {
    img1Style = 'relative lg:top-[200px] lg:left-[150px] !z-99';
    img2Style = 'relative lg:top-0';
    img3Style = 'relative lg:top-[100px] lg:right-[120px]';
  } else {
    img1Style = 'relative lg:top-0 lg:mb-0 mb-5';
    img2Style =
      'relative xl:top-[250px] lg:top-[150px] lg:right-[300px] xl:right-[400px] ';
    parentStyle = 'lg:!pb-[250px]';
  }

  return (
    <div
      className={`bg-[#F5F5F5] p-12 lg:p-20 lg:flex items-start justify-between lg:gap-14  ${parentStyle}`}
    >
      <div className={`${img1Style} w-full`}>
        <img src={img1} alt="case study" width={'100%'} />
      </div>
      <div className={`${img2Style} w-full`}>
        <img src={img2} alt="case study" width={'100%'} height={'100%'} />
      </div>
      {img3 && (
        <div className={`${img3Style} w-full`}>
          <img src={img3} alt="case study" width={'100%'} height={'100%'} />
        </div>
      )}
    </div>
  );
};

export default P2ImgSection;
