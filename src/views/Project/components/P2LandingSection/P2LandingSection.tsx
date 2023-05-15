import dynamic from 'next/dynamic';

const VideoContainer = dynamic(() => import('../P1LandingSection/VideoContainer/VideoContainer'));
const SectionHeaderCount = dynamic(() => import('../SectionHeaderCount'));
const ImagesContainer = dynamic(() => import('./ImageContainer/ImageContainer'));
const SingleImageContainer = dynamic(() => import('./ImageContainer/SingleImageContainer'));

interface Props {
  data?: any;
  id?: any;
}

const P2LandingPageSection = ({ data, id }: Props) => {
  const videoData = {
    videoSrc: 'https://vimeo.com/789315406',
    videoThumbnail: '/images/project/project-2/video-thumb-1.png',
  };

  const MobilevideoData = {
    videoSrc: '/videos/case-study-2-mobile.mp4',
    videoThumbnail: '/images/project/project-2/video-thumb-1.png',
  };

  return (
    <div>
      {/* Section One */}
      <section className="pb-5 mt-5 lg:mt-0 lg:px-20">
        <SectionHeaderCount
          count="01"
          title="Landing page"
          subTitle=""
          body="The collection centres on a color palette and pattern that brings a fresh modernity to retro best-sellers. The landing page blends both past and future, culminating in a minimalist design with bursts of color and pattern."
          isSecondPage={id == 2}
        />
        <div className="mt-[16vw] lg:mt-0"></div>
        <div className="hidden lg:block">
          <VideoContainer data={videoData} isVimeoSrc={true} />
        </div>
        <div className="block lg:hidden">
          <VideoContainer data={MobilevideoData} />
        </div>

        <div className="mt-[16vw] lg:mt-[6.94444vw]"></div>
        <div>
          <ImagesContainer
            leftImgUrl="/images/project/project-2/image-2.webp"
            rightImgUrl="/images/project/project-2/image-3.webp"
            id={5}
            leftImgCss={
              'max-w-[48.6111vw] basis-[48.6111vw]'
            }
            rightImgCss={'max-w-[26.0417vw] basis-[26.0417vw]'}
            mobileImgUrl="/images/project/project-2/mobile-img-1.webp"
            bgCss="min-h-[43.5vw]"
          />
        </div>
      </section>
      {/* Secton Two */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="02"
          title="Homepage"
          subTitle="takeover."
          body="Many major campaigns such as this involve a homepage takeover. Such a prominent position on The North Face’s ecom site cannot be taken lightly. As such, we created a striking main banner, designed to grab the user’s attention and funnel them directly to the collection’s landing page. The same CMYK colour scheme and messaging are echoed,for consistency of design."
          isSecondPage={id == 2}
        />
        <SingleImageContainer
          id={6}
          imgUrl="/images/project/project-2/image-4.webp"
          imgCss={'max-w-[71.1111vw] basis-[71.1111vw]'}
          mobileImgUrl="/images/project/project-2/mobile-img-2.webp"
        />
      </section>
      {/* Section Three */}
      <section className="lg:px-20">
        <SectionHeaderCount
          count="03"
          title="Email Marketing"
          subTitle="Email Marketing Designs"
          body="The collection’s products are timeless, established classics, and needed little by way of introduction. Therefore, we included less copy and instead letting the products and eye-catching design do the heavy lifting."
          isSecondPage={id == 2}
        />
        <div className="mt-[16vw] lg:mt-0"></div>
        <ImagesContainer
          leftImgUrl="/images/project/project-2/image-6.webp"
          rightImgUrl="/images/project/project-2/image-5.jpeg"
          id={7}
          leftImgCss={
            'max-w-[41.6667vw] basis-[41.6667vw]'
          }
          rightImgCss={'max-w-[26.0417vw] basis-[26.0417vw]'}
          mobileImgUrl="/images/project/project-2/mobile-img-3.webp"
          bgCss="min-h-[75vw]"
        />
      </section>
    </div>
  );
};

export default P2LandingPageSection;
