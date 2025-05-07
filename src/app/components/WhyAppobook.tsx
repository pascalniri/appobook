import { BriefcaseBusiness, ChartNetwork, ClockFading } from "lucide-react";
import React from "react";

const WhyAppobook = () => {
  const boxes = [
    {
      icon: <ClockFading strokeWidth={1.5} />,
      h2: "Smart Scheduling",
      p: "Say goodbye to endless messages—AppoBook lets clients book instantly based on your real-time availability, with automatic time zone handling and calendar sync.",
    },
    {
        icon: <BriefcaseBusiness strokeWidth={1.5} />,
        h2: "Discover Trusted Businesses",
        p: "Find verified service providers with ratings, reviews, and detailed profiles. See what they offer, where they are, and book confidently in just a few clicks.",
      },
      {
        icon: <ChartNetwork strokeWidth={1.5} />,
        h2: "Manage Everything Online",
        p: "Both clients and businesses get a dashboard to track appointments, update profiles, and stay in control anytime, on any device.",
      },
  ];
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:max-w-5xl w-full justify-center items-center text-sm lg:flex py-6 mx-auto px-4 md:px-0">
      {boxes.map((box) => (
        <div className="flex flex-col justify-start items-start p-3 border">
        <span className="rounded-full border p-4 bg-gray-100/50">
          {box.icon}
        </span>
        <h2 className="text-lg font-medium mt-4">{box.h2}</h2>
        <p className="leading-relaxed text-gray-500">
         {box.p}
        </p>
      </div>
      ))}
    </main>
  );
};

export default WhyAppobook;
