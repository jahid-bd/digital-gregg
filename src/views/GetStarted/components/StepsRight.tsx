import Image from "next/image";
import React from "react";
import { brandImagesSteps } from "src/constant";

const StepsRight = () => {
  return (
    <div className="py-14 2xl:max-w-[25rem]">
      <h3 className="text-center text-[14px] font-bold text-[#878787] mb-12 uppercase">
        Join the global innovators
      </h3>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-2 bg-white gap-y-16 rounded-lg">
        {brandImagesSteps.map((imageUrl, i) => {
          return (
            <li
              key={"bsihdnh_" + i}
              className="flex justify-center items-center"
            >
              {imageUrl.src}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StepsRight;
