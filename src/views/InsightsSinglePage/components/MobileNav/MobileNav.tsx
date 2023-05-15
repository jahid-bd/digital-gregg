import { useBlogScrollHeight } from '@state/index';

interface Props {
  navTitles: {
    active: string;
    next: string;
    nextId: string;
  };
}

const MobileNav = ({ navTitles }: Props) => {
  const [scroll] = useBlogScrollHeight();

  const handleClick = () => {
    // const element: any = document?.getElementById(navTitles.nextId);
    // window?.scrollTo({
    //   behavior: 'smooth',
    //   top: element.offsetTop - 100,
    // });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0  z-[9999]">
      <div className="relative  w-full flex items-center justify-between px-[30px] py-[10px] bg-white text-[12px]">
        <div>
          <p className="text-black font-semibold">{navTitles?.active}</p>
          <p>Next: {navTitles?.next}</p>
        </div>
        <div
          className="bg-black text-white flex items-center justify-center w-[20px] h-[20px] rounded-[50%] cursor-pointer text-[14px]"
          onClick={handleClick}
        >
          icon
        </div>
      </div>

      <div className="h-[2px] w-full absolute top-0 left-0">
        <style>
          {`.__progress{
            width: ${scroll <= 1 ? scroll * 100 : 100}%
          }`}
        </style>
        <div className={'bg-primary h-full __progress'} />
      </div>
    </div>
  );
};

export default MobileNav;
