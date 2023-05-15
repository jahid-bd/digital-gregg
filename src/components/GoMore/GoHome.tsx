import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

const GoHome = () => {
    return (
        <Link href='/'>
            <a
                href='#'
                aria-label='home page'
                className="inline-block white-border group relative contact-border duration-300 ease-in-out"
            >
                <span className="text-[13px] group-hover:pl-1 duration-300 font-bold font-primary text-white leading-4">
                    Take me home
                </span>
            </a>
        </Link>
    );
};

export default GoHome;