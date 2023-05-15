import classNames from 'classnames';
import { GoMore } from 'src/types';

function GoMore({ url, text }: GoMore) {
  return (
    <a
      href={url}
      className="flex gap-4 items-center group relative contact-border duration-300 ease-in-out"
      target={'_blank'}
      rel="noreferrer"
      aria-label={`${text} page`}
    >
      <span className="text-[13px] group-hover:pl-1 duration-300 font-bold font-primary text-redblack leading-[20px]">
        {text}
      </span>
    </a>
  );
}

export default GoMore;
