import React from "react";
import { useLicenseContents } from "src/constant";

const UseLicense = () => {
  return (
    <div id="use-license" className="pt-[6rem]">
      <h4 className="sticky text-[#4B4B4B] font-bold text-[21px] leading-[32px] top-0 py-[1.3rem] bg-[#F7F8F7] pl-[2rem]">
        Use License
      </h4>
      <div className="pl-[2rem]">
        {useLicenseContents?.map((item, i) => (
          <div className="mb-10" key={"hadfdgbn_" + i}>
            <h4 className="mb-[1em] text-[13px] leading-7 font-bold text-privacy">
              {item.articleTitle}
            </h4>
            <ul>
              {item?.lists?.length > 0 &&
                item?.lists?.map((option, j) => (
                  <li
                    className="mb-[1em] text-[13px] leading-7 text-privacy font-medium"
                    key={"ajdfateh_" + j}
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

export default UseLicense;
