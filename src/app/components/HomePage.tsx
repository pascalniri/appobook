import React from "react";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:max-w-5xl w-full justify-center items-center min-h-screen text-sm lg:flex py-6 mx-auto px-4 md:px-0">
      <div className="w-full">
        <h1 className="text-[40px] leading-normal font-semibold">
          Book Smarter. Save Time. Grow Faster.
        </h1>
        <p className="leading-relaxed">
          AppoBook is your all-in-one appointment scheduling platform for
          service providers and clients. Discover businesses, book in seconds,
          and manage everything from one dashboard.
        </p>
        <div className="flex flex-row flex-wrap gap-2 mt-10">
          <button className="bg-black text-white px-[30px] py-[10px] border border-black hover:bg-transparent hover:text-black transition-all">
            Create Profile
          </button>
          <button className="bg-transparent text-black px-[30px] py-[10px] border border-black hover:bg-gray-100 transition-all">
            Explore Businesses
          </button>
          
        </div>
      </div>
      <div className="w-full">Image section</div>
    </div>
  );
};

export default HomePage;
