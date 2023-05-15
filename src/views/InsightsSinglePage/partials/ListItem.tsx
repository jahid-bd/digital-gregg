interface PropsType {
  latter: string;
  heading: string;
  contents: string;
}

const ListItem = ({ latter, heading, contents }: PropsType) => {
  return (
    <div className="flex gap-[30px]">
      <span
        className="lg:text-[40px] md:text-[32px] text-[28px] leading-[49px] font-[700] text-black uppercase
        "
      >
        .{latter}
      </span>
      <div>
        <h4 className="lg:text-[24px] md:text-[20px] text-[18px] font-[700] leading-[29px] text-black pb-6">
          {heading}
        </h4>
        <p className="lg:text-[20px] md:text-[18px] text-[16px]">{contents}</p>
      </div>
    </div>
  );
};

export default ListItem;
