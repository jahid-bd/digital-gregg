import classNames from "classnames";
import React from "react";
import { MoreButton } from "src/types";

function MoreButton({ top }: MoreButton) {
  return (
    <div
      className={classNames(
        "absolute bottom-0 left-0 text-red bg-primary h-[200px] flex items-center justify-center w-[70px]",
        top && "_topMoreButton opacity-0 -translate-x-[70px]",
      )}
    >
      <div className="-rotate-90 -translate-y-10 relative">
        <span
          className={classNames(
            "inline-block w-[70px] h-0.5 bg-white -translate-x-full absolute top-1/2 -left-[70%]",
            top && "_topMoreButtonLine",
          )}
        ></span>
        <span className="text-white font-primary text-sm inline-block rotate-180">
          More
        </span>
      </div>
    </div>
  );
}

export default MoreButton;
