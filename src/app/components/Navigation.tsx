import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <main className="w-full flex justify-center items-center mx-auto bg-white/40 border-b backdrop-blur-[3px] fixed top-0 ">
      <div className="md:max-w-5xl w-full items-center justify-between text-sm flex py-3 px-4 md:px-0">
       <Image src="/appobook logo.svg" alt="appobook logo" width={120} height={120} />
       <ul className="flex-row items-center gap-5 hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Companies</li>
       </ul>

       <Link href="/signin" className="bg-black text-white px-[30px] py-[10px] border border-black hover:bg-transparent hover:text-black transition-all">
        Sign In
       </Link>
      </div>
    </main>
  );
};

export default Navigation;
