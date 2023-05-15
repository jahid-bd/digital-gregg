import { atom, useAtom } from 'jotai';
import { HeroSubSlidersHeightWidthProps } from 'src/types';

const subSliderWidth = atom<HeroSubSlidersHeightWidthProps>({
  width: 0,
  height: 0,
});
export const useSubSliderWidth = () => useAtom(subSliderWidth);

const heroSliderAutoPlayDuration = atom<boolean>(false);
export const useHeroSliderAutoPlayDuration = () =>
  useAtom(heroSliderAutoPlayDuration);

const isplayTypeWritter = atom<boolean>(false);
export const useIsplayTypeWritter = () => useAtom(isplayTypeWritter);

const whatWeDoSectionScrollHeight = atom<number>(0);
export const useWhatWeDoScrollHeight = () =>
  useAtom(whatWeDoSectionScrollHeight);

const whatWeDoWebsiteSectionScrollHeight = atom<number>(200);
export const useWhatWeDoWebsiteSectionScrollHeight = () =>
  useAtom(whatWeDoWebsiteSectionScrollHeight);

const togetherSectionScrollHeight = atom<number>(0);
export const useTogetherSectionScrollHeight = () =>
  useAtom(togetherSectionScrollHeight);

const whoWeAreIsVideoModal = atom<boolean>(false);
export const useWhoWeAreIsVideoModal = () => useAtom(whoWeAreIsVideoModal);

const projectDetailsVideoModal = atom<boolean>(false);
export const useProjectDetailsVideoModal = () =>
  useAtom(projectDetailsVideoModal);

const ourHqVideoModal = atom<boolean>(false);
export const useOurHqIsVideoModal = () => useAtom(ourHqVideoModal);

const headerHeight = atom<number | undefined>(0);
export const useHeaderHeight = () => useAtom(headerHeight);

const heroSliderIntialized = atom<boolean>(false);
export const useHeroSliderInit = () => useAtom(heroSliderIntialized);

const whatWeDoToggleId = atom<number | null>(null);
export const useWhatWeDoToggleId = () => useAtom(whatWeDoToggleId);

const subscribeModalAtom1 = atom<boolean>(false);
export const useSubscribeModalAtom1 = () => useAtom(subscribeModalAtom1);
const subscribeModalAtom2 = atom<boolean>(false);
export const useSubscribeModalAtom2 = () => useAtom(subscribeModalAtom2);

const blogScrollHeight = atom<number>(0);

export const useBlogScrollHeight = () => useAtom(blogScrollHeight);

export const videoModalOpen = atom<any>(false);
