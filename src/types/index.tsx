import { ReactNode } from 'react';

// Footer Section

export type FooterMiddleItems = {
  title: string;
  lists: {
    text: string;
    url: string;
  }[];
};

export type FooterRightSideItems = {
  text: string;
  url: string;
  logo: ReactNode;
};

export type FooterNavigationsItems = {
  text: string;
  path: string;
};
export type HeroSectionDataType = {
  grid1: {
    animatedText: string;
    logo: ReactNode;
    desc: ReactNode;
  };
};

// Case study projects
export interface CaseStudyProjectDataTypes {
  id: number;
  heroSectionData: {
    imageUrl: string;
    linkUrl: string;
    imageDesc: string;
    imageTitle: string;
    id?: number;
    imageUrlLong?: string;
    imageUrlSmall?: string;
    imageUrlWOL?: string;
    videoSrc?: string;
    mobileVideoSrc?: string;
  };
  overviewSectionData: {
    client: string;
    year: number;
    activities: string[];
    overview: string;
    challenge: string;
    solution: string;
  };
  landingPageSectionData: {
    id: number;
    sectionHeader: {
      count: string;
      title: string;
      subTitle: string;
      description: string;
    };
    images?: {
      url: string;
      title: string;
    }[];
    video?: {
      videoThumbnail: string;
      videoSrc: string;
    };
  }[];
}

// Insights
export type FilterBarDataType = {
  id: number;
  value: string;
  content: string | ReactNode;
};

// Hero Section

export type HeroSectionSliderData = {
  imageUrl: string;
  linkUrl: string;
  imageDesc: string;
  imageTitle: string;
  id?: number;
  imageUrlLong?: string;
  imageUrlWOL?: string;
  smallImgUrl: string;
  videoSrc?: string;
};
export type HeroSliderProps = {
  headerHeight?: number | undefined;
  setSlideAnimateWidth?: any;
  uniqueIdMob?: any;
  uniqueIdDesk?: any;
  mainId?: any;
  isDesktop?: boolean;
};
export interface SmallerImageSliderProps {
  setControlledSwiper2: React.Dispatch<any>;
  array?: any;
  isRightSide?: any;
}
export interface TextSliderProps {
  setControlledSwiper3: React.Dispatch<any>;
  array?: any;
}
export type NumberSliderProps = {
  setControlledSwiper?: React.Dispatch<any>;
  array?: any;
  isRightSide?: any;
  activeIndex?: any;
};
export type HeroSubSlidersHeightWidthProps = {
  width: number;
  height: number;
};
export type HeroDownSliderProgressBarProps = {
  width?: number;
  duration?: number;
  progress?: boolean;
};

export type HeroDownSliderProps = {
  setControlledSwiper4: React.Dispatch<any>;
  uniqueId?: any;
  array?: any;
  progressRef?: any;
};

// What we need section

export type WhatWeDoCategory = {
  image: ReactNode;
  title: string;
  description: string;
};

export type whatWeDoAccordionType = {
  id: number;
  num: string;
  title: string;
  slider: ReactNode;
  description: ReactNode;
  help: ReactNode;
};

export type BrandImages = {
  src: ReactNode;
};

export type Awards = {
  svg: ReactNode;
  svg480: ReactNode;
  name: string;
  src: string;
};

export type GoMore = {
  url: string;
  text: string;
};

export type CareerLeft = {
  text: string;
  url: string;
};
export type MoreButton = {
  top?: boolean;
};

// Who we are section
export type VideoCloseButtonProps = {
  isVideoModalClose: React.SetStateAction<boolean>;
};

export type HeaderType = {
  logoClassName: string;
  navigationMenuClassName: string;
};

export type ProjectCollapsebleType = {
  title: string;
  desc: string;
};

export type otherWordsSliderType = {
  text: string;
  author: string;
  position: string;
};

export type whoWeAreSliderDatasType = {
  question: string;
  answer: string;
  author: string;
  position: string;
};

// privacy policy
export type privacyMenuListType = {
  text: string;
  link: string;
};
export type privacyContentArticleType = {
  articleTitle?: string;
  lists: string[];
};

export type cookieContentType = {
  title: string;
  description: string;
  table: {
    tableTitle: string;
    subGroup: string;
    cookies: string;
    cookieUsed: string;
    lifeSpan: string;
  }[];
};
export type stepsArrayType = {
  id: number;
};

export type blogPostType = {
  id: number;
  thumbnail: string;
  category: string;
  title: string;
  authorImg: string;
  authorName: string;
  min: string;
  textColor: string;
  bgColor: string;
};
