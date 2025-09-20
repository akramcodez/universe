import React from 'react';

const WonderCard = ({ pic1, pic2 }) => {
  return (
    <>
      <div className="w-1/2 group h-full transition-all rounded-none hover:rounded-3xl overflow-hidden relative">
        <img
          src={pic1}
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
          alt="Wonder 1"
        />
        <div className="opacity-0 group-hover:opacity-100 transition-all absolute h-full w-full top-0 left-0 bg-black/20 flex items-center justify-center">
          <h2 className="uppercase text-6xl border-1 rounded-full px-6 leading-13 pt-2">
            Expand
          </h2>
        </div>
      </div>
      <div className="w-1/2 group h-full transition-all rounded-none hover:rounded-3xl overflow-hidden relative">
        <img
          src={pic2}
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
          alt="Wonder 2"
        />
        <div className="opacity-0 group-hover:opacity-100 transition-all absolute h-full w-full top-0 left-0 bg-black/20 flex items-center justify-center">
          <h2 className="uppercase text-6xl border-1 rounded-full px-6 leading-13 pt-2">
            Expand
          </h2>
        </div>
      </div>
    </>
  );
};

export default WonderCard;
