import classNames from "classnames";
import React from "react";
import { VideoCloseButtonProps } from "src/types";

function VideoCloseButton(
  {isVideoModalClose , ...props}: React.ComponentProps<"button"> & VideoCloseButtonProps,
) {
  return (
    <button
      {...props}
      aria-label='close btn'
      className={classNames(
        "group relative z-[999] overflow-hidden cursor-pointer bg-primary duration-150 h-[70px] w-[70px] aspect-square flex items-center justify-center",
      )}
    >  
      <div className="relative w-5 h-3.5 translate-x-1.5">
        <span
          className={classNames(
            "absolute top-1/2 left-0 h-0.5 w-full inline-block bg-white -translate-x-1 -translate-y-1/2 rotate-45",
            isVideoModalClose &&
              "-left-[calc(100%+25px)] -top-[calc(100%+25px)] opacity-60 duration-150",
          )}
        ></span>
        <span
          className={classNames(
            "absolute top-1/2 left-0 h-0.5 w-full inline-block bg-white -translate-x-1 -translate-y-1/2 rotate-45",
            isVideoModalClose &&
              "top-[calc(100%+25px)] left-[calc(100%+25px)] opacity-60 duration-150",
          )}
        ></span>
        <span
          className={classNames(
            "absolute top-1/2 left-0 h-0.5 w-full inline-block bg-white -translate-x-1 -translate-y-1/2 -rotate-45",
            isVideoModalClose &&
              "-top-[calc(100%+37px)] left-[calc(100%+24px)] opacity-60 duration-150",
          )}
        ></span>
        <span
          className={classNames(
            "absolute top-1/2 left-0 h-0.5 w-full inline-block bg-white -translate-x-1 -translate-y-1/2 -rotate-45",
            isVideoModalClose &&
              "top-[calc(100%+37px)] -left-[calc(100%+24px)] opacity-60 duration-150",
          )}
        ></span>
      </div>
    </button>
  );
}

export default VideoCloseButton;
