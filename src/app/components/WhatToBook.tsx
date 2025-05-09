import React from "react";

const WhatToBook = () => {
  return (
    <div className="md:max-w-5xl w-full justify-center items-center text-sm lg:flex py-[4rem] mx-auto px-4 md:px-0">
      <span className="flex flex-col justify-self-center items-center text-center w-full md:w-[80%] lg:w-[60%]">
        <h1 className="text-[40px] leading-normal font-semibold">
          Services You Can Book!
        </h1>
        <p className="text-gray-500 leading-relaxed">
          Whether you're looking to relax, get things done, or stay healthy,
          AppoBook connects you with the right service providers in seconds.
        </p>
      </span>
    </div>
  );
};

export default WhatToBook;
