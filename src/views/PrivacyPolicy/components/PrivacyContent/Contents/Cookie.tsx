import React from "react";
import { cookieContentLists } from "src/constant";

const Cookie = () => {
  return (
    <div id="cookie" className="pt-[4rem]">
      <h4 className="sticky text-[#4B4B4B] font-bold text-[21px] leading-[32px] top-0 mb-[1.4rem] py-[1.3rem] bg-[#F7F8F7] pl-[2rem]">
        Cookie Policy
      </h4>
      <div className="pl-[2rem]">
        <div className="mb-5">
          <h4 className="font-bold mb-3">Cookie List</h4>
          <p className="text-[13px] leading-7 font-medium text-[#4B4B4B]">{`A cookie is a small piece of data (a text file) that a website – when visited by a user – asks your browser to store on your device in order to remember information about you, such as your language preference or login information. Cookies that are set by us are called first-party cookies. We also use third-party cookies – which are cookies from a domain different than the domain of the website you are visiting – for our advertising and marketing efforts. More specifically, we use cookies and other tracking technologies for the following purposes:`}</p>
        </div>
        {cookieContentLists?.map((item, i) => (
          <div className="mb-5" key={"hjnfdjasd_" + i}>
            <h4 className="mb-[1em] text-[13px] leading-7 font-bold text-privacy">
              {item.title}
            </h4>
            <p className="text-[13px] leading-7 font-medium text-privacy mb-5">
              {item.description}
            </p>
            <div>
              <table className="table-auto hidden sm:block">
                <thead className="border border-gray-300">
                  <tr>
                    <th className="border-r text-[13px] text-privacy font-medium text-left py-2 border-gray-300 pl-3 pr-1">
                      Cookie Subgroup
                    </th>
                    <th className="border-r text-[13px] text-privacy font-medium text-left py-2 border-gray-300 pl-3 pr-1">
                      Cookies
                    </th>
                    <th className="border-r text-[13px] text-privacy font-medium text-left py-2 border-gray-300 pl-3 pr-6">
                      Cookies used
                    </th>
                    <th className="border-r text-[13px] text-privacy font-medium text-left py-2 border-gray-300 pl-3 pr-1">
                      Lifespan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {item?.table?.length > 0 &&
                    item?.table?.map((list, i) => (
                      <tr className="border border-gray-300" key={"hataefgd_" + i}>
                        <td className="text-[13px] px-2 py-2 border-r border-gray-300">
                          {list.subGroup}
                        </td>
                        <td className="text-[13px] px-2 py-2 border-r border-gray-300">
                          {list.cookies}
                        </td>
                        <td className="text-[13px] px-2 py-2 border-r border-gray-300">
                          {list.cookieUsed}
                        </td>
                        <td className="text-[13px] px-2 py-2 border-r border-gray-300">
                          {list.lifeSpan}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <table className="table-auto rounded-md w-full mr-5 sm:hidden">
                <tbody>
                  {item?.table?.length > 0 &&
                    item?.table?.map((list, i) => (
                      <tr className="border border-gray-300" key={"jfgdefsa_" + i}>
                        <td className="text-[13px] px-5 py-3 border-r border-gray-300">
                          <span className="text-privacy font-medium">
                            <span className="font-bold mr-2">
                              {list.tableTitle}
                            </span>{" "}
                            {list.subGroup}
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cookie;
