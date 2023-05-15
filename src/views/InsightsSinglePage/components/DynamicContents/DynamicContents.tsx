//@ts-ignore
import { PortableText } from '@portabletext/react';
//@ts-ignore
import { getImageDimensions } from '@sanity/asset-utils';
import SectionHeader from '@views/InsightsSinglePage/partials/SectionHeader';

interface Props {
  contents: any;
  setActiveLink: any;
  allSectionRefs: any;
}

// import urlBuilder from '@sanity/image-url';
import { urlFor } from 'src/lib/sanity';

// Barebones lazy-loaded image component
const SampleImageComponent = ({ value, isInline }: any) => {
  const { width, height } = getImageDimensions(value);
  return (
    <>
      <style>
        {`.dynamicImg {
                aspect-ratio: ${width / height}
            }`}
      </style>
      <img
        src={`${urlFor(value)}`}
        alt={value.alt || ' '}
        loading="lazy"
        className={`${
          isInline ? 'inline-block' : 'block'
        } aspect-square dynamicImg`}
      />
    </>
  );
};

const components = {
  types: {
    image: SampleImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
};

const DynamicContents = ({ contents, allSectionRefs }: Props) => {
  return (
    <div className="_BlogContent" id="blogContents">
      {contents?.map((content: any, index: number) => (
        <section key={content._key} className="mb-[50px]">
          <SectionHeader>{content?.sectionTitle}</SectionHeader>
          <div className="insight_content_editor">
            <PortableText
              value={content?.sectionContent}
              components={components}
            />
          </div>
        </section>
      ))}
      <div className="mt-[60px] bg-[#f5f5f5] py-[70px] md:px-[90px] px-8">
        <div className="text-center text-black relative w-full h-full">
          <h2 className="md:text-[32px] text-[22px] md:leading-[39px] mb-6">
            Subscribe to get <b>notified</b>
          </h2>
          <p className="text-[14px] leading-[17px]">
            Sign up for our newsletter to receive notifications when we
            published something new
          </p>
          <div className="mt-[80px] flex items-center justify-center  md:gap-10 gap-5 pb-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="border-b-[2px] border-[#B5B5B5] py-[5px] placeholder:text-[#B5B5B5] placeholder:md:text-[16px] placeholder:text-[14px] md:w-[50%] w-full bg-transparent"
            />
            <span className="text-primary md:text-[16px] text-[14px] leading-[20px] font-semibold cursor-pointer transition-all duration-300 hover:border-b-[1px] hover:border-primary border-b-[1px] border-b-transparent">
              Subscribe
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContents;
