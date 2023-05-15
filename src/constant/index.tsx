import {
  Awards,
  blogPostType,
  BrandImages,
  CareerLeft,
  CaseStudyProjectDataTypes,
  cookieContentType,
  FilterBarDataType,
  FooterMiddleItems,
  FooterNavigationsItems,
  FooterRightSideItems,
  HeroSectionDataType,
  HeroSectionSliderData,
  otherWordsSliderType,
  privacyContentArticleType,
  privacyMenuListType,
  ProjectCollapsebleType,
  stepsArrayType,
  whatWeDoAccordionType,
  WhatWeDoCategory,
  whoWeAreSliderDatasType,
} from '../types';

import Aw480SVG1 from '@views/Home/AwardSection/partials/Aw480SVG1';
import Aw480SVG2 from '@views/Home/AwardSection/partials/Aw480SVG2';
import AwardSvg1 from '@views/Home/AwardSection/partials/AwardSvg1';
import AwardSvg2 from '@views/Home/AwardSection/partials/AwardSvg2';
import AwardSvg3 from '@views/Home/AwardSection/partials/AwardSvg3';
import AwardSvg4 from '@views/Home/AwardSection/partials/AwardSvg4';
import AwardSvg5 from '@views/Home/AwardSection/partials/AwardSvg5';
import AwardSvg6 from '@views/Home/AwardSection/partials/AwardSvg6';
import AwardSvg7 from '@views/Home/AwardSection/partials/AwardSvg7';
import AwardSvg8 from '@views/Home/AwardSection/partials/AwardSvg8';
import SearchIcon from '@views/Insights/partials/SearchIcon';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import LazyLoad from 'react-lazy-load';
import BrandH1 from 'src/icons/BrandH1';
import BrandH2 from 'src/icons/BrandH2';
import BrandH3 from 'src/icons/BrandH3';
import BrandH4 from 'src/icons/BrandH4';
import BrandH5 from 'src/icons/BrandH5';
import BrandH6 from 'src/icons/BrandH6';
import BrandH7 from 'src/icons/BrandH7';
import BrandH8 from 'src/icons/BrandH8';
import StepBrand1 from 'src/icons/StepBrand1';
import StepBrand2 from 'src/icons/StepBrand2';
import StepBrand3 from 'src/icons/StepBrand3';
import StepBrand4 from 'src/icons/StepBrand4';
import StepBrand5 from 'src/icons/StepBrand5';
import StepBrand6 from 'src/icons/StepBrand6';
import Apps from 'src/views/WhatWeDo/components/Apps';
import ECom from 'src/views/WhatWeDo/components/E-com';
import Help from 'src/views/WhatWeDo/components/Help';
import Strategy from 'src/views/WhatWeDo/components/Strategy';
import Website from 'src/views/WhatWeDo/components/Website';
import DescriptionPar from 'src/views/WhatWeDo/DescriptionPartial/DescriptionPar';
import digitalMarketingLottieIcon from '../../public/imgs/lotties/digital-dd.json';
import ecommerceLottieIcon from '../../public/imgs/lotties/ecommerce_lottie.json';
import getInTouchLoettieIcon from '../../public/imgs/lotties/get_in_touch_lottie.json';
import mailLottieIcon from '../../public/imgs/lotties/mail_lottie.json';
import telephoneLottieIcon from '../../public/imgs/lotties/telephone_lottie.json';
import uiUxLottieIcon from '../../public/imgs/lotties/ui_ux_lottie.json';
import webAppsLottieIcon from '../../public/imgs/lotties/webapps_lottie.json';
import BlackLongLogo from 'src/icons/Logos/BlackLongLogo';
const Lottie = dynamic(() => import('react-lottie-player'));

export const email: string = 'gregg@digitalgregg.com';
export const mobile: string = '+8801851-590694';
export const tel: string = '8801851590694';
export const encEmail: string = 'Z3JlZ2dAZGlnaXRhbGdyZWdnLmNvbQ==';
export const encPhone: string = 'Kzg4MDE4NTEtNTkwNjk0';

export const facebookUrl = 'https://www.facebook.com/Digitalgregg';
export const twitterUrl = 'https://twitter.com/digital_gregg';
export const linkedinUrl = 'https://www.linkedin.com/company/digitalgregg';
export const whatsappUrl = 'https://api.whatsapp.com/send?phone=8801851590694';
export const pinterestUrl = 'https://www.pinterest.com/digital_gregg/';
export const youtubeUrl =
  'https://www.youtube.com/channel/UCUX5-PZx0prRRiIceq9Z3VA';
export const instagramUrl = 'https://www.instagram.com/Digitalgregg';
export const behanceUrl = '#';

export const footerMiddleItems: FooterMiddleItems[] = [
  {
    title: 'Headquaters',
    lists: [
      {
        text: '750 E Main St Stamford, CT 06902, USA',
        url: 'https://goo.gl/maps/xruFVvyFRBBMcwsh6',
      },
      // {
      //   text: 'CF/ P.IVA 05469810963',
      //   url: '#',
      // },
      {
        text: 'Privacy Policy',
        url: '/privacy-policy#privacy',
      },
      {
        text: 'Cookie Policy',
        url: '/privacy-policy#cookie',
      },
    ],
  },
];
export const footerRightSideItems: FooterRightSideItems[] = [
  {
    text: '+39 0240706003',
    url: '#',
    logo: (
      <Lottie
        animationData={telephoneLottieIcon}
        play
        speed={0.5}
        className="w-[40px] h-[40px]"
      />
    ),
  },
  {
    text: 'red1.web3@gmail.com',
    url: '#',
    logo: (
      <Lottie
        animationData={mailLottieIcon}
        play
        speed={0.5}
        className="w-[40px] h-[40px]"
      />
    ),
  },
  {
    text: 'Contact Us',
    url: '/get-started',
    logo: (
      <Lottie
        animationData={getInTouchLoettieIcon}
        play
        speed={0.5}
        className="w-[40px] h-[40px]"
      />
    ),
  },
];

export const footerNavigationsItems: FooterNavigationsItems[] = [
  {
    text: 'Home',
    path: '/',
  },
  {
    text: 'About',
    path: '/about',
  },
  {
    text: 'Services',
    path: '/services',
  },
  {
    text: 'Case studies',
    path: '/case-study',
  },
  // {
  //   text: 'Careers',
  //   path: '/careers',
  // },
  {
    text: 'Insights',
    path: '/insights',
  },
  {
    text: 'Contact',
    path: '/contact-us',
  },
];

export const heroSectionData: HeroSectionDataType = {
  grid1: {
    animatedText: 'WELCOME',
    desc: <>Creating digital experiences where thinking is made visual.</>,
    logo: (
      <LazyLoad>
        <BlackLongLogo classes='w-[300px] h-[100px]'/>
      </LazyLoad>
    ),
  },
};

export const heroSectionSliderData: HeroSectionSliderData[] = [
  {
    id: 1,
    imageTitle: 'Verizon',
    imageDesc: 'Sub Pages Redesign',
    imageUrl: '/images/home/slider/1.webp',
    imageUrlWOL: '/images/home/slider/1-wol.webp',
    imageUrlLong: '/images/home/slider/1-long.webp',
    linkUrl: '/case-study/1',
    smallImgUrl: '/images/home/slider/small-1.webp',
  },
  {
    id: 2,
    imageTitle: 'The North Face®',
    imageDesc: 'CMYK UI/UX Design',
    imageUrl: '/images/home/slider/2.webp',
    imageUrlWOL: '/images/home/slider/2-wol.webp',
    imageUrlLong: '/images/home/slider/2-long.webp',
    linkUrl: '/case-study/2',
    smallImgUrl: '/images/home/slider/small-2.webp',
  },
  {
    id: 3,
    imageTitle: 'Harlem Capital',
    imageDesc: 'Website Redesign',
    imageUrl: '/images/home/slider/3.webp',
    imageUrlWOL: '/images/home/slider/3-wol.webp',
    imageUrlLong: '/images/home/slider/3-long.webp',
    linkUrl: '/case-study/3',
    smallImgUrl: '/images/home/slider/small-3.webp',
  },
  {
    id: 4,
    imageTitle: 'OpenPhone',
    imageDesc: 'Desktop APP UI/UX',
    imageUrl: '/images/home/slider/4.webp',
    imageUrlWOL: '/images/home/slider/4-wol.webp',
    imageUrlLong: '/images/home/slider/4-long.webp',
    linkUrl: '/case-study/4',
    smallImgUrl: '/images/home/slider/small-4.webp',
  },
  {
    id: 5,
    imageTitle: 'Blakademik',
    imageDesc: 'UI/UX Design & Dev',
    imageUrl: '/images/home/slider/5.webp',
    imageUrlWOL: '/images/home/slider/5-wol.webp',
    imageUrlLong: '/images/home/slider/5-long.webp',
    linkUrl: '/case-study/5',
    smallImgUrl: '/images/home/slider/small-5.webp',
  },
  {
    id: 6,
    imageTitle: 'RapChat',
    imageDesc: 'Mobile UI/UX Design',
    imageUrl: '/images/home/slider/6.webp',
    imageUrlWOL: '/images/home/slider/6-wol.webp',
    imageUrlLong: '/images/home/slider/6-long.webp',
    linkUrl: '/case-study/6',
    smallImgUrl: '/images/home/slider/small-6.webp',
  },
  {
    id: 7,
    imageTitle: 'Winden',
    imageDesc: 'UI/UX Design & Dev',
    imageUrl: '/images/home/slider/7.webp',
    imageUrlWOL: '/images/home/slider/7-wol.webp',
    imageUrlLong: '/images/home/slider/7-long.webp',
    linkUrl: '/case-study/7',
    smallImgUrl: '/images/home/slider/small-7.webp',
    videoSrc: '/videos/widen-hero.webm',
  },
  {
    id: 8,
    imageTitle: 'OneKey',
    imageDesc: 'UI/UX Design',
    imageUrl: '/images/home/slider/8.webp',
    imageUrlWOL: '/images/home/slider/8-wol.webp',
    imageUrlLong: '/images/home/slider/8-long.webp',
    linkUrl: '/case-study/8',
    smallImgUrl: '/images/home/slider/small-8.webp',
    videoSrc: '/videos/onekey-hero.mp4',
  },
  {
    id: 9,
    imageTitle: 'Bonsai',
    imageDesc: 'Mobile App UI/UX Design',
    imageUrl: '/images/home/slider/9.webp',
    imageUrlWOL: '/images/home/slider/9-wol.webp',
    imageUrlLong: '/images/home/slider/9-long.webp',
    linkUrl: '/case-study/9',
    smallImgUrl: '/images/home/slider/small-9.webp',
  },
  {
    id: 10,
    imageTitle: 'NAACP',
    imageDesc: 'UI/UX Design',
    imageUrl: '/images/home/slider/10.png',
    imageUrlWOL: '/images/home/slider/10-wol.png',
    imageUrlLong: '/images/home/slider/10-long.png',
    linkUrl: '/case-study/10',
    smallImgUrl: '/images/home/slider/small-10.png',
  },
  {
    id: 11,
    imageTitle: 'iDreamers App',
    imageDesc: 'Mobile App Design',
    imageUrl: '/images/home/slider/11.png',
    imageUrlWOL: '/images/home/slider/11-wol.png',
    imageUrlLong: '/images/home/slider/11-long.png',
    linkUrl: '/case-study/11',
    smallImgUrl: '/images/home/slider/small-11.png',
  },
  {
    id: 12,
    imageTitle: 'Black Girls Code',
    imageDesc: 'Website Redesign',
    imageUrl: '/images/home/slider/12.png',
    imageUrlWOL: '/images/home/slider/12-wol.png',
    imageUrlLong: '/images/home/slider/12-long.png',
    linkUrl: '/case-study/12',
    smallImgUrl: '/images/home/slider/small-12.png',
  },
  {
    id: 13,
    imageTitle: 'Reveler.io',
    imageDesc: 'Sub Pages Redesign',
    imageUrl: '/images/home/slider/13.webp',
    imageUrlWOL: '/images/home/slider/13-wol.webp',
    imageUrlLong: '/images/home/slider/13-long.webp',
    linkUrl: '/case-study/13',
    smallImgUrl: '/images/home/slider/small-13.webp',
  },
];

export const insightsHeroSliderData: HeroSectionSliderData[] = [
  {
    id: 1,
    imageTitle: 'Why UX designs are rapidly changing in todays world?',
    imageDesc: '',
    imageUrl: '/images/insight/slider/1.png',
    imageUrlWOL: '/images/home/slider/1-wol.webp',
    imageUrlLong: '/images/home/slider/1-long.webp',
    linkUrl: '/case-study/1',
    smallImgUrl: '/images/home/slider/small-1.webp',
  },
  {
    id: 2,
    imageTitle: 'The North Face®',
    imageDesc: 'CMYK UI/UX Design',
    imageUrl: '/images/home/slider/2.webp',
    imageUrlWOL: '/images/home/slider/2-wol.webp',
    imageUrlLong: '/images/home/slider/2-long.webp',
    linkUrl: '/case-study/2',
    smallImgUrl: '/images/home/slider/small-2.webp',
  },
  {
    id: 3,
    imageTitle: 'Harlem Capital',
    imageDesc: 'Website Redesign',
    imageUrl: '/images/home/slider/3.webp',
    imageUrlWOL: '/images/home/slider/3-wol.webp',
    imageUrlLong: '/images/home/slider/3-long.webp',
    linkUrl: '/case-study/3',
    smallImgUrl: '/images/home/slider/small-3.webp',
  },
];

export const insightsFilterBarData: FilterBarDataType[] = [
  {
    id: 1,
    value: 'all',
    content: 'ALL',
  },
  {
    id: 2,
    value: 'user_experience',
    content: 'USER EXPERIENCE',
  },
  {
    id: 3,
    value: 'ui_design',
    content: 'UI DESIGN',
  },
  {
    id: 4,
    value: 'small_business',
    content: 'SMALL BUSINESS',
  },
  {
    id: 5,
    value: 'digital_strategy',
    content: 'DIGITAL STRATEGY',
  },
  {
    id: 6,
    value: 'search',
    content: <SearchIcon />,
  },
];

export const caseStudyProjectsData: CaseStudyProjectDataTypes[] = [
  {
    id: 1,
    heroSectionData: {
      id: 1,
      imageTitle: 'Verizon',
      imageDesc: 'Sub Pages Redesign',
      imageUrl: '/images/home/slider/1.webp',
      imageUrlWOL: '/images/home/slider/1-wol.webp',
      imageUrlLong: '/images/home/slider/1-long.webp',
      imageUrlSmall: '/images/home/slider/1-small.webp',
      linkUrl: '/case-study/1',
      videoSrc: '/videos/verizon-hero.mp4',
    },
    overviewSectionData: {
      client: 'Verizon',
      year: 2021,
      activities: [
        'UX/UI Design',
        'Micro-animations',
        'UX Research & Strategy',
      ],
      overview: `With millions of customers and the widest coverage of 5G wireless network in the US, Verizon Wireless is undeniably the largest telecom provider in the country. Despite their already impressive reach, Verizon is determined to demonstrate the full potential of 5G and all the exciting possibilities it holds for the future.`,
      challenge: `Our biggest challenge was to strike a balance between catering to both industry professionals and everyday users who are new to the potential impact of 5G. We were challenge to create an experience that not only highlighted the faster internet speeds and better connectivity offered by 5G, but also showcased the many potential uses of the technology beyond that. It is now a fact, that 5G will be the backbone of the majority of future technologies, it was important for us to create a design that effectively communicated this message to a wide range of users.`,
      solution: `We focused on creating a design that was visually engaging and easy to use, while also providing comprehensive information about the potential uses and benefits of 5G technology. To cater to industry professionals, we included in-depth technical details and use cases that showcased the advanced capabilities of 5G. For the average user, we presented the information in a more accessible and user-friendly manner.

      We also made sure to incorporate interactive elements, such as animations and videos, to make the experience more engaging and informative. Additionally, we tested the design with a diverse group of users and used their feedback to refine the user experience.`,
    },
    landingPageSectionData: [
      {
        id: 1,
        sectionHeader: {
          count: '01',
          title: 'Design',
          subTitle: '5G Device Sub Page',
          description: `We designed a layout that would make it easier for the user to explore the content without sacrificing Verizon’s engaging and bold style.`,
        },
        images: [
          {
            url: '/public/images/project/project-1/image-1.webp',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-2.png',
            title: '',
          },
        ],
      },
      {
        id: 2,
        sectionHeader: {
          count: '02',
          title: 'Design',
          subTitle: 'Connecticut Page for Fios',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-3.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-4.png',
            title: '',
          },
        ],
      },
      {
        id: 3,
        sectionHeader: {
          count: '03',
          title: 'Design',
          subTitle: 'Mobile Device Management Page',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-5.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-6.png',
            title: '',
          },
        ],
      },
      {
        id: 4,
        sectionHeader: {
          count: '04',
          title: 'Design',
          subTitle: 'Mobile Device Management Page',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-7.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-8.png',
            title: '',
          },
        ],
      },
      {
        id: 5,
        sectionHeader: {
          count: '05',
          title: 'Video',
          subTitle: 'Storyboarding for Verizon 5G Social Ads',
          description: `We were tasked to create a cohesive set of assets for Verizon’s 5G campaign without sacrificing the tonality of the brand. Working with a stellar crew, we primarily worked on storyboarding for their social media rollouts.
          `,
        },
        video: {
          videoThumbnail: '/imgs/case-study/page-1/image-9.png',
          videoSrc: '/videos/blank_space.mp4',
        },
      },
    ],
  },
  {
    id: 2,
    heroSectionData: {
      id: 2,
      imageTitle: 'The North Face®',
      imageDesc: 'UI/UX Design',
      imageUrl: '/images/home/slider/2.webp',
      imageUrlWOL: '/images/home/slider/2-wol.webp',
      imageUrlLong: '/images/home/slider/2-long.webp',
      imageUrlSmall: '/images/home/slider/2-small.webp',
      linkUrl: '/case-study/2',
    },
    overviewSectionData: {
      client: 'The North Face®',
      year: 2020,
      activities: [
        'UX/UI Design',
        'Copywriting',
        'Development',
        'Email Marketing',
      ],
      overview: `We were commissioned to design and execute the multi-tiered web campaign for CMYK, The North Face’s latest limited-edition capsule collection.
      `,
      challenge: `The CMYK collection reintroduces some of The North Face’s most iconic pieces in a bold new colorway and pattern, incorporating the vibrant CMYK palette of Cyan, Magenta, Yellow, and Black.
      `,
      solution: `The CMYK capsule collection is, at its core, a color story. We delivered an in-depth landing page to introduce the concept and products. Flashes of CMYK color underpin the design. Bold, in-action images are interspersed with still-life product shots, creating an effect that is aspirational and commercial in equal measure.
      `,
    },
    landingPageSectionData: [
      {
        id: 1,
        sectionHeader: {
          count: '01',
          title: 'Landing page',
          subTitle: '',
          description: `The collection centres on a color palette and pattern that brings a fresh modernity to retro best-sellers. The landing page blends both past and future, culminating in a minimalist design with bursts of color and pattern.
          `,
        },
        images: [
          {
            url: '/imgs/case-study/page-2/image-2.jpg',
            title: 'image-1',
          },
          {
            url: '/imgs/case-study/page-2/image-3.jpg',
            title: 'image-2',
          },
        ],
        video: {
          videoThumbnail: '/imgs/case-study/page-2/image-1.jpg',
          videoSrc: '/videos/case-study-2.mp4',
        },
      },
      {
        id: 2,
        sectionHeader: {
          count: '02',
          title: 'Homepage',
          subTitle: 'takeover.',
          description: `Many major campaigns such as this involve a homepage takeover. Such a prominent position on The North Face’s ecom site cannot be taken lightly. As such, we created a striking main banner, designed to grab the user’s attention and funnel them directly to the collection’s landing page.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-2/image-4.jpg',
            title: '',
          },
          // {
          //   url: '/imgs/case-study/page-2/image-3.png',
          //   title: '',
          // },
          // {
          //   url: '/imgs/case-study/page-2/image-6.png',
          //   title: '',
          // },
        ],
      },
      {
        id: 3,
        sectionHeader: {
          count: '03',
          title: 'Marketing',
          subTitle: 'emails.',
          description: `The collection’s products are timeless, established classics, and needed little by way of introduction. Therefore, we included less copy and instead letting the products and eye-catching design do the heavy lifting.
          `,
        },
        images: [
          {
            url: '/imgs/case-study/page-2/image-5.jpg',
            title: '',
          },
          {
            url: '/imgs/case-study/page-2/image-6.jpg',
            title: '',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    heroSectionData: {
      id: 3,
      imageTitle: 'Harlem Capital',
      imageDesc: 'Website Redesign',
      imageUrl: '/images/home/slider/3.webp',
      imageUrlWOL: '/images/home/slider/3-wol.webp',
      imageUrlLong: '/images/home/slider/3-long.webp',
      imageUrlSmall: '/images/home/slider/3-small.webp',
      linkUrl: '/case-study/3',
    },
    overviewSectionData: {
      client: 'Harlem Capital',
      year: 2022,
      activities: [
        'User flows & maps',
        'Wireframing + Concepts',
        'Prototyping',
        'UI Style Guide',
        'React.js development',
      ],
      overview: `Harlem Capital, an early-stage venture firm that invests in tech-enabled startups with a focus on minority founders, approached us to create a brand-aligned experience following their recent rebranding. Tasked with capturing the brand's core values of boldness, innovation, and uniqueness, we delivered a highly impactful and meaningful user experience that effectively communicated the mission and vision of the company.
      `,
      challenge: `However, creating a design that effectively captured the brand's core values while also ensuring a seamless user experience presented a significant challenge. The team was required to develop a design strategy that integrated boldness and innovation with user-friendliness, without compromising the unique identity of the brand.
      `,
      solution: `Our team utilized a design approach that emphasized the creation of a visual language that incorporated bold and innovative elements while maintaining a clear and consistent user flow. We collaborated closely with Harlem Capital to understand their vision and goals, conducting extensive user research and testing to ensure that the design effectively captured the brand's values and resonated with the target audience. By taking a strategic and collaborative approach to design, we were able to deliver a cohesive and impactful user experience that effectively communicated the brand's mission and values.`,
    },
    landingPageSectionData: [
      {
        id: 1,
        sectionHeader: {
          count: '01',
          title: 'Design',
          subTitle: '5G Device Sub Page',
          description: `We designed a layout that would make it easier for the user to explore the content without sacrificing Verizon’s engaging and bold style.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-1.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-2.png',
            title: '',
          },
        ],
      },
      {
        id: 2,
        sectionHeader: {
          count: '02',
          title: 'Design',
          subTitle: 'Connecticut Page for Fios',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-3.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-4.png',
            title: '',
          },
        ],
      },
      {
        id: 3,
        sectionHeader: {
          count: '03',
          title: 'Design',
          subTitle: 'Mobile Device Management Page',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-5.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-6.png',
            title: '',
          },
        ],
      },
      {
        id: 4,
        sectionHeader: {
          count: '04',
          title: 'Design',
          subTitle: 'Mobile Device Management Page',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-7.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-8.png',
            title: '',
          },
        ],
      },
      {
        id: 5,
        sectionHeader: {
          count: '05',
          title: 'Video',
          subTitle: 'Storyboarding for Verizon 5G Social Ads',
          description: `We were tasked to create a cohesive set of assets for Verizon’s 5G campaign without sacrificing the tonality of the brand. Working with a stellar crew, we primarily worked on storyboarding for their social media rollouts.
          `,
        },
        video: {
          videoThumbnail: '/imgs/case-study/page-1/image-9.png',
          videoSrc: '/videos/blank_space.mp4',
        },
      },
    ],
  },
  {
    id: 4,
    heroSectionData: {
      id: 4,
      imageTitle: 'OpenPhone',
      imageDesc: 'Desktop APP UI/UX',
      imageUrl: '/images/home/slider/4.webp',
      imageUrlWOL: '/images/home/slider/4-wol.webp',
      imageUrlLong: '/images/home/slider/4-long.webp',
      imageUrlSmall: '/images/home/slider/4-small.webp',
      linkUrl: '/case-study/4',
    },
    overviewSectionData: {
      client: 'OpenPhone',
      year: 2021,
      activities: [
        'UI Design',
        'Wireframing + Concepts',
        'Prototyping',
        'UI Styleguide',
      ],
      overview: `In collaboration with Mau Tam's team, we worked to deliver a digital experience to OpenPhone's desktop users. OpenPhone offers a cutting-edge business phone solution that can be used on a variety of devices, including smartphones and computers. With our expertise and collaboration, we aimed to provide an advanced and seamless digital experience for OpenPhone's users.`,
      challenge: `The web platform of OpenPhone exhibited inconsistencies across different displays and devices, indicating a need for a complete overhaul to enhance both UX and backend functionality. The site's information was also found to be unclear and unintuitive, thus hindering the overall user experience.
      `,
      solution: `We developed a customized web interface that effectively communicated the brand's message and enhanced the user experience, while preserving unique site-specific characteristics that were integral to the brand.`,
    },
    landingPageSectionData: [
      {
        id: 1,
        sectionHeader: {
          count: '01',
          title: 'Design',
          subTitle: '5G Device Sub Page',
          description: `We designed a layout that would make it easier for the user to explore the content without sacrificing Verizon’s engaging and bold style.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-1.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-2.png',
            title: '',
          },
        ],
      },
      {
        id: 2,
        sectionHeader: {
          count: '02',
          title: 'Design',
          subTitle: 'Connecticut Page for Fios',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-3.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-4.png',
            title: '',
          },
        ],
      },
      {
        id: 3,
        sectionHeader: {
          count: '03',
          title: 'Design',
          subTitle: 'Mobile Device Management Page',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-5.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-6.png',
            title: '',
          },
        ],
      },
      {
        id: 4,
        sectionHeader: {
          count: '04',
          title: 'Design',
          subTitle: 'Mobile Device Management Page',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-7.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-8.png',
            title: '',
          },
        ],
      },
      {
        id: 5,
        sectionHeader: {
          count: '05',
          title: 'Video',
          subTitle: 'Storyboarding for Verizon 5G Social Ads',
          description: `We were tasked to create a cohesive set of assets for Verizon’s 5G campaign without sacrificing the tonality of the brand. Working with a stellar crew, we primarily worked on storyboarding for their social media rollouts.
          `,
        },
        video: {
          videoThumbnail: '/imgs/case-study/page-1/image-9.png',
          videoSrc: '/videos/blank_space.mp4',
        },
      },
    ],
  },
  {
    id: 5,
    heroSectionData: {
      id: 5,
      imageTitle: 'Blakademik',
      imageDesc: 'UI/UX Design & Dev',
      imageUrl: '/images/home/slider/5.webp',
      imageUrlWOL: '/images/home/slider/5-wol.webp',
      imageUrlLong: '/images/home/slider/5-long.webp',
      imageUrlSmall: '/images/home/slider/5-small.webp',
      linkUrl: '/case-study/5',
    },
    overviewSectionData: {
      client: 'Blakademik',
      year: 2020,
      activities: [
        'Illustrations',
        'UI/UX design',
        'User Personasv',
        'Web development',
      ],
      overview: `We had the opportunity to collaborate with Hannah Lot Inc. to create a new website and brand identity for Blakademik. Blakademik is an online platform that provides a dedicated space for Black voices to engage in discussions around current events, with the aim of empowering, educating, and celebrating Black culture. Our objective was to create a design that not only captures the essence of Blakademik's mission but also provides an optimal user experience for its target audience.`,
      challenge: `The main challenge we faced when designing Blakademik's website and branding was the fact that the platform was previously only available on social media, with YouTube being its main channel. The client required a website that would consolidate all their activities and provide a central hub for their content. Additionally, the design had to align with Blakademik's existing logo and color palette, while still conveying a fun and exciting vibe that would keep users engaged and entertained.`,
      solution: `Our solution to the challenge of designing Blakademik's website and branding was carefully crafted to showcase the brand's extensive collection of video episodes and podcasts in a way that is user-friendly and engaging. We designed the site to have actionable sections and elements that clearly explained Blakademik's mission and goals, while also providing information on how people can get involved and help support the cause.`,
    },
    landingPageSectionData: [
      {
        id: 1,
        sectionHeader: {
          count: '01',
          title: 'Design',
          subTitle: '5G Device Sub Page',
          description: `We designed a layout that would make it easier for the user to explore the content without sacrificing Verizon’s engaging and bold style.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-1.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-2.png',
            title: '',
          },
        ],
      },
      {
        id: 2,
        sectionHeader: {
          count: '02',
          title: 'Design',
          subTitle: 'Connecticut Page for Fios',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-3.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-4.png',
            title: '',
          },
        ],
      },
      {
        id: 3,
        sectionHeader: {
          count: '03',
          title: 'Design',
          subTitle: 'Mobile Device Management Page',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-5.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-6.png',
            title: '',
          },
        ],
      },
      {
        id: 4,
        sectionHeader: {
          count: '04',
          title: 'Design',
          subTitle: 'Mobile Device Management Page',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-7.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-8.png',
            title: '',
          },
        ],
      },
      {
        id: 5,
        sectionHeader: {
          count: '05',
          title: 'Video',
          subTitle: 'Storyboarding for Verizon 5G Social Ads',
          description: `We were tasked to create a cohesive set of assets for Verizon’s 5G campaign without sacrificing the tonality of the brand. Working with a stellar crew, we primarily worked on storyboarding for their social media rollouts.
          `,
        },
        video: {
          videoThumbnail: '/imgs/case-study/page-1/image-9.png',
          videoSrc: '/videos/blank_space.mp4',
        },
      },
    ],
  },
  {
    id: 6,
    heroSectionData: {
      id: 6,
      imageTitle: 'RapChat',
      imageDesc: 'Mobile UI/UX Design',
      imageUrl: '/images/home/slider/6.webp',
      imageUrlWOL: '/images/home/slider/6-wol.webp',
      imageUrlLong: '/images/home/slider/6-long.webp',
      imageUrlSmall: '/images/home/slider/6-small.webp',
      linkUrl: '/case-study/6',
    },
    overviewSectionData: {
      client: 'RapChat',
      year: 2022,
      activities: [
        'UX research',
        'UX/UI design',
        'Mobile & Web App',
        'User Personas',
        'User Flow',
      ],
      overview: `Rapchat is a revolutionary platform that empowers music creators to bring their ideas to life using just their mobile devices. Our task was to design a user interface that would seamlessly integrate the entire music creation process in one place, making it more accessible and intuitive for aspiring artists of all skill levels. Through our collaboration with the Rapchat team, we aimed to develop a web and mobile app that would help democratize music creation and revolutionize the way people engage with music.`,
      challenge: `Our goal was to make music creation more accessible for all, by designing an interface that would allow anyone to become a music artist, regardless of their level of experience or expertise. By streamlining the music creation process and bringing everything together in one place, we sought to break down the barriers to entry that have traditionally kept many people from pursuing their musical passions.`,
      solution: `The various pain points that music creators often face, such as the high cost of equipment and the steep learning curve associated with complex software tools. We identified key areas where we could simplify the music creation process and make it more intuitive for users with little to no experience. With this knowledge in mind, we designed a user interface that would be both aesthetically pleasing and highly functional. We focused on making the app easy to navigate, with clear instructions and visual cues that would guide users through each step of the music creation process.`,
    },
    landingPageSectionData: [
      {
        id: 1,
        sectionHeader: {
          count: '01',
          title: 'Design',
          subTitle: '5G Device Sub Page',
          description: `We designed a layout that would make it easier for the user to explore the content without sacrificing Verizon’s engaging and bold style.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-1.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-2.png',
            title: '',
          },
        ],
      },
      {
        id: 2,
        sectionHeader: {
          count: '02',
          title: 'Design',
          subTitle: 'Connecticut Page for Fios',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-3.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-4.png',
            title: '',
          },
        ],
      },
      {
        id: 3,
        sectionHeader: {
          count: '03',
          title: 'Design',
          subTitle: 'Mobile Device Management Page',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-5.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-6.png',
            title: '',
          },
        ],
      },
      {
        id: 4,
        sectionHeader: {
          count: '04',
          title: 'Design',
          subTitle: 'Mobile Device Management Page',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-7.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-8.png',
            title: '',
          },
        ],
      },
      {
        id: 5,
        sectionHeader: {
          count: '05',
          title: 'Video',
          subTitle: 'Storyboarding for Verizon 5G Social Ads',
          description: `We were tasked to create a cohesive set of assets for Verizon’s 5G campaign without sacrificing the tonality of the brand. Working with a stellar crew, we primarily worked on storyboarding for their social media rollouts.
          `,
        },
        video: {
          videoThumbnail: '/imgs/case-study/page-1/image-9.png',
          videoSrc: '/videos/blank_space.mp4',
        },
      },
    ],
  },
  {
    id: 7,
    heroSectionData: {
      id: 7,
      imageTitle: 'Winden',
      imageDesc: 'UI/UX Design & Dev',
      imageUrl: '/images/home/slider/7.webp',
      imageUrlWOL: '/images/home/slider/7-wol.webp',
      imageUrlLong: '/images/home/slider/7-long.webp',
      imageUrlSmall: '/images/home/slider/7-small.webp',
      linkUrl: '/case-study/7',
      videoSrc: '/videos/widen-hero.mp4',
      mobileVideoSrc: '/videos/widen-hero-mobile.mp4',
    },
    overviewSectionData: {
      client: 'Winden',
      year: 2022,
      activities: [
        'Art Direction',
        'UI design',
        'User Flows',
        'Interaction Design',
        'Animations (With AE)',
        'HI-Fi Protoyping',
      ],
      overview: `Winden's mission is to create banking solutions tailored to the needs of the internet economy, with offerings including checking accounts, virtual cards, invoicing, and tax automation. We worked closely with Winden to understand their vision, goals, and user needs.`,
      challenge: `One of the main challenges that the UI/UX design team faced was to ensure that the platform was both user-friendly and functional. We also had to take into account the regulatory requirements and compliance standards in the banking industry. This required close collaboration with Winden's legal and compliance teams to ensure that the platform met all the necessary regulations.`,
      solution: `Our solution focused on creating an intuitive and easy-to-use interface that streamlined account management and financial processes, providing users with a complete and easy-to-use financial management solution that saved time and increased efficiency.`,
    },
    landingPageSectionData: [
      {
        id: 1,
        sectionHeader: {
          count: '01',
          title: 'Design',
          subTitle: '5G Device Sub Page',
          description: `We designed a layout that would make it easier for the user to explore the content without sacrificing Verizon’s engaging and bold style.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-1.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-2.png',
            title: '',
          },
        ],
      },
      {
        id: 2,
        sectionHeader: {
          count: '02',
          title: 'Design',
          subTitle: 'Connecticut Page for Fios',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-3.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-4.png',
            title: '',
          },
        ],
      },
      {
        id: 3,
        sectionHeader: {
          count: '03',
          title: 'Design',
          subTitle: 'Mobile Device Management Page',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-5.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-6.png',
            title: '',
          },
        ],
      },
      {
        id: 4,
        sectionHeader: {
          count: '04',
          title: 'Design',
          subTitle: 'Mobile Device Management Page',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-7.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-8.png',
            title: '',
          },
        ],
      },
      {
        id: 5,
        sectionHeader: {
          count: '05',
          title: 'Video',
          subTitle: 'Storyboarding for Verizon 5G Social Ads',
          description: `We were tasked to create a cohesive set of assets for Verizon’s 5G campaign without sacrificing the tonality of the brand. Working with a stellar crew, we primarily worked on storyboarding for their social media rollouts.
          `,
        },
        video: {
          videoThumbnail: '/imgs/case-study/page-1/image-9.png',
          videoSrc: '/videos/blank_space.mp4',
        },
      },
    ],
  },
  {
    id: 8,
    heroSectionData: {
      id: 8,
      imageTitle: 'OneKey',
      imageDesc: 'UI/UX Design',
      imageUrl: '/images/home/slider/8.webp',
      imageUrlWOL: '/images/home/slider/8-wol.webp',
      imageUrlLong: '/images/home/slider/8-long.webp',
      imageUrlSmall: '/images/home/slider/8-small.webp',
      linkUrl: '/case-study/8',
      videoSrc: '/videos/onekey-hero.mp4',
      mobileVideoSrc: '/videos/onekey-hero-mobile.mp4',
    },
    overviewSectionData: {
      client: 'OneKey',
      year: 2022,
      activities: [
        'Branding',
        '3D renderings',
        'Prototyping',
        'Development',
        'UX Design',
      ],
      overview: `Introducing OneKey, the ultimate solution for safeguarding, purchasing, trading, and increasing your cryptocurrency holdings. Our partnership with Dime and the OneKey team was characterized by a level of synergy rarely seen between a startup and collaborators.`,
      challenge: `We faced the challenge of creating a user interface that reflected the client's vision of being “The Apple of Crypto." We had to balance the aesthetic appeal of sleek, modern design with the functional requirements of a platform that was touted as being the most secure way to store you cryptocurrencies.`,
      solution: `Our solution to the challenge was to create a clean, modern design with a focus on intuitive functionality and advanced security features, aligning with the client's vision of being the "Apple of Crypto." We worked closely with the client to ensure that the visual language and branding accurately reflected their high-end objectives.`,
    },
    landingPageSectionData: [
      {
        id: 1,
        sectionHeader: {
          count: '01',
          title: 'Design',
          subTitle: '5G Device Sub Page',
          description: `We designed a layout that would make it easier for the user to explore the content without sacrificing Verizon’s engaging and bold style.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-1.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-2.png',
            title: '',
          },
        ],
      },
      {
        id: 2,
        sectionHeader: {
          count: '02',
          title: 'Design',
          subTitle: 'Connecticut Page for Fios',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-3.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-4.png',
            title: '',
          },
        ],
      },
      {
        id: 3,
        sectionHeader: {
          count: '03',
          title: 'Design',
          subTitle: 'Mobile Device Management Page',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-5.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-6.png',
            title: '',
          },
        ],
      },
      {
        id: 4,
        sectionHeader: {
          count: '04',
          title: 'Design',
          subTitle: 'Mobile Device Management Page',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: 'imgs/case-study/page-1/image-7.png',
            title: '',
          },
          {
            url: 'imgs/case-study/page-1/image-8.png',
            title: '',
          },
        ],
      },
      {
        id: 5,
        sectionHeader: {
          count: '05',
          title: 'Video',
          subTitle: 'Storyboarding for Verizon 5G Social Ads',
          description: `We were tasked to create a cohesive set of assets for Verizon’s 5G campaign without sacrificing the tonality of the brand. Working with a stellar crew, we primarily worked on storyboarding for their social media rollouts.
          `,
        },
        video: {
          videoThumbnail: 'imgs/case-study/page-1/image-9.png',
          videoSrc: '/videos/blank_space.mp4',
        },
      },
    ],
  },
  {
    id: 9,
    heroSectionData: {
      id: 9,
      imageTitle: 'Bonsai',
      imageDesc: 'Mobile App UI/UX Design',
      imageUrl: '/images/home/slider/9.webp',
      imageUrlWOL: '/images/home/slider/9-wol.webp',
      imageUrlLong: '/images/home/slider/9-long.webp',
      imageUrlSmall: '/images/home/slider/9-small.webp',
      linkUrl: '/case-study/9',
    },
    overviewSectionData: {
      client: 'Bonsai',
      year: 2022,
      activities: [
        'Branding',
        'Illustrations',
        'User flows & maps',
        'UX/UI design',
        'UI style guide',
      ],
      overview: `Bonsai, a renowned self-transformation brand, approached us to design a user experience that would encourage users to improve various aspects of their lives. Our team developed custom illustrations and implemented them in a way that effectively communicated the brand's core values and mission, while also delivering a meaningful and impactful user experience.`,
      challenge: `The challenge for the Bonsai app was to create an experience that effectively conveyed the brand's self-improvement message in a visually appealing and intuitive way. Additionally, the design needed to provide a seamless and accessible user experience across different devices, while also integrating features that could adapt to individual user needs and behaviors. Achieving this balance of usability, visual appeal, and personalized functionality presented a significant challenge for our design team.`,
      solution: `Our team implemented a design approach that prioritized user research and testing, allowing us to develop a deep understanding of user needs and behaviors. We collaborated closely with Bonsai to understand their brand values and mission, and to ensure that our design effectively captured these elements. We also incorporated custom illustrations that reflected the brand's unique visual identity, while also enhancing the overall user experience.`,
    },
    landingPageSectionData: [
      {
        id: 1,
        sectionHeader: {
          count: '01',
          title: 'Design',
          subTitle: '5G Device Sub Page',
          description: `We designed a layout that would make it easier for the user to explore the content without sacrificing Verizon’s engaging and bold style.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-1.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-2.png',
            title: '',
          },
        ],
      },
      {
        id: 2,
        sectionHeader: {
          count: '02',
          title: 'Design',
          subTitle: 'Connecticut Page for Fios',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-3.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-4.png',
            title: '',
          },
        ],
      },
      {
        id: 3,
        sectionHeader: {
          count: '03',
          title: 'Design',
          subTitle: 'Mobile Device Management Page',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-5.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-6.png',
            title: '',
          },
        ],
      },
      {
        id: 4,
        sectionHeader: {
          count: '04',
          title: 'Design',
          subTitle: 'Mobile Device Management Page',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-7.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-8.png',
            title: '',
          },
        ],
      },
      {
        id: 5,
        sectionHeader: {
          count: '05',
          title: 'Video',
          subTitle: 'Storyboarding for Verizon 5G Social Ads',
          description: `We were tasked to create a cohesive set of assets for Verizon’s 5G campaign without sacrificing the tonality of the brand. Working with a stellar crew, we primarily worked on storyboarding for their social media rollouts.
          `,
        },
        video: {
          videoThumbnail: '/imgs/case-study/page-1/image-9.png',
          videoSrc: '/videos/blank_space.mp4',
        },
      },
    ],
  },
  {
    id: 10,
    heroSectionData: {
      id: 10,
      imageTitle: 'NAACP',
      imageDesc: 'UI/UX Design',
      imageUrl: '/images/home/slider/10.png',
      imageUrlWOL: '/images/home/slider/10-wol.png',
      imageUrlLong: '/images/home/slider/10-long.png',
      imageUrlSmall: '/images/home/slider/10-small.png',
      linkUrl: '/case-study/10',
    },
    overviewSectionData: {
      client: 'Verizon',
      year: 2020,
      activities: ['UX Design', 'UI Interactions', 'Video Storyboarding'],
      overview: `In this case study, you will explore our process of redesigning the NAACP website to align with their their key initiatives and how we helped them increase membership amongst younger generations. We will examine the challenges, opportunities, and solutions that emerged as we worked closely with the NAACP team to create a website that is both functional and inspiring, and that helps to move the organization forward in its mission to advance social justice and equality for all.
      `,
      challenge: `One of the main challenges we faced with this design project was how to modernize the NAACP website while maintaining the organization's historical legacy and credibility. We needed to strike a balance between updating the design and user experience to appeal to younger generations, while also preserving the NAACP's traditional values and maintaining the trust of their existing membership base.
      `,
      solution: `To tackle the challenge of modernizing the NAACP website while still honoring the organization's history and credibility, we took a user-centered design approach conducted extensive research to understand the needs and preferences of the younger generation and identified design elements that would appeal to them, while also including elements that were essential to keeping existing NAACP members to meet their expectations and ensure that the redesign did not compromise the organization's reputation.`,
    },
    landingPageSectionData: [
      {
        id: 1,
        sectionHeader: {
          count: '01',
          title: 'Design',
          subTitle: '5G Device Sub Page',
          description: `We designed a layout that would make it easier for the user to explore the content without sacrificing Verizon’s engaging and bold style.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-1.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-2.png',
            title: '',
          },
        ],
      },
      {
        id: 2,
        sectionHeader: {
          count: '02',
          title: 'Design',
          subTitle: 'Connecticut Page for Fios',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-3.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-4.png',
            title: '',
          },
        ],
      },
      {
        id: 3,
        sectionHeader: {
          count: '03',
          title: 'Design',
          subTitle: 'Mobile Device Management Page',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-5.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-6.png',
            title: '',
          },
        ],
      },
      {
        id: 4,
        sectionHeader: {
          count: '04',
          title: 'Design',
          subTitle: 'Mobile Device Management Page',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-7.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-8.png',
            title: '',
          },
        ],
      },
      {
        id: 5,
        sectionHeader: {
          count: '05',
          title: 'Video',
          subTitle: 'Storyboarding for Verizon 5G Social Ads',
          description: `We were tasked to create a cohesive set of assets for Verizon’s 5G campaign without sacrificing the tonality of the brand. Working with a stellar crew, we primarily worked on storyboarding for their social media rollouts.
          `,
        },
        video: {
          videoThumbnail: '/imgs/case-study/page-1/image-9.png',
          videoSrc: '/videos/blank_space.mp4',
        },
      },
    ],
  },
  {
    id: 11,
    heroSectionData: {
      id: 11,
      imageTitle: 'iDreamers App',
      imageDesc: 'Mobile App Design',
      imageUrl: '/images/home/slider/11.png',
      imageUrlWOL: '/images/home/slider/11-wol.png',
      imageUrlLong: '/images/home/slider/11-long.png',
      imageUrlSmall: '/images/home/slider/11-small.png',
      linkUrl: '/case-study/11',
    },
    overviewSectionData: {
      client: 'iDreamers',
      year: 2023,
      activities: [
        'User Research & Analysis',
        'Wireframing',
        'Userflow',
        'UI Design',
        'UX Design & Prototyping',
      ],
      overview: `iDreamers is a unique social platform that allows users to share their dreams and goals with a community of like-minded individuals who can offer support, advice, and even financial backing to help them achieve their aspirations. This was our first project where we had full control over every aspect of the project. `,
      challenge: `One of the primary challenges is creating an interface that encourages users to share their dreams and aspirations with the community. While sharing personal goals can be liberating, it can also be challenging for users to open up about their vulnerabilities, which can create a psychological barrier to entry for some users.`,
      solution: `To address the challenges, we implemented features such as privacy settings and anonymous posting options that give users control over how they share their goals with the community. We also incorporated gamification elements to the design, which provides a fun and interactive experience for users to stay committed to their goals. We designed a feature where users can set milestones and track their progress towards achieving their dreams.`,
    },
    landingPageSectionData: [
      {
        id: 1,
        sectionHeader: {
          count: '01',
          title: 'Design',
          subTitle: '5G Device Sub Page',
          description: `We designed a layout that would make it easier for the user to explore the content without sacrificing Verizon’s engaging and bold style.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-1.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-2.png',
            title: '',
          },
        ],
      },
      {
        id: 2,
        sectionHeader: {
          count: '02',
          title: 'Design',
          subTitle: 'Connecticut Page for Fios',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-3.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-4.png',
            title: '',
          },
        ],
      },
      {
        id: 3,
        sectionHeader: {
          count: '03',
          title: 'Design',
          subTitle: 'Mobile Device Management Page',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-5.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-6.png',
            title: '',
          },
        ],
      },
      {
        id: 4,
        sectionHeader: {
          count: '04',
          title: 'Design',
          subTitle: 'Mobile Device Management Page',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-7.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-8.png',
            title: '',
          },
        ],
      },
      {
        id: 5,
        sectionHeader: {
          count: '05',
          title: 'Video',
          subTitle: 'Storyboarding for Verizon 5G Social Ads',
          description: `We were tasked to create a cohesive set of assets for Verizon’s 5G campaign without sacrificing the tonality of the brand. Working with a stellar crew, we primarily worked on storyboarding for their social media rollouts.
          `,
        },
        video: {
          videoThumbnail: '/imgs/case-study/page-1/image-9.png',
          videoSrc: '/videos/blank_space.mp4',
        },
      },
    ],
  },
  {
    id: 12,
    heroSectionData: {
      id: 12,
      imageTitle: 'Black Girls Code',
      imageDesc: 'Website Redesign',
      imageUrl: '/images/home/slider/12.png',
      imageUrlWOL: '/images/home/slider/12-wol.png',
      imageUrlLong: '/images/home/slider/12-long.png',
      imageUrlSmall: '/images/home/slider/12-small.png',
      linkUrl: '/case-study/12',
    },
    overviewSectionData: {
      client: 'Black Girls Code',
      year: 2022,
      activities: [
        'User flows & maps',
        'Wireframing + Concepts',
        'Prototyping',
        'UI Design',
        'UX',
      ],
      overview: `Black Girls Code is a nationwide nonprofit organization dedicated to empowering girls of color to become leaders in STEM fields. Our aim was to increase the number of signups and donations to the website by improving the overall user experience through a thoughtful and well-executed redesign. As we dive into this case study, we will discuss the research, design, and testing process that led us to develop an effective and engaging interface that aligns with the values and mission of Black Girls Code.`,
      challenge: `The primary challenge we faced in this project was to create an experience that effectively motivates young girls of color to enter the tech industry, while also inspiring visitors to donate to Black Girls Code (BGC). As the nonprofit focuses on empowering and encouraging girls of color to become leaders in STEM fields, it was essential to align the redesigned website with BGC's mission, goals, and values.`,
      solution: `We implemented a solution that focuses on creating an inclusive and empowering user experience that aligns with BGC's mission, while also streamlining the donation process to encourage visitors to support the nonprofit.`,
    },
    landingPageSectionData: [
      {
        id: 1,
        sectionHeader: {
          count: '01',
          title: 'Design',
          subTitle: '5G Device Sub Page',
          description: `We designed a layout that would make it easier for the user to explore the content without sacrificing Verizon’s engaging and bold style.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-1.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-2.png',
            title: '',
          },
        ],
      },
      {
        id: 2,
        sectionHeader: {
          count: '02',
          title: 'Design',
          subTitle: 'Connecticut Page for Fios',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-3.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-4.png',
            title: '',
          },
        ],
      },
      {
        id: 3,
        sectionHeader: {
          count: '03',
          title: 'Design',
          subTitle: 'Mobile Device Management Page',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-5.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-6.png',
            title: '',
          },
        ],
      },
      {
        id: 4,
        sectionHeader: {
          count: '04',
          title: 'Design',
          subTitle: 'Mobile Device Management Page',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-7.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-8.png',
            title: '',
          },
        ],
      },
      {
        id: 5,
        sectionHeader: {
          count: '05',
          title: 'Video',
          subTitle: 'Storyboarding for Verizon 5G Social Ads',
          description: `We were tasked to create a cohesive set of assets for Verizon’s 5G campaign without sacrificing the tonality of the brand. Working with a stellar crew, we primarily worked on storyboarding for their social media rollouts.
          `,
        },
        video: {
          videoThumbnail: '/imgs/case-study/page-1/image-9.png',
          videoSrc: '/videos/blank_space.mp4',
        },
      },
    ],
  },
  {
    id: 13,
    heroSectionData: {
      id: 13,
      imageTitle: 'Reveler',
      imageDesc: 'Mobile App Design',
      imageUrl: '/images/home/slider/13.webp',
      imageUrlWOL: '/images/home/slider/13-wol.webp',
      imageUrlLong: '/images/home/slider/13-long.webp',
      imageUrlSmall: '/images/home/slider/13-small.webp',
      linkUrl: '/case-study/13',
    },
    overviewSectionData: {
      client: 'Reveler',
      year: 2022,
      activities: [
        'User flows & maps',
        'Wireframing + Concepts',
        'Prototyping',
        'UI Design',
        'UX',
      ],
      overview: `The Reveler team reached out to use to design an app for their concept of idea of helping people find nearby events and concerts. With Reveler, users can easily search for events, purchase tickets, and even sell their own tickets in a safe and secure way.`,
      challenge: `The main challenge in designing Reveler's user interface and user experience was to create a design that prioritizes the app's unique features, which are focused on facilitating the discovery and attendance of events in a user-friendly way. To achieve this, our design had to be both aesthetically pleasing and functionally effective, while ensuring that the interface was accessible to all types of users, regardless of their level of technological proficiency.`,
      solution: `We designed Reveler, an app that helps users find nearby events and concerts. Our team addressed challenges such as creating a user-friendly and secure interface, accommodating a diverse range of users, and implementing a secure payment processing system. Our successful solution resulted in an intuitive interface, easy-to-use payment processing, and accessibility features for all users.`,
    },
    landingPageSectionData: [
      {
        id: 1,
        sectionHeader: {
          count: '01',
          title: 'Design',
          subTitle: '5G Device Sub Page',
          description: `We designed a layout that would make it easier for the user to explore the content without sacrificing Verizon’s engaging and bold style.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-1.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-2.png',
            title: '',
          },
        ],
      },
      {
        id: 2,
        sectionHeader: {
          count: '02',
          title: 'Design',
          subTitle: 'Connecticut Page for Fios',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-3.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-4.png',
            title: '',
          },
        ],
      },
      {
        id: 3,
        sectionHeader: {
          count: '03',
          title: 'Design',
          subTitle: 'Mobile Device Management Page',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-5.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-6.png',
            title: '',
          },
        ],
      },
      {
        id: 4,
        sectionHeader: {
          count: '04',
          title: 'Design',
          subTitle: 'Mobile Device Management Page',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, convallis integer volutpat elementum. Ipsum fermentum, eget lectus ut. Enim nulla etiam et libero ipsum. Et viverra ut turpis cursus laoreet in vel, ac.`,
        },
        images: [
          {
            url: '/imgs/case-study/page-1/image-7.png',
            title: '',
          },
          {
            url: '/imgs/case-study/page-1/image-8.png',
            title: '',
          },
        ],
      },
      {
        id: 5,
        sectionHeader: {
          count: '05',
          title: 'Video',
          subTitle: 'Storyboarding for Verizon 5G Social Ads',
          description: `We were tasked to create a cohesive set of assets for Verizon’s 5G campaign without sacrificing the tonality of the brand. Working with a stellar crew, we primarily worked on storyboarding for their social media rollouts.
          `,
        },
        video: {
          videoThumbnail: '/imgs/case-study/page-1/image-9.png',
          videoSrc: '/videos/blank_space.mp4',
        },
      },
    ],
  },
];

export const strategySliderData: HeroSectionSliderData[] = [
  {
    imageTitle: 'Verizon',
    imageDesc: 'Sub Pages Redesign',
    imageUrl: '/images/home/slider/1.webp',
    imageUrlWOL: '/images/home/slider/1-wol.webp',
    linkUrl: '/case-study/1',
    smallImgUrl: '/images/home/slider/small-1.webp',
    videoSrc: '/videos/verizon-hero.mp4',
  },
  {
    imageTitle: 'The North Face®',
    imageDesc: 'CMYK UI/UX Design',
    imageUrl: '/images/home/slider/2.webp',
    imageUrlWOL: '/images/home/slider/2-wol.webp',
    linkUrl: '/case-study/2',
    smallImgUrl: '/images/home/slider/small-2.webp',
  },
  {
    imageTitle: 'OneKey',
    imageDesc: 'UI/UX Design',
    imageUrl: '/images/home/slider/8.webp',
    imageUrlWOL: '/images/home/slider/8-wol.webp',
    linkUrl: '/case-study/8',
    smallImgUrl: '/images/home/slider/small-8.webp',
    videoSrc: '/videos/onekey-hero.mp4',
  },
  {
    imageTitle: 'NAACP',
    imageDesc: 'UI/UX Design',
    imageUrl: '/images/home/slider/10.png',
    imageUrlWOL: '/images/home/slider/10-wol.png',
    linkUrl: '/case-study/10',
    smallImgUrl: '/images/home/slider/small-10.png',
  },
];

export const ecomSliderData: HeroSectionSliderData[] = [
  {
    imageTitle: 'OneKey',
    imageDesc: 'UI/UX Design',
    imageUrl: '/images/home/slider/8.webp',
    imageUrlWOL: '/images/home/slider/8-wol.webp',
    linkUrl: '/case-study/8',
    smallImgUrl: '/images/home/slider/small-8.webp',
    videoSrc: '/videos/onekey-hero.mp4',
  },
  {
    imageTitle: 'iDreamers App',
    imageDesc: 'Mobile App Design',
    imageUrl: '/images/home/slider/11.png',
    imageUrlWOL: '/images/home/slider/11-wol.png',
    linkUrl: '/case-study/11',
    smallImgUrl: '/images/home/slider/small-9.png',
  },
];

export const appsSliderData: HeroSectionSliderData[] = [
  {
    imageTitle: 'OpenPhone',
    imageDesc: 'Desktop APP UI/UX',
    imageUrl: '/images/home/slider/4.webp',
    imageUrlWOL: '/images/home/slider/4-wol.webp',
    linkUrl: '/case-study/4',
    smallImgUrl: '/images/home/slider/small-4.webp',
  },
  {
    imageTitle: 'RapChat',
    imageDesc: 'Mobile UI/UX Design',
    imageUrl: '/images/home/slider/6.webp',
    imageUrlWOL: '/images/home/slider/6-wol.webp',
    linkUrl: '/case-study/6',
    smallImgUrl: '/images/home/slider/small-6.webp',
  },
  {
    imageTitle: 'Bonsai',
    imageDesc: 'Mobile App UI/UX Design',
    imageUrl: '/images/home/slider/9.webp',
    imageUrlWOL: '/images/home/slider/9-wol.webp',
    linkUrl: '/case-study/9',
    smallImgUrl: '/images/home/slider/small-9.webp',
  },
  {
    imageTitle: 'Black Girls Code',
    imageDesc: 'Website Redesign',
    imageUrl: '/images/home/slider/12.png',
    imageUrlWOL: '/images/home/slider/12-wol.png',
    linkUrl: '/case-study/12',
    smallImgUrl: '/images/home/slider/small-12.png',
  },
];

export const websitesSliderDatas: HeroSectionSliderData[] = [
  {
    imageTitle: 'Verizon',
    imageDesc: 'Sub Pages Redesign',
    imageUrl: '/images/home/slider/1.webp',
    imageUrlWOL: '/images/home/slider/1-wol.webp',
    linkUrl: '/case-study/1',
    smallImgUrl: '/images/home/slider/small-1.webp',
    videoSrc: '/videos/verizon-hero.mp4',
  },
  {
    imageTitle: 'The North Face®',
    imageDesc: 'CMYK UI/UX Design',
    imageUrl: '/images/home/slider/2.webp',
    imageUrlWOL: '/images/home/slider/2-wol.webp',
    linkUrl: '/case-study/2',
    smallImgUrl: '/images/home/slider/small-2.webp',
  },
  {
    imageTitle: 'Harlem Capital',
    imageDesc: 'Website Redesign',
    imageUrl: '/images/home/slider/3.webp',
    imageUrlWOL: '/images/home/slider/3-wol.webp',
    linkUrl: '/case-study/3',
    smallImgUrl: '/images/home/slider/small-3.webp',
  },
  {
    imageTitle: 'Blakademik',
    imageDesc: 'UI/UX Design & Dev',
    imageUrl: '/images/home/slider/5.webp',
    imageUrlWOL: '/images/home/slider/5-wol.webp',
    linkUrl: '/case-study/5',
    smallImgUrl: '/images/home/slider/small-5.webp',
  },
  {
    imageTitle: 'Winden',
    imageDesc: 'UI/UX Design & Dev',
    imageUrl: '/images/home/slider/7.webp',
    imageUrlWOL: '/images/home/slider/7-wol.webp',
    linkUrl: '/case-study/7',
    smallImgUrl: '/images/home/slider/small-7.webp',
    videoSrc: '/videos/widen-hero.mp4',
  },
];

export const whatWeDoCategory: WhatWeDoCategory[] = [
  {
    image: (
      <LazyLoad>
        <Lottie
          animationData={uiUxLottieIcon}
          play
          speed={0.5}
          className="w-[90px] h-[90px]"
        />
      </LazyLoad>
    ),
    title: 'UI/UX Design',
    description:
      "Products and applications designed to improve the experience of your users while converting on your brand's main goals.",
  },
  {
    image: (
      <LazyLoad>
        <Lottie
          animationData={webAppsLottieIcon}
          play
          speed={0.5}
          className="w-[90px] h-[90px]"
        />
      </LazyLoad>
    ),
    title: 'Web Apps',
    description:
      'Fully responsive web and mobile applications built for any screen-size and every usable device. 100% secure code.',
  },
  {
    image: (
      <LazyLoad>
        <Lottie
          animationData={ecommerceLottieIcon}
          play
          speed={0.5}
          className="w-[90px] h-[90px]"
        />
      </LazyLoad>
    ),
    title: 'Ecommerce',
    description:
      'Increased traffic. Better sales conversions. A custom user journey designed to convert ever vistor into a loyal customer.',
  },
  {
    image: (
      <LazyLoad>
        <Lottie
          animationData={digitalMarketingLottieIcon}
          play
          className="w-[90px] h-[90px]"
          speed={0.5}
        />
      </LazyLoad>
    ),
    title: 'Development',
    description:
      'Offering solutions with both front and back-end dev, ensuring top performance for your website or mobile app.',
  },
];

export const whatWeDoAccordionArray: whatWeDoAccordionType[] = [
  {
    id: 1,
    num: '01',
    title: 'Websites',
    slider: (
      <Website uniqueIdMob={'websiteMob1'} uniqueIdDesk={'websiteDesk1'} />
    ),
    description: <DescriptionPar title={'Websites'} number={'01'} />,
    help: <Help />,
  },
  {
    id: 2,
    num: '02',
    title: 'Mobile/Desktop Apps',
    slider: <Apps uniqueIdMob={'appsMob1'} uniqueIdDesk={'appsDesk1'} />,
    description: <DescriptionPar title={'Mobile/Desktop Apps'} number={'02'} />,
    help: <Help />,
  },
  {
    id: 3,
    num: '03',
    title: 'e-Commerce',
    slider: <ECom uniqueIdMob={'ecomMob1'} uniqueIdDesk={'ecoomDesk1'} />,
    description: <DescriptionPar title={'e-Commerce'} number={'03'} />,
    help: <Help isThirdItem={true} />,
  },
  {
    id: 4,
    num: '04',
    title: 'Strategy',
    slider: (
      <Strategy uniqueIdMob={'strategyMob1'} uniqueIdDesk={'strategyDesk1'} />
    ),
    description: <DescriptionPar title={'Strategy'} number={'04'} />,
    help: <Help />,
  },
];

export const brandImages: BrandImages[] = [
  {
    src: <BrandH1 />,
  },
  {
    src: <BrandH2 />,
  },
  {
    src: <BrandH3 />,
  },
  {
    src: <BrandH4 />,
  },
  {
    src: <BrandH5 />,
  },
  {
    src: <BrandH6 />,
  },
  {
    src: <BrandH7 />,
  },
  {
    src: <BrandH8 />,
  },
];

export const brandImagesSteps: BrandImages[] = [
  {
    src: <StepBrand1 />,
  },
  {
    src: <StepBrand2 />,
  },
  {
    src: <StepBrand3 />,
  },
  {
    src: <StepBrand4 />,
  },
  {
    src: <StepBrand5 />,
  },
  {
    src: <StepBrand6 />,
  },
];

export const awards: Awards[] = [
  {
    svg: <AwardSvg1 />,
    svg480: <AwardSvg1 />,
    name: 'CSS Design Awards',
    src: '/imgs/awards/aw-1.png',
  },
  {
    svg: <AwardSvg2 />,
    svg480: <Aw480SVG2 />,
    name: 'AWWWARDS',
    src: '/imgs/awards/aw-2.png',
  },
  {
    svg: <AwardSvg5 />,
    svg480: <Aw480SVG1 />,
    name: 'Favorite Website Award',
    src: '/imgs/awards/aw-1.png',
  },
  {
    svg: <AwardSvg6 />,
    svg480: <Aw480SVG2 />,
    name: 'BlackMade Awards',
    src: '/imgs/awards/aw-2.png',
  },
  {
    svg: <AwardSvg3 />,
    svg480: <Aw480SVG1 />,
    name: 'Wolda',
    src: '/imgs/awards/aw-3.png',
  },
  {
    svg: <AwardSvg4 />,
    svg480: <Aw480SVG1 />,
    name: 'CSS Winner',
    src: '/imgs/awards/aw-4.png',
  },
  {
    svg: <AwardSvg7 />,
    svg480: <Aw480SVG1 />,
    name: 'UX Design Awards',
    src: '/imgs/awards/aw-3.png',
  },
  {
    svg: <AwardSvg8 />,
    svg480: <Aw480SVG1 />,
    name: 'Unique Enterprises',
    src: '/imgs/awards/aw-4.png',
  },
];

export const careerLeft: CareerLeft[] = [
  {
    text: 'Graphic Designer',
    url: '#',
  },
  {
    text: 'Virtual Assistant',
    url: '#',
  },
  {
    text: 'Senior UI Designer',
    url: '#',
  },
];

export const overlayData = [
  {
    text: 'About',
    url: '/about',
  },
  {
    text: 'Services',
    url: '/services',
  },
  {
    text: 'Case studies',
    url: '/case-study',
  },
  // {
  //   text: 'Careers',
  //   url: '/careers',
  // },
  {
    text: 'Insights',
    url: 'https://dgblog.digitalgregg.com',
  },
  {
    text: 'Contact',
    url: '/contact-us',
  },
];

export const projectCollapsebleData: ProjectCollapsebleType[] = [
  {
    title: 'THE CHALLENGE',
    desc: 'Verizon has many resources their customers use on a daily basis. However, they all lived on separate websites with disorganized information scattered throughout the site.',
  },
  {
    title: 'THE SOLUTION',
    desc: 'We made their resources more accessible by combining all under Verizon.com, while updating the interfaces to better organize their infomation and making it more user-friendly.',
  },
];

export const otherWordSliderDatas: otherWordsSliderType[] = [
  {
    text: `“What impresses me most is Digital Gregg's ability to handle all aspects of major projects, like our popular online contests. <br /><br />

    From engagement idea generation, through design, content, dev, all the way to the legal details, they deliver reliable results with a real connection to the Salewa brand identity. <br /><br />

    The Team is always very committed and help us to achieve the objective defined."`,
    author: 'Antonella Girone',
    position: 'E-Commerce &amp; Digital Marketing Manager,',
  },
  {
    text: `“IN my previous role in brand digital for The North Face, I collaborated with Digital Gregg for over 8 years. <br /><br />

    During this time, Matteo and his team proved to be dedicated partners for the brand. <br /><br />
    
    They delivered high quality and excellent end -to-end digital solutions, anchored in elegance yet functional.”`,
    author: 'Kenoma Agbamu',
    position: 'Head of Strategy, The North Face',
  },
  {
    text: `Digital Gregg has been a trusted partner of Vans for many years now. <br /><br />

    We are constantly impressed by the way they approach each project: no matter how crazy and urgent are the ideas and the requests we come up with, Playground finds solutions which always deliver.”`,
    author: 'Stefano Braga',
    position: 'Senior Manager, Vans',
  },
  {
    text: `“We chose Digital Gregg because of their reputation and impressive portfolio.<br /><br />

    They did and excellent job, and we were really pleased with both the final result and the overall quality of the service they provided.”`,
    author: 'Stefano Boselli,',
    position: 'External Communications - Generali Real Estate',
  },
  {
    text: `“Wheather it’s front- or back-end, we can’t recommend Digital Gregg highly enough. <br /><br />

    Over the years, they have delivered outstanding solutions for many of our brands, including Dermatoline, Borotalco, Somatoline, and Roge Cavailles.”`,
    author: 'Anna Mangili and Sabrina Tambasco',
    position: 'Project Manager, Bolton Swiss SA',
  },
];

export const whoWeAreSliderDatas: whoWeAreSliderDatasType[] = [
  {
    question: `Why do leading brands choose to work with Digital Gregg?`,
    answer: `"In my previous role as the digital media specialist for The North Face, I collaborated with Digital Gregg for the past 2 years.
    <br /><br />

    During this time, Gregg and his team proved to be dedicated partners for the brand. <br /><br />
    
    They delivered high quality and excellent end-to-end digital solutions, aesthetically pleasing yet functional."`,
    author: 'Kenoma Agbamu - Head of Strategy,',
    position: 'The North Face',
  },
  {
    question: `Why do leading brands choose to work with Digital Gregg?`,
    answer: `"We went with Digital Gregg because their presentation and portfolio was very professional, and also being a  black-owned business was a plus. <br /><br />

    We are constantly impressed by the way they approach each project. Even with our crazy and urgent deadlines we usually have, Digital Gregg finds solutions which always deliver."`,
    author: 'Amatziah Snipes - Founder',
    position: 'Momentum: Always Forward',
  },
  {
    question: `Why do leading brands choose to work with Digital Gregg?`,
    answer: `"We chose Digital Gregg because of their impressive portfolio.<br /><br />

    They did an excellent job, and we were really pleased with both the final result and the overall quality of the service they provided."`,
    author: 'Mahyar Raissi - Co Founder',
    position: 'OpenPhone',
  },
  {
    question: `Why do leading brands choose to work with Digital Gregg?`,
    answer: `"Whether it's frontend or backend, we can't recommend Digital Gregg highly enough.  <br /><br />

    They redeveloped our entire customer dashboard panel and we have only received positive feedback from our customers."`,
    author: 'Sharon Chuter - Owner',
    position: 'UOMA Beauty',
  },
];

export const dgteamDynamicInfo = [
  { title: 'Home', url: '/' },
  { title: 'Who We Are', url: '/who-we-are' },
  { title: 'What We Do', url: '/what-we-do' },
  { title: 'Contact Us', url: '/contact-us' },
  { title: 'Get Started', url: '/request-estimate' },
  { title: 'Careers', url: '/careers' },
  { title: 'Case Study', url: '/case-study' },
  { title: 'Verizon', url: '/case-study/1' },
  { title: 'The North Face', url: '/case-study/2' },
  { title: 'Harlem Capital', url: '/case-study/3' },
  { title: 'OpenPhone', url: '/case-study/4' },
  { title: 'Blakademik', url: '/case-study/5' },
  { title: 'RapChat', url: '/case-study/6' },
  { title: 'Winden', url: '/case-study/7' },
  { title: 'OneKey', url: '/case-study/8' },
  { title: 'Bonsai', url: '/case-study/9' },
  { title: 'NAACP', url: '/case-study/10' },
  { title: 'Tally', url: '/case-study/11' },
  { title: 'Black Girls Code', url: '/case-study/12' },
  { title: 'Reveler.io', url: '/case-study/13' },
];

// privacy page
export const privacyPageMenuList: privacyMenuListType[] = [
  {
    text: 'Website Administrator',
    link: '#website-administrator',
  },
  {
    text: 'Terms and Conditions of use',
    link: '#terms-and-conditions-of-use',
  },
  {
    text: 'Use License',
    link: '#use-license',
  },
  {
    text: 'Disclaimer',
    link: '#disclaimer',
  },
  {
    text: 'Limitations',
    link: '#limitations',
  },
  {
    text: 'Revision & Errata',
    link: '#revision-errata',
  },
  {
    text: 'Links',
    link: '#links',
  },
  {
    text: 'Modification',
    link: '#modification',
  },
  {
    text: 'Breach, Governing Law',
    link: '#breach-governing-law',
  },
  {
    text: 'Privacy Policy',
    link: '#privacy',
  },
  {
    text: 'Cookie Policy',
    link: '#cookie',
  },
];

export const useLicenseContents: privacyContentArticleType[] = [
  {
    articleTitle: '',
    lists: [
      `Digitalgregg grants permission to temporarily download one copy of the materials on the Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:`,
      `i. modify or copy the materials;`,
      `ii. use the materials for any commercial purpose, or for any public display (commercial or non-commercial);`,
      `iii. attempt to decompile or reverse engineer any software contained on the Website;`,
      `iv. remove any copyright or other proprietary notations from the materials; or`,
      `v. transfer the materials to another entity or "mirror" the materials on any other server.`,
      `This license shall automatically terminate if you violate any of these restrictions and may be terminated by digitalgregg at any time. Upon termination, your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.`,
    ],
  },
];

export const disclaimerContents: privacyContentArticleType[] = [
  {
    articleTitle: '',
    lists: [
      `Digitalgregg makes no warranties and representations, expressed or implied, to the digital availability, functionality, compatibility, visibility and/or comprehensibility of the Website. digitalgregg makes no guarantee that the Website or any of its contents will always be available or access will not be impeded. digitalgregg holds no liability for any temporary or permanent unavailability or inaccessibility of the Website, in whole or in any part, for any reason and at any time. The materials on Website are provided "as is". digitalgregg makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. digitalgregg does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on the Website or otherwise relating to such materials or on any sites linked to this site.`,
      `Any information or statements included on the Website shall not constitute a binding offer and cannot be construed as such.`,
    ],
  },
];

export const limitationsContents: privacyContentArticleType[] = [
  {
    articleTitle: '',
    lists: [
      `In no event shall Netguru or its suppliers be liable for any damages (including, without limitation, damages for loss of data, profit,, anticipated savings, violation of business continuity, loss of reputation, claims of third parties, damage caused by delay or moral damage) arising out of the use or inability to use the materials on the Website,. In particular, Netguru is not liable for damages caused by viruses and other software, and/or that results from accessing or downloading materials that the Website contains. If you decide to download materials from the Website, you do so at your own risk.`,
      `Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.`,
    ],
  },
];

export const revisionErrataContents: privacyContentArticleType[] = [
  {
    articleTitle: '',
    lists: [
      `The materials appearing on the Website could include technical, typographical, or photographic errors. Netguru does not warrant that any of the materials on the Website are accurate, complete, or up-to-date. Netguru is entitled to suspend, withdraw, cease operation or modify all or some elements of the Website at any time without notice.. Netguru does not, however, make any commitment to update the materials.`,
    ],
  },
];

export const linksContents: privacyContentArticleType[] = [
  {
    articleTitle: '',
    lists: [
      `The Website may contain third party materials or links to other websites. Links to other websites are provided on the Website for your information and convenience only. Netguru has no control over these websites, does not check, oversee, review, approve or endorse its contents. Netguru is not responsible for the availability of these websites, their contents nor for any damage or harm that might be inflicted as a result of accessing those websites. . Use of any such linked website is at the user's own risk.`,
    ],
  },
];
export const modificationContents: privacyContentArticleType[] = [
  {
    articleTitle: '',
    lists: [
      `DigitalGregg may revise, modify or amend the T&C at any time without notice. By using this Website you agree to be bound by the current version of the T&C.`,
    ],
  },
];
export const breachGoverningLawContents: privacyContentArticleType[] = [
  {
    articleTitle: '',
    lists: [
      `If Netguru becomes aware of a breach of the T&C, Netguru may immediately implement corrective actions, including disabling access to the Website as well as removing any information, data and content provided by the user on the Website at any time, to any extent and without notice.`,
      `Any claims or disputed relating to the use of Website or a breach of this T&C shall be governed by the laws of the Republic of Poland without regard to its conflict of law provisions. Any claims and disputes shall be settled by the competent Polish common court, having jurisdiction over Netguru registered seat.`,
    ],
  },
];

export const privacyArticleContentLists: privacyContentArticleType[] = [
  {
    articleTitle: '',
    lists: [
      `The privacy of our website’s users is very important to us, which is why we have developed this Privacy Policy so that you can understand how we collect, process, disclose, and use your personal information.`,
      `digitalgregg S.A. as the Data Controller of the service and personal data ensures that:`,
      `1. Data shall always be collected for specified and clearly defined purposes and to the extent necessary to achieve those purposes.`,
      `2. Personal data shall be kept for as long as necessary to achieve these purposes.`,
      `3. Personal data shall be collected lawfully and fairly at all times, where appropriate, with the knowledge or consent of the data subject.`,
      `4. Personal data is protected with reasonable safeguards against loss or theft, as well as against unauthorized access, disclosure, copying, use or modification.`,
      `5. Its clients are provided with information about the rules and practices relating to personal data management.`,
    ],
  },
  {
    articleTitle: 'Article 1. Privacy and Processing Information',
    lists: [
      '1. The Data Controller of personal data is digitalgregg S.A. with its registered office in Poznań (61-740), 9 Małe Garbary Street, entered into the register of entrepreneurs of the National Court Register kept by the District Court for Poznań - Nowe Miasto and Wilda in Poznań, VIII Commercial Department of the National Court Register, under KRS number: 0000745671, NIP: 7781454968, share capital of 106 554.35 PLN.',
      `2. digitalgregg S.A. as a personal data Controller (hereinafter referred to as "Controller") pays great attention to the protection of privacy and confidentiality of personal data of Users who make their data available in electronic form through forms available on the website in the domain digitalgregg.com (hereinafter referred to as "digitalgregg.com"), the rules of which are specified in the Terms of Use (hereinafter referred to as "Terms of Use") or by registering to meetups and forums organized by digitalgregg.`,
      `3. The Data Protection Officer of digitalgregg SA is Katarzyna Ellerik who can be contacted via e-mail: dpo@digitalgregg.com.`,
      `4. The Controller shall, with due diligence, select and apply appropriate technical and organizational measures to protect personal data being processed. Full access to databases is granted only to persons authorized by the Controller.`,
      `5. The Controller protects personal data against unauthorized access and processing in violation of applicable regulations.`,
      `6. Visitors to digitalgregg.com can browse through subpages of the website without providing personal data.`,
    ],
  },
  {
    articleTitle: 'Article 2. Grounds for processing personal data',
    lists: [
      `1. Personal data shall be processed by the Controller in accordance with the law, in particular Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of individuals with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46/EC (hereinafter referred to as 'GDPR').`,
      `2. Personal data are processed to:`,
      `a. answer questions addressed to the Controller through the contact forms available on digitalgregg.com website, including interactive windows available on each subpage of the website (according to article 6.1.f of the GDPR);`,
      `b. dispatch of marketing content, including information about planned events and workshops, business information, joining event community, newsletter or dispatch of eBooks and other information on the basis of the consent (Article 6(1)(a) of the GDPR);`,
      `c. recruitment, including:`,
      `- to establish and maintain contact with the Candidate in relation to the application documents submitted, pursuant to Article 6(1)(b) of the GDPR, i.e. in relation to taking action at the request of the data subject before concluding a contract,`,
      `- carrying out and resolving the recruitment process based on Article 6(1)(b) of the GDPR, i.e. taking the necessary actions at the request of the data subject before concluding the contract - in the scope of data indicated in Article 221 §1 of the Labor Code and on the basis of the Candidate's consent, i.e. Article 6(1)(a) of the GDPR and in the scope of data beyond the catalog indicated in Article 221 §1 of the Labor Code,`,
      `- to take account of the Candidate's application documents in future recruitment processes on the basis of his/her voluntary agreement (Article 6(1)(a) of the GDPR).`,
      `- to take account of the Candidate's application documents in future recruitment processes on the basis of his/her voluntary agreement (Article 6(1)(a) of the GDPR).`,
      `e. adapting and developing the website's functionalities, including its structure and content to the needs of Internet users, creating aggregated statistics, and preserving the security and quality of services provided by the service - based on the legitimate interest of the Controller (Article 6(1)(f) of the GDPR);`,
      `f. investigation or safeguard against possible claims (according to Article 6(1)(f) of the GDPR);`,
      `g. conducting statistical analysis of information about participants of our events (according to Article 6 (1) (f) of the GDPR) where the legitimate purpose is to have information about the statistics which allows us to improve our activities.`,
      `3. Regardless of the purpose of the processing, providing the data is voluntary, however, failure to do so may prevent, depending on the specific case, the conclusion of a contract, use of selected services within the service and its functionality or receipt of marketing content.`,
      `4. The User should not provide the Controller with personal data of third parties. In case of transfer of third parties' data, the User is obliged to sign a declaration that s/he has the consent of third parties to transfer the data to the Controller.`,
    ],
  },
  {
    articleTitle: 'Article 3. Scope of processing of personal data',
    lists: [
      `The Controller processes personal data only to the extent necessary to achieve a strictly defined purpose, in accordance with the information indicated below:`,
      `1. Sending a message through the contact form, among others: e-mail address and telephone number and all other information that the User will provide of his/her own free will in the addressed message;`,
      `2. Sending newsletters, commercial and business information and e-books: name and surname, e-mail address, telephone number, among others;`,
      `3. Recruitment: the e-mail address from which the message was sent and the information contained in the application form;`,
      `4. Preparation of offers: name and surname, e-mail address, telephone number, and other information contained in the message sent through the contact form;`,
    ],
  },
  {
    articleTitle: 'Article 4. Data retention period',
    lists: [
      `Personal data shall be kept only for the time necessary to achieve the specific purpose for which it was transmitted or to ensure compliance, as set out below:`,
      `1. Personal data collected for the purpose of answering questions asked via the contact form will be processed no longer than 12 months after the last contact;`,
      `2. Data collected for the purpose of sending marketing content, newsletters, commercial and business information and e-books will be processed until the withdrawal of consent by the User;`,
      `3. Personal data collected for the purposes of recruitment will be processed for the duration of the recruitment process, and if the Candidate agrees to leave the data for the purposes of future recruitments, they will be stored until the withdrawal of the consent, but not longer than 24 months from the date of its granting;`,
      `4. Personal data collected for the purposes of preparing a personalized offer for products and/or services will be processed for the duration of the offer negotiation, and after its completion for 12 months counted from the date of the last contact, or they will feed the Controller’s customer database in order to execute the concluded agreement.`,
    ],
  },
  {
    articleTitle: 'Article 5. Recipients of personal data',
    lists: [
      `1. Users' data may be made available to entities authorized to receive data in accordance with applicable laws, including relevant judicial authorities.`,
      `2. Personal data may be transferred to entities cooperating with the Controller on the basis of appropriate agreements, including selected marketing agencies and partners providing technical services (development and maintenance of IT systems and websites).`,
    ],
  },
  {
    articleTitle: 'Article 6. Rights of persons',
    lists: [
      `1. The user is obliged to provide complete, current and up-to-date data.`,
      `2. Every user whose personal data is processed by the Controller is entitled to:`,
      `a. access the data,`,
      `b. correct the data,`,
      `c. deletion of the data,`,
      `d. restrict the processing of data,`,
      `e. transfer the data,`,
      `f. object to the processing of data which takes place on the basis of the Conotroller’s legitimate interest,`,
      `g. withdraw consent (where processing is based on consent) at any time without affecting the lawfulness of processing carried out on the basis of consent before withdrawal.`,
      `3. You can exercise the rights set out in the above section by sending an appropriate request, providing your user name and e-mail address to dpo@digitalgregg.com.`,
      `4. The user has the right to appeal to the supervisory authority if he considers that the processing of personal data violates the rules of the GDPR.`,
      `5. In order to unsubscribe from the communication, please select "Unsubscribe" button on the bottom of the e-mail you received from us, update email preferences in the second step by unchecking the types of email you do not want to receive and accept the settings. You can also contact us via gregg@digitalgregg.com e-mail.`,
    ],
  },
  {
    articleTitle: 'Article 7. Cookie policy',
    lists: [
      `digitalgregg S.A. collects data in logs, which are used only for the purposes of service administration, and these data are not transferred to third parties.`,
      `1. In accordance with established practice, we store HTTP queries addressed to our server. The resources viewed are identified by their URLs. The information collected in the logs is:`,
      `- The public IP address of the computer from which the query came,`,
      `- User station name - identification implemented by http protocol, if possible,`,
      `- User name given during the authorization process,`,
      `- Time for the inquiry to arrive,`,
      `- First line of the http request,`,
      `- The http response code,`,
      `- The number of bytes sent by the server,`,
      `- The URL of the page previously visited by the user, in case the Company's website was accessed via a link,`,
      `- Information about your browser,`,
      `- Information about errors that occurred in the execution of http transactions.`,
      `2. This data is not connected to specific people browsing the Controller’s pages.`,
      `3. In order to ensure the highest quality of service, the Controller periodically analyses log files in order to determine which pages are visited most often, which web browsers are used, whether the structure of the site does not contain errors, etc.`,
      `4. The collected logs are stored for 24 months as auxiliary material used to administer the service - on the basis of cookie files, statistics may be generated which do not contain any features identifying the persons visiting digitalgregg.com.`,
      `5. The following types of cookies are used on the website:`,
      `a. security cookies, e.g. used to detect misuse of authentication;`,
      `b. "performance" cookies, enabling the collection of information on how to use the website;`,
      `c. "functional" cookies, enabling "remembering" the settings selected by the User and personalizing the User's interface, e.g. in terms of the selected language or region from which the User comes from, font size, appearance of the website, etc.`,
      `6. Cookies are not used to process or store personal data. They cannot be used to directly identify the User and do not make any configuration changes in the browser or telecommunication devices.`,
    ],
  },
  {
    articleTitle: 'Article 8. Transfer of data to third countries',
    lists: [
      `Outside the European Economic Area (EEA), the level of personal data protection differs from that provided by European law (GDPR). digitalgregg transfers your personal data outside the EEA to third countries only if it is necessary to achieve business purposes (incl. the use of IT tools provided by third country entities) and when the third country ensures an adequate level of protection, in particular through:`,
      `a. issued a relevant decision of the European Commission regarding the assurance of an adequate level of protection of Personal Data in that country,`,
      `b. the use of standard contractual clauses issued by the European Commission, if a given country does not have a confirmed decision of the European Commission,`,
      `c. application of binding corporate rules approved by the competent supervisory authority.`,
    ],
  },
];

export const cookieContentLists: cookieContentType[] = [
  {
    title: 'Strictly Necessary Cookies',
    description:
      'These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.',
    table: [
      {
        tableTitle: 'Cookie Subgroup',
        subGroup: 'www.google.com',
        cookies: 'OptanonConsent',
        cookieUsed: 'First Party',
        lifeSpan: '177 Days',
      },
      {
        tableTitle: 'Cookies',
        subGroup: 'www.unsplash.com',
        cookies: '__cf_bm , __cfruid , cf_use_ob , hs_ab_test',
        cookieUsed: 'First Party',
        lifeSpan: 'A few seconds, Session, A few seconds, Session',
      },
      {
        tableTitle: 'Cookies Used',
        subGroup: 'www.vimeo.com',
        cookies: 'player',
        cookieUsed: 'Third Party',
        lifeSpan: '362 Days',
      },
      {
        tableTitle: 'Lifespan',
        subGroup: 'codesandbox.io',
        cookies: '__cf_bm',
        cookieUsed: 'Third Party',
        lifeSpan: 'A few seconds',
      },
    ],
  },
  {
    title: 'Performance Cookies',
    description:
      'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.',
    table: [
      {
        tableTitle: 'Cookie Subgroup',
        subGroup: 'behance.net',
        cookies: 'AMCV_, AMCVS_, gpv, s_sess',
        cookieUsed: 'Third Party',
        lifeSpan: '728 Days, Session, A few seconds, A few seconds',
      },
      {
        tableTitle: 'Cookies',
        subGroup: 'myfonts.net',
        cookies: '__cf_bm',
        cookieUsed: 'Third Party',
        lifeSpan: 'A few seconds',
      },
      {
        tableTitle: 'Cookies Used',
        subGroup: 'clarity.ms',
        cookies: 'MUID',
        cookieUsed: 'Third Party',
        lifeSpan: '389 Days',
      },
      {
        tableTitle: 'Lifespan',
        subGroup: 'api.hubspot.com',
        cookies: 'cf_use_ob',
        cookieUsed: 'Third Party',
        lifeSpan: 'A few seconds',
      },
      {
        tableTitle: 'Cookie Subgroup',
        subGroup: 'c.clarity.ms',
        cookies: 'SM',
        cookieUsed: 'Third Party',
        lifeSpan: 'Session',
      },
      {
        tableTitle: 'Cookies',
        subGroup: 'nr-data.net',
        cookies: 'JSESSIONID',
        cookieUsed: 'Third Party',
        lifeSpan: 'Session',
      },
      {
        tableTitle: 'Cookies Used',
        subGroup: 'giphy.com',
        cookies: '_ga, _gid',
        cookieUsed: 'Third Party',
        lifeSpan: '729 Days, A few seconds',
      },
      {
        tableTitle: 'Lifespan',
        subGroup: 'www.clarity.ms',
        cookies: '_clsk, CLID',
        cookieUsed: 'Third Party',
        lifeSpan: 'A few seconds, 364 Days',
      },
      {
        tableTitle: 'Lifespan',
        subGroup: 'adobe.com',
        cookies: 'fg',
        cookieUsed: 'Third Party',
        lifeSpan: 'A few seconds',
      },
    ],
  },
  {
    title: 'Functional Cookies',
    description:
      'These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.',
    table: [
      {
        tableTitle: 'Cookie Subgroup',
        subGroup: 'github.com',
        cookies: '_gh_sess, _octo, logged_in',
        cookieUsed: 'Third Party',
        lifeSpan: 'Session, 364 Days, 364 Days',
      },
      {
        tableTitle: 'Cookies',
        subGroup: 'behance.net',
        cookies: 'test',
        cookieUsed: 'Third Party',
        lifeSpan: 'Session',
      },
      {
        tableTitle: 'Cookies Used',
        subGroup: 'spotify.com',
        cookies: 'sp_landing, sp_t',
        cookieUsed: 'Third Party',
        lifeSpan: 'A few seconds, 364 Days',
      },
      {
        tableTitle: 'Lifespan',
        subGroup: 'play.hubspotvideo.com',
        cookies: 'hubspotutk',
        cookieUsed: 'Third Party',
        lifeSpan: 'A few seconds',
      },
      {
        tableTitle: 'Cookie Subgroup',
        subGroup: 'vimeo.com',
        cookies: '__cf_bm, vuid',
        cookieUsed: 'Third Party',
        lifeSpan: 'A few seconds, 727 Days',
      },
      {
        tableTitle: 'Cookies',
        subGroup: 'youtube.com',
        cookies: 'YSC',
        cookieUsed: 'Third Party',
        lifeSpan: 'Session',
      },
      {
        tableTitle: 'Cookies Used',
        subGroup: 'gist.github.com',
        cookies: '_gh_sess',
        cookieUsed: 'Third Party',
        lifeSpan: 'Session',
      },
      {
        tableTitle: 'Lifespan',
        subGroup: 'linkedin.com',
        cookies: 'li_gc',
        cookieUsed: 'Third Party',
        lifeSpan: '	721 Days',
      },
    ],
  },
  {
    title: 'Targeting Cookies',
    description:
      'These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.',
    table: [
      {
        tableTitle: 'Cookie Subgroup',
        subGroup: 'demdex.net',
        cookies: 'demdex',
        cookieUsed: 'Third Party',
        lifeSpan: '177 Days',
      },
      {
        tableTitle: 'Cookies',
        subGroup: 'slideshare.net',
        cookies: 'browser_id',
        cookieUsed: 'Third Party',
        lifeSpan: '1824 Days',
      },
      {
        tableTitle: 'Cookies Used',
        subGroup: 'ads.linkedin.com',
        cookies: 'lang',
        cookieUsed: 'Third Party',
        lifeSpan: 'Session',
      },
      {
        tableTitle: 'Lifespan',
        subGroup: 'c.bing.com',
        cookies: 'SRM_B',
        cookieUsed: 'Third Party',
        lifeSpan: '387 Days',
      },
      {
        tableTitle: 'Cookie Subgroup',
        subGroup: 'doubleclick.net',
        cookies: 'IDE, test_cookie',
        cookieUsed: 'Third Party',
        lifeSpan: '389 Days, A few seconds',
      },
      {
        tableTitle: 'Cookies',
        subGroup: 'ads.linkedin.com',
        cookies: 'lang',
        cookieUsed: 'Third Party',
        lifeSpan: 'Session',
      },
      {
        tableTitle: 'Cookies Used',
        subGroup: 't.co',
        cookies: 'muc_ads',
        cookieUsed: 'Third Party',
        lifeSpan: '727 Days',
      },
      {
        tableTitle: 'Lifespan',
        subGroup: 'c.clarity.ms',
        cookies: 'ANONCHK',
        cookieUsed: 'Third Party',
        lifeSpan: 'A few seconds',
      },
      {
        tableTitle: 'Cookie Subgroup',
        subGroup: 'ads.linkedin.com',
        cookies: 'lang',
        cookieUsed: 'Third Party',
        lifeSpan: 'Session',
      },
      {
        tableTitle: 'Cookies',
        subGroup: 'hubspot.com',
        cookies: '__cf_bm',
        cookieUsed: 'Third Party',
        lifeSpan: 'A few seconds',
      },
      {
        tableTitle: 'Cookies Used',
        subGroup: 'bing.com',
        cookies: 'MUID',
        cookieUsed: 'Third Party',
        lifeSpan: '389 Days',
      },
      {
        tableTitle: 'Lifespan',
        subGroup: 'youtube.com',
        cookies: 'CONSENT, VISITOR_INFO1_LIVE',
        cookieUsed: 'Third Party',
        lifeSpan: '728 Days, A few seconds',
      },
      {
        tableTitle: 'Cookie Subgroup',
        subGroup: 'www.facebook.com',
        cookies: '',
        cookieUsed: 'Third Party',
        lifeSpan: 'Session',
      },
      {
        tableTitle: 'Cookies',
        subGroup: 'twitter.com',
        cookies:
          'guest_id, guest_id_ads, guest_id_marketing, personalization_id',
        cookieUsed: 'Third Party',
        lifeSpan: '729 Days, 729 Days, 729 Days, 727 Days',
      },
      {
        tableTitle: 'Cookies Used',
        subGroup: 'www.linkedin.com',
        cookies: 'bscookie, JSESSIONID',
        cookieUsed: 'Third Party',
        lifeSpan: '728 Days, Session',
      },
      {
        tableTitle: 'Lifespan',
        subGroup: 'linkedin.com',
        cookies:
          'AnalyticsSyncHistory, bcookie, lang, li_sugr, lidc, UserMatchHistory',
        cookieUsed: 'Third Party',
        lifeSpan: '27 Days, 728 Days, Session, 89 Days, A few seconds, 27 Days',
      },
    ],
  },
];

export const stepsArray: stepsArrayType[] = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
];

// blog post
export const blogPostArray: blogPostType[] = [
  {
    id: 1,
    thumbnail: '/imgs/blog/blog1.jpg',
    title: '5 Tech Trends That Will Drive Digital Acceleration in 2023',
    category: 'Innovation',
    authorImg: '/imgs/blog/author1.jpg',
    authorName: 'Marek Talarczyk',
    min: '9',
    textColor: 'text-[#BC9C5F]',
    bgColor: 'bg-[#BC9C5F]',
  },
  {
    id: 2,
    thumbnail: '/imgs/blog/blog2.jpg',
    title: 'To Hell With Normal. Volatile Markets Create Lasting Opportunities',
    category: 'Innovation',
    authorImg: '/imgs/blog/author2.jpg',
    authorName: 'Radek Zaleski',
    min: '8',
    textColor: 'text-[#BC9C5F]',
    bgColor: 'bg-[#BC9C5F]',
  },
  {
    id: 3,
    thumbnail: '/imgs/blog/blog3.jpg',
    title:
      'Business Ethics After 2022: An Interview With Netguru’s Sustainability Lead',
    category: 'Culture',
    authorImg: '/imgs/blog/author3.jpg',
    authorName: 'Rafal Salak',
    min: '6',
    textColor: 'text-[#A35BFF]',
    bgColor: 'bg-[#A35BFF]',
  },
];

export const blogCategories = [
  {
    title: 'Innovation',
    description:
      'Ideas, solutions, and experiments to help you reinvent your business',
    colorCode: 'text-[#bc9c5f]',
    borderColorCode: 'hover:border-[#bc9c5f]',
    linkColorCode: 'group-hover:text-[#bc9c5f]',
    link: '#',
  },
  {
    title: 'Market Insights',
    description: 'Business strategies from a company that grows 100% YoY',
    colorCode: 'text-[#f5b100]',
    borderColorCode: 'hover:border-[#f5b100]',
    linkColorCode: 'group-hover:text-[#f5b100]',
    link: '#',
  },
  {
    title: 'Product Mindset',
    description:
      'Proven ways for delivering digital products on time and on budget',
    colorCode: 'text-[#3f89ff]',
    borderColorCode: 'hover:border-[#3f89ff]',
    linkColorCode: 'group-hover:text-[#3f89ff]',
    link: '#',
  },
  {
    title: 'Technology',
    description: `Stories about code and how it's changing the world for better`,
    colorCode: 'text-[#f48e41]',
    borderColorCode: 'hover:border-[#f48e41]',
    linkColorCode: 'group-hover:text-[#f48e41]',
    link: '#',
  },
  {
    title: 'Design',
    description: `The art of creating engaging digital experiences`,
    colorCode: 'text-[#ff4d6d]',
    borderColorCode: 'hover:border-[#ff4d6d]',
    linkColorCode: 'group-hover:text-[#ff4d6d]',
    link: '#',
  },
  {
    title: 'Culture',
    description: `Tips on how to build a collaborative and inclusive workplace`,
    colorCode: 'text-[#a35bff]',
    borderColorCode: 'hover:border-[#a35bff]',
    linkColorCode: 'group-hover:text-[#a35bff]',
    link: '#',
  },
];

export const whatWeDoHeroDatas = [
  {
    number: '01',
    title: 'Websites',
    id: 1,
  },
  {
    number: '02',
    title: 'Mobile/Desktop Apps',
    id: 2,
  },
  {
    number: '03',
    title: 'e-Commerce',
    id: 3,
  },
  {
    number: '04',
    title: 'Strategy',
    id: 4,
  },
];

export const playgroundData = [
  {
    id: '01',
    title1: 'Agility',
    title2: 'is everything.',
    body: 'Digital Gregg HQ enjoys a culture of energy and enthusiasm. We keep things agile and friction-free, with regular client communication and quick iteration.',
  },
  {
    id: '02',
    title1: 'Balance',
    title2: 'over burnout.',
    body: 'Of course, when the pressure is on, we can out-grind anyone. But happiness is our heartbeat, and we encourage a balanced approach to work and life.',
  },
  {
    id: '03',
    title1: 'Continuous',
    title2: 'learning.',
    body: 'We want to give every Digital Gregger the right time and space to learn new skills. Its not enough to just be great at what we do. Because great today is only so-so tomorrow, and irrelevant by next week. We thrive when we’re on our toes.',
  },
];
