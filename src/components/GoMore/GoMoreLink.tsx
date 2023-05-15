import Link from 'next/link';
import { GoMore } from 'src/types';

function GoMoreLink({ url, text }: GoMore) {
    return (
        <Link href={url} passHref prefetch={false}>
            <div
                className={`flex gap-4 items-center relative contact-border group duration-300 -ml-14 lg:ml-0 cursor-pointer ${url==="/careers" &&"contact-b"}`}
            >
                <span className="text-[.92857rem] group-hover:pl-1 duration-300 font-bold text-redblack leading-[1.42857em] capitalize">
                    {text}
                </span>
            </div>
        </Link>
    );
}

export default GoMoreLink;
