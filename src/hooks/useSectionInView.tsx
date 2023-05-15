import { useEffect, useState } from 'react';

const useSectionInView = (sectionRefs: any, sectionView: any) => {
  const [sectionsInView, setSectionsInView] = useState({
    ...sectionView,
  });

  // const [isInView, setIsInView] = useState(false);
  const handleScroll = () => {
    // Object.entries(sectionRefs).forEach(([key, value]: any) => {
    //   const sectionPosition = value?.current?.getBoundingClientRect();
    //   setSectionsInView((prev: any) => ({
    //     ...prev,
    //     [key]:
    //       sectionPosition?.top <= window?.innerHeight &&
    //       sectionPosition?.bottom >= 0,
    //   }));
    // });

    sectionRefs?.forEach((value: any, key: any) => {
      const sectionPosition = value?.current?.getBoundingClientRect();

      setSectionsInView((prev: any) => ({
        ...prev,
        [key]:
          sectionPosition?.top <= window?.innerHeight &&
          sectionPosition?.bottom >= 0,
      }));
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return sectionsInView;
};

export default useSectionInView;
