import { facebookUrl, linkedinUrl, twitterUrl } from 'src/constant';
import FaFacebookIcon from 'src/icons/FaFacebookIcon';
import FaTwitterIcon from 'src/icons/FaTwitterIcon';
import GrLinkedinOptionIcon from 'src/icons/GrLinkedinOptionIcon';

const hoverCss =
  'cursor-pointer hover:text-primary transition-all duration-300';

const socialLinksData = [
  {
    id: 1,
    icon: <GrLinkedinOptionIcon />,
    link: linkedinUrl,
  },
  {
    id: 2,
    icon: <FaFacebookIcon />,
    link: facebookUrl,
  },
  {
    id: 3,
    icon: <FaTwitterIcon />,
    link: twitterUrl,
  },
];

interface propsTypes {
  activeLink: string;
  sidebarData: any;
  setActiveLink: any;
}

const SideNavBar = ({ activeLink, sidebarData, setActiveLink }: propsTypes) => {

  return (
    <>
      <div className="mb-[60px] _SideNav">
        <ul>
          {sidebarData?.map((item: any) => (
            
            <li key={item.id} className={`pb-4`}>
              <span
                className={`text-[14px] ${hoverCss}`}
              >
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <ul className="inline-flex items-center gap-[15px] pt-6 border-t-[1px] border-[#E1DDDD]">
          <li>
            <span className={`uppercase text-black  ${hoverCss}`}>Share</span>
          </li>
          {socialLinksData.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={`${hoverCss} text-[18px]`}
                aria-label='social links'
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideNavBar;
