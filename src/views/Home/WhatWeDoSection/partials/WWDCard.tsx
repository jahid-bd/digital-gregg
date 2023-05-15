type Props = {
  data: any;
};

const WWDCard = ({ data }: Props) => {
  return (
    <article className="_whatWeDoCategories translate-y-12 opacity-0">
      <div className="mb-[27px] pl-2">{data.image}</div>
      <h3 className="section-sub-title mb-[35px] !text-[1.85714rem] !leading-8">
        {data.title}
      </h3>
      <p className="text-[1rem]  leading-[1.42857em] text-[#4A4A4A] ">
        {data.description}
      </p>
    </article>
  );
};

export default WWDCard;
