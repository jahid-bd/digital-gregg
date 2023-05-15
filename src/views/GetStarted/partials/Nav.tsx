/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

type Props = {};

const Nav = (props: Props) => {
  return (
    <nav className="border-b">
      <div className=" flex items-center justify-between ">
        <Link href="/">
          <a href='#' className="bg-redblack w-[70px] h-[70px] flex items-center justify-center" aria-label='home page'>
            <img
              src={`/imgs/logos/logo.svg`}
              alt="logo svg image"
              height={'100%'}
              className="relative z-[999] w-[4rem]"
            />
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
