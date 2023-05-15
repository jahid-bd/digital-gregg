import IoMdCloseIcon from 'src/icons/IoMdCloseIcon';

type Props = {
  open: boolean;
  setOpen: (open: boolean) =>  void;
  headerFixed?: boolean;
  title?: string;
  children?: any;
}

const Modal = ({ open, setOpen , headerFixed, title, children}: Props) => {

    if (!open) return <></>;

    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 z-[1000000] flex items-center justify-center">
        <div
          className={`absolute top-0 bottom-0 left-0 right-0 bg-[#00000047]`}
          onClick={() => setOpen(false)}
        ></div>

        <div className="rounded-[8px] max-h-[95vh] overflow-y-auto no-scrollbar z-10 relative w-max">
          <div
            className={`flex justify-between items-center bg-white  px-2 ${
              headerFixed &&
              "fixed top-[2.5%] z-10 w-[380px] md:w-[760px] xl:w-[860px] overflow-hidden"
            }`}
          >
            <div className="py-[13px] pl-[20px] w-full h-full relative top-1">
              <p className="text-[18px] font-[500] leading-[22px] cursor-default">
                {title ? title : "Modal Title"}
              </p>
            </div>

            <div className="hover:bg-red-500 bg-primary w-[30px] h-[30px] rounded-full transition-all ease-in-out duration-300">
              <span
                className={`z-[9999] text-white text-[14px] relative w-full top-1 cursor-pointer transition ease-in-out duration-300 `}
                onClick={() => setOpen(false)}
              >
                <IoMdCloseIcon />
              </span>
            </div>
          </div>

          {/* -------------------------------- header -------------------------------------- */}

          <div
            className={`bg-white relative py-[40px] md:max-h-[85vh] max-h-[75vh]`}
          >
            <div className="md:max-h-[77vh] max-h-[65vh] overflow-y-auto black__scrolbar w-[380px] md:w-[550px] xl:w-[600px] px-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Modal