import Checkmark from './Checkmark';

type Props = {
  label: string;
  id: string;
  isChecked: any;
  setIsChecked: any;
  itemData: any;
  data: any;
  setData: any;
  error: boolean;
};

const Checkbox = ({
  label,
  id,
  itemData,
  isChecked,
  setIsChecked,
  setData,
  data,
  error,
}: Props) => {
  // checkbox checked to send item to main state
  const handleChange = (e: any) => {
    if (e.target.checked) {
      if (!data?.find((item: any) => item.id === itemData.id)) {
        setData([...data, { ...itemData, isChecked: true }]);
      }
    } else {
      setData(data?.filter((item: any) => item.id !== itemData.id));
    }
  };

  return (
    <div className="w-full md:w-max" role="button">
      <label
        htmlFor={id}
        className="custom-checkbox rounded-[0.6rem] group bg-[#FFF] checkbox p-[.7em_1em] block relative top-0 pl-[44px] mt-[1px] cursor-pointer text-base font-medium hover:text-primary transition-all ease-linear duration-300 text-[16px]"
      >
        {label}{' '}
        <input
          type="checkbox"
          id={id}
          className="absolute opacity-[0] cursor-pointer h-0 w-0"
          checked={isChecked}
          onChange={(e) => {
            handleChange(e);
            setIsChecked({ ...itemData, isChecked: !isChecked });
          }}
        />
        <span
          className={`absolute text-center flex  justify-center items-center top-1/2 translate-y-[-50%] left-3 h-[20px] w-[20px] border-[1px] border-[#ccc] group-hover:border-primary transition-all duration-300 ${
            isChecked && 'bg-primary border-none'
          }`}
        >
          {isChecked && <Checkmark />}
        </span>
      </label>
    </div>
  );
};

export default Checkbox;
