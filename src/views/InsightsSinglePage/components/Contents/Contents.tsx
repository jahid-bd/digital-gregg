import dynamic from 'next/dynamic';

interface propsTypes {
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
  sectionRefs: {
    section1: any;
    section2: any;
    section3: any;
    section4: any;
    section5: any;
  };
}

// dynamic import 
const RiseMarketplaces = dynamic(() => import('./RiseMarketplaces'));
const Summary = dynamic(() => import('./Summary'));
const TipsMarketplace = dynamic(() => import('./TipsMarketplace'));
const TopMarketplaces = dynamic(() => import('./TopMarketplaces'));

const Contents = ({ sectionRefs }: propsTypes) => {
  return (
    <div>
      <Summary ref1={sectionRefs.section1} ref2={sectionRefs.section2} />
      <RiseMarketplaces ref3={sectionRefs.section3} />
      <TopMarketplaces ref4={sectionRefs.section4} />
      <TipsMarketplace ref5={sectionRefs.section5} />
    </div>
  );
};

export default Contents;
