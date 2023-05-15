import { useEffect, useState } from 'react';
import SubscribeModal from '../SubscribeModal/SubscribeModal';

const SubscribeButton = ({ buttonStyle }: { buttonStyle: string }) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    open
      ? document.querySelector('body')?.classList.add('overflow-hidden')
      : document.querySelector('body')?.classList.remove('overflow-hidden');
  }, [open]);

  return (
    <>
      <span
        className={`font-[600] text-primary cursor-pointer hover:border-primary hover:border-b-[1px] border-primary transition-all duration-300  ${buttonStyle}`}
        onClick={() => setOpen(true)}
      >
        SUBSCRIBE
      </span>
      <SubscribeModal openModal={open} setOpenModal={setOpen} />
    </>
  );
};

export default SubscribeButton;
