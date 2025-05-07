import Image from "next/image";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import WhyAppobook from "./components/WhyAppobook";

export default function Home() {
  return (
    <main className="flex flex-col  mx-auto">
      <Navigation />
      <HomePage />
      <WhyAppobook />
    </main>
  );
}
