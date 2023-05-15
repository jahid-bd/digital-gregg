import Link from 'next/link';

const MobileRequestEstimate = () => {
    return (
        <div className='h-[70px] relative'>
          <Link href={"/request-estimate"} passHref>
            <a
              href="#"
              aria-label='request estimate page'
              className={`text-white hover:text-redblack absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    text-[.85714rem] font-bold uppercase z-[9997]  cursor-pointer transition ease-in-out duration-300 z-1 lg:hidden`}
            >
              <span className="-translate-y-6">
                REQUEST ESTIMATE
              </span>
            </a>
          </Link>
        </div>
    );
};

export default MobileRequestEstimate;