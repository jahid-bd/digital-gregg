import {
  facebookUrl,
  pinterestUrl,
  twitterUrl,
  youtubeUrl,
} from 'src/constant';
import BsLinkedInIcon from 'src/icons/BsLinkedInIcon';
import BsPinterestIcon from 'src/icons/BsPinterestIcon';
import BsTwitterIcon from 'src/icons/BsTwitterIcon';
import BsYoutubeIcon from 'src/icons/BsYoutubeIcon';
import GrFacebookIcon from 'src/icons/GrFacebookIcon';
import GrInstagramIcon from 'src/icons/GrInstagramIcon';
import { instagramUrl, linkedinUrl } from '../../../constant/index';

type Props = {};

const OverlaySocials = (props: Props) => {
  return (
    <ul className="flex items-center gap-5 !pb-3">
      <li className="text-2xl">
        <a
          href={facebookUrl}
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-70 transition-all duration-300 ease-in-out"
          aria-label="facebook link"
        >
          <GrFacebookIcon />
        </a>
      </li>
      <li className="text-2xl">
        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-70 transition-all duration-300 ease-in-out"
          aria-label="instagram link"
        >
          <GrInstagramIcon />
        </a>
      </li>
      <li className="text-2xl">
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-70 transition-all duration-300 ease-in-out"
          aria-label="linkedin link"
        >
          <BsLinkedInIcon />
        </a>
      </li>
      <li className="text-2xl">
        <a
          href={pinterestUrl}
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-70 transition-all duration-300 ease-in-out"
          aria-label="pinterest link"
        >
          <BsPinterestIcon />
        </a>
      </li>
      <li className="text-[1.75rem]">
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-70 transition-all duration-300 ease-in-out"
          aria-label="youtube link"
        >
          <BsYoutubeIcon />
        </a>
      </li>
      <li className="text-[1.75rem]">
        <a
          href={twitterUrl}
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-70 transition-all duration-300 ease-in-out"
          aria-label="twitter link"
        >
          <BsTwitterIcon />
        </a>
      </li>
    </ul>
  );
};

export default OverlaySocials;
