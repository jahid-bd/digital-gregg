import CaseStudy from '@views/CaseStudy/CaseStudy';
import CaseStudyMobile from '@views/CaseStudyMobile/CaseStudyMobile';
import { NextPage } from 'next';

const CaseStudyPage: NextPage = () => {
  return (
    <div>
      <div className="lg:block hidden">
        <CaseStudy />
      </div>
      <div className="lg:hidden block">
        <CaseStudyMobile />
      </div>
    </div>
  );
};

export default CaseStudyPage;
