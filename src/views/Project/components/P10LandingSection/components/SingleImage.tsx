import React from 'react';

const SingleImage = ({ imgSrc }: any) => {
  return (
    <div className="lg:max-w-[50vw] max-w-[27.14286rem] mx-auto">
      <div className="shadow-[0_0_26px_0_rgb(0_0_0_/_10%)] relative">
        <figure>
          <img
            src={imgSrc}
            alt="single image"
            className="block w-full"
          />
        </figure>
      </div>
    </div>
  );
};

export default SingleImage;