import React from "react";
import { limitationsContents } from "src/constant";

const Limitations = () => {
  return (
    <div id="limitations" className="pt-[4rem]">
      <h4 className="sticky text-[#4B4B4B] font-bold text-[21px] leading-[32px] top-0 py-[1.3rem] bg-[#F7F8F7] pl-[2rem]">
        Limitations
      </h4>
      <div className="pl-[2rem]">
        {limitationsContents?.map((item, i) => (
          <div className="mb-10" key={"hrtasf_" + i}>
            <h4 className="mb-[1em] text-[13px] leading-7 font-bold text-privacy">
              {item.articleTitle}
            </h4>
            <ul>
              {item?.lists?.length > 0 &&
                item?.lists?.map((option, i) => (
                  <li
                    className="mb-[1em] text-[13px] leading-7 text-privacy font-medium"
                    key={"ajhsef_" + i}
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

export default Limitations;
