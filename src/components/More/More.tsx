import classNames from 'classnames'
import React from 'react'
import gsap from 'gsap';
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const More = () => {
    return (
      <div
        onClick={() =>
          gsap.to(window, {
            duration: 0,
            scrollTo: { y: "#what_website", offsetY: 0 },
          })
        }
        className={classNames(
          "hidden lg:flex absolute cursor-pointer bottom-0 right-0 md:left-0 text-red bg-primary h-[200px] items-center justify-center w-[70px]",
          "_topMoreButton"
        )}
      >
        <div className="-rotate-90 -translate-y-10 relative">
          <span
            className={classNames(
              "inline-block w-[70px] h-[0.15rem] bg-white -translate-x-full absolute top-1/2 -left-[70%]",
              "_topMoreButtonLine"
            )}
          ></span>
          <span className="text-white text-[14px] inline-block relative top-[1px]">
            More
          </span>
        </div>
      </div>
    );
}

export default More