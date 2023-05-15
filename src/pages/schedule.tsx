import { NextPage } from "next";
import React from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import Div100vh from "react-div-100vh";

const Schedule: NextPage = () => {
  
  return (
    <>
    <div className="h-20"></div>
      <Div100vh className="flex pt-40 sm:pt-0 relative items-center justify-center">
        <InlineWidget
          styles={{
            width: "100%",
            height: "1100px",
            marginTop: "100px",
          }}
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

export default Schedule;
