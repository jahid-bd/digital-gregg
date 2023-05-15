import classNames from 'classnames';
import BsLinkedInIcon from 'src/icons/BsLinkedInIcon';
import BsPinterestIcon from 'src/icons/BsPinterestIcon';
import BsTwitterIcon from 'src/icons/BsTwitterIcon';
import BsYoutubeIcon from 'src/icons/BsYoutubeIcon';
import GrFacebookIcon from 'src/icons/GrFacebookIcon';
import GrInstagramIcon from 'src/icons/GrInstagramIcon';
import {
  facebookUrl,
  instagramUrl,
  linkedinUrl,
  pinterestUrl,
  twitterUrl,
  youtubeUrl,
} from '../../../constant/index';

const MobileSocials = ({ showOverlay }: any) => {
  return (
    <ul className="flex items-center pt-[24px] gap-5 text-white">
      <li
        className={classNames(
          'text-2xl',
          showOverlay
            ? 'translate-x-0 opacity-100 delay-[1000ms] duration-700'
            : 'translate-x-40 opacity-0 duration-[400ms]'
        )}
      >
        <a
          href={facebookUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="facebook link"
        >
          <GrFacebookIcon />
        </a>
      </li>
      <li
        className={classNames(
          'text-2xl',
          showOverlay
            ? 'translate-x-0 opacity-100 delay-[1100ms] duration-700'
            : 'translate-x-40 opacity-0 duration-[400ms]'
        )}
      >
        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="instagram link"
        >
          <GrInstagramIcon />
        </a>
      </li>

      <li
        className={classNames(
          'text-2xl',
          showOverlay
            ? 'translate-x-0 opacity-100 delay-[1200ms] duration-700'
            : 'translate-x-40 opacity-0 duration-[400ms]'
        )}
      >
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="linkedin page"
        >
          <BsLinkedInIcon />
        </a>
      </li>
      <li
        className={classNames(
          'text-2xl',
          showOverlay
            ? 'translate-x-0 opacity-100 delay-[1200ms] duration-700'
            : 'translate-x-40 opacity-0 duration-[400ms]'
        )}
      >
        <a
          href={pinterestUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="pinterest link"
        >
          <BsPinterestIcon />
        </a>
      </li>
      <li
        className={classNames(
          'text-2xl',
          showOverlay
            ? 'translate-x-0 opacity-100 delay-[1200ms] duration-700'
            : 'translate-x-40 opacity-0 duration-[400ms]'
        )}
      >
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="youtube page"
        >
          <BsYoutubeIcon />
        </a>
      </li>
      <li
        className={classNames(
          'text-2xl',
          showOverlay
            ? 'translate-x-0 opacity-100 delay-[1200ms] duration-700'
            : 'translate-x-40 opacity-0 duration-[400ms]'
        )}
      >
        <a
          href={twitterUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="twitter page"
        >
          <BsTwitterIcon />
        </a>
      </li>
    </ul>
  );
};

export default MobileSocials;
