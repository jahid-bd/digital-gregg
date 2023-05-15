import React from "react";
import { privacyPageMenuList } from "src/constant";

const PrivacySidebar = () => {
  return (
    <div className="bg-white h-[100vh] pt-[8rem] sticky top-0 hidden lg:block">
      <div className="mb-[2.3rem] sticky py-[1rem]">
        <h2 className="text-[18px] leading-[32px] text-[#4B4B4B] font-medium">
          Menu
        </h2>
      </div>
      <ul>
        {privacyPageMenuList?.map((item, i) => (
          <li key={"sjhedaetwey_" + i} className="block mb-[.8rem]">
            <a
              className={`text-[13px] leading-[25px] text-privacy font-semibold hover:text-primary duration-300`}
              href={item.link}
              aria-label={`${item.text} tab`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrivacySidebar;
