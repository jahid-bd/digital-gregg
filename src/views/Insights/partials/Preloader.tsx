interface Props {
  theme: 'dark' | 'light';
}

const Preloader = ({ theme }: Props) => {
  return (
    <div
      className={`preloader border-[8px] rounded-[50%] border-redblack border-t-[8px] border-t-primary w-[80px] h-[80px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[999] ${
        theme === 'light' && 'border-lightGray'
      }`}
    ></div>
  );
};

export default Preloader;
