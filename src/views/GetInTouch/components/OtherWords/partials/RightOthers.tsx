import { brandImages } from "src/constant";

type Props = {};

const RightOthers = (props: Props) => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 pt-8 lg:pt-0 md:px-4 lg:px-0 gap-x-[40px] lg:gap-x-[45px] xl:gap-x-[60px] 2xl:gap-x-[70px] gap-y-[90px] lg:gap-y-[60px] xl:gap-y-[90px]">
      {brandImages.map((imageUrl, i) => {
        return (
          <li key={"gobvsdg_" + i} className="flex items-center justify-center">
            {imageUrl.src}
          </li>
        );
      })}
    </ul>
  );
};

export default RightOthers;
