import React from "react";
import { breachGoverningLawContents } from "src/constant";

const BreachGoverningLaw = () => {
  return (
    <div id="breach-governing-law" className="pt-[4rem]">
      <h4 className="sticky text-[#4B4B4B] font-bold text-[21px] leading-[32px] top-0 py-[1.3rem] bg-[#F7F8F7] pl-[2rem]">
        Breach, Governing Law
      </h4>
      <div className="pl-[2rem]">
        {breachGoverningLawContents?.map((item, i) => (
          <div className="mb-10" key={"jrfawegsv_" + i}>
            <h4 className="mb-[1em] text-[13px] leading-7 font-bold text-privacy">
              {item.articleTitle}
            </h4>
            <ul>
              {item?.lists?.length > 0 &&
                item?.lists?.map((option, i) => (
                  <li
                    className="mb-[1em] text-[13px] leading-7 text-privacy font-medium"
                    key={"hawsshs_" + i}
                  >
                    {option}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreachGoverningLaw;
