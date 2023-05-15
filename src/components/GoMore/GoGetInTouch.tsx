import classNames from 'classnames';
import Link from 'next/link';
import { GoMore } from 'src/types';

function GoGetInTouch({ url, text }: GoMore) {
    return (
        <Link href={url} passHref prefetch={false}>
            <a
                href='#'
                aria-label={`${text} page`}
                className={`flex gap-4 items-center relative contact-border justify-center group duration-300 ease-in-out ${url === "/request-estimate" && "contact-b"}`}
            >
                <span className="text-[13px] group-hover:pl-1 duration-300 font-bold font-primary text-redblack leading-[20px] capitalize">
                    {text}
                </span>
            </a>
        </Link>
    );
}

export default GoGetInTouch;
