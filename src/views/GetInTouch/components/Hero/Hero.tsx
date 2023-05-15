import { useState } from 'react';
import AgreeModal from './partials/AgreeModal';
import LeftHero from './partials/LeftHero';
import RightHero from './partials/RightHero';

type Props = {};

const Hero = (props: Props) => {
  // states
  const [isAccept, setIsAccept] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative lg:h-full xl:min-h-screen ">
        <div className="absolute right-0 top-[70px] w-[60%] h-[85%] lg:h-[90.5%] xl:h-[85%] hidden lg:block z-10 bg-redblack"></div>

        {/* bottom bg */}
        <div className="h-[15%] w-[100%] absolute bottom-0 xl:block hidden __bgRedGardient"></div>

        <div className="mt-0 lg:h-full pt-[112px] lg:p-[5rem_5rem_0rem_3.92857rem] xl:p-[70px] grid grid-cols-1 lg:grid-cols-[40%,60%]">
          <LeftHero />

          <div className="bg-redblack xl:min-h-[90vh] 2xl:min-h-[80vh]">
            <RightHero
              setIsAccept={setIsAccept}
              isAccept={isAccept}
              open={open}
              setOpen={setOpen}
            />
          </div>
        </div>
      </section>

      <AgreeModal setIsAccept={setIsAccept} open={open} setOpen={setOpen} />
    </>
  );
};

export default Hero;
