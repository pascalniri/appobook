import Image from "next/image";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import WhyAppobook from "./components/WhyAppobook";
import WhatToBook from "./components/WhatToBook";

export default function Home() {
  return (
    <main className="flex flex-col  mx-auto">
      <Navigation />
      <HomePage />
      <WhyAppobook />
      <WhatToBook />
    </main>
  );
}
