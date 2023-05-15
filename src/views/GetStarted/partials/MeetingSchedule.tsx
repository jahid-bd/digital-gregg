import { InlineWidget } from 'react-calendly';
import Div100vh from 'react-div-100vh';
// import useWindowDimensions from '@hooks/useWindowDimensions';

const MeetingSchedule = () => {
  // const {width} :any= useWindowDimensions()
  // const style = {
  //     width: "100%",
  //     height: "1000px",
  //     marginTop: "100px",
  //     "@media (max-width: 1023px)": {
  //         height: "400px !important",
  //     },
  // }
  return (
    <>
      <div className="h-20"></div>
      <Div100vh className="flex relative items-center justify-center">
        <InlineWidget
          styles={{ height: '1000px', width: '100%' }}
          pageSettings={{
            hideEventTypeDetails: false,
            // hideLandingPageDetails: true,
          }}
          url="https://calendly.com/digitalgregg/30min?hide_gdpr_banner=1"
        />
      </Div100vh>
      <div className="hidden md:h-28 lg:hidden"></div>
    </>
  );
};

export default MeetingSchedule;
