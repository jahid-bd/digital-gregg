const SingleImageSlider = ({ src }: any) => {
  return (
    <div className="relative overflow-scroll whitespace-nowrap single-slider">
      <img
        className="max-w-[999999px] h-full  mb-8"
        src={src}
        alt="slider"
      />
    </div>
  );
};

export default SingleImageSlider;
