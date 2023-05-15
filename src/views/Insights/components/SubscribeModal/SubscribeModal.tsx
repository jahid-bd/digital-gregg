import useClickOutside from '@hooks/useClickOutside';
import { useRef } from 'react';
import IoMdCloseIcon from 'src/icons/IoMdCloseIcon';

const SubscribeModal = ({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const ditectOutside = useRef(null);

  useClickOutside(ditectOutside, () => {
    setOpenModal(false);
  });

  return (
    <div
      className={`fixed h-full w-full top-0 left-0 bg-black/50   z-[998] ${
        !openModal && "pointer-events-none duration-150 delay-150 opacity-0"
      }`}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f5f5f5] py-[70px] xl:px-[90px] px-7 lg:w-[55%] w-[80%]"
        ref={ditectOutside}
      >
        <div className="text-center text-black relative w-full h-full">
          <h2 className="lg:text-[32px] text-[24px] leading-[39px] mb-6">
            Subscribe to get <b>notified</b>
          </h2>
          <p className="lg:text-[14px] text-[13px] leading-[17px]">
            Sign up for our newsletter to receive notifications when we
            published something new
          </p>
          <div className="mt-[80px] flex items-center justify-center  md:gap-10 gap-5 pb-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="border-b-[2px] border-[#B5B5B5] py-[5px] placeholder:text-[#B5B5B5] placeholder:md:text-[16px] placeholder:text-[14px] md:w-[50%] w-full bg-transparent"
            />
            <span className="text-primary md:text-[16px] text-[14px] leading-[20px] font-semibold cursor-pointer transition-all duration-300 hover:border-b-[1px] hover:border-primary border-b-[1px] border-b-transparent">
              Subscribe
            </span>
          </div>
          <div className="absolute xl:top-[-35px]  top-[-50px] xl:right-[-35px] right-0">
            <span
              className="text-black text-[20px] cursor-pointer hover:text-primary transition-all duration-300 "
              onClick={() => setOpenModal(false)}
            >
              <IoMdCloseIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeModal;
